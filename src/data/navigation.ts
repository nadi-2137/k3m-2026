import type { NavigationGroup, SiteLink } from "./types.ts";
import { downloadMaterials } from "./materials.ts";
import { quizTypeRoutes } from "./quiz.ts";

export const navLinks: SiteLink[] = [
  { label: "Start", href: "/", shortLabel: "Start" },
  {
    label: "Historia",
    href: "/historia",
    shortLabel: "Historia",
    children: [
      { label: "Tło historyczne", href: "/historia", shortLabel: "Historia" },
      { label: "Oś czasu", href: "/os-czasu", shortLabel: "Oś czasu" },
      {
        label: "Losy konstytucji",
        href: "/losy-konstytucji-3-maja",
        shortLabel: "Losy",
      },
    ],
  },
  {
    label: "Konstytucja",
    href: "/czym-byla-konstytucja-3-maja",
    shortLabel: "Czym była",
  },
  { label: "Tekst", href: "/tekst-konstytucji", shortLabel: "Tekst" },
  { label: "Twórcy", href: "/tworcy-konstytucji-3-maja", shortLabel: "Twórcy" },
  {
    label: "Postanowienia",
    href: "/postanowienia-konstytucji-3-maja",
    shortLabel: "Co zmieniła",
    children: [
      {
        label: "Co zmieniała",
        href: "/postanowienia-konstytucji-3-maja",
        shortLabel: "Postanowienia",
      },
      { label: "Przed i po", href: "/przed-i-po", shortLabel: "Przed/po" },
      {
        label: "Liberum veto",
        href: "/liberum-veto",
        shortLabel: "Liberum veto",
      },
      {
        label: "Trójpodział władzy",
        href: "/trojpodzial-wladzy",
        shortLabel: "Trójpodział",
      },
      { label: "Mieszczanie", href: "/mieszczanie", shortLabel: "Mieszczanie" },
      { label: "Chłopi", href: "/chlopi", shortLabel: "Chłopi" },
    ],
  },
  {
    label: "Znaczenie",
    href: "/znaczenie-konstytucji-3-maja",
    shortLabel: "Znaczenie",
  },
  {
    label: "Materiały",
    href: "/materialy",
    shortLabel: "Materiały",
    children: [
      {
        label: "Przegląd materiałów",
        href: "/materialy",
        shortLabel: "Materiały",
      },
      { label: "Do pobrania", href: "/do-pobrania", shortLabel: "Pobierz" },
      {
        label: "Dla nauczyciela",
        href: "/dla-nauczyciela",
        shortLabel: "Nauczyciel",
      },
      { label: "Słownik", href: "/slownik", shortLabel: "Słownik" },
      {
        label: "Na sprawdzian",
        href: "/jak-odpowiedziec-na-sprawdzianie",
        shortLabel: "Sprawdzian",
      },
      { label: "Źródła", href: "/zrodla", shortLabel: "Źródła" },
    ],
  },
  {
    label: "Quiz",
    href: "/quiz",
    shortLabel: "Quiz",
    children: [
      { label: "Wybierz tryb", href: "/quiz", shortLabel: "Quiz" },
      { label: "Mieszany", href: "/quiz/pytania", shortLabel: "Mieszany" },
      ...quizTypeRoutes.map((mode) => ({
        label: mode.navLabel,
        href: mode.href,
        shortLabel: mode.navLabel,
      })),
      {
        label: "Chronologia",
        href: "/quiz/chronologia",
        shortLabel: "Chronologia",
      },
    ],
  },
];

export const navigationGroups: NavigationGroup[] = [
  {
    title: "Główna nawigacja",
    description:
      "Strony widoczne w headerze: najważniejsza ścieżka ucznia i główne wejścia do serwisu.",
    links: navLinks,
  },
  {
    title: "Dodatki edukacyjne",
    description:
      "Strony pomocnicze używane w kartach, ścieżce nauki, stopce, mapie strony i materiałach.",
    links: [
      { label: "Oś czasu", href: "/os-czasu" },
      { label: "Słownik", href: "/slownik" },
      { label: "Mity i fakty", href: "/mity-i-fakty" },
      { label: "Przed i po", href: "/przed-i-po" },
      { label: "Pytania i odpowiedzi", href: "/pytania-i-odpowiedzi" },
      { label: "Na sprawdzian", href: "/jak-odpowiedziec-na-sprawdzianie" },
      { label: "Źródła", href: "/zrodla" },
      { label: "O projekcie", href: "/o-projekcie" },
      { label: "Mapa strony", href: "/mapa-strony" },
    ],
  },
  {
    title: "Podstrony drugiego poziomu",
    description:
      "Pogłębienia pojęć podpięte pod postanowienia, quiz, słownik i mapę strony.",
    links: [
      { label: "Liberum veto", href: "/liberum-veto" },
      { label: "Trójpodział władzy", href: "/trojpodzial-wladzy" },
      { label: "Mieszczanie", href: "/mieszczanie" },
      { label: "Chłopi", href: "/chlopi" },
    ],
  },
  {
    title: "Materiały do druku",
    description:
      "Drukowalne wersje pierwszych materiałów: notatki, osi czasu, quizu i słownika.",
    links: downloadMaterials.map((material) => ({
      label: material.navLabel,
      href: `/do-pobrania/${material.slug}`,
    })),
  },
];

export const breadcrumbParents: Record<string, SiteLink> = {
  "os-czasu": {
    label: "Historia",
    href: "/historia",
  },
  "losy-konstytucji-3-maja": {
    label: "Historia",
    href: "/historia",
  },
  "liberum-veto": {
    label: "Postanowienia",
    href: "/postanowienia-konstytucji-3-maja",
  },
  "trojpodzial-wladzy": {
    label: "Postanowienia",
    href: "/postanowienia-konstytucji-3-maja",
  },
  "przed-i-po": {
    label: "Postanowienia",
    href: "/postanowienia-konstytucji-3-maja",
  },
  "quiz/pytania": {
    label: "Quiz",
    href: "/quiz",
  },
  "quiz/wybor-odpowiedzi": {
    label: "Quiz",
    href: "/quiz",
  },
  "quiz/prawda-czy-falsz": {
    label: "Quiz",
    href: "/quiz",
  },
  "quiz/dopasowanie-pojec": {
    label: "Quiz",
    href: "/quiz",
  },
  "quiz/chronologia": {
    label: "Quiz",
    href: "/quiz",
  },
  mieszczanie: {
    label: "Postanowienia",
    href: "/postanowienia-konstytucji-3-maja",
  },
  chlopi: {
    label: "Postanowienia",
    href: "/postanowienia-konstytucji-3-maja",
  },
  "do-pobrania": {
    label: "Materiały",
    href: "/materialy",
  },
  "dla-nauczyciela": {
    label: "Materiały",
    href: "/materialy",
  },
  slownik: {
    label: "Materiały",
    href: "/materialy",
  },
  "jak-odpowiedziec-na-sprawdzianie": {
    label: "Materiały",
    href: "/materialy",
  },
  zrodla: {
    label: "Materiały",
    href: "/materialy",
  },
};
