import type { DownloadMaterial } from "./types.ts";

export const downloadMaterials: DownloadMaterial[] = [
  {
    slug: "notatka",
    title: "Notatka do zeszytu",
    navLabel: "Notatka",
    description:
      "Jednostronicowa notatka o Konstytucji 3 Maja do wydruku lub przepisania.",
    pdfFileName: "konstytucja-3-maja-notatka.pdf",
    format: "PDF / druk",
    extent: "1 strona",
    level: "SP i szkoła średnia",
    time: "10 minut",
    sitemapLabel: "Notatka do druku",
    sitemapDescription:
      "Jednostronicowa notatka o Konstytucji 3 Maja do wydruku.",
    priority: 0.55,
    changefreq: "monthly",
  },
  {
    slug: "os-czasu",
    title: "Oś czasu 1772-1795",
    navLabel: "Oś czasu",
    description:
      "Najważniejsze wydarzenia od I rozbioru do III rozbioru w formie materiału do druku.",
    pdfFileName: "konstytucja-3-maja-os-czasu.pdf",
    format: "PDF / plakat",
    extent: "1 strona",
    level: "SP i szkoła średnia",
    time: "15 minut",
    sitemapLabel: "Oś czasu do druku",
    sitemapDescription:
      "Materiał drukowalny z najważniejszymi datami 1772-1795.",
    priority: 0.55,
    changefreq: "monthly",
  },
  {
    slug: "karta-pracy",
    title: "Karta pracy",
    navLabel: "Karta pracy",
    description:
      "Zadania do pracy z tekstem, tabelą przed/po i krótkim wnioskiem o znaczeniu konstytucji.",
    pdfFileName: "konstytucja-3-maja-karta-pracy.pdf",
    format: "PDF / lekcja",
    extent: "3-4 strony",
    level: "klasa 6-8 i szkoła średnia",
    time: "25 minut",
    sitemapLabel: "Karta pracy do druku",
    sitemapDescription:
      "Karta pracy z poleceniami do tekstu, tabeli przed/po i krótkiej wypowiedzi.",
    priority: 0.55,
    changefreq: "monthly",
  },
  {
    slug: "quiz",
    title: "Quiz do druku",
    navLabel: "Quiz",
    description:
      "Pytania o Konstytucję 3 Maja z miejscem na odpowiedzi i kluczem odpowiedzi.",
    pdfFileName: "konstytucja-3-maja-quiz.pdf",
    format: "PDF / sprawdzian",
    extent: "2 strony",
    level: "SP i szkoła średnia",
    time: "25-30 minut",
    sitemapLabel: "Quiz do druku",
    sitemapDescription: "Pytania i klucz odpowiedzi do wydrukowania.",
    priority: 0.55,
    changefreq: "monthly",
  },
  {
    slug: "slownik",
    title: "Słownik pojęć",
    navLabel: "Słownik",
    description:
      "Najważniejsze pojęcia do powtórki przed lekcją lub sprawdzianem.",
    pdfFileName: "konstytucja-3-maja-slownik.pdf",
    format: "PDF / fiszki",
    extent: "2 strony",
    level: "SP i szkoła średnia",
    time: "15 minut",
    sitemapLabel: "Słownik do druku",
    sitemapDescription:
      "Najważniejsze pojęcia do powtórki w wersji drukowalnej.",
    priority: 0.55,
    changefreq: "monthly",
  },
  {
    slug: "mini-plakat",
    title: "Mini-plakat A4",
    navLabel: "Mini-plakat",
    description:
      "Jednostronicowy plakat z datą, trzema zmianami, ograniczeniem reformy i znaczeniem konstytucji.",
    pdfFileName: "konstytucja-3-maja-mini-plakat.pdf",
    format: "PDF / A4",
    extent: "1 strona",
    level: "uniwersalny",
    time: "5 minut",
    sitemapLabel: "Mini-plakat A4 do druku",
    sitemapDescription:
      "Mini-plakat A4 z najważniejszymi faktami o Konstytucji 3 Maja.",
    priority: 0.55,
    changefreq: "monthly",
  },
  {
    slug: "przed-i-po",
    title: "Tabela przed/po",
    navLabel: "Przed i po",
    description:
      "Tabela porównująca ustrój Rzeczypospolitej przed reformą i po Konstytucji 3 Maja.",
    pdfFileName: "konstytucja-3-maja-przed-i-po.pdf",
    format: "PDF / tabela",
    extent: "1 strona",
    level: "SP i szkoła średnia",
    time: "10 minut",
    sitemapLabel: "Tabela przed/po do druku",
    sitemapDescription:
      "Drukowalna tabela porównująca najważniejsze zmiany Konstytucji 3 Maja.",
    priority: 0.55,
    changefreq: "monthly",
  },
  {
    slug: "plan-prezentacji",
    title: "Plan prezentacji",
    navLabel: "Plan prezentacji",
    description:
      "Konspekt krótkiej prezentacji: problem państwa, dokument, zmiany, twórcy, upadek reform i znaczenie.",
    pdfFileName: "konstytucja-3-maja-plan-prezentacji.pdf",
    format: "PDF / konspekt",
    extent: "1-2 strony",
    level: "klasa 6-8 i szkoła średnia",
    time: "30-45 minut pracy",
    sitemapLabel: "Plan prezentacji do druku",
    sitemapDescription:
      "Plan prezentacji o Konstytucji 3 Maja z układem slajdów i wskazówkami.",
    priority: 0.55,
    changefreq: "monthly",
  },
];

export const downloadMaterialsBySlug = Object.fromEntries(
  downloadMaterials.map((material) => [material.slug, material]),
) as Record<DownloadMaterial["slug"], DownloadMaterial>;
