const rawBase = import.meta.env.BASE_URL || "/";

export const basePath = rawBase === "/" ? "" : rawBase.replace(/\/+$/, "");

const isExternalUrl = (value: string) =>
  /^(?:[a-z][a-z\d+\-.]*:)?\/\//i.test(value) ||
  value.startsWith("mailto:") ||
  value.startsWith("tel:") ||
  value.startsWith("#");

export const withBase = (value: string) => {
  if (!value || isExternalUrl(value) || !value.startsWith("/")) {
    return value;
  }

  if (!basePath) {
    return value;
  }

  if (value === basePath || value.startsWith(`${basePath}/`)) {
    return value;
  }

  return value === "/" ? `${basePath}/` : `${basePath}${value}`;
};

export const withoutBase = (value: string) => {
  if (!basePath || value === basePath) {
    return value === basePath ? "/" : value;
  }

  if (value.startsWith(`${basePath}/`)) {
    return value.slice(basePath.length) || "/";
  }

  return value;
};

export const absoluteWithBase = (value: string, site: URL | string) =>
  new URL(withBase(value), site).toString();
