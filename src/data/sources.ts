import type { Card, ConstitutionArticle, SourceExcerpt } from "./types.ts";

export const sourceLinks: Card[] = [
  {
    title: "Biblioteka Sejmowa - Ustawa Rządowa",
    href: "https://libr.sejm.gov.pl/tek01/txt/kpol/1791-r0.html",
    text: "Pełny tekst Ustawy Rządowej w serwisie Biblioteki Sejmowej. Najlepszy punkt startowy do cytowania tekstu konstytucji i pracy ze źródłem.",
    variant: "source",
    icon: "document",
    sourceType: "Tekst źródłowy",
    sourceCategory: "tekst",
    details: [
      { label: "Dla kogo", value: "uczeń i nauczyciel" },
      { label: "Co znajdziesz", value: "tekst dokumentu z układem artykułów" },
    ],
    license:
      "Link zewnętrzny do instytucji publicznej; cytaty w serwisie są krótkie i opisane jako źródłowe.",
    checked: "Zweryfikowano 2026-05-19: HTTP 200.",
  },
  {
    title: "AGAD - Ustawa Rządowa 3 maja 1791 r.",
    href: "https://agad.gov.pl/wp-content/uploads/2022/02/Ustawa_Rzadowa1791_3-maja_PL.pdf",
    text: "PDF z opisem rękopisów, sygnatur, urzędowego druku oraz znaczenia Ustawy Rządowej. Przydatny do pracy z konkretnymi egzemplarzami dokumentu.",
    variant: "source",
    icon: "document",
    sourceType: "Archiwalia / PDF",
    sourceCategory: "archiwalia",
    details: [
      { label: "Dla kogo", value: "nauczyciel i starszy uczeń" },
      {
        label: "Co znajdziesz",
        value: "sygnatury trzech rękopisów i informacje o urzędowym druku",
      },
    ],
    license:
      "Materiał instytucji publicznej; przed wykorzystaniem reprodukcji sprawdzić opis przy konkretnym pliku.",
    checked: "Zweryfikowano 2026-05-19: HTTP 200.",
  },
  {
    title: "AGAD - 230 lat Ustawy Rządowej",
    href: "https://agad.gov.pl/230K3M/3M.html",
    text: "Wirtualna prezentacja AGAD pokazująca rękopisy, skany, zespoły archiwalne i kontekst zachowanych przekazów Konstytucji 3 Maja.",
    variant: "source",
    icon: "source",
    sourceType: "Archiwalia i skany",
    sourceCategory: "archiwalia",
    details: [
      { label: "Dla kogo", value: "nauczyciel, uczeń pracujący ze skanem" },
      {
        label: "Co znajdziesz",
        value: "prezentację rękopisów i odsyłacze do materiału archiwalnego",
      },
    ],
    license:
      "Link zewnętrzny; skany i reprodukcje wymagają sprawdzenia opisu archiwalnego przed ponownym użyciem.",
    checked: "Zweryfikowano 2026-05-19: HTTP 200.",
  },
  {
    title: "AGAD - urzędowy druk Ustawy Rządowej",
    href: "https://agad.gov.pl/230K3M/images/1_13_0_0_25_0360_357.jpg",
    text: "Bezpośredni skan pierwszej karty urzędowego druku Ustawy Rządowej z prezentacji AGAD. W akordeonie tekstu linki prowadzą do najbliższych kart tego samego przekazu.",
    variant: "source",
    icon: "source",
    sourceType: "Archiwalia / bezpośredni skan",
    sourceCategory: "archiwalia",
    details: [
      { label: "Dla kogo", value: "uczeń pracujący z obrazem źródła" },
      {
        label: "Co znajdziesz",
        value: "skan urzędowego druku z Archiwum Sejmu Czteroletniego, t. XXV",
      },
    ],
    license:
      "Link do skanu w prezentacji AGAD; lokalnie nie rehostujemy obrazu źródłowego.",
    checked: "Zweryfikowano 2026-05-19: HTTP 200.",
  },
  {
    title: "Archiwa Państwowe",
    href: "https://archiwa.gov.pl/230-rocznica-uchwalenia-konstytucji-3-maja/",
    text: "Oficjalne opracowanie o zachowanych egzemplarzach, zasobach cyfrowych i znaczeniu rękopisów Konstytucji 3 Maja.",
    variant: "source",
    icon: "source",
    sourceType: "Archiwalia / opracowanie instytucji",
    sourceCategory: "archiwalia",
    details: [
      { label: "Dla kogo", value: "uczeń i nauczyciel" },
      {
        label: "Co znajdziesz",
        value: "krótkie objaśnienie zasobu i kontekstu archiwalnego",
      },
    ],
    checked: "Zweryfikowano 2026-05-19: HTTP 200.",
  },
  {
    title: "Pamięć Polski - Konstytucja 3 Maja 1791",
    href: "https://pamiecpolski.archiwa.gov.pl/konstytucja-3-maja-1791/",
    text: "Opis wpisu dokumentu na Polską Listę Krajową Programu UNESCO Pamięć Świata. Dobry link do sekcji o dziedzictwie i pamięci.",
    variant: "source",
    icon: "landmark",
    sourceType: "Dziedzictwo / archiwalia",
    sourceCategory: "archiwalia",
    details: [
      { label: "Dla kogo", value: "uczeń, nauczyciel" },
      {
        label: "Co znajdziesz",
        value:
          "informację, dlaczego rękopisy są traktowane jako szczególne dziedzictwo",
      },
    ],
    checked: "Zweryfikowano 2026-05-19: HTTP 200.",
  },
  {
    title: "Zamek Królewski w Warszawie",
    href: "https://www.zamek-krolewski.pl/strona/edukacja/771-konstytucja-3-maja",
    text: "Scenariusze lekcji, karty pracy, zadania i filmy edukacyjne uporządkowane pod potrzeby szkoły.",
    variant: "source",
    icon: "book",
    sourceType: "Materiały edukacyjne muzeum",
    sourceCategory: "edukacja",
    details: [
      {
        label: "Dla kogo",
        value: "nauczyciel, klasy I-III, IV-VIII i szkoły ponadpodstawowe",
      },
      {
        label: "Co znajdziesz",
        value: "gotowe aktywności, karty pracy i materiały do lekcji",
      },
    ],
    license:
      "Link zewnętrzny do materiałów muzeum; warunki użycia sprawdzić przy konkretnym pliku.",
    checked: "Zweryfikowano 2026-05-19: HTTP 200.",
  },
  {
    title: "Zintegrowana Platforma Edukacyjna",
    href: "https://zpe.gov.pl/a/konstytucja-3-maja/D14citlTB",
    text: "Materiał syntetyczny dla uczniów o Sejmie Wielkim, twórcach i postanowieniach.",
    variant: "source",
    icon: "book",
    sourceType: "Materiał edukacyjny",
    sourceCategory: "edukacja",
    details: [
      { label: "Dla kogo", value: "uczeń starszych klas, nauczyciel" },
      {
        label: "Co znajdziesz",
        value: "krótką syntezę, ćwiczenia i porządek podstawowych faktów",
      },
    ],
    checked: "Zweryfikowano 2026-05-19: HTTP 200.",
  },
  {
    title: "Wikiźródła",
    href: "https://pl.wikisource.org/wiki/Ustawa_rz%C4%85dowa_czyli_Konstytucya_3_maja_1791",
    text: "Dostępny tekst Ustawy Rządowej w transkrypcji.",
    variant: "source",
    icon: "document",
    sourceType: "Transkrypcja tekstu źródłowego",
    sourceCategory: "tekst",
    details: [
      {
        label: "Dla kogo",
        value: "uczeń i czytelnik potrzebujący szybkiej transkrypcji",
      },
      {
        label: "Co znajdziesz",
        value: "tekst w projekcie siostrzanym Wikimedia, przydatny pomocniczo",
      },
    ],
    license: "Treści Wikiźródeł: zgodnie z zasadami projektu Wikimedia.",
    checked: "Zweryfikowano 2026-05-19: HTTP 200.",
  },
  {
    title: "MKiDN - Święto Konstytucji 3 Maja",
    href: "https://www.gov.pl/web/kultura/swieto-konstytucji-3-maja",
    text: "Rządowy materiał rocznicowy z krótkim kontekstem historycznym, pamięcią święta i podstawowymi faktami.",
    variant: "source",
    icon: "landmark",
    sourceType: "Opracowanie instytucji publicznej",
    sourceCategory: "opracowanie",
    details: [
      { label: "Dla kogo", value: "uczeń i nauczyciel" },
      {
        label: "Co znajdziesz",
        value: "zwięzłe wprowadzenie do znaczenia 3 maja jako święta i symbolu",
      },
    ],
    checked: "Zweryfikowano 2026-05-19: HTTP 200.",
  },
  {
    title:
      "Andrzej Dziadzio - Konstytucja 3 Maja 1791 roku na tle koncepcji ustrojowych oświecenia",
    href: "https://repozytorium.uafm.edu.pl/items/1385cae2-30bf-43c1-8760-ca588ff7f5b0/full",
    text: "Opracowanie naukowe przydatne do rozumienia struktury konstytucji, inspiracji ustrojowych i miejsca dokumentu w myśli oświecenia.",
    variant: "source",
    icon: "book",
    sourceType: "Opracowanie naukowe",
    sourceCategory: "opracowanie",
    details: [
      { label: "Dla kogo", value: "nauczyciel i starszy uczeń" },
      {
        label: "Co znajdziesz",
        value: "pogłębienie ustrojowe i kontekst porównawczy",
      },
    ],
    checked: "Zweryfikowano 2026-05-19: HTTP 200.",
  },
  {
    title:
      "Jerzy Skowronek - Tradycje Konstytucji 3 Maja w życiu narodu i państwa polskiego",
    href: "https://bazhum.muzhp.pl/media/files/Niepodleglosc_i_Pamiec/Niepodleglosc_i_Pamiec-r2000-t7-n1_%2816%29/Niepodleglosc_i_Pamiec-r2000-t7-n1_%2816%29-s25-45/Niepodleglosc_i_Pamiec-r2000-t7-n1_%2816%29-s25-45.pdf",
    text: "Artykuł o pamięci, tradycjach i długim życiu Konstytucji 3 Maja po upadku reform.",
    variant: "source",
    icon: "book",
    sourceType: "Opracowanie naukowe / PDF",
    sourceCategory: "opracowanie",
    details: [
      { label: "Dla kogo", value: "nauczyciel i starszy uczeń" },
      {
        label: "Co znajdziesz",
        value:
          "materiał do sekcji o dziedzictwie, święcie i pamięci historycznej",
      },
    ],
    checked: "Zweryfikowano 2026-05-19: HTTP 200.",
  },
  {
    title: "Wikimedia Commons - Jan Matejko, Konstytucja 3 Maja 1791",
    href: "https://commons.wikimedia.org/wiki/File:Jan_Matejko_-_Konstytucja_3_maja_1791.jpg",
    text: "Reprodukcja obrazu Jana Matejki użyta jako ilustracja na stronie głównej. Plik został pobrany lokalnie i jest serwowany z katalogu projektu.",
    variant: "source",
    icon: "document",
    sourceType: "Ilustracja / Wikimedia Commons",
    sourceCategory: "multimedia",
    details: [
      {
        label: "Dla kogo",
        value: "nauczyciel i uczeń omawiający pamięć historyczną",
      },
      {
        label: "Co znajdziesz",
        value: "opis pliku, autora, status domeny publicznej i metadane obrazu",
      },
    ],
    license: "Public Domain Mark 1.0 / domena publiczna.",
    checked: "Zweryfikowano 2026-05-19: HTTP 200.",
  },
  {
    title: "Wikimedia Commons - portret Stanisława Augusta",
    href: "https://commons.wikimedia.org/wiki/File:Stanis%C5%82aw_August_Poniatowski_coronation_robes.jpg",
    text: "Strona opisowa portretu Stanisława Augusta Poniatowskiego użytego lokalnie w karcie twórców.",
    variant: "source",
    icon: "document",
    sourceType: "Portret / Wikimedia Commons",
    sourceCategory: "multimedia",
    details: [
      { label: "Lokalny plik", value: "stanislaw-august-poniatowski.jpg" },
      { label: "Co sprawdzić", value: "autor, źródło, status PD-Art" },
    ],
    license: "Public Domain Mark 1.0 / PD-Art.",
    checked: "Zweryfikowano 2026-05-19: HTTP 200.",
  },
  {
    title: "Wikimedia Commons - portret Ignacego Potockiego",
    href: "https://commons.wikimedia.org/wiki/File:Ignacy_Potocki.PNG",
    text: "Strona opisowa portretu Ignacego Potockiego użytego lokalnie w karcie twórców.",
    variant: "source",
    icon: "document",
    sourceType: "Portret / Wikimedia Commons",
    sourceCategory: "multimedia",
    details: [
      { label: "Lokalny plik", value: "ignacy-potocki.jpg" },
      { label: "Co sprawdzić", value: "autor, źródło, status PD-Art" },
    ],
    license: "Public Domain Mark 1.0 / PD-Art.",
    checked: "Zweryfikowano 2026-05-19: HTTP 200.",
  },
  {
    title: "Wikimedia Commons - portret Hugona Kołłątaja",
    href: "https://commons.wikimedia.org/wiki/File:Kollataj_hugo.jpg",
    text: "Strona opisowa portretu Hugona Kołłątaja użytego lokalnie w karcie twórców.",
    variant: "source",
    icon: "document",
    sourceType: "Portret / Wikimedia Commons",
    sourceCategory: "multimedia",
    details: [
      { label: "Lokalny plik", value: "hugo-kollataj.jpg" },
      { label: "Co sprawdzić", value: "autor, źródło, status PD-Art" },
    ],
    license: "Public Domain Mark 1.0 / PD-Art.",
    checked: "Zweryfikowano 2026-05-19: HTTP 200.",
  },
  {
    title: "Wikimedia Commons - portret Stanisława Małachowskiego",
    href: "https://commons.wikimedia.org/wiki/File:Stanislaw_malachowski.jpg",
    text: "Strona opisowa portretu Stanisława Małachowskiego użytego lokalnie w karcie twórców.",
    variant: "source",
    icon: "document",
    sourceType: "Portret / Wikimedia Commons",
    sourceCategory: "multimedia",
    details: [
      { label: "Lokalny plik", value: "stanislaw-malachowski.jpg" },
      { label: "Co sprawdzić", value: "autor, źródło, status PD-Art" },
    ],
    license: "Public Domain Mark 1.0 / PD-Art.",
    checked: "Zweryfikowano 2026-05-19: HTTP 200.",
  },
  {
    title: "Wikimedia Commons - Herb Rzeczypospolitej Obojga Narodów",
    href: "https://commons.wikimedia.org/wiki/File:Herb_Rzeczypospolitej_Obojga_Narodow.svg",
    text: "Plik SVG użyty jako znak w headerze, faviconie i grafice społecznościowej serwisu.",
    variant: "source",
    icon: "document",
    sourceType: "Herb / Wikimedia Commons",
    sourceCategory: "multimedia",
    details: [
      {
        label: "Dla kogo",
        value: "osoby sprawdzające pochodzenie logo i favikony",
      },
      {
        label: "Co znajdziesz",
        value: "oryginalny plik SVG, autora, historię pliku i licencje",
      },
    ],
    license:
      "Autor: Olek Remesz / Orem. Licencja: CC BY-SA 3.0 oraz zgodne warianty wskazane na stronie pliku; plik oparty na wcześniejszym obrazie GFDL.",
    checked: "Zweryfikowano 2026-05-19 przez Wikimedia Commons API.",
  },
];

export const sourceTextLinks = sourceLinks.filter(
  (source) => source.sourceCategory === "tekst",
);
export const sourceArchiveLinks = sourceLinks.filter(
  (source) => source.sourceCategory === "archiwalia",
);
export const sourceEducationLinks = sourceLinks.filter(
  (source) => source.sourceCategory === "edukacja",
);
export const sourceStudyLinks = sourceLinks.filter(
  (source) => source.sourceCategory === "opracowanie",
);
export const sourceMediaLinks = sourceLinks.filter(
  (source) => source.sourceCategory === "multimedia",
);

export const constitutionExcerpts: SourceExcerpt[] = [
  {
    id: "preambula",
    label: "Preambuła",
    title: "Po co uchwalono konstytucję?",
    excerpt:
      "dla dobra powszechnego, dla ugruntowania wolności, dla ocalenia ojczyzny naszej",
    explanation:
      "Ten fragment pokazuje, że autorzy przedstawiali konstytucję jako odpowiedź na zagrożenie państwa. Mówili o dobru wspólnym, wolności i ocaleniu ojczyzny, czyli o celach większych niż interes jednej grupy.",
    explanationLevels: {
      younger:
        "Autorzy mówią: robimy tę konstytucję, bo chcemy ratować państwo i myślimy o wspólnym dobru.",
      older:
        "Preambuła buduje uzasadnienie reformy: konstytucja ma być aktem odpowiedzialności politycznej wobec kryzysu Rzeczypospolitej.",
    },
    difficultWords: [
      { term: "preambuła", definition: "uroczysty wstęp do dokumentu" },
      {
        term: "dobro powszechne",
        definition: "dobro całej wspólnoty, nie tylko jednej grupy",
      },
    ],
    question: "Jakie trzy cele konstytucji widać w tym fragmencie?",
    effect:
      "Konstytucja od początku była przedstawiana jako plan ratunkowy dla państwa.",
  },
  {
    id: "religia",
    label: "Artykuł I",
    title: "Religia panująca i wolność wyznań",
    excerpt:
      "Religią narodową panującą jest i będzie wiara święta rzymska katolicka",
    explanation:
      "Konstytucja utrzymywała katolicyzm jako religię panującą. Jednocześnie gwarantowała pokój religijny i wolność innych wyznań zgodnie z ustawami kraju. To pokazuje połączenie tradycji epoki z próbą porządkowania państwa.",
    explanationLevels: {
      younger:
        "Katolicyzm nadal był najważniejszą religią w państwie, ale inne wyznania miały mieć zapewniony spokój.",
      older:
        "Artykuł I łączy uprzywilejowanie katolicyzmu z zasadą tolerancji religijnej, co pokazuje kompromis między tradycją a porządkiem prawnym.",
    },
    difficultWords: [
      {
        term: "religia panująca",
        definition: "religia mająca uprzywilejowaną pozycję w państwie",
      },
      { term: "obrządek", definition: "sposób praktykowania religii" },
    ],
    question: "Czy artykuł I oznaczał pełną równość wyznań?",
    effect:
      "Utrzymano szczególną pozycję katolicyzmu, ale zapisano też zasadę pokoju religijnego.",
  },
  {
    id: "miasta",
    label: "Artykuł III",
    title: "Miasta i mieszczanie",
    excerpt: "Miasta nasze królewskie wolne w państwach Rzeczypospolitej",
    explanation:
      "Artykuł o miastach włączał do konstytucji wcześniejsze prawo o miastach. Dzięki temu mieszczanie zyskiwali szersze prawa cywilne, możliwość nabywania ziemi i ograniczony wpływ na życie publiczne.",
    explanationLevels: {
      younger:
        "Mieszczanie dostali więcej praw niż wcześniej, choć nadal nie byli całkiem równi szlachcie.",
      older:
        "Włączenie prawa o miastach do konstytucji wzmacniało mieszczaństwo i poszerzało podstawę społeczną reformy bez zniesienia stanowego porządku.",
    },
    difficultWords: [
      { term: "mieszczanie", definition: "mieszkańcy miast" },
      {
        term: "prawa cywilne",
        definition:
          "uprawnienia dotyczące życia prywatnego, majątku i bezpieczeństwa prawnego",
      },
    ],
    question: "Dlaczego włączenie prawa o miastach do konstytucji było ważne?",
    effect:
      "Pozycja mieszczan została wzmocniona, choć nie oznaczało to jeszcze pełnej równości politycznej.",
  },
  {
    id: "chlopi",
    label: "Artykuł IV",
    title: "Chłopi pod opieką prawa",
    excerpt:
      "lud rolniczy [...] pod opiekę prawa i rządu krajowego przyjmujemy",
    explanation:
      "To jeden z najczęściej komentowanych fragmentów konstytucji. Chłopi zostali uznani za bardzo ważną część narodu i objęci opieką państwa. Nie znosiło to jednak pańszczyzny ani całego systemu zależności.",
    explanationLevels: {
      younger:
        "Konstytucja zauważyła chłopów i obiecała im opiekę prawa, ale nie zniosła jeszcze pańszczyzny.",
      older:
        "Artykuł IV był symbolicznym przesunięciem: chłopi zostali wpisani w porządek państwowy, choć bez pełnego rozwiązania zależności feudalnych.",
    },
    difficultWords: [
      {
        term: "lud rolniczy",
        definition: "chłopi, czyli najliczniejsza grupa pracująca na roli",
      },
      {
        term: "pańszczyzna",
        definition: "obowiązkowa praca chłopów na rzecz właściciela ziemi",
      },
    ],
    question:
      "Co konstytucja zmieniała w sprawie chłopów, a czego jeszcze nie rozwiązywała?",
    effect:
      "Państwo zaczęło patrzeć na chłopów jako na grupę wymagającą ochrony prawnej.",
  },
  {
    id: "rzad",
    label: "Artykuł V",
    title: "Trójpodział władzy",
    excerpt: "trzy władze rząd narodu polskiego składać powinny",
    explanation:
      "Artykuł V porządkował sposób działania państwa przez podział na władzę ustawodawczą, wykonawczą i sądowniczą. To jeden z najważniejszych znaków nowoczesności konstytucji.",
    explanationLevels: {
      younger:
        "Państwo miało mieć trzy części władzy: jedna tworzy prawo, druga je wykonuje, trzecia rozstrzyga spory.",
      older:
        "Trójpodział władzy miał ograniczyć chaos i samowolę instytucji, wprowadzając bardziej nowoczesną architekturę ustrojową.",
    },
    difficultWords: [
      { term: "władza ustawodawcza", definition: "władza tworząca prawo" },
      {
        term: "władza wykonawcza",
        definition: "władza wykonująca prawo i zarządzająca państwem",
      },
      {
        term: "władza sądownicza",
        definition: "władza rozstrzygająca spory i stosująca prawo",
      },
    ],
    question: "Po co państwu podział władzy na trzy części?",
    effect:
      "Konstytucja próbowała ograniczyć chaos i lepiej rozdzielić zadania instytucji państwa.",
  },
  {
    id: "sejm",
    label: "Artykuł VI",
    title: "Sejm i koniec liberum veto",
    excerpt: "wszystko i wszędzie większością głosów decydowanem być powinno",
    explanation:
      "Ten zapis oznaczał odejście od mechanizmu, który mógł paraliżować obrady sejmu. Decyzje miały zapadać większością głosów, a liberum veto zostało odrzucone jako sprzeczne z nowym porządkiem.",
    explanationLevels: {
      younger:
        "Jeden poseł nie mógł już zatrzymać całego sejmu. Decydować miała większość.",
      older:
        "Zniesienie liberum veto było warunkiem sprawniejszego państwa, bo zmieniało sejm z instytucji podatnej na paraliż w organ zdolny do decyzji.",
    },
    difficultWords: [
      {
        term: "większość głosów",
        definition:
          "zasada, w której wygrywa decyzja poparta przez większą liczbę głosujących",
      },
      {
        term: "liberum veto",
        definition: "prawo jednego posła do zerwania obrad sejmu",
      },
    ],
    question:
      "Dlaczego zniesienie liberum veto było tak ważne dla sprawności państwa?",
    effect:
      "Sejm miał działać skuteczniej i nie być blokowany przez jedną osobę.",
  },
  {
    id: "krol",
    label: "Artykuł VII",
    title: "Król i Straż Praw",
    excerpt:
      "Żaden rząd najdoskonalszy bez dzielnej władzy wykonawczej stać nie może",
    explanation:
      "Autorzy konstytucji podkreślali, że dobre prawo nie wystarczy, jeśli nie ma sprawnej władzy wykonawczej. Król miał działać w radzie zwanej Strażą Praw, a ministrowie ponosili odpowiedzialność polityczną.",
    explanationLevels: {
      younger:
        "Król nie miał rządzić sam. Miał działać ze Strażą Praw i wykonywać uchwalone prawo.",
      older:
        "Artykuł VII wzmacniał władzę wykonawczą, ale w ramach monarchii konstytucyjnej, z odpowiedzialnością ministrów i ograniczeniem samowoli.",
    },
    difficultWords: [
      {
        term: "władza wykonawcza",
        definition: "część władzy odpowiedzialna za wykonywanie prawa",
      },
      {
        term: "Straż Praw",
        definition: "rada przy królu, organ władzy wykonawczej",
      },
    ],
    question: "Czy w tym systemie król miał być władcą absolutnym?",
    effect:
      "Wzmocniono wykonanie prawa, ale wpisano króla w system konstytucyjny.",
  },
  {
    id: "rewizja",
    label: "Artykuł VI",
    title: "Rewizja konstytucji co 25 lat",
    excerpt: "rewizja i poprawa konstytucji co lat dwadzieścia pięć",
    explanation:
      "To mniej znany, ale bardzo ciekawy zapis. Twórcy konstytucji zakładali, że prawo można po latach sprawdzić, poprawić i dostosować do doświadczeń państwa.",
    explanationLevels: {
      younger:
        "Autorzy wiedzieli, że prawo może wymagać poprawy, więc zaplanowali sprawdzanie konstytucji co 25 lat.",
      older:
        "Zapis o rewizji pokazuje konstytucję jako projekt dynamiczny: prawo zasadnicze miało być oceniane i korygowane na podstawie doświadczenia.",
    },
    difficultWords: [
      { term: "rewizja", definition: "ponowne sprawdzenie i ocena czegoś" },
      {
        term: "poprawa konstytucji",
        definition: "zmiana konstytucji po ocenie jej działania",
      },
    ],
    question:
      "Dlaczego możliwość poprawy konstytucji była nowoczesnym pomysłem?",
    effect:
      "Konstytucja była traktowana jako żywy projekt państwa, nie jako nienaruszalny zabytek.",
  },
];

export const pageSourceExcerpts: Record<string, string[]> = {
  historia: ["sejm", "preambula"],
  "czym-byla-konstytucja-3-maja": ["preambula", "rzad"],
  "postanowienia-konstytucji-3-maja": ["sejm", "chlopi"],
  "liberum-veto": ["sejm"],
  "trojpodzial-wladzy": ["rzad"],
  mieszczanie: ["miasta"],
  chlopi: ["chlopi"],
  "tworcy-konstytucji-3-maja": ["preambula"],
  "znaczenie-konstytucji-3-maja": ["rewizja", "preambula"],
  "losy-konstytucji-3-maja": ["rewizja"],
  "mity-i-fakty": ["chlopi", "sejm"],
  "przed-i-po": ["sejm", "rzad"],
  "jak-odpowiedziec-na-sprawdzianie": ["preambula", "sejm"],
};

const officialPrintScanPages = {
  page357: "https://agad.gov.pl/230K3M/images/1_13_0_0_25_0360_357.jpg",
  page357v: "https://agad.gov.pl/230K3M/images/1_13_0_0_25_0361_357v.jpg",
  page358: "https://agad.gov.pl/230K3M/images/1_13_0_0_25_0361_358.jpg",
  page358v359:
    "https://agad.gov.pl/230K3M/images/1_13_0_0_25_0362_358v_359.jpg",
  page359v: "https://agad.gov.pl/230K3M/images/1_13_0_0_25_0363_359v.jpg",
  page360: "https://agad.gov.pl/230K3M/images/1_13_0_0_25_0363_360.jpg",
  page360v: "https://agad.gov.pl/230K3M/images/1_13_0_0_25_0364_360v.jpg",
};
const officialPrintScanLabel = "Zobacz skan urzędowego druku w AGAD";

export const sidebarQuestionSets: Record<string, string[]> = {
  historia: [
    "Dlaczego po I rozbiorze reformy stały się pilne?",
    "Który problem był najgroźniejszy dla państwa: słaba władza, liberum veto czy presja sąsiadów?",
    "Dlaczego twórcy konstytucji działali tak szybko?",
  ],
  "czym-byla-konstytucja-3-maja": [
    "Czym różni się zwykła ustawa od ustawy zasadniczej?",
    "Dlaczego źródłowa nazwa dokumentu to Ustawa Rządowa?",
    "Po co konstytucja zaczyna się uroczystą preambułą?",
  ],
  "tworcy-konstytucji-3-maja": [
    "Czy konstytucję stworzył jeden autor, czy zespół?",
    "Dlaczego król i posłowie reformatorzy musieli działać razem?",
    "Która rola była ważniejsza: pisanie projektu czy przeprowadzenie go przez sejm?",
  ],
  "postanowienia-konstytucji-3-maja": [
    "Która zmiana była ważniejsza: zniesienie liberum veto czy prawa dla mieszczan?",
    "Jak trójpodział władzy miał ograniczyć chaos w państwie?",
    "Dlaczego opieka prawa nad chłopami była ważna, choć nie znosiła pańszczyzny?",
  ],
  "liberum-veto": [
    "Dlaczego jedno weto mogło blokować całe państwo?",
    "Czym różni się jednomyślność od prawa do zerwania obrad?",
    "Dlaczego większość głosów była dla reformatorów tak ważna?",
  ],
  "trojpodzial-wladzy": [
    "Która władza tworzyła prawo, a która miała je wykonywać?",
    "Dlaczego król nie miał być władcą absolutnym?",
    "Po co oddzielać sądy od innych części władzy?",
  ],
  mieszczanie: [
    "Jakie prawa zyskali mieszczanie dzięki prawu o miastach?",
    "Dlaczego miasta były ważne dla nowoczesnego państwa?",
    "Gdzie kończyła się reforma praw mieszczan?",
  ],
  chlopi: [
    "Co oznaczała opieka prawa i rządu krajowego?",
    "Dlaczego konstytucja nie zniosła pańszczyzny?",
    "Jak mówić o chłopach bez uproszczenia?",
  ],
  "znaczenie-konstytucji-3-maja": [
    "Jak dokument prawny może zmienić się w symbol narodowy?",
    "Czy przegrana reforma może nadal być sukcesem historycznym?",
    "Dlaczego pamięć o konstytucji przetrwała dłużej niż sama konstytucja?",
  ],
  "losy-konstytucji-3-maja": [
    "Dlaczego oryginały konstytucji są dziś tak cenne?",
    "Jak Targowica zmieniła los reform?",
    "Dlaczego dokument obowiązywał krótko, ale jest tak ważny?",
  ],
  materialy: [
    "Po co historykowi skan rękopisu, skoro ma podręcznik?",
    "Które źródło najlepiej nadaje się do pracy w klasie?",
    "Jak odróżnić źródło od opracowania?",
  ],
  quiz: [
    "Które pytanie z quizu było najtrudniejsze i dlaczego?",
    "Które pojęcie trzeba powtórzyć przed kolejną próbą?",
    "Czy lepiej pamiętasz daty, czy rozumiesz przyczyny reform?",
  ],
  "quiz/pytania": [
    "Który typ pytania był najtrudniejszy w losowym zestawie?",
    "Czy błąd wynikał z daty, pojęcia czy interpretacji?",
    "Który temat warto powtórzyć przed kolejnym podejściem?",
  ],
  "quiz/wybor-odpowiedzi": [
    "Która odpowiedź wymagała najdokładniejszego czytania?",
    "Czy pytanie sprawdzało fakt, skutek czy pojęcie?",
    "Który temat wrócił najczęściej w wyjaśnieniach?",
  ],
  "quiz/prawda-czy-falsz": [
    "Które zdanie było najbardziej mylące?",
    "Czy pomyłka dotyczyła pańszczyzny, Targowicy czy monarchii?",
    "Które uproszczenie warto zapamiętać jako fałszywe?",
  ],
  "quiz/dopasowanie-pojec": [
    "Które pojęcie najłatwiej pomylić z innym?",
    "Czy lepiej pamiętasz definicje, czy przykłady użycia?",
    "Który termin warto sprawdzić w słowniku?",
  ],
  "quiz/chronologia": [
    "Dlaczego I rozbiór jest dobrym początkiem tej osi?",
    "Gdzie w ciągu wydarzeń umieścić Sejm Wielki?",
    "Co pokazuje przejście od konstytucji do wojny i rozbiorów?",
  ],
};

export const sidebarContextLinks: Record<string, Card[]> = {
  historia: [
    {
      title: "Liberum veto",
      text: "Zobacz pojęcie, które tłumaczy paraliż sejmu.",
      href: "/slownik?haslo=Liberum%20veto",
    },
    {
      title: "Tekst konstytucji",
      text: "Przejdź do preambuły i artykułów z komentarzem.",
      href: "/tekst-konstytucji",
    },
  ],
  "czym-byla-konstytucja-3-maja": [
    {
      title: "Tekst konstytucji",
      text: "Zobacz, jak dokument jest zbudowany w źródle.",
      href: "/tekst-konstytucji",
    },
  ],
  "postanowienia-konstytucji-3-maja": [
    {
      title: "Trójpodział władzy",
      text: "Powtórz zasadę stojącą za nowym ustrojem.",
      href: "/slownik?haslo=Tr%C3%B3jpodzia%C5%82%20w%C5%82adzy",
    },
    {
      title: "Tekst konstytucji",
      text: "Porównaj postanowienia z artykułami I-XI.",
      href: "/tekst-konstytucji",
    },
  ],
  "losy-konstytucji-3-maja": [
    {
      title: "Targowica",
      text: "Wyjaśnij, kto i dlaczego wystąpił przeciw reformom.",
      href: "/slownik?haslo=Targowica",
    },
  ],
  materialy: [
    {
      title: "Źródła",
      text: "Przejdź do zweryfikowanych linków i archiwaliów.",
      href: "/zrodla",
    },
  ],
  quiz: [
    {
      title: "Pytania interaktywne",
      text: "Rozwiąż główny zestaw pytań z wyjaśnieniami.",
      href: "/quiz/pytania",
    },
    {
      title: "Chronologia",
      text: "Ułóż wydarzenia w kolejności i sprawdź ciąg przyczyn.",
      href: "/quiz/chronologia",
    },
  ],
  "quiz/pytania": [
    {
      title: "Wybór odpowiedzi",
      text: "Przećwicz tylko pytania z jedną poprawną odpowiedzią.",
      href: "/quiz/wybor-odpowiedzi",
    },
    {
      title: "Dopasowanie pojęć",
      text: "Powtórz słownik w formie dopasowań.",
      href: "/quiz/dopasowanie-pojec",
    },
  ],
  "quiz/wybor-odpowiedzi": [
    {
      title: "Prawda czy fałsz",
      text: "Przejdź do krótkich stwierdzeń i uproszczeń.",
      href: "/quiz/prawda-czy-falsz",
    },
  ],
  "quiz/prawda-czy-falsz": [
    {
      title: "Dopasowanie pojęć",
      text: "Utrwal trudniejsze terminy w słowniku quizowym.",
      href: "/quiz/dopasowanie-pojec",
    },
  ],
  "quiz/dopasowanie-pojec": [
    {
      title: "Quiz mieszany",
      text: "Wróć do losowego zestawu z całej bazy pytań.",
      href: "/quiz/pytania",
    },
  ],
  "quiz/chronologia": [
    {
      title: "Pytania interaktywne",
      text: "Sprawdź fakty, pojęcia i interpretację reform.",
      href: "/quiz/pytania",
    },
  ],
};

export const constitutionArticles: ConstitutionArticle[] = [
  {
    id: "preambula",
    label: "Preambuła",
    title: "Po co uchwalono Ustawę Rządową?",
    excerpt:
      "dla dobra powszechnego, dla ugruntowania wolności, dla ocalenia ojczyzny naszej",
    summary:
      "Uroczysty wstęp wyjaśniał, że konstytucja ma służyć dobru wspólnemu, wolności i ratowaniu państwa. Autorzy przedstawiali ją jako odpowiedzialną odpowiedź na kryzys Rzeczypospolitej.",
    keyPoint: "Konstytucja była opisana jako plan naprawy i ocalenia państwa.",
    question: "Jakie cele reform widać już w samym wstępie dokumentu?",
    sourceHref:
      "https://pl.wikisource.org/wiki/Ustawa_rz%C4%85dowa_czyli_Konstytucya_3_maja_1791",
    scanHref: officialPrintScanPages.page357,
    scanLabel: officialPrintScanLabel,
  },
  {
    id: "artykul-i",
    label: "Artykuł I",
    title: "Religia panująca",
    excerpt:
      "Religią narodową panującą jest i będzie wiara święta rzymska katolicka",
    summary:
      "Artykuł utrzymywał szczególną pozycję katolicyzmu. Jednocześnie zachowywał pokój religijny i bezpieczeństwo innych wyznań w ramach prawa obowiązującego w Rzeczypospolitej.",
    keyPoint:
      "Dokument łączył tradycję religijną epoki z zasadą pokoju między wyznaniami.",
    question:
      "Czy ten artykuł oznaczał pełną równość wyznań, czy raczej tolerancję w granicach epoki?",
    sourceHref:
      "https://pl.wikisource.org/wiki/Ustawa_rz%C4%85dowa_czyli_Konstytucya_3_maja_1791",
    scanHref: officialPrintScanPages.page357,
    scanLabel: officialPrintScanLabel,
  },
  {
    id: "artykul-ii",
    label: "Artykuł II",
    title: "Szlachta ziemianie",
    excerpt:
      "Stanowi szlacheckiemu wszystkie swobody, wolności, prerogatywy pierwszeństwa",
    summary:
      "Artykuł potwierdzał prawa szlachty i jej ważną pozycję w państwie. Konstytucja nie była rewolucją znoszącą stany, lecz próbą reformy ustroju z zachowaniem części dawnego porządku.",
    keyPoint:
      "Szlachta zachowała uprzywilejowane miejsce, ale państwo miało działać sprawniej.",
    question:
      "Dlaczego reformatorzy nie znieśli od razu całego systemu stanowego?",
    sourceHref:
      "https://pl.wikisource.org/wiki/Ustawa_rz%C4%85dowa_czyli_Konstytucya_3_maja_1791",
    scanHref: officialPrintScanPages.page357v,
    scanLabel: officialPrintScanLabel,
  },
  {
    id: "artykul-iii",
    label: "Artykuł III",
    title: "Miasta i mieszczanie",
    excerpt: "Miasta nasze królewskie wolne w państwach Rzeczypospolitej",
    summary:
      "Do konstytucji włączono prawo o miastach. Mieszczanie zyskali silniejsze prawa cywilne, możliwość nabywania ziemi i ograniczony wpływ na sprawy publiczne.",
    keyPoint:
      "Pozycja mieszczan została wzmocniona, choć nie oznaczało to pełnej demokracji.",
    question:
      "Dlaczego prawa mieszczan były ważne dla nowocześniejszego państwa?",
    sourceHref:
      "https://pl.wikisource.org/wiki/Ustawa_rz%C4%85dowa_czyli_Konstytucya_3_maja_1791",
    scanHref: officialPrintScanPages.page357v,
    scanLabel: officialPrintScanLabel,
  },
  {
    id: "artykul-iv",
    label: "Artykuł IV",
    title: "Chłopi włościanie",
    excerpt:
      "lud rolniczy [...] pod opiekę prawa i rządu krajowego przyjmujemy",
    summary:
      "Artykuł uznawał chłopów za najliczniejszą część narodu i obejmował ich opieką państwa. Nie znosił jednak pańszczyzny ani zależności stanowych.",
    keyPoint:
      "To był ważny krok symboliczny i prawny, ale nie pełne uwłaszczenie chłopów.",
    question:
      "Co konstytucja zmieniała w sprawie chłopów, a czego jeszcze nie rozwiązywała?",
    sourceHref:
      "https://pl.wikisource.org/wiki/Ustawa_rz%C4%85dowa_czyli_Konstytucya_3_maja_1791",
    scanHref: officialPrintScanPages.page358,
    scanLabel: officialPrintScanLabel,
  },
  {
    id: "artykul-v",
    label: "Artykuł V",
    title: "Rząd, czyli oznaczenie władz publicznych",
    excerpt: "trzy władze rząd narodu polskiego składać powinny",
    summary:
      "Artykuł V wprowadzał zasadę trójpodziału władzy: ustawodawczej, wykonawczej i sądowniczej. To jeden z najważniejszych elementów nowoczesnego ustroju.",
    keyPoint:
      "Państwo miało działać według uporządkowanego podziału kompetencji.",
    question:
      "Po co rozdziela się władzę na ustawodawczą, wykonawczą i sądowniczą?",
    sourceHref:
      "https://pl.wikisource.org/wiki/Ustawa_rz%C4%85dowa_czyli_Konstytucya_3_maja_1791",
    scanHref: officialPrintScanPages.page358,
    scanLabel: officialPrintScanLabel,
  },
  {
    id: "artykul-vi",
    label: "Artykuł VI",
    title: "Sejm, czyli władza prawodawcza",
    excerpt: "wszystko i wszędzie większością głosów decydowanem być powinno",
    summary:
      "Artykuł opisywał sejm jako władzę prawodawczą, utrzymywał dwuizbowość i wprowadzał decyzje większością głosów. Odrzucał liberum veto, konfederacje i sejm skonfederowany.",
    keyPoint: "Sejm miał przestać być paraliżowany przez pojedynczy sprzeciw.",
    question:
      "Dlaczego zasada większości głosów była warunkiem sprawniejszego państwa?",
    sourceHref:
      "https://pl.wikisource.org/wiki/Ustawa_rz%C4%85dowa_czyli_Konstytucya_3_maja_1791",
    scanHref: officialPrintScanPages.page358v359,
    scanLabel: officialPrintScanLabel,
  },
  {
    id: "artykul-vii",
    label: "Artykuł VII",
    title: "Król, władza wykonawcza i Straż Praw",
    excerpt:
      "Żaden rząd najdoskonalszy bez dzielnej władzy wykonawczej stać nie może",
    summary:
      "Artykuł wzmacniał władzę wykonawczą, ale nie tworzył absolutyzmu. Król miał działać w radzie zwanej Strażą Praw, a ministrowie ponosili odpowiedzialność.",
    keyPoint:
      "Konstytucja wzmacniała rządzenie, lecz wpisywała króla w system konstytucyjny.",
    question:
      "Dlaczego silniejsza władza wykonawcza nie musiała oznaczać władzy absolutnej?",
    sourceHref:
      "https://pl.wikisource.org/wiki/Ustawa_rz%C4%85dowa_czyli_Konstytucya_3_maja_1791",
    scanHref: officialPrintScanPages.page359v,
    scanLabel: officialPrintScanLabel,
  },
  {
    id: "artykul-viii",
    label: "Artykuł VIII",
    title: "Władza sądownicza",
    excerpt:
      "Władza sądownicza nie może być wykonywana ani przez władzę prawodawczą, ani przez króla",
    summary:
      "Artykuł oddzielał sądy od sejmu i króla. Sprawiedliwość miała być wymierzana przez osobne instytucje, właściwe dla różnych spraw i stanów.",
    keyPoint:
      "Sądy miały być odrębną częścią państwa, a nie narzędziem króla lub sejmu.",
    question:
      "Dlaczego niezależność sądów jest ważna dla bezpieczeństwa obywateli?",
    sourceHref:
      "https://pl.wikisource.org/wiki/Ustawa_rz%C4%85dowa_czyli_Konstytucya_3_maja_1791",
    scanHref: officialPrintScanPages.page360,
    scanLabel: officialPrintScanLabel,
  },
  {
    id: "artykul-ix",
    label: "Artykuł IX",
    title: "Regencja",
    excerpt: "Straż będzie razem regencyą",
    summary:
      "Artykuł regulował sytuację, w której król nie może samodzielnie sprawować władzy, na przykład z powodu małoletniości następcy. Chodziło o ciągłość rządzenia.",
    keyPoint:
      "Państwo miało mieć procedurę działania także w sytuacji kryzysu dynastycznego.",
    question: "Po co konstytucja przewidywała zasady zastępowania króla?",
    sourceHref:
      "https://pl.wikisource.org/wiki/Ustawa_rz%C4%85dowa_czyli_Konstytucya_3_maja_1791",
    scanHref: officialPrintScanPages.page360,
    scanLabel: officialPrintScanLabel,
  },
  {
    id: "artykul-x",
    label: "Artykuł X",
    title: "Edukacja dzieci królewskich",
    excerpt:
      "synowie królewscy [...] do religii, miłości cnoty, ojczyzny, wolności i konstytucji krajowej",
    summary:
      "Artykuł dotyczył wychowania następców tronu. Dzieci królewskie miały być przygotowywane do służby państwu, konstytucji i wspólnocie politycznej.",
    keyPoint:
      "Edukacja przyszłych władców była traktowana jako sprawa publiczna.",
    question:
      "Dlaczego sposób wychowania następcy tronu miał znaczenie dla całego państwa?",
    sourceHref:
      "https://pl.wikisource.org/wiki/Ustawa_rz%C4%85dowa_czyli_Konstytucya_3_maja_1791",
    scanHref: officialPrintScanPages.page360v,
    scanLabel: officialPrintScanLabel,
  },
  {
    id: "artykul-xi",
    label: "Artykuł XI",
    title: "Siła zbrojna narodowa",
    excerpt: "Naród winien jest sobie samemu obronę od napaści",
    summary:
      "Ostatni artykuł podkreślał znaczenie wojska i obrony państwa. Reformy ustrojowe miały sens tylko wtedy, gdy Rzeczpospolita była w stanie bronić swojej niezależności.",
    keyPoint:
      "Bez realnej siły obronnej nawet najlepsze prawo mogło okazać się bezbronne.",
    question: "Dlaczego konstytucja kończyła się tematem siły zbrojnej?",
    sourceHref:
      "https://pl.wikisource.org/wiki/Ustawa_rz%C4%85dowa_czyli_Konstytucya_3_maja_1791",
    scanHref: officialPrintScanPages.page360v,
    scanLabel: officialPrintScanLabel,
  },
];
