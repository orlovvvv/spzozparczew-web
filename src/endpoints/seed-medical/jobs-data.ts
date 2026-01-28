import type { RequiredDataFromCollectionSlug } from 'payload'

type JobData = Omit<
  RequiredDataFromCollectionSlug<'jobs'>,
  'id' | 'createdAt' | 'updatedAt' | 'attachments'
>

function richText(...paragraphs: string[]) {
  return {
    root: {
      type: 'root',
      children: paragraphs.map((text) => ({
        type: 'paragraph',
        children: [
          {
            type: 'text',
            detail: 0,
            format: 0,
            mode: 'normal' as const,
            style: '',
            text,
            version: 1,
          },
        ],
        direction: 'ltr' as const,
        format: '' as const,
        indent: 0,
        textFormat: 0,
        version: 1,
      })),
      direction: 'ltr' as const,
      format: '' as const,
      indent: 0,
      version: 1,
    },
  }
}

function bulletList(...items: string[]) {
  return {
    root: {
      type: 'root',
      children: [
        {
          type: 'list',
          children: items.map((item) => ({
            type: 'listitem',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal' as const,
                style: '',
                text: item,
                version: 1,
              },
            ],
            direction: 'ltr' as const,
            format: '' as const,
            indent: 0,
            version: 1,
            value: 1,
          })),
          direction: 'ltr' as const,
          format: '' as const,
          indent: 0,
          listType: 'bullet' as const,
          start: 1,
          version: 1,
          tag: 'ul' as const,
        },
      ],
      direction: 'ltr' as const,
      format: '' as const,
      indent: 0,
      version: 1,
    },
  }
}

export const jobsData: JobData[] = [
  {
    title: 'Lekarz specjalista chorób wewnętrznych',
    slug: 'lekarz-internista',
    position: 'Lekarz specjalista chorób wewnętrznych',
    department: 'Oddział Chorób Wewnętrznych',
    location: 'Parczew',
    employmentType: 'full-time',
    salary: '12 000 – 18 000 zł brutto',
    description: richText(
      'Samodzielny Publiczny Zakład Opieki Zdrowotnej w Parczewie poszukuje lekarza specjalisty chorób wewnętrznych do pracy na Oddziale Chorób Wewnętrznych. Oddział dysponuje 40 łóżkami i prowadzi diagnostykę oraz leczenie schorzeń kardiologicznych, gastroenterologicznych, nefrologicznych i endokrynologicznych.',
      'Oferujemy stabilne zatrudnienie w przyjaznym zespole, możliwość rozwoju zawodowego, dyżury medyczne w atrakcyjnych stawkach oraz dostęp do nowoczesnego zaplecza diagnostycznego (TK, USG, EKG, Holter, ECHO serca).',
    ),
    requirements: bulletList(
      'Dyplom lekarza medycyny',
      'Tytuł specjalisty chorób wewnętrznych',
      'Prawo wykonywania zawodu na terenie RP',
      'Aktualne ubezpieczenie OC',
      'Umiejętność pracy w zespole',
    ),
    responsibilities: bulletList(
      'Opieka nad pacjentami oddziału internistycznego',
      'Diagnostyka i leczenie schorzeń internistycznych',
      'Prowadzenie dokumentacji medycznej',
      'Konsultacje dla innych oddziałów szpitala',
      'Udział w dyżurach medycznych',
    ),
    benefits: bulletList(
      'Umowa o pracę na pełen etat',
      'Konkurencyjne wynagrodzenie',
      'Dyżury medyczne w dodatkowej stawce',
      'Dofinansowanie do szkoleń i konferencji',
      'Pakiet socjalny (Karta Multisport, ubezpieczenie grupowe)',
    ),
    applicationInstructions: richText(
      'Dokumenty aplikacyjne (CV, list motywacyjny, kopie dyplomów i certyfikatów) prosimy przesyłać na adres email kadry@spzozparczew.pl lub składać osobiście w Dziale Kadr SPZOZ Parczew (budynek administracyjny, pok. 5). Prosimy o dopisanie klauzuli RODO.',
    ),
    requiredDocuments: [
      { document: 'CV z opisem przebiegu kariery zawodowej' },
      { document: 'List motywacyjny' },
      { document: 'Kopia dyplomu lekarza medycyny' },
      { document: 'Kopia dyplomu specjalizacji' },
      { document: 'Kopia prawa wykonywania zawodu' },
    ],
    contactPerson: 'Dział Kadr — Anna Borkowska',
    contactPhone: '83 355 21 05',
    contactEmail: 'kadry@spzozparczew.pl',
    status: 'active',
    deadline: '2026-03-31T00:00:00.000Z',
    meta: {
      title: 'Lekarz internista — oferta pracy | SPZOZ Parczew',
      description:
        'Oferta pracy: lekarz specjalista chorób wewnętrznych w SPZOZ Parczew. Pełen etat, atrakcyjne wynagrodzenie.',
    },
    publishedAt: '2026-01-15T08:00:00.000Z',
    _status: 'published',
  },
  {
    title: 'Pielęgniarka / Pielęgniarz — Oddział Chirurgiczny',
    slug: 'pielegniarka-chirurgia',
    position: 'Pielęgniarka / Pielęgniarz',
    department: 'Oddział Chirurgiczno-Urazowy',
    location: 'Parczew',
    employmentType: 'full-time',
    salary: '6 500 – 9 000 zł brutto',
    description: richText(
      'SPZOZ Parczew poszukuje pielęgniarki/pielęgniarza do pracy na Oddziale Chirurgiczno-Urazowym. Oddział realizuje zabiegi z zakresu chirurgii ogólnej i urazowej, dysponuje 35 łóżkami i nowoczesnym blokiem operacyjnym.',
      'Zapewniamy pracę w zgranym, interdyscyplinarnym zespole medycznym, możliwość zdobycia doświadczenia w pielęgniarstwie chirurgicznym i operacyjnym oraz regularne szkolenia wewnętrzne.',
    ),
    requirements: bulletList(
      'Dyplom pielęgniarki/pielęgniarza',
      'Prawo wykonywania zawodu pielęgniarki/pielęgniarza',
      'Aktualne ubezpieczenie OC',
      'Mile widziane doświadczenie na oddziale chirurgicznym',
      'Kurs kwalifikacyjny lub specjalizacja w dziedzinie pielęgniarstwa chirurgicznego — mile widziane',
    ),
    responsibilities: bulletList(
      'Kompleksowa opieka pielęgniarska nad pacjentami chirurgicznymi',
      'Przygotowanie pacjentów do zabiegów operacyjnych',
      'Opieka pooperacyjna i monitorowanie stanu zdrowia',
      'Podawanie leków i wykonywanie zleceń lekarskich',
      'Prowadzenie dokumentacji pielęgniarskiej',
      'Edukacja pacjentów w zakresie samoopieki po wypisie',
    ),
    benefits: bulletList(
      'Umowa o pracę',
      'Dodatek za pracę zmianową i nocną',
      'Dofinansowanie kursów kwalifikacyjnych i specjalizacji',
      'Pakiet socjalny',
      'Stołówka pracownicza z dofinansowaniem',
    ),
    applicationInstructions: richText(
      'Zainteresowane osoby prosimy o przesłanie CV i kopii dokumentów na adres kadry@spzozparczew.pl. W tytule wiadomości prosimy wpisać „Pielęgniarka — Chirurgia". Skontaktujemy się z wybranymi kandydatami.',
    ),
    requiredDocuments: [
      { document: 'CV' },
      { document: 'Kopia dyplomu pielęgniarki/pielęgniarza' },
      { document: 'Kopia prawa wykonywania zawodu' },
    ],
    contactPerson: 'Dział Kadr — Anna Borkowska',
    contactPhone: '83 355 21 05',
    contactEmail: 'kadry@spzozparczew.pl',
    status: 'active',
    deadline: '2026-02-28T00:00:00.000Z',
    meta: {
      title: 'Pielęgniarka — Oddział Chirurgiczny | SPZOZ Parczew',
      description:
        'Oferta pracy: pielęgniarka/pielęgniarz na Oddziale Chirurgiczno-Urazowym SPZOZ Parczew.',
    },
    publishedAt: '2026-01-10T08:00:00.000Z',
    _status: 'published',
  },
  {
    title: 'Fizjoterapeuta — Oddział Rehabilitacyjny',
    slug: 'fizjoterapeuta-rehabilitacja',
    position: 'Fizjoterapeuta',
    department: 'Oddział Rehabilitacyjny',
    location: 'Parczew',
    employmentType: 'full-time',
    salary: '6 000 – 8 500 zł brutto',
    description: richText(
      'SPZOZ Parczew zatrudni fizjoterapeutę do pracy na Oddziale Rehabilitacyjnym. Oddział prowadzi rehabilitację ogólnoustrojową i neurologiczną, dysponuje 25 łóżkami, salą kinezyterapii, gabinetem fizykoterapii i hydroterapii.',
      'Praca w systemie jednozmianowym (pn–pt 7:30–15:00, sob 8:00–12:00). Oferujemy możliwość rozwoju w specjalizacji rehabilitacyjnej i fizjoterapeutycznej.',
    ),
    requirements: bulletList(
      'Dyplom magistra lub licencjata fizjoterapii',
      'Prawo wykonywania zawodu fizjoterapeuty',
      'Wpis do Krajowego Rejestru Fizjoterapeutów',
      'Mile widziane doświadczenie w rehabilitacji neurologicznej',
      'Komunikatywność i empatia',
    ),
    responsibilities: bulletList(
      'Prowadzenie indywidualnych i grupowych ćwiczeń rehabilitacyjnych',
      'Wykonywanie zabiegów fizykalnych (elektroterapia, laseroterapia, ultradźwięki)',
      'Opracowywanie indywidualnych programów rehabilitacji',
      'Współpraca z lekarzem ordynatorem i zespołem terapeutycznym',
      'Dokumentowanie postępów rehabilitacji pacjentów',
    ),
    benefits: bulletList(
      'Umowa o pracę',
      'Praca jednozmianowa',
      'Dofinansowanie szkoleń i kursów specjalistycznych',
      'Pakiet socjalny',
      'Możliwość dodatkowego zatrudnienia w poradni rehabilitacyjnej',
    ),
    applicationInstructions: richText(
      'CV oraz kopie dokumentów prosimy przesyłać na adres kadry@spzozparczew.pl z dopiskiem „Fizjoterapeuta". Rozmowy kwalifikacyjne odbywają się na bieżąco.',
    ),
    requiredDocuments: [
      { document: 'CV' },
      { document: 'Kopia dyplomu fizjoterapeuty' },
      { document: 'Kopia prawa wykonywania zawodu' },
      { document: 'Potwierdzenie wpisu do KRF' },
    ],
    contactPerson: 'Dział Kadr — Anna Borkowska',
    contactPhone: '83 355 21 05',
    contactEmail: 'kadry@spzozparczew.pl',
    status: 'active',
    deadline: '2026-03-15T00:00:00.000Z',
    meta: {
      title: 'Fizjoterapeuta — oferta pracy | SPZOZ Parczew',
      description:
        'Oferta pracy: fizjoterapeuta na Oddziale Rehabilitacyjnym SPZOZ Parczew.',
    },
    publishedAt: '2026-01-08T08:00:00.000Z',
    _status: 'published',
  },
  {
    title: 'Diagnosta laboratoryjny',
    slug: 'diagnosta-laboratoryjny',
    position: 'Diagnosta laboratoryjny',
    department: 'Laboratorium Analityczne',
    location: 'Parczew',
    employmentType: 'full-time',
    salary: '7 000 – 10 000 zł brutto',
    description: richText(
      'Laboratorium Analityczne SPZOZ Parczew poszukuje diagnosty laboratoryjnego. Laboratorium wykonuje pełen zakres badań: hematologiczne, biochemiczne, koagulologiczne, serologiczne oraz badania moczu i posiewy.',
      'Praca jednozmianowa (pn–pt 7:00–14:30) z możliwością dyżurów. Oferujemy pracę na nowoczesnym sprzęcie analitycznym i przyjazną atmosferę w małym, zgranym zespole.',
    ),
    requirements: bulletList(
      'Tytuł magistra analityki medycznej / diagnostyki laboratoryjnej',
      'Prawo wykonywania zawodu diagnosty laboratoryjnego',
      'Mile widziane doświadczenie w laboratorium szpitalnym',
      'Znajomość systemów informatycznych laboratoryjnych (LIS)',
      'Dokładność i odpowiedzialność',
    ),
    responsibilities: bulletList(
      'Wykonywanie badań laboratoryjnych z zakresu hematologii, biochemii, koagulologii i serologii',
      'Walidacja i autoryzacja wyników badań',
      'Kontrola jakości badań (wewnętrzna i zewnętrzna)',
      'Obsługa aparatury analitycznej',
      'Prowadzenie dokumentacji laboratoryjnej',
    ),
    benefits: bulletList(
      'Umowa o pracę',
      'Praca jednozmianowa z możliwością dyżurów',
      'Dodatek za dyżury laboratoryjne',
      'Dofinansowanie szkoleń',
      'Pakiet socjalny',
    ),
    applicationInstructions: richText(
      'Aplikacje prosimy kierować na adres kadry@spzozparczew.pl z dopiskiem „Diagnosta laboratoryjny".',
    ),
    requiredDocuments: [
      { document: 'CV' },
      { document: 'Kopia dyplomu magistra analityki medycznej' },
      { document: 'Kopia prawa wykonywania zawodu diagnosty laboratoryjnego' },
    ],
    contactPerson: 'Dział Kadr — Anna Borkowska',
    contactPhone: '83 355 21 05',
    contactEmail: 'kadry@spzozparczew.pl',
    status: 'active',
    deadline: '2026-02-15T00:00:00.000Z',
    meta: {
      title: 'Diagnosta laboratoryjny — oferta pracy | SPZOZ Parczew',
      description:
        'Oferta pracy: diagnosta laboratoryjny w Laboratorium Analitycznym SPZOZ Parczew.',
    },
    publishedAt: '2026-01-05T08:00:00.000Z',
    _status: 'published',
  },
]
