import type { RequiredDataFromCollectionSlug } from 'payload'

type DepartmentData = Omit<
  RequiredDataFromCollectionSlug<'departments'>,
  'id' | 'createdAt' | 'updatedAt'
>

function richText(text: string) {
  return {
    root: {
      type: 'root',
      children: [
        {
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
        },
      ],
      direction: 'ltr' as const,
      format: '' as const,
      indent: 0,
      version: 1,
    },
  }
}

export const departmentsData: DepartmentData[] = [
  {
    name: 'Szpitalny Oddział Ratunkowy',
    shortDescription:
      'Pomoc w stanach nagłego zagrożenia życia — całodobowo, 7 dni w tygodniu.',
    description: richText(
      'Szpitalny Oddział Ratunkowy (SOR) zapewnia natychmiastową pomoc medyczną pacjentom w stanach zagrożenia życia i zdrowia. Oddział wyposażony jest w nowoczesny sprzęt resuscytacyjny, monitory funkcji życiowych oraz salę zabiegową. Zespół składa się z doświadczonych lekarzy medycyny ratunkowej, pielęgniarek i ratowników medycznych, gotowych do działania 24 godziny na dobę.',
    ),
    icon: 'Ambulance',
    slug: 'sor',
    isEmergency: true,
    phone: '83 355 21 20',
    email: 'sor@spzozparczew.pl',
    location: 'Budynek główny, parter — wejście od ul. Szpitalnej',
    workingHours: 'Całodobowo, 7 dni w tygodniu',
    meta: {
      title: 'Szpitalny Oddział Ratunkowy | SPZOZ Parczew',
      description:
        'SOR SPZOZ Parczew — całodobowa pomoc w stanach zagrożenia życia. Kontakt: 83 355 21 20.',
    },
    publishedAt: '2025-01-15T08:00:00.000Z',
    sortOrder: 0,
    _status: 'published',
  },
  {
    name: 'Anestezjologii i Intensywnej Terapii',
    shortDescription:
      'Całodobowa opieka nad pacjentami w stanie zagrożenia życia wymagającymi intensywnego nadzoru.',
    description: richText(
      'Oddział Anestezjologii i Intensywnej Terapii (OAiIT) sprawuje całodobową opiekę nad pacjentami w stanach bezpośredniego zagrożenia życia, wymagającymi ciągłego monitorowania funkcji życiowych, wsparcia oddechowego i krążeniowego. Oddział dysponuje 6 stanowiskami intensywnej terapii wyposażonymi w respiratory, pompy infuzyjne i kardiomonitory. Zespół anestezjologiczny zabezpiecza również zabiegi operacyjne na bloku chirurgicznym.',
    ),
    icon: 'WaveSine',
    slug: 'anestezjologia',
    isEmergency: false,
    phone: '83 355 21 30',
    email: 'oaiit@spzozparczew.pl',
    location: 'Budynek główny, I piętro',
    workingHours: 'Całodobowo, 7 dni w tygodniu',
    meta: {
      title: 'Oddział Anestezjologii i Intensywnej Terapii | SPZOZ Parczew',
      description:
        'OAiIT SPZOZ Parczew — intensywna terapia, monitorowanie funkcji życiowych, zabezpieczenie anestezjologiczne.',
    },
    publishedAt: '2025-01-15T08:00:00.000Z',
    sortOrder: 1,
    _status: 'published',
  },
  {
    name: 'Chirurgiczno-Urazowy',
    shortDescription:
      'Zabiegi operacyjne z zakresu chirurgii ogólnej, urazowej i ginekologii operacyjnej.',
    description: richText(
      'Oddział Chirurgiczno-Urazowy realizuje planowe i pilne zabiegi operacyjne z zakresu chirurgii ogólnej, chirurgii urazowo-ortopedycznej oraz ginekologii operacyjnej. Dysponuje 35 łóżkami i nowoczesnym blokiem operacyjnym z dwoma salami. Wykonywane są m.in. operacje laparoskopowe jamy brzusznej, operacje przepuklin, cholecystektomie, appendektomie, zabiegi urazowe kończyn oraz operacje ginekologiczne. Ordynatorem oddziału jest lek. med. Tomasz Kowalski, specjalista chirurgii ogólnej.',
    ),
    icon: 'Scissors',
    slug: 'chirurgia',
    isEmergency: false,
    phone: '83 355 21 40',
    email: 'chirurgia@spzozparczew.pl',
    location: 'Budynek główny, II piętro',
    workingHours:
      'Opieka całodobowa\nSekretariat: pn–pt 7:00–14:35\nOdwiedziny: codziennie 14:00–18:00',
    meta: {
      title: 'Oddział Chirurgiczno-Urazowy | SPZOZ Parczew',
      description:
        'Oddział Chirurgiczno-Urazowy SPZOZ Parczew — chirurgia ogólna, urazowa, ginekologia operacyjna. Tel. 83 355 21 40.',
    },
    publishedAt: '2025-01-15T08:00:00.000Z',
    sortOrder: 2,
    _status: 'published',
  },
  {
    name: 'Dziecięcy',
    shortDescription:
      'Kompleksowa diagnostyka i leczenie pacjentów pediatrycznych od noworodków do 18 roku życia.',
    description: richText(
      'Oddział Dziecięcy zapewnia kompleksową opiekę pediatryczną dla dzieci od okresu noworodkowego do ukończenia 18 roku życia. Oddział dysponuje 20 łóżkami (w tym łóżeczka dla niemowląt) i prowadzi diagnostykę oraz leczenie chorób układu oddechowego, pokarmowego, moczowego, alergii i infekcji dziecięcych. Zapewniamy możliwość pobytu rodzica z dzieckiem. Ordynatorem oddziału jest dr n. med. Anna Wiśniewska, specjalista pediatrii i neonatologii.',
    ),
    icon: 'Baby',
    slug: 'dzieciecy',
    isEmergency: false,
    phone: '83 355 21 50',
    email: 'pediatria@spzozparczew.pl',
    location: 'Budynek główny, III piętro',
    workingHours:
      'Opieka całodobowa\nSekretariat: pn–pt 7:00–14:35\nOdwiedziny: codziennie 14:00–18:00 (rodzice bez ograniczeń)',
    meta: {
      title: 'Oddział Dziecięcy | SPZOZ Parczew',
      description:
        'Oddział Dziecięcy SPZOZ Parczew — pediatria, diagnostyka i leczenie dzieci. Tel. 83 355 21 50.',
    },
    publishedAt: '2025-01-15T08:00:00.000Z',
    sortOrder: 3,
    _status: 'published',
  },
  {
    name: 'Dzienny Terapii Uzależnienia od Alkoholu',
    shortDescription:
      'Terapia grupowa i indywidualna uzależnień w trybie dziennym (bez hospitalizacji).',
    description: richText(
      'Oddział Dzienny Terapii Uzależnienia od Alkoholu prowadzi kompleksowy program terapeutyczny w trybie dziennym, co pozwala pacjentom na kontynuowanie funkcjonowania w środowisku domowym. Program obejmuje 8-tygodniowy cykl terapii grupowej, sesje indywidualne z terapeutą uzależnień, psychoedukację, treningi umiejętności społecznych oraz wsparcie dla rodzin osób uzależnionych. Przyjęcie odbywa się na podstawie skierowania od lekarza psychiatry lub lekarza POZ.',
    ),
    icon: 'Sun',
    slug: 'terapia-uzaleznien-dziennie',
    isEmergency: false,
    phone: '83 355 21 72',
    email: 'terapia.dzienna@spzozparczew.pl',
    location: 'Budynek B, parter',
    workingHours: 'pn–pt 8:00–15:00\nProgram dzienny: 8:30–13:30',
    meta: {
      title: 'Oddział Dzienny Terapii Uzależnień | SPZOZ Parczew',
      description:
        'Oddział Dzienny Terapii Uzależnienia od Alkoholu — program terapeutyczny bez hospitalizacji. Tel. 83 355 21 72.',
    },
    publishedAt: '2025-01-15T08:00:00.000Z',
    sortOrder: 4,
    _status: 'published',
  },
  {
    name: 'Geriatryczny',
    shortDescription:
      'Specjalistyczna opieka nad osobami w podeszłym wieku z wielochorobowością.',
    description: richText(
      'Oddział Geriatryczny jest przeznaczony dla pacjentów powyżej 60 roku życia ze złożonymi problemami zdrowotnymi i wielochorobowością. Oddział dysponuje 22 łóżkami i prowadzi całościową ocenę geriatryczną (COG), rehabilitację geriatryczną, diagnostykę zaburzeń pamięci i sprawności funkcjonalnej, optymalizację farmakoterapii oraz profilaktykę upadków. Współpracujemy z fizjoterapeutami, psychologiem i pracownikiem socjalnym. Ordynatorem jest dr n. med. Krystyna Adamska, specjalista geriatrii i chorób wewnętrznych.',
    ),
    icon: 'Users',
    slug: 'geriatria',
    isEmergency: false,
    phone: '83 355 21 60',
    email: 'geriatria@spzozparczew.pl',
    location: 'Budynek główny, parter — skrzydło wschodnie',
    workingHours:
      'Opieka całodobowa\nSekretariat: pn–pt 7:00–14:35\nOdwiedziny: codziennie 14:00–18:00',
    meta: {
      title: 'Oddział Geriatryczny | SPZOZ Parczew',
      description:
        'Oddział Geriatryczny SPZOZ Parczew — opieka nad osobami starszymi, ocena geriatryczna, rehabilitacja.',
    },
    publishedAt: '2025-01-15T08:00:00.000Z',
    sortOrder: 5,
    _status: 'published',
  },
  {
    name: 'Chorób Wewnętrznych',
    shortDescription:
      'Diagnostyka i leczenie schorzeń internistycznych — kardiologia, gastroenterologia, nefrologia.',
    description: richText(
      'Oddział Chorób Wewnętrznych (Internistyczny) jest największym oddziałem szpitala — dysponuje 40 łóżkami i prowadzi diagnostykę oraz leczenie szerokiego spektrum chorób wewnętrznych: schorzeń kardiologicznych, gastroenterologicznych, nefrologicznych, endokrynologicznych, pulmonologicznych i hematologicznych. Oddział wyposażony jest w pracownię EKG, holtera ciśnieniowego i EKG oraz stanowiska wzmożonego nadzoru kardiologicznego. Ordynatorem jest dr n. med. Marek Zieliński, specjalista chorób wewnętrznych i kardiologii.',
    ),
    icon: 'Heartbeat',
    slug: 'choroby-wewnetrzne',
    isEmergency: false,
    phone: '83 355 21 45',
    email: 'interna@spzozparczew.pl',
    location: 'Budynek główny, I piętro — skrzydło zachodnie',
    workingHours:
      'Opieka całodobowa\nSekretariat: pn–pt 7:00–14:35\nOdwiedziny: codziennie 14:00–18:00',
    meta: {
      title: 'Oddział Chorób Wewnętrznych | SPZOZ Parczew',
      description:
        'Oddział Chorób Wewnętrznych SPZOZ Parczew — diagnostyka internistyczna, kardiologia, gastroenterologia.',
    },
    publishedAt: '2025-01-15T08:00:00.000Z',
    sortOrder: 6,
    _status: 'published',
  },
  {
    name: 'Leczenia Uzależnień',
    shortDescription:
      'Stacjonarna terapia uzależnień i współuzależnienia z pełnym wsparciem psychologicznym.',
    description: richText(
      'Oddział Leczenia Uzależnień prowadzi stacjonarny, 6-tygodniowy program terapeutyczny dla osób uzależnionych od alkoholu i innych substancji psychoaktywnych. Program obejmuje detoksykację pod nadzorem medycznym, intensywną terapię grupową i indywidualną, psychoedukację, terapię rodzinną, treningi zapobiegania nawrotom oraz przygotowanie planu zdrowienia. Oddział dysponuje 18 łóżkami. Kierownikiem oddziału jest mgr Ewa Nowicka, specjalista psychoterapii uzależnień.',
    ),
    icon: 'Handshake',
    slug: 'leczenie-uzaleznien',
    isEmergency: false,
    phone: '83 355 21 70',
    email: 'uzaleznienia@spzozparczew.pl',
    location: 'Budynek B, I piętro',
    workingHours:
      'Opieka całodobowa\nSekretariat: pn–pt 7:30–15:00\nOdwiedziny: sobota–niedziela 10:00–14:00',
    meta: {
      title: 'Oddział Leczenia Uzależnień | SPZOZ Parczew',
      description:
        'Oddział Leczenia Uzależnień SPZOZ Parczew — stacjonarna terapia uzależnień, detoks, psychoterapia.',
    },
    publishedAt: '2025-01-15T08:00:00.000Z',
    sortOrder: 7,
    _status: 'published',
  },
  {
    name: 'Rehabilitacyjny',
    shortDescription:
      'Rehabilitacja ogólnoustrojowa i neurologiczna z kompleksową fizjoterapią.',
    description: richText(
      'Oddział Rehabilitacyjny prowadzi kompleksową rehabilitację ogólnoustrojową i neurologiczną w warunkach stacjonarnych. Oddział dysponuje 25 łóżkami oraz nowoczesną salą kinezyterapii, gabinetem fizykoterapii, hydroterapii i ergoterapii. Program rehabilitacji obejmuje ćwiczenia indywidualne i grupowe, masaże lecznicze, zabiegi fizykalne (elektroterapia, laseroterapia, ultradźwięki, krioterapia), hydroterapię i naukę chodu. Przyjęcie na podstawie skierowania. Ordynatorem jest dr n. med. Piotr Lewandowski, specjalista rehabilitacji medycznej.',
    ),
    icon: 'Wheelchair',
    slug: 'rehabilitacja',
    isEmergency: false,
    phone: '83 355 21 80',
    email: 'rehabilitacja@spzozparczew.pl',
    location: 'Budynek C — Pawilon Rehabilitacji',
    workingHours:
      'Opieka całodobowa\nZabiegi: pn–pt 7:30–15:00, sob 8:00–12:00\nOdwiedziny: codziennie 14:00–18:00',
    meta: {
      title: 'Oddział Rehabilitacyjny | SPZOZ Parczew',
      description:
        'Oddział Rehabilitacyjny SPZOZ Parczew — rehabilitacja ogólnoustrojowa, neurologiczna, fizjoterapia.',
    },
    publishedAt: '2025-01-15T08:00:00.000Z',
    sortOrder: 8,
    _status: 'published',
  },
  {
    name: 'Zakład Opiekuńczo-Leczniczy',
    shortDescription:
      'Długoterminowa opieka medyczna i pielęgnacyjna dla pacjentów przewlekle chorych.',
    description: richText(
      'Zakład Opiekuńczo-Leczniczy (ZOL) zapewnia całodobową opiekę medyczną, pielęgnacyjną i rehabilitacyjną pacjentom przewlekle chorym, którzy zakończyli leczenie szpitalne, ale wymagają dalszej profesjonalnej opieki. Dysponujemy 30 miejscami. Zapewniamy opiekę lekarską i pielęgniarską, rehabilitację, terapię zajęciową, opiekę psychologiczną oraz pomoc socjalną. Przyjęcie na podstawie wniosku i skierowania lekarza, po ocenie skali Barthel. Kierownikiem jest lek. med. Magdalena Krawczyk, specjalista medycyny rodzinnej.',
    ),
    icon: 'House',
    slug: 'zol',
    isEmergency: false,
    phone: '83 355 21 85',
    email: 'zol@spzozparczew.pl',
    location: 'Budynek D — Zakład Opiekuńczo-Leczniczy',
    workingHours:
      'Opieka całodobowa\nSekretariat: pn–pt 7:30–15:00\nOdwiedziny: codziennie 10:00–18:00',
    meta: {
      title: 'Zakład Opiekuńczo-Leczniczy | SPZOZ Parczew',
      description:
        'ZOL SPZOZ Parczew — długoterminowa opieka medyczna i pielęgnacyjna. Tel. 83 355 21 85.',
    },
    publishedAt: '2025-01-15T08:00:00.000Z',
    sortOrder: 9,
    _status: 'published',
  },
  {
    name: 'Hospicjum Domowe',
    shortDescription:
      'Opieka paliatywna sprawowana w warunkach domowych dla pacjentów terminalnie chorych.',
    description: richText(
      'Hospicjum Domowe zapewnia kompleksową opiekę paliatywną pacjentom z zaawansowanymi chorobami nowotworowymi i nienowotworowymi w ich miejscu zamieszkania. Zespół wielodyscyplinarny — lekarz, pielęgniarki, psycholog i kapelan — odwiedza pacjentów w domu, zapewniając leczenie bólu i objawów, wsparcie psychologiczne dla pacjenta i rodziny, pielęgnację, zaopatrzenie w sprzęt medyczny oraz pomoc w załatwianiu spraw socjalnych. Przyjęcie na podstawie skierowania lekarza. Koordynatorem jest lek. med. Barbara Kamińska, specjalista medycyny paliatywnej.',
    ),
    icon: 'Heart',
    slug: 'hospicjum',
    isEmergency: false,
    phone: '83 355 21 90',
    email: 'hospicjum@spzozparczew.pl',
    location: 'Budynek administracyjny, pok. 12 (koordynacja wizyt domowych)',
    workingHours:
      'Koordynacja: pn–pt 7:30–15:00\nDyżur telefoniczny: całodobowo pod nr 83 355 21 90',
    meta: {
      title: 'Hospicjum Domowe | SPZOZ Parczew',
      description:
        'Hospicjum Domowe SPZOZ Parczew — opieka paliatywna w domu pacjenta. Tel. 83 355 21 90.',
    },
    publishedAt: '2025-01-15T08:00:00.000Z',
    sortOrder: 10,
    _status: 'published',
  },
]
