import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { z } from "zod";

import {
  constitutionArticles,
  downloadMaterials,
  glossaryEntries,
  learningPath,
  navLinks,
  navigationGroups,
  pageRegistry,
  quizQuestions,
  seoEntries,
  sitemapItems,
  sourceLinks,
  timeline,
} from "../src/data/site.ts";

const args = new Set(process.argv.slice(2));
const shouldCheckExternal = args.has("--external");
const errors = [];
const warnings = [];
const pages = pageRegistry;

const pageFileUrl = (slug) =>
  new URL(`../src/pages/${slug}.astro`, import.meta.url);
const publicFileUrl = (pathname) =>
  new URL(`../public/${pathname.replace(/^\/+/, "")}`, import.meta.url);

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const normalizeInternalHref = (href) => {
  if (!href || typeof href !== "string") return undefined;
  if (
    href.startsWith("#") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  )
    return undefined;
  if (/^https?:\/\//i.test(href)) return undefined;

  const [withoutHash] = href.split("#");
  const [withoutQuery] = withoutHash.split("?");
  const normalized = withoutQuery.replace(/\/$/, "") || "/";
  return normalized;
};

const isExternalHref = (href) =>
  typeof href === "string" && /^https?:\/\//i.test(href);

const knownInternalRoutes = new Set([
  "/",
  "/404",
  "/404.html",
  "/favicon.ico",
  "/favicon.svg",
  "/mapa-strony",
  "/robots.txt",
  "/sitemap.xml",
  "/sitemap-index.xml",
]);

pages.forEach((page) => knownInternalRoutes.add(`/${page.slug}`));
downloadMaterials.forEach((material) =>
  knownInternalRoutes.add(`/do-pobrania/${material.slug}`),
);

const requireText = (value, label) => {
  if (typeof value !== "string" || value.trim().length === 0) {
    errors.push(`${label} is empty`);
  }
};

const nonEmptyString = z.string().trim().min(1);
const hrefSchema = z.string().trim().min(1);
const changefreqSchema = z.enum(["weekly", "monthly", "yearly"]);
const sourceCategorySchema = z.enum([
  "tekst",
  "archiwalia",
  "edukacja",
  "opracowanie",
  "multimedia",
]);
const imageSchema = z.object({
  src: z.string().trim().startsWith("/images/"),
  alt: nonEmptyString,
  width: z.number().int().positive(),
  height: z.number().int().positive(),
  credit: nonEmptyString.optional(),
});

const siteLinkSchema = z.object({
  label: nonEmptyString,
  href: hrefSchema,
  shortLabel: nonEmptyString.optional(),
});

const pageRegistryItemSchema = z.object({
  slug: nonEmptyString,
  title: nonEmptyString,
  navLabel: nonEmptyString.optional(),
  description: nonEmptyString,
});

const navigationGroupSchema = z.object({
  title: nonEmptyString,
  description: nonEmptyString,
  links: z.array(siteLinkSchema).min(1),
});

const learningPathStepSchema = z.object({
  slug: nonEmptyString,
  title: nonEmptyString,
  shortTitle: nonEmptyString,
  href: hrefSchema,
  description: nonEmptyString,
  action: nonEmptyString,
});

const timelineEventSchema = z.object({
  date: nonEmptyString,
  datetime: nonEmptyString,
  title: nonEmptyString,
  event: nonEmptyString,
  category: z.enum(["kryzys", "reforma", "konflikt", "rozbior", "pamiec"]),
  href: hrefSchema.optional(),
});

const glossaryEntrySchema = z.object({
  term: nonEmptyString,
  definition: nonEmptyString,
  category: z.enum(["ustroj", "spoleczenstwo", "wydarzenia", "dokument"]),
  example: nonEmptyString,
  related: z.array(z.looseObject({ title: nonEmptyString })).min(1),
});

const quizQuestionBaseSchema = z.object({
  question: nonEmptyString,
  answer: nonEmptyString,
  explanation: nonEmptyString,
  readMoreHref: hrefSchema,
  readMoreLabel: nonEmptyString,
  glossaryTerms: z.array(nonEmptyString).optional(),
});

const quizChoiceSchema = quizQuestionBaseSchema
  .extend({
    type: z.enum(["singleChoice", "trueFalse"]),
    options: z.array(nonEmptyString).min(2),
    correctIndex: z.number().int().nonnegative(),
  })
  .superRefine((question, context) => {
    if (question.correctIndex >= question.options.length) {
      context.addIssue({
        code: "custom",
        path: ["correctIndex"],
        message: "correctIndex must point to an existing option",
      });
    }
  });

const quizQuestionSchema = z.discriminatedUnion("type", [
  quizChoiceSchema,
  quizQuestionBaseSchema.extend({
    type: z.literal("matching"),
    pairs: z
      .array(
        z.object({
          term: nonEmptyString,
          match: nonEmptyString,
        }),
      )
      .min(2),
  }),
]);

const seoEntrySchema = z.object({
  label: nonEmptyString,
  href: hrefSchema,
  h1: nonEmptyString,
  primaryCta: nonEmptyString,
  primaryCtaHref: hrefSchema,
  metaTitle: nonEmptyString,
  metaDescription: nonEmptyString,
});

const sitemapItemSchema = z.object({
  label: nonEmptyString,
  href: hrefSchema,
  description: nonEmptyString,
  priority: z.number().min(0).max(1),
  changefreq: changefreqSchema,
});

const downloadMaterialSchema = z.object({
  slug: z.enum([
    "notatka",
    "os-czasu",
    "karta-pracy",
    "quiz",
    "slownik",
    "mini-plakat",
    "przed-i-po",
    "plan-prezentacji",
  ]),
  title: nonEmptyString,
  navLabel: nonEmptyString,
  description: nonEmptyString,
  pdfFileName: z.string().trim().endsWith(".pdf"),
  format: nonEmptyString,
  extent: nonEmptyString,
  level: nonEmptyString,
  time: nonEmptyString,
  sitemapLabel: nonEmptyString,
  sitemapDescription: nonEmptyString,
  priority: z.number().min(0).max(1),
  changefreq: changefreqSchema,
});

const sourceLinkSchema = z.object({
  title: nonEmptyString,
  href: hrefSchema,
  text: nonEmptyString,
  sourceType: nonEmptyString,
  sourceCategory: sourceCategorySchema,
  details: z
    .array(
      z.object({
        label: nonEmptyString,
        value: nonEmptyString,
      }),
    )
    .min(1),
  license: nonEmptyString.optional(),
  checked: nonEmptyString.optional(),
});

const constitutionArticleSchema = z.object({
  id: nonEmptyString,
  label: nonEmptyString,
  title: nonEmptyString,
  excerpt: nonEmptyString,
  summary: nonEmptyString,
  keyPoint: nonEmptyString,
  question: nonEmptyString,
  sourceHref: hrefSchema,
  scanHref: hrefSchema.optional(),
  scanLabel: nonEmptyString.optional(),
});

const validateSchema = (label, schema, value) => {
  const result = schema.safeParse(value);

  if (!result.success) {
    result.error.issues.forEach((issue) => {
      const path = issue.path.length > 0 ? `.${issue.path.join(".")}` : "";
      errors.push(`${label}${path}: ${issue.message}`);
    });
  }
};

const readImageDimensions = (fileUrl) => {
  const buffer = readFileSync(fileUrl);

  if (
    buffer.length >= 24 &&
    buffer[0] === 0x89 &&
    buffer.toString("ascii", 1, 4) === "PNG"
  ) {
    return {
      width: buffer.readUInt32BE(16),
      height: buffer.readUInt32BE(20),
    };
  }

  if (buffer.length >= 4 && buffer[0] === 0xff && buffer[1] === 0xd8) {
    let offset = 2;

    while (offset < buffer.length) {
      if (buffer[offset] !== 0xff) {
        offset += 1;
        continue;
      }

      const marker = buffer[offset + 1];
      const length = buffer.readUInt16BE(offset + 2);
      const isStartOfFrame =
        marker >= 0xc0 &&
        marker <= 0xcf &&
        ![0xc4, 0xc8, 0xcc].includes(marker);

      if (isStartOfFrame) {
        return {
          height: buffer.readUInt16BE(offset + 5),
          width: buffer.readUInt16BE(offset + 7),
        };
      }

      offset += 2 + length;
    }
  }

  if (fileUrl.pathname.endsWith(".svg")) {
    const source = buffer.toString("utf8");
    const viewBox = source.match(
      /viewBox=["'][^"']*?(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)["']/i,
    );

    if (viewBox) {
      return {
        width: Number(viewBox[1]),
        height: Number(viewBox[2]),
      };
    }
  }

  return undefined;
};

const validateLocalImage = (image, label) => {
  const result = imageSchema.safeParse(image);

  if (!result.success) {
    result.error.issues.forEach((issue) => {
      const path = issue.path.length > 0 ? `.${issue.path.join(".")}` : "";
      errors.push(`${label}${path}: ${issue.message}`);
    });
    return;
  }

  const fileUrl = publicFileUrl(image.src);

  if (!existsSync(fileUrl)) {
    errors.push(`${label}.src points to a missing public image: ${image.src}`);
    return;
  }

  const actualSize = readImageDimensions(fileUrl);

  if (!actualSize) {
    errors.push(
      `${label}.src has unsupported or unreadable dimensions: ${image.src}`,
    );
    return;
  }

  if (actualSize.width !== image.width || actualSize.height !== image.height) {
    errors.push(
      `${label}.dimensions expected ${image.width}x${image.height}, actual ${actualSize.width}x${actualSize.height}: ${image.src}`,
    );
  }

  const fileSize = statSync(fileUrl).size;
  const maxImageBytes = 1_000_000;

  if (fileSize > maxImageBytes) {
    errors.push(
      `${label}.src is larger than ${maxImageBytes} bytes: ${image.src} (${fileSize} bytes)`,
    );
  }
};

validateSchema("navLinks", z.array(siteLinkSchema).min(1), navLinks);
validateSchema(
  "navigationGroups",
  z.array(navigationGroupSchema).min(1),
  navigationGroups,
);
validateSchema(
  "pageRegistry",
  z.array(pageRegistryItemSchema).min(1),
  pageRegistry,
);
validateSchema(
  "learningPath",
  z.array(learningPathStepSchema).min(1),
  learningPath,
);
validateSchema("timeline", z.array(timelineEventSchema).min(1), timeline);
validateSchema(
  "glossaryEntries",
  z.array(glossaryEntrySchema).min(1),
  glossaryEntries,
);
validateSchema(
  "quizQuestions",
  z.array(quizQuestionSchema).min(1),
  quizQuestions,
);
validateSchema("seoEntries", z.array(seoEntrySchema).min(1), seoEntries);
validateSchema("sitemapItems", z.array(sitemapItemSchema).min(1), sitemapItems);
validateSchema("sourceLinks", z.array(sourceLinkSchema).min(1), sourceLinks);
validateSchema(
  "constitutionArticles",
  z.array(constitutionArticleSchema).min(1),
  constitutionArticles,
);
validateSchema(
  "downloadMaterials",
  z.array(downloadMaterialSchema).min(1),
  downloadMaterials,
);

const slugs = new Map();
pages.forEach((page) => {
  if (slugs.has(page.slug)) {
    errors.push(`Duplicate page slug: ${page.slug}`);
  }
  slugs.set(page.slug, page);

  requireText(page.slug, `page.slug`);
  requireText(page.title, `${page.slug}.title`);
  requireText(page.description, `${page.slug}.description`);

  const fileUrl = pageFileUrl(page.slug);

  if (!existsSync(fileUrl)) {
    errors.push(`Missing page file for slug: ${page.slug}`);
    return;
  }

  const pageSource = readFileSync(fileUrl, "utf8");
  const requiredFields = [
    ["slug", new RegExp(`\\bslug:\\s*["']${escapeRegExp(page.slug)}["']`)],
    ["title", /\btitle:\s*["']/],
    ["description", /\bdescription:\s*["']/],
    ["lead", /\blead:\s*["']/],
    ["quickQuestion", /\bquickQuestion:\s*["']/],
    ["concept", /\bconcept:\s*\{/],
    ["concept.term", /\bterm:\s*["']/],
    ["concept.definition", /\bdefinition:\s*["']/],
    ["related", /\brelated:\s*/],
  ];

  requiredFields.forEach(([field, pattern]) => {
    if (!pattern.test(pageSource)) {
      errors.push(`${page.slug}.${field} is missing from page file`);
    }
  });

  if (!/const page:\s*ContentPage\s*=/.test(pageSource)) {
    errors.push(`${page.slug} does not define a typed ContentPage object`);
  }
});

seoEntries.forEach((entry) => {
  requireText(entry.metaTitle, `${entry.href}.metaTitle`);
  requireText(entry.metaDescription, `${entry.href}.metaDescription`);
  requireText(entry.primaryCta, `${entry.href}.primaryCta`);
});

const glossaryTerms = new Set(glossaryEntries.map((entry) => entry.term));
quizQuestions.forEach((question, index) => {
  question.glossaryTerms?.forEach((term) => {
    if (!glossaryTerms.has(term)) {
      errors.push(
        `quizQuestions[${index}].glossaryTerms missing glossary entry: ${term}`,
      );
    }
  });
});

const hrefs = new Set();
const externalHrefs = new Set();
const localPublicImagePaths = new Set();
const imageDataEntries = [];
const seen = new WeakSet();

const walk = (value, path = "data") => {
  if (!value || typeof value !== "object") return;
  if (seen.has(value)) return;
  seen.add(value);

  if (Array.isArray(value)) {
    value.forEach((entry, index) => walk(entry, `${path}[${index}]`));
    return;
  }

  Object.entries(value).forEach(([key, entryValue]) => {
    if (key === "href" || key.endsWith("Href")) {
      if (typeof entryValue === "string") {
        if (isExternalHref(entryValue)) {
          externalHrefs.add(entryValue);
        } else {
          const normalized = normalizeInternalHref(entryValue);
          if (normalized) hrefs.add(normalized);
        }
      }
    }

    if (key === "image" && entryValue && typeof entryValue === "object") {
      imageDataEntries.push({ image: entryValue, label: `${path}.image` });
    }

    if (
      (key === "src" || key === "href" || key.endsWith("Href")) &&
      typeof entryValue === "string" &&
      entryValue.startsWith("/images/")
    ) {
      localPublicImagePaths.add(normalizeInternalHref(entryValue));
    }

    if (entryValue && typeof entryValue === "object") {
      walk(entryValue, `${path}.${key}`);
    }
  });
};

const collectPageSourceHrefs = () => {
  pages.forEach((page) => {
    const fileUrl = pageFileUrl(page.slug);
    if (!existsSync(fileUrl)) return;

    const pageSource = readFileSync(fileUrl, "utf8");
    const hrefPattern =
      /\b(?:href|sourceHref|scanHref|primaryCtaHref)\s*[:=]\s*["']([^"']+)["']/g;

    for (const match of pageSource.matchAll(hrefPattern)) {
      const href = match[1];
      if (isExternalHref(href)) {
        externalHrefs.add(href);
      } else {
        const normalized = normalizeInternalHref(href);
        if (normalized) hrefs.add(normalized);
      }
    }
  });
};

const collectSourceFileImagePaths = (dirUrl) => {
  for (const entry of readdirSync(dirUrl, { withFileTypes: true })) {
    const entryUrl = new URL(
      `${entry.name}${entry.isDirectory() ? "/" : ""}`,
      dirUrl,
    );

    if (entry.isDirectory()) {
      collectSourceFileImagePaths(entryUrl);
      continue;
    }

    if (!/\.(astro|ts|tsx|js|jsx|css)$/i.test(entry.name)) {
      continue;
    }

    const source = readFileSync(entryUrl, "utf8");

    const quotedLocalImagePattern = /["'`](\/images\/[^"'`\s)]+)["'`]/g;
    const cssLocalImagePattern =
      /url\(\s*["']?(\/images\/[^"'`\s)]+)["']?\s*\)/g;

    for (const match of source.matchAll(quotedLocalImagePattern)) {
      localPublicImagePaths.add(normalizeInternalHref(match[1]));
    }

    for (const match of source.matchAll(cssLocalImagePattern)) {
      localPublicImagePaths.add(normalizeInternalHref(match[1]));
    }
  }
};

[
  pages,
  navLinks,
  navigationGroups,
  learningPath,
  glossaryEntries,
  quizQuestions,
  seoEntries,
  sourceLinks,
  constitutionArticles,
  sitemapItems,
].forEach(walk);

collectPageSourceHrefs();
collectSourceFileImagePaths(new URL("../src/", import.meta.url));

hrefs.forEach((href) => {
  if (!knownInternalRoutes.has(href)) {
    errors.push(`Internal href points to a missing route: ${href}`);
  }
});

sitemapItems.forEach((item) => {
  const normalizedHref = normalizeInternalHref(item.href);

  if (normalizedHref && !knownInternalRoutes.has(normalizedHref)) {
    errors.push(`Sitemap item points to a missing route: ${item.href}`);
  }
});

imageDataEntries.forEach(({ image, label }) =>
  validateLocalImage(image, label),
);

localPublicImagePaths.forEach((imagePath) => {
  if (!imagePath?.startsWith("/images/")) return;

  if (!existsSync(publicFileUrl(imagePath))) {
    errors.push(`Referenced public image does not exist: ${imagePath}`);
  }
});

const checkExternalHref = async (href) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);

  try {
    let response = await fetch(href, {
      method: "HEAD",
      redirect: "follow",
      signal: controller.signal,
    });

    if (response.status === 405 || response.status === 403) {
      response = await fetch(href, {
        method: "GET",
        redirect: "follow",
        signal: controller.signal,
      });
    }

    if (response.status >= 400) {
      errors.push(`External href returned HTTP ${response.status}: ${href}`);
    }
  } catch (error) {
    warnings.push(`External href check failed: ${href} (${error.message})`);
  } finally {
    clearTimeout(timeout);
  }
};

if (shouldCheckExternal) {
  for (const href of externalHrefs) {
    await checkExternalHref(href);
  }
}

if (warnings.length > 0) {
  console.warn(warnings.map((warning) => `Warning: ${warning}`).join("\n"));
}

if (errors.length > 0) {
  console.error(errors.map((error) => `Error: ${error}`).join("\n"));
  process.exit(1);
}

console.log(
  [
    `Validated ${pages.length} pages.`,
    `Checked ${hrefs.size} internal hrefs.`,
    shouldCheckExternal
      ? `Checked ${externalHrefs.size} external hrefs.`
      : `Skipped ${externalHrefs.size} external hrefs. Use --external to check them.`,
  ].join("\n"),
);
