import type {
  Card,
  ContentCallout,
  ContentPage,
  LearningPathStep,
  QuickReviewItem,
  Section,
  SeoEntry,
  SitemapGroup,
  SitemapItem,
  TableData,
} from "./types.ts";
import { downloadMaterials } from "./materials.ts";

export const homeCards: Card[] = [
  {
    title: "Historia",
    text: "Dlaczego po I rozbiorze reformy stały się sprawą pilną i jak Sejm Wielki otworzył drogę do zmian.",
    href: "/historia",
    icon: "calendar",
  },
  {
    title: "Czym była",
    text: "Proste wyjaśnienie, czym była Ustawa Rządowa i dlaczego można ją traktować jak instrukcję ustroju państwa.",
    href: "/czym-byla-konstytucja-3-maja",
    icon: "document",
  },
  {
    title: "Tekst konstytucji",
    text: "Preambuła i artykuły I-XI w akordeonie: fragment, wyjaśnienie, trudne słowa i pytanie.",
    href: "/tekst-konstytucji",
    icon: "source",
  },
  {
    title: "Postanowienia",
    text: "Trójpodział władzy, zniesienie liberum veto, prawa miast, opieka nad chłopami i zmiana zasad tronu.",
    href: "/postanowienia-konstytucji-3-maja",
    icon: "scale",
  },
  {
    title: "Twórcy",
    text: "Nie tylko cztery nazwiska, lecz zespół polityków, reformatorów i redaktorów tekstu.",
    href: "/tworcy-konstytucji-3-maja",
    icon: "users",
  },
  {
    title: "Znaczenie",
    text: "Dlaczego dokument obowiązywał krótko, ale stał się symbolem odpowiedzialności za państwo.",
    href: "/znaczenie-konstytucji-3-maja",
    icon: "landmark",
  },
  {
    title: "Quiz",
    text: "Pytania z odpowiedziami i krótkimi wyjaśnieniami, od faktów podstawowych po interpretację.",
    href: "/quiz",
    icon: "quiz",
  },
];

export const learningPath: LearningPathStep[] = [
  {
    slug: "historia",
    title: "Zrozum tło historyczne",
    shortTitle: "Historia",
    href: "/historia",
    description:
      "Najpierw zobacz, dlaczego po I rozbiorze reformy stały się konieczne.",
    action: "Zacznij od historii",
  },
  {
    slug: "czym-byla-konstytucja-3-maja",
    title: "Wyjaśnij, czym była Ustawa Rządowa",
    shortTitle: "Czym była",
    href: "/czym-byla-konstytucja-3-maja",
    description:
      "Dowiedz się, czym jest konstytucja i jak była zbudowana Ustawa Rządowa.",
    action: "Poznaj dokument",
  },
  {
    slug: "postanowienia-konstytucji-3-maja",
    title: "Sprawdź, co zmieniała",
    shortTitle: "Postanowienia",
    href: "/postanowienia-konstytucji-3-maja",
    description:
      "Przejdź przez liberum veto, trójpodział władzy, mieszczan, chłopów i tron.",
    action: "Zobacz postanowienia",
  },
  {
    slug: "tekst-konstytucji",
    title: "Przeczytaj tekst z komentarzem",
    shortTitle: "Tekst",
    href: "/tekst-konstytucji",
    description:
      "Zobacz preambułę i artykuły I-XI z krótkimi objaśnieniami dla ucznia.",
    action: "Pracuj ze źródłem",
  },
  {
    slug: "tworcy-konstytucji-3-maja",
    title: "Poznaj twórców",
    shortTitle: "Twórcy",
    href: "/tworcy-konstytucji-3-maja",
    description:
      "Zobacz, że konstytucja była dziełem zespołu polityków i reformatorów.",
    action: "Poznaj postacie",
  },
  {
    slug: "losy-konstytucji-3-maja",
    title: "Zobacz losy dokumentu",
    shortTitle: "Losy",
    href: "/losy-konstytucji-3-maja",
    description:
      "Dowiedz się, dlaczego konstytucja obowiązywała krótko i gdzie są jej oryginały.",
    action: "Prześledź losy",
  },
  {
    slug: "znaczenie-konstytucji-3-maja",
    title: "Zrozum znaczenie",
    shortTitle: "Znaczenie",
    href: "/znaczenie-konstytucji-3-maja",
    description:
      "Na końcu połącz prawo, pamięć, święto 3 maja i symbol reform.",
    action: "Zrozum znaczenie",
  },
  {
    slug: "quiz",
    title: "Sprawdź się",
    shortTitle: "Quiz",
    href: "/quiz",
    description: "Rozwiąż quiz i zobacz, które tematy warto jeszcze powtórzyć.",
    action: "Rozpocznij quiz",
  },
];

export const quickReview: QuickReviewItem[] = [
  {
    title: "30 sekund",
    text: "Zapamiętaj: 3 maja 1791, Sejm Wielki, naprawa ustroju, zniesienie liberum veto i symbol reform.",
    href: "/",
    action: "Wróć do skrótu",
  },
  {
    title: "3 minuty",
    text: "Przejrzyj najważniejsze fakty, krótką oś czasu i tabelę przed/po na stronie głównej.",
    href: "/#najwazniejsze-fakty",
    action: "Powtórz fakty",
  },
  {
    title: "7 minut",
    text: "Zobacz postanowienia i porównanie, żeby umieć powiedzieć, co konkretnie konstytucja zmieniała.",
    href: "/postanowienia-konstytucji-3-maja",
    action: "Sprawdź zmiany",
  },
  {
    title: "10 minut",
    text: "Przeczytaj schemat odpowiedzi na sprawdzianie i zapamiętaj gotową konstrukcję wypowiedzi.",
    href: "/jak-odpowiedziec-na-sprawdzianie",
    action: "Zbuduj odpowiedź",
  },
  {
    title: "15 minut",
    text: "Rozwiąż quiz, a potem wróć tylko do tych tematów, przy których pojawiły się błędy.",
    href: "/quiz",
    action: "Rozpocznij quiz",
  },
];

export const homeCallouts: ContentCallout[] = [
  {
    variant: "question",
    title: "Czy jedna ustawa mogła uratować państwo?",
    body: "Konstytucja 3 Maja pokazuje, że prawo może być początkiem wielkiej zmiany, ale samo uchwalenie dokumentu nie wystarcza. Potrzebna jest jeszcze siła państwa, zgoda społeczna i możliwość obrony reform.",
  },
];

export const facts: TableData = {
  columns: ["Pytanie", "Odpowiedź"],
  rows: [
    ["Kiedy uchwalono konstytucję?", "3 maja 1791 roku"],
    ["Kto ją uchwalił?", "Sejm Wielki, czyli Sejm Czteroletni"],
    ["Gdzie?", "W Sali Senatorskiej Zamku Królewskiego w Warszawie"],
    ["Po co?", "Aby naprawić i wzmocnić państwo po latach kryzysu"],
    [
      "Co zmieniała?",
      "Ustrój Rzeczypospolitej, sposób działania sejmu, władzę wykonawczą i położenie części stanów",
    ],
    [
      "Dlaczego jest ważna?",
      "Była pierwszą nowoczesną konstytucją w Europie i stała się symbolem reform",
    ],
  ],
};

export const beforeAfter: TableData = {
  columns: ["Obszar", "Przed reformą", "Po Konstytucji 3 Maja"],
  rows: [
    [
      "Podejmowanie decyzji",
      "Groźba paraliżu przez liberum veto",
      "Zasada większości głosów i zniesienie liberum veto",
    ],
    [
      "Tron",
      "Wolna elekcja i silny wpływ mocarstw",
      "Następstwo dynastyczne w linii saskiej",
    ],
    [
      "Władza wykonawcza",
      "Słaba i rozproszona",
      "Król w radzie, czyli Straż Praw",
    ],
    [
      "Miasta",
      "Ograniczone prawa polityczne i cywilne",
      "Prawo o miastach jako część konstytucji",
    ],
    [
      "Chłopi",
      "Brak realnej ochrony państwowej",
      "Opieka prawa i rządu krajowego",
    ],
    [
      "Ustrój",
      "Niejednolity mechanizm władz",
      "Podział na władzę ustawodawczą, wykonawczą i sądowniczą",
    ],
  ],
};

export const authorsTable: TableData = {
  columns: ["Postać", "Rola"],
  rows: [
    [
      "Stanisław August Poniatowski",
      "współautor projektu, polityczny patron prac i uczestnik tajnych przygotowań",
    ],
    ["Ignacy Potocki", "kluczowy lider obozu reform i współautor polityczny"],
    [
      "Hugo Kołłątaj",
      "wsparcie koncepcyjne, reformy społeczne i zaplecze ideowe",
    ],
    [
      "Stanisław Małachowski",
      "marszałek Sejmu Czteroletniego i ważna rola organizacyjna",
    ],
    ["Aleksander Linowski", "uczestnik wąskiego grona prac nad projektem"],
    ["Scipione Piattoli", "pomoc redakcyjna przy projekcie konstytucji"],
  ],
};

const portraitCredits = "Wikimedia Commons, domena publiczna";

export const personImages: Record<string, NonNullable<Card["image"]>> = {
  stanislawAugust: {
    src: "/images/portraits/stanislaw-august-poniatowski.jpg",
    alt: "Portret Stanisława Augusta Poniatowskiego w stroju koronacyjnym",
    width: 960,
    height: 1200,
    credit: portraitCredits,
  },
  ignacyPotocki: {
    src: "/images/portraits/ignacy-potocki.jpg",
    alt: "Portret Ignacego Potockiego",
    width: 700,
    height: 900,
    credit: portraitCredits,
  },
  hugoKollataj: {
    src: "/images/portraits/hugo-kollataj.jpg",
    alt: "Portret Hugona Kołłątaja",
    width: 960,
    height: 1200,
    credit: portraitCredits,
  },
  stanislawMalachowski: {
    src: "/images/portraits/stanislaw-malachowski.jpg",
    alt: "Portret Stanisława Małachowskiego",
    width: 960,
    height: 1200,
    credit: portraitCredits,
  },
};

export const wspolneRelated: Card[] = [
  {
    title: "Tekst konstytucji",
    text: "Przeczytaj preambułę i artykuły I-XI z komentarzem dla ucznia.",
    href: "/tekst-konstytucji",
  },
  {
    title: "Oś czasu",
    text: "Zobacz wydarzenia od I rozbioru do przywrócenia święta 3 maja.",
    href: "/os-czasu",
  },
  {
    title: "Słownik",
    text: "Wyjaśnienia pojęć: liberum veto, Straż Praw, Targowica, preambuła.",
    href: "/slownik",
  },
  {
    title: "Quiz",
    text: "Sprawdź wiedzę i od razu zobacz krótkie wyjaśnienia odpowiedzi.",
    href: "/quiz",
  },
];

export const uproszczenieCalloutSection: Section = {
  title: "Uwaga na uproszczenie",
  callout: {
    variant: "warning",
    title: "Konstytucja była przełomem, ale nie rozwiązała wszystkiego",
    body: "Warto mówić jednocześnie o odwadze reformatorów i o ograniczeniach epoki. Konstytucja wzmacniała państwo, miasta i ochronę chłopów, ale nie wprowadzała pełnej demokracji, nie znosiła pańszczyzny i nie dała wszystkim równych praw.",
  },
};

const todaySection = (body: string[], question: string): Section => ({
  title: "Dlaczego to ważne dzisiaj?",
  body,
  callout: {
    variant: "question",
    title: "Pytanie na koniec",
    body: question,
  },
});

export const todaySections = {
  historia: todaySection(
    [
      "Tło Konstytucji 3 Maja przypomina, że kryzys państwa narasta zwykle stopniowo: przez słabe instytucje, odkładane reformy i zależność od silniejszych sąsiadów.",
      "Dlatego historia z końca XVIII wieku pomaga rozmawiać nie tylko o jednej dacie, lecz także o odpowiedzialności za państwo, które trzeba naprawiać zanim presja z zewnątrz stanie się zbyt silna.",
    ],
    "Które ostrzeżenie z czasów Sejmu Wielkiego najłatwiej przeoczyć dzisiaj?",
  ),
  czymByla: todaySection(
    [
      "Ustawa Rządowa pokazuje, że konstytucja nie jest ozdobnym dokumentem, ale opisem reguł, według których ma działać wspólnota polityczna.",
      "Współcześnie łatwiej dzięki temu zrozumieć, dlaczego podział kompetencji, procedury i odpowiedzialność instytucji są warunkiem sprawnego państwa, a nie tylko formalnością.",
    ],
    "Która część konstytucji jest ważniejsza: prawa obywateli, organizacja władz czy sposób zmiany samego dokumentu?",
  ),
  postanowienia: todaySection(
    [
      "Najważniejsze postanowienia Konstytucji 3 Maja uczą, że reforma państwa musi dotykać konkretnych mechanizmów: sejmu, rządu, sądów, praw grup społecznych i sposobu podejmowania decyzji.",
      "To dobra lekcja czytania polityki przez skutki. Zamiast pytać tylko, czy reforma brzmiała szlachetnie, warto pytać, co realnie zmieniała i gdzie zostawiała ograniczenia.",
    ],
    "Która zmiana najbardziej wzmacniała państwo: większość głosów, trójpodział władzy, prawa miast czy opieka nad chłopami?",
  ),
  tworcy: todaySection(
    [
      "Historia twórców konstytucji pokazuje, że wielkie reformy rzadko są dziełem jednej osoby. Potrzebują idei, organizacji, zaplecza politycznego i ludzi umiejących przełożyć program na tekst prawa.",
      "Dzięki temu łatwiej docenić współpracę, ale też odpowiedzialność elit: sam dobry pomysł nie wystarcza, jeśli nie ma ludzi gotowych go przeprowadzić i bronić.",
    ],
    "Czy w historii reform ważniejszy jest lider, zespół czy moment polityczny?",
  ),
  losy: todaySection(
    [
      "Losy Konstytucji 3 Maja uczą, że uchwalenie prawa jest dopiero początkiem. Reforma potrzebuje obrony politycznej, społecznego poparcia i warunków, które pozwolą jej wejść w życie.",
      "Jednocześnie krótki czas obowiązywania nie przekreśla znaczenia dokumentu. Rękopisy, archiwa i pamięć pokazują, że porażka polityczna może zostawić po sobie trwałą lekcję.",
    ],
    "Czy dokument, który szybko upadł jako prawo, może wygrać jako symbol i źródło pamięci?",
  ),
  znaczenie: todaySection(
    [
      "Znaczenie Konstytucji 3 Maja polega na połączeniu dwóch wymiarów: była konkretnym projektem ustrojowym i stała się symbolem odpowiedzialności za państwo.",
      "To pomaga czytać święta i symbole bez uproszczeń. Za uroczystą datą stoją zapisy prawne, konflikty polityczne, ograniczenia epoki i pytanie, jak wspólnota pamięta własne próby naprawy.",
    ],
    "Jak mówić o symbolu narodowym tak, żeby nie zgubić faktów historycznych?",
  ),
  liberumVeto: todaySection(
    [
      "Liberum veto jest dobrym przykładem reguły, która miała chronić zgodę, ale w praktyce mogła paraliżować decyzje całego państwa.",
      "Dlatego ten temat nadal działa jako przestroga: procedury są potrzebne, ale muszą pozwalać wspólnocie podejmować decyzje, zwłaszcza wtedy, gdy presja czasu i bezpieczeństwa jest duża.",
    ],
    "Gdzie leży granica między ochroną mniejszości a blokowaniem decyzji potrzebnych całemu państwu?",
  ),
  trojpodzial: todaySection(
    [
      "Trójpodział władzy przypomina, że sprawne państwo nie musi oznaczać skupienia decyzji w jednym miejscu. Jasny podział zadań może równocześnie porządkować działanie i ograniczać samowolę.",
      "To aktualna lekcja, bo zaufanie do państwa zależy nie tylko od szybkości decyzji, ale też od kontroli, przejrzystości i możliwości rozstrzygania sporów przez niezależne sądy.",
    ],
    "Która władza najbardziej potrzebuje kontroli: ta, która tworzy prawo, wykonuje je czy rozstrzyga spory?",
  ),
  mieszczanie: todaySection(
    [
      "Sprawa mieszczan pokazuje, że modernizacja państwa obejmuje także pytanie, kto ma dostęp do praw, majątku, urzędów i wpływu na życie publiczne.",
      "Konstytucja 3 Maja nie tworzyła pełnej równości, ale poszerzała krąg osób widzianych przez państwo. To dobry punkt wyjścia do rozmowy o stopniowych, niepełnych, lecz realnych zmianach społecznych.",
    ],
    "Czy ograniczona reforma może być ważna, jeśli wyraźnie przesuwa granice wcześniejszego porządku?",
  ),
  chlopi: todaySection(
    [
      "Zapisy o chłopach pokazują, jak ważne jest precyzyjne czytanie reform społecznych. Samo objęcie opieką prawa było krokiem naprzód, ale nie oznaczało pełnej wolności ani zniesienia pańszczyzny.",
      "Dzisiaj ten przykład uczy, żeby odróżniać zmianę języka państwa od rozwiązania całego problemu. Reforma może być symbolicznie ważna i jednocześnie praktycznie ograniczona.",
    ],
    "Jak uczciwie opisać reformę, która była przełomem w myśleniu, ale nie dawała jeszcze pełnych praw?",
  ),
};

export const dlaczegoDzisiajSection = todaySections.historia;

export const postanowieniaParentRelated: Card = {
  title: "Wróć do postanowień",
  text: "Zobacz, jak ten temat łączy się z całą reformą ustroju i społeczeństwa.",
  href: "/postanowienia-konstytucji-3-maja",
  variant: "navigation",
};

export const pogłębieniePojecRelated: Card[] = [
  {
    title: "Liberum veto",
    text: "Dlaczego jeden głos mógł paraliżować sejm i czemu konstytucja to zmieniła.",
    href: "/liberum-veto",
    variant: "concept",
  },
  {
    title: "Trójpodział władzy",
    text: "Jak konstytucja dzieliła władzę na ustawodawczą, wykonawczą i sądowniczą.",
    href: "/trojpodzial-wladzy",
    variant: "concept",
  },
  {
    title: "Mieszczanie",
    text: "Co dawało włączenie prawa o miastach do konstytucji i gdzie były granice reformy.",
    href: "/mieszczanie",
    variant: "concept",
  },
  {
    title: "Chłopi",
    text: "Co znaczyła opieka prawa i rządu oraz dlaczego nie było to zniesienie pańszczyzny.",
    href: "/chlopi",
    variant: "concept",
  },
];

export type PageRegistryItem = Pick<
  ContentPage,
  "slug" | "title" | "navLabel" | "description"
>;

export const pageRegistry: PageRegistryItem[] = [
  {
    slug: "historia",
    title: "Tło historyczne Konstytucji 3 Maja",
    navLabel: "Historia",
    description:
      "Poznaj wydarzenia, które doprowadziły do uchwalenia Konstytucji 3 Maja: I rozbiór, Sejm Wielki, obóz reform i tajne prace nad projektem.",
  },
  {
    slug: "czym-byla-konstytucja-3-maja",
    title: "Czym była Konstytucja 3 Maja",
    navLabel: "Konstytucja",
    description:
      "Wyjaśniamy, czym była Ustawa Rządowa z 1791 roku, jak była zbudowana i dlaczego uznaje się ją za przełomowy projekt naprawy państwa.",
  },
  {
    slug: "tworcy-konstytucji-3-maja",
    title: "Twórcy Konstytucji 3 Maja",
    navLabel: "Twórcy",
    description:
      "Kim byli Stanisław August Poniatowski, Ignacy Potocki, Hugo Kołłątaj i Stanisław Małachowski? Poznaj autorów i szerszy zespół reform.",
  },
  {
    slug: "postanowienia-konstytucji-3-maja",
    title: "Najważniejsze postanowienia Konstytucji 3 Maja",
    navLabel: "Postanowienia",
    description:
      "Zobacz, jakie zmiany wprowadziła Konstytucja 3 Maja: trójpodział władzy, sejm, król, miasta, chłopi, religia i liberum veto.",
  },
  {
    slug: "liberum-veto",
    title: "Liberum veto i koniec paraliżu sejmu",
    navLabel: "Liberum veto",
    description:
      "Wyjaśnienie liberum veto: czym było, dlaczego osłabiało Rzeczpospolitą i jak Konstytucja 3 Maja zastąpiła je zasadą większości.",
  },
  {
    slug: "trojpodzial-wladzy",
    title: "Trójpodział władzy w Konstytucji 3 Maja",
    navLabel: "Trójpodział",
    description:
      "Wyjaśnienie trójpodziału władzy w Konstytucji 3 Maja: sejm, król ze Strażą Praw i sądy jako trzy części ustroju.",
  },
  {
    slug: "mieszczanie",
    title: "Mieszczanie w Konstytucji 3 Maja",
    navLabel: "Mieszczanie",
    description:
      "Wyjaśnienie praw mieszczan w Konstytucji 3 Maja: prawo o miastach, miasta królewskie, prawa cywilne i granice reformy.",
  },
  {
    slug: "chlopi",
    title: "Chłopi w Konstytucji 3 Maja",
    navLabel: "Chłopi",
    description:
      "Wyjaśnienie zapisów o chłopach w Konstytucji 3 Maja: opieka prawa i rządu, znaczenie symboliczne oraz brak zniesienia pańszczyzny.",
  },
  {
    slug: "znaczenie-konstytucji-3-maja",
    title: "Znaczenie Konstytucji 3 Maja",
    navLabel: "Znaczenie",
    description:
      "Dlaczego Konstytucja 3 Maja stała się symbolem nowoczesnego państwa, pamięci narodowej i dziedzictwa europejskiego?",
  },
  {
    slug: "losy-konstytucji-3-maja",
    title: "Losy Konstytucji 3 Maja",
    navLabel: "Losy",
    description:
      "Co stało się z Konstytucją 3 Maja po 1791 roku: Targowica, wojna z Rosją, rozbiory i zachowane egzemplarze w AGAD.",
  },
  {
    slug: "materialy",
    title: "Materiały do nauki o Konstytucji 3 Maja",
    navLabel: "Materiały",
    description:
      "Tekst źródłowy, słownik, oś czasu, karta pracy, pytania do powtórki, źródła i materiały dla nauczyciela.",
  },
  {
    slug: "quiz",
    title: "Quiz o Konstytucji 3 Maja",
    navLabel: "Quiz",
    description:
      "Quiz o Konstytucji 3 Maja z pytaniami dla uczniów, odpowiedziami i krótkimi wyjaśnieniami.",
  },
  {
    slug: "quiz/pytania",
    title: "Quiz: pytania mieszane",
    navLabel: "Pytania mieszane",
    description:
      "Mieszany quiz o Konstytucji 3 Maja: 18 losowych pytań z bazy wyboru odpowiedzi, prawda/fałsz i dopasowania pojęć.",
  },
  {
    slug: "quiz/wybor-odpowiedzi",
    title: "Quiz: wybór odpowiedzi",
    navLabel: "Wybór odpowiedzi",
    description:
      "Quiz wyboru odpowiedzi o Konstytucji 3 Maja: daty, osoby, postanowienia i skutki reform.",
  },
  {
    slug: "quiz/prawda-czy-falsz",
    title: "Quiz: prawda czy fałsz",
    navLabel: "Prawda/fałsz",
    description:
      "Quiz prawda/fałsz o Konstytucji 3 Maja i najczęstszych uproszczeniach.",
  },
  {
    slug: "quiz/dopasowanie-pojec",
    title: "Quiz: dopasowanie pojęć",
    navLabel: "Dopasowanie pojęć",
    description:
      "Quiz z dopasowywaniem pojęć, osób, wydarzeń i postanowień Konstytucji 3 Maja.",
  },
  {
    slug: "quiz/chronologia",
    title: "Quiz: zadanie chronologiczne",
    navLabel: "Chronologia quizu",
    description:
      "Zadanie chronologiczne o Konstytucji 3 Maja: ułóż najważniejsze wydarzenia od I rozbioru do III rozbioru.",
  },
  {
    slug: "os-czasu",
    title: "Oś czasu Konstytucji 3 Maja",
    navLabel: "Oś czasu",
    description:
      "Interaktywna oś czasu wydarzeń od wyboru Stanisława Augusta Poniatowskiego po przywrócenie święta 3 maja.",
  },
  {
    slug: "slownik",
    title: "Słownik pojęć",
    navLabel: "Słownik",
    description:
      "Słownik najważniejszych pojęć potrzebnych do zrozumienia Konstytucji 3 Maja.",
  },
  {
    slug: "tekst-konstytucji",
    title: "Tekst Konstytucji z komentarzem",
    navLabel: "Tekst",
    description:
      "Opracowany skrót tekstu Konstytucji 3 Maja z komentarzem dla uczniów.",
  },
  {
    slug: "mity-i-fakty",
    title: "Mity i fakty o Konstytucji 3 Maja",
    navLabel: "Mity i fakty",
    description:
      "Najczęstsze mity o Konstytucji 3 Maja i spokojne wyjaśnienia faktów.",
  },
  {
    slug: "przed-i-po",
    title: "Przed i po Konstytucji 3 Maja",
    navLabel: "Przed i po",
    description:
      "Porównanie najważniejszych obszarów państwa przed reformą i po uchwaleniu Konstytucji 3 Maja.",
  },
  {
    slug: "dla-nauczyciela",
    title: "Materiały dla nauczyciela",
    navLabel: "Dla nauczyciela",
    description:
      "Scenariusze lekcji o Konstytucji 3 Maja na 45 i 90 minut, zadania, pytania do dyskusji i praca domowa.",
  },
  {
    slug: "do-pobrania",
    title: "Materiały do pobrania",
    navLabel: "Do pobrania",
    description:
      "Gotowe materiały PDF i strony drukowalne: notatka, oś czasu, karta pracy, quiz, słownik, mini-plakat, tabela przed/po i plan prezentacji.",
  },
  {
    slug: "pytania-i-odpowiedzi",
    title: "Konstytucja 3 Maja w pytaniach i odpowiedziach",
    navLabel: "Pytania i odpowiedzi",
    description:
      "Najczęstsze pytania uczniów o Konstytucję 3 Maja z prostymi odpowiedziami.",
  },
  {
    slug: "jak-odpowiedziec-na-sprawdzianie",
    title: "Jak odpowiedzieć na sprawdzianie",
    navLabel: "Na sprawdzian",
    description:
      "Krótka i dłuższa odpowiedź na pytanie, dlaczego Konstytucja 3 Maja była ważna.",
  },
  {
    slug: "infografiki-i-mapa-archiwow",
    title: "Infografiki i mapa archiwów",
    navLabel: "Infografiki",
    description:
      "Infografiki, mapa archiwów, miejsca pamięci, wykresy i opisy alternatywne do serwisu o Konstytucji 3 Maja.",
  },
  {
    slug: "zrodla",
    title: "Źródła i bibliografia",
    navLabel: "Źródła",
    description:
      "Najważniejsze źródła do nauki o Konstytucji 3 Maja: Biblioteka Sejmowa, AGAD, Archiwa Państwowe, Zamek Królewski, ZPE i opracowania.",
  },
  {
    slug: "o-projekcie",
    title: "O projekcie",
    navLabel: "O projekcie",
    description:
      "Informacje o autorce, konkursie i celu serwisu Konstytucja 3 Maja dla uczniów.",
  },
];

export const pagesBySlug = Object.fromEntries(
  pageRegistry.map((page) => [page.slug, page]),
) as Record<string, PageRegistryItem>;

const sitemapFromPage = (
  slug: string,
  priority = 0.7,
  changefreq: SitemapItem["changefreq"] = "monthly",
): SitemapItem => {
  const page = pagesBySlug[slug];

  if (!page) {
    throw new Error(`Missing page for sitemap slug: ${slug}`);
  }

  return {
    label: page.navLabel ?? page.title,
    href: `/${page.slug}`,
    description: page.description,
    priority,
    changefreq,
  };
};

export const sitemapGroups: SitemapGroup[] = [
  {
    title: "Główna ścieżka nauki",
    description:
      "Najważniejsze podstrony, które prowadzą ucznia od tła historycznego do quizu.",
    items: [
      {
        label: "Start",
        href: "/",
        description:
          "Najkrótsze wprowadzenie do Konstytucji 3 Maja, oś czasu, fakty i wejścia do działów.",
        priority: 1,
        changefreq: "weekly",
      },
      sitemapFromPage("historia", 0.9),
      sitemapFromPage("czym-byla-konstytucja-3-maja", 0.9),
      sitemapFromPage("postanowienia-konstytucji-3-maja", 0.9),
      sitemapFromPage("tekst-konstytucji", 0.9),
      sitemapFromPage("tworcy-konstytucji-3-maja", 0.8),
      sitemapFromPage("losy-konstytucji-3-maja", 0.8),
      sitemapFromPage("znaczenie-konstytucji-3-maja", 0.8),
      sitemapFromPage("quiz", 0.8, "weekly"),
      sitemapFromPage("quiz/pytania", 0.75, "weekly"),
      sitemapFromPage("quiz/wybor-odpowiedzi", 0.74, "weekly"),
      sitemapFromPage("quiz/prawda-czy-falsz", 0.73, "weekly"),
      sitemapFromPage("quiz/dopasowanie-pojec", 0.73, "weekly"),
      sitemapFromPage("quiz/chronologia", 0.72, "weekly"),
    ],
  },
  {
    title: "Pogłębienie pojęć",
    description:
      "Osobne wyjaśnienia pojęć, które najczęściej pojawiają się przy postanowieniach konstytucji.",
    items: [
      sitemapFromPage("liberum-veto", 0.72),
      sitemapFromPage("trojpodzial-wladzy", 0.72),
      sitemapFromPage("mieszczanie", 0.72),
      sitemapFromPage("chlopi", 0.72),
    ],
  },
  {
    title: "Powtórka i narzędzia ucznia",
    description:
      "Strony pomocnicze do utrwalania wiedzy, sprawdzianu i pracy z pojęciami.",
    items: [
      sitemapFromPage("os-czasu", 0.75),
      sitemapFromPage("slownik", 0.75),
      sitemapFromPage("mity-i-fakty", 0.7),
      sitemapFromPage("przed-i-po", 0.7),
      sitemapFromPage("pytania-i-odpowiedzi", 0.7),
      sitemapFromPage("jak-odpowiedziec-na-sprawdzianie", 0.7),
    ],
  },
  {
    title: "Materiały, źródła i praca w klasie",
    description:
      "Zasoby dla nauczycieli, materiały drukowalne, bibliografia i wizualizacje.",
    items: [
      sitemapFromPage("materialy", 0.75),
      sitemapFromPage("dla-nauczyciela", 0.75),
      sitemapFromPage("do-pobrania", 0.7),
      ...downloadMaterials.map((material) => ({
        label: material.sitemapLabel,
        href: `/do-pobrania/${material.slug}`,
        description: material.sitemapDescription,
        priority: material.priority,
        changefreq: material.changefreq,
      })),
      sitemapFromPage("infografiki-i-mapa-archiwow", 0.65),
      sitemapFromPage("zrodla", 0.75),
    ],
  },
  {
    title: "Informacje o serwisie",
    description: "Meta-nawigacja, założenia redakcyjne i pełna mapa serwisu.",
    items: [
      {
        label: "Mapa strony",
        href: "/mapa-strony",
        description:
          "Czytelna mapa HTML wszystkich podstron i działów serwisu.",
        priority: 0.5,
        changefreq: "monthly",
      },
      sitemapFromPage("o-projekcie", 0.5, "yearly"),
    ],
  },
];

export const sitemapItems = sitemapGroups.flatMap((group) => group.items);
export const sitemapLastModified = "2026-05-19";

const seoFromPage = (
  slug: string,
  primaryCta: string,
  primaryCtaHref: string,
  metaTitle?: string,
  metaDescription?: string,
): SeoEntry => {
  const page = pagesBySlug[slug];

  if (!page) {
    throw new Error(`Missing page for SEO slug: ${slug}`);
  }

  return {
    label: page.navLabel ?? page.title,
    href: `/${page.slug}`,
    h1: page.title,
    primaryCta,
    primaryCtaHref,
    metaTitle: metaTitle ?? page.title,
    metaDescription: metaDescription ?? page.description,
  };
};

export const seoEntries: SeoEntry[] = [
  {
    label: "Start",
    href: "/",
    h1: "Konstytucja 3 Maja",
    primaryCta: "Poznaj historię Konstytucji 3 Maja",
    primaryCtaHref: "/historia",
    metaTitle: "Konstytucja 3 Maja dla uczniów",
    metaDescription:
      "Proste i źródłowe wprowadzenie do Konstytucji 3 Maja: data, znaczenie, twórcy, postanowienia i quiz.",
  },
  seoFromPage(
    "historia",
    "Sprawdź, czym była konstytucja",
    "/czym-byla-konstytucja-3-maja",
    "Tło historyczne Konstytucji 3 Maja",
    "Poznaj wydarzenia, które doprowadziły do uchwalenia Konstytucji 3 Maja: I rozbiór, Sejm Wielki i obóz reform.",
  ),
  seoFromPage(
    "czym-byla-konstytucja-3-maja",
    "Zobacz najważniejsze postanowienia",
    "/postanowienia-konstytucji-3-maja",
    "Czym była Konstytucja 3 Maja",
    "Wyjaśniamy prostym językiem, czym była Ustawa Rządowa z 1791 roku i dlaczego uważa się ją za przełom.",
  ),
  seoFromPage(
    "postanowienia-konstytucji-3-maja",
    "Porównaj, co zmieniła konstytucja",
    "/przed-i-po",
    "Postanowienia Konstytucji 3 Maja",
    "Zobacz, jakie zmiany wprowadziła Konstytucja 3 Maja: sejm, król, miasta, chłopi, religia i liberum veto.",
  ),
  seoFromPage(
    "liberum-veto",
    "Zobacz trójpodział władzy",
    "/trojpodzial-wladzy",
    "Liberum veto i Konstytucja 3 Maja",
    "Czym było liberum veto, dlaczego paraliżowało sejm i jak Konstytucja 3 Maja zastąpiła je zasadą większości głosów.",
  ),
  seoFromPage(
    "trojpodzial-wladzy",
    "Poznaj prawa mieszczan",
    "/mieszczanie",
    "Trójpodział władzy w Konstytucji 3 Maja",
    "Jak Konstytucja 3 Maja dzieliła władzę na ustawodawczą, wykonawczą i sądowniczą: sejm, król ze Strażą Praw i sądy.",
  ),
  seoFromPage(
    "mieszczanie",
    "Sprawdź sprawę chłopów",
    "/chlopi",
    "Mieszczanie w Konstytucji 3 Maja",
    "Jakie prawa zyskali mieszczanie w Konstytucji 3 Maja i dlaczego prawo o miastach było ważne dla reformy państwa.",
  ),
  seoFromPage(
    "chlopi",
    "Wróć do postanowień",
    "/postanowienia-konstytucji-3-maja",
    "Chłopi w Konstytucji 3 Maja",
    "Co Konstytucja 3 Maja mówiła o chłopach: opieka prawa i rządu, znaczenie zapisu oraz brak zniesienia pańszczyzny.",
  ),
  seoFromPage(
    "tekst-konstytucji",
    "Czytaj źródła i komentarze",
    "/zrodla",
    "Tekst Konstytucji 3 Maja",
    "Opracowany tekst Konstytucji 3 Maja: preambuła, artykuły I-XI, cytaty, objaśnienia i linki do skanów.",
  ),
  seoFromPage(
    "tworcy-konstytucji-3-maja",
    "Poznaj losy dokumentu",
    "/losy-konstytucji-3-maja",
    "Twórcy Konstytucji 3 Maja",
    "Kim byli Stanisław August, Potocki, Kołłątaj i Małachowski? Przedstawiamy autorów Konstytucji 3 Maja.",
  ),
  seoFromPage(
    "losy-konstytucji-3-maja",
    "Zobacz znaczenie konstytucji",
    "/znaczenie-konstytucji-3-maja",
    "Losy Konstytucji 3 Maja",
    "Co stało się z Konstytucją 3 Maja po 1791 roku i gdzie dziś przechowywane są jej oryginały?",
  ),
  seoFromPage(
    "znaczenie-konstytucji-3-maja",
    "Rozwiąż quiz",
    "/quiz",
    "Znaczenie Konstytucji 3 Maja",
    "Dlaczego Konstytucja 3 Maja stała się symbolem nowoczesnego państwa, pamięci narodowej i dziedzictwa europejskiego?",
  ),
  seoFromPage(
    "quiz",
    "Rozpocznij pytania",
    "/quiz/pytania",
    "Quiz o Konstytucji 3 Maja",
    "Wybierz tryb quizu o Konstytucji 3 Maja: wybór odpowiedzi, prawda/fałsz, dopasowanie pojęć, zestaw mieszany albo chronologia.",
  ),
  seoFromPage(
    "quiz/pytania",
    "Wybierz typ quizu",
    "/quiz",
    "Quiz o Konstytucji 3 Maja: pytania mieszane",
    "Rozwiąż 18 losowych pytań z bazy quizu o Konstytucji 3 Maja: wybór odpowiedzi, prawda/fałsz i dopasowanie pojęć.",
  ),
  seoFromPage(
    "quiz/wybor-odpowiedzi",
    "Zmień typ quizu",
    "/quiz",
    "Quiz o Konstytucji 3 Maja: wybór odpowiedzi",
    "Rozwiąż losowe pytania wyboru o Konstytucji 3 Maja: daty, osoby, postanowienia i skutki reform.",
  ),
  seoFromPage(
    "quiz/prawda-czy-falsz",
    "Zmień typ quizu",
    "/quiz",
    "Quiz o Konstytucji 3 Maja: prawda czy fałsz",
    "Sprawdź najczęstsze stwierdzenia i uproszczenia o Konstytucji 3 Maja w trybie prawda/fałsz.",
  ),
  seoFromPage(
    "quiz/dopasowanie-pojec",
    "Zmień typ quizu",
    "/quiz",
    "Quiz o Konstytucji 3 Maja: dopasowanie pojęć",
    "Dopasuj pojęcia, osoby, wydarzenia i postanowienia Konstytucji 3 Maja do właściwych wyjaśnień.",
  ),
  seoFromPage(
    "quiz/chronologia",
    "Rozwiąż pytania quizowe",
    "/quiz/pytania",
    "Quiz o Konstytucji 3 Maja: chronologia",
    "Ułóż najważniejsze wydarzenia w kolejności: I rozbiór, Sejm Wielki, Konstytucja 3 Maja, wojna i rozbiory.",
  ),
  seoFromPage(
    "os-czasu",
    "Przejdź do historii",
    "/historia",
    "Oś czasu Konstytucji 3 Maja",
    "Najważniejsze daty od kryzysu Rzeczypospolitej i Sejmu Wielkiego po upadek reform oraz pamięć o 3 maja.",
  ),
  seoFromPage(
    "slownik",
    "Zobacz pojęcia w tekście",
    "/tekst-konstytucji",
    "Słownik Konstytucji 3 Maja",
    "Wyjaśnienia pojęć takich jak liberum veto, Sejm Wielki, trójpodział władzy, Targowica i Ustawa Rządowa.",
  ),
  seoFromPage(
    "mity-i-fakty",
    "Porównaj przed i po",
    "/przed-i-po",
    "Mity i fakty o Konstytucji 3 Maja",
    "Najczęstsze uproszczenia o Konstytucji 3 Maja oraz spokojne wyjaśnienia faktów dla uczniów.",
  ),
  seoFromPage(
    "przed-i-po",
    "Przećwicz odpowiedź",
    "/jak-odpowiedziec-na-sprawdzianie",
    "Przed i po Konstytucji 3 Maja",
    "Porównanie państwa przed reformą i po uchwaleniu Konstytucji 3 Maja: sejm, władza, miasta, chłopi i wojsko.",
  ),
  seoFromPage(
    "materialy",
    "Pobierz materiały",
    "/do-pobrania",
    "Materiały o Konstytucji 3 Maja",
    "Zestaw materiałów do nauki: tekst źródłowy, słownik, oś czasu, karta pracy, pytania, quiz i źródła.",
  ),
  seoFromPage(
    "dla-nauczyciela",
    "Otwórz materiały do pobrania",
    "/do-pobrania",
    "Konstytucja 3 Maja dla nauczyciela",
    "Scenariusze lekcji o Konstytucji 3 Maja na 45 i 90 minut, zadania, pytania do dyskusji i praca ze źródłem.",
  ),
  seoFromPage(
    "do-pobrania",
    "Zobacz źródła",
    "/zrodla",
    "Konstytucja 3 Maja do pobrania",
    "Materiały do druku: notatka, oś czasu, karta pracy, quiz, słownik, tabela przed i po oraz plan prezentacji.",
  ),
  seoFromPage(
    "pytania-i-odpowiedzi",
    "Zobacz odpowiedź na sprawdzian",
    "/jak-odpowiedziec-na-sprawdzianie",
    "Pytania i odpowiedzi o Konstytucji 3 Maja",
    "Najczęstsze pytania uczniów o Konstytucję 3 Maja z prostymi odpowiedziami i dopowiedzeniami.",
  ),
  seoFromPage(
    "jak-odpowiedziec-na-sprawdzianie",
    "Sprawdź się w quizie",
    "/quiz",
    "Jak odpowiedzieć na sprawdzianie o Konstytucji 3 Maja",
    "Krótka i rozbudowana odpowiedź na pytanie, dlaczego Konstytucja 3 Maja była ważna.",
  ),
  seoFromPage(
    "infografiki-i-mapa-archiwow",
    "Przejdź do źródeł",
    "/zrodla",
    "Infografiki i mapa archiwów Konstytucji 3 Maja",
    "Infografiki, mapa archiwów, miejsca pamięci, wykresy i opisy alternatywne do serwisu o Konstytucji 3 Maja.",
  ),
  seoFromPage(
    "zrodla",
    "Czytaj tekst konstytucji",
    "/tekst-konstytucji",
    "Źródła o Konstytucji 3 Maja",
    "Biblioteka Sejmowa, AGAD, Zamek Królewski, ZPE i opracowania naukowe: źródła do nauki o Konstytucji 3 Maja.",
  ),
  seoFromPage(
    "o-projekcie",
    "Otwórz mapę strony",
    "/mapa-strony",
    "O projekcie Konstytucja 3 Maja dla uczniów",
    "Autorka, konkurs i cel edukacyjnego serwisu Konstytucja 3 Maja dla uczniów.",
  ),
  {
    label: "Mapa strony",
    href: "/mapa-strony",
    h1: "Mapa strony",
    primaryCta: "Wróć na start",
    primaryCtaHref: "/",
    metaTitle: "Mapa strony",
    metaDescription:
      "Czytelna mapa serwisu Konstytucja 3 Maja dla uczniów: główne działy, materiały, źródła, quiz i podstrony pomocnicze.",
  },
];

export const seoByHref = Object.fromEntries(
  seoEntries.map((entry) => [entry.href, entry]),
) as Record<string, SeoEntry>;
