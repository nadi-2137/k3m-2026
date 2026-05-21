export type SiteLink = {
  label: string;
  href: string;
  shortLabel?: string;
  children?: SiteLink[];
};

export type SitemapItem = {
  label: string;
  href: string;
  description: string;
  priority: number;
  changefreq: "weekly" | "monthly" | "yearly";
};

export type SitemapGroup = {
  title: string;
  description: string;
  items: SitemapItem[];
};

export type SeoEntry = {
  label: string;
  href: string;
  h1: string;
  primaryCta: string;
  primaryCtaHref: string;
  metaTitle: string;
  metaDescription: string;
};

export type NavigationGroup = {
  title: string;
  description: string;
  links: SiteLink[];
};

export type CardVariant =
  | "navigation"
  | "fact"
  | "person"
  | "concept"
  | "download"
  | "quiz"
  | "source";
export type IconName =
  | "book"
  | "calendar"
  | "document"
  | "download"
  | "landmark"
  | "map"
  | "quiz"
  | "scale"
  | "source"
  | "timeline"
  | "users";

export type Card = {
  title: string;
  text: string;
  href?: string;
  variant?: CardVariant;
  icon?: IconName;
  label?: string;
  actionLabel?: string;
  remember?: string;
  details?: Array<{
    label: string;
    value: string;
  }>;
  sourceType?: string;
  license?: string;
  checked?: string;
  sourceCategory?:
    | "tekst"
    | "archiwalia"
    | "edukacja"
    | "opracowanie"
    | "multimedia";
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    credit?: string;
  };
};

export type LearningPathStep = {
  slug: string;
  title: string;
  shortTitle: string;
  href: string;
  description: string;
  action: string;
};

export type QuickReviewItem = {
  title: string;
  text: string;
  href: string;
  action: string;
};

export type DownloadMaterialSlug =
  | "notatka"
  | "os-czasu"
  | "karta-pracy"
  | "quiz"
  | "slownik"
  | "mini-plakat"
  | "przed-i-po"
  | "plan-prezentacji";

export type DownloadMaterial = {
  slug: DownloadMaterialSlug;
  title: string;
  navLabel: string;
  description: string;
  pdfFileName: string;
  format: string;
  extent: string;
  level: string;
  time: string;
  sitemapLabel: string;
  sitemapDescription: string;
  priority: number;
  changefreq: "weekly" | "monthly" | "yearly";
};

export type TableData = {
  columns: string[];
  rows: string[][];
};

export type ContentCallout = {
  variant: "remember" | "exam" | "warning" | "question" | "curiosity";
  label?: string;
  title: string;
  body: string;
};

export type Section = {
  title: string;
  body?: string[];
  bullets?: string[];
  cards?: Card[];
  table?: TableData;
  quote?: string;
  note?: string;
  callout?: ContentCallout;
};

export type ContentPage = {
  slug: string;
  title: string;
  navLabel?: string;
  eyebrow: string;
  description: string;
  lead: string;
  quickQuestion: string;
  concept: {
    term: string;
    definition: string;
  };
  related?: Card[];
};

type QuizQuestionBase = {
  question: string;
  answer: string;
  explanation: string;
  readMoreHref: string;
  readMoreLabel: string;
  glossaryTerms?: string[];
};

export type QuizQuestion =
  | (QuizQuestionBase & {
      type: "singleChoice" | "trueFalse";
      options: string[];
      correctIndex: number;
    })
  | (QuizQuestionBase & {
      type: "matching";
      pairs: Array<{
        term: string;
        match: string;
      }>;
    });

export type TimelineEvent = {
  date: string;
  datetime: string;
  title: string;
  event: string;
  category: "kryzys" | "reforma" | "konflikt" | "rozbior" | "pamiec";
  href?: string;
};

export type GlossaryCategory =
  | "ustroj"
  | "spoleczenstwo"
  | "wydarzenia"
  | "dokument";

export type GlossaryEntry = {
  term: string;
  definition: string;
  category: GlossaryCategory;
  example: string;
  related: Card[];
};

export type SourceExcerpt = {
  id: string;
  label: string;
  title: string;
  excerpt: string;
  explanation: string;
  explanationLevels?: {
    younger: string;
    older: string;
  };
  difficultWords: Array<{
    term: string;
    definition: string;
  }>;
  question: string;
  effect: string;
};

export type ConstitutionArticle = {
  id: string;
  label: string;
  title: string;
  excerpt: string;
  summary: string;
  keyPoint: string;
  question: string;
  sourceHref: string;
  scanHref?: string;
  scanLabel?: string;
};
