import type { RequiredDataFromCollectionSlug } from 'payload'

type ClinicData = Omit<
  RequiredDataFromCollectionSlug<'clinics'>,
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

type DayOfWeek = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday'

function schedule(
  days: DayOfWeek[],
  shifts: {
    doctorName: string
    specialty?: string
    startTime: string
    endTime: string
    room?: string
    notes?: string
  }[],
) {
  return days.map((day) => ({
    dayOfWeek: day,
    shifts: shifts.map((s) => ({
      doctorName: s.doctorName,
      specialty: s.specialty ?? null,
      startTime: s.startTime,
      endTime: s.endTime,
      room: s.room ?? null,
      notes: s.notes ?? null,
    })),
  }))
}

export const clinicsData: ClinicData[] = [
  {
    name: 'Poradnia Chirurgii Ogólnej',
    shortDescription:
      'Konsultacje chirurgiczne, kwalifikacja do zabiegów, kontrole pooperacyjne.',
    description: richText(
      'Poradnia Chirurgii Ogólnej prowadzi diagnostykę i leczenie zachowawcze schorzeń chirurgicznych, kwalifikację do zabiegów planowych, kontrole pooperacyjne oraz drobne zabiegi ambulatoryjne. Przyjmujemy pacjentów ze skierowaniem od lekarza POZ lub specjalisty. Wykonujemy USG jamy brzusznej, biopsje cienkoigłowe oraz zabiegi w znieczuleniu miejscowym.',
    ),
    icon: 'Scissors',
    slug: 'chirurgia-ogolna',
    phone: '83 355 21 41',
    email: 'chirurgia.poradnia@spzozparczew.pl',
    location: 'Budynek przychodni, I piętro, gab. 101–102',
    weeklySchedule: [
      ...schedule(['monday', 'wednesday', 'friday'], [
        {
          doctorName: 'lek. med. Tomasz Kowalski',
          specialty: 'Chirurgia ogólna',
          startTime: '8:00',
          endTime: '14:00',
          room: 'Gabinet 101',
        },
      ]),
      ...schedule(['tuesday', 'thursday'], [
        {
          doctorName: 'lek. med. Jan Nowicki',
          specialty: 'Chirurgia ogólna, chirurgia onkologiczna',
          startTime: '8:00',
          endTime: '14:00',
          room: 'Gabinet 101',
        },
      ]),
    ],
    meta: {
      title: 'Poradnia Chirurgii Ogólnej | SPZOZ Parczew',
      description:
        'Poradnia Chirurgii Ogólnej SPZOZ Parczew — konsultacje, kwalifikacja do zabiegów, kontrole. Tel. 83 355 21 41.',
    },
    publishedAt: '2025-01-15T08:00:00.000Z',
    sortOrder: 1,
    _status: 'published',
  },
  {
    name: 'Poradnia Urazowo-Ortopedyczna',
    shortDescription:
      'Leczenie urazów narządu ruchu, schorzeń kości i stawów, rehabilitacja pourazowa.',
    description: richText(
      'Poradnia Urazowo-Ortopedyczna zajmuje się diagnostyką i leczeniem urazów narządu ruchu, złamań, zwichnięć, schorzeń zwyrodnieniowych stawów, zespołów bólowych kręgosłupa i chorób ortopedycznych. Wykonujemy unieruchomienia gipsowe, punkcje stawów, iniekcje dostawowe oraz kwalifikujemy do leczenia operacyjnego i rehabilitacji.',
    ),
    icon: 'Bone',
    slug: 'urazowo-ortopedyczna',
    phone: '83 355 21 42',
    email: 'ortopedia.poradnia@spzozparczew.pl',
    location: 'Budynek przychodni, I piętro, gab. 103–104',
    weeklySchedule: [
      ...schedule(['monday', 'thursday'], [
        {
          doctorName: 'lek. med. Rafał Mazur',
          specialty: 'Ortopedia i traumatologia narządu ruchu',
          startTime: '8:00',
          endTime: '14:00',
          room: 'Gabinet 103',
        },
      ]),
      ...schedule(['tuesday', 'friday'], [
        {
          doctorName: 'lek. med. Andrzej Sikora',
          specialty: 'Ortopedia i traumatologia',
          startTime: '8:00',
          endTime: '14:00',
          room: 'Gabinet 103',
        },
      ]),
      ...schedule(['wednesday'], [
        {
          doctorName: 'lek. med. Rafał Mazur',
          specialty: 'Ortopedia i traumatologia narządu ruchu',
          startTime: '8:00',
          endTime: '11:00',
          room: 'Gabinet 103',
        },
        {
          doctorName: 'lek. med. Andrzej Sikora',
          specialty: 'Ortopedia i traumatologia',
          startTime: '11:00',
          endTime: '14:00',
          room: 'Gabinet 103',
        },
      ]),
    ],
    meta: {
      title: 'Poradnia Urazowo-Ortopedyczna | SPZOZ Parczew',
      description:
        'Poradnia Urazowo-Ortopedyczna SPZOZ Parczew — urazy, złamania, schorzenia stawów. Tel. 83 355 21 42.',
    },
    publishedAt: '2025-01-15T08:00:00.000Z',
    sortOrder: 2,
    _status: 'published',
  },
  {
    name: 'Poradnia Ginekologiczno-Położnicza',
    shortDescription:
      'Zdrowie kobiet, prowadzenie ciąży, cytologia, USG ginekologiczne.',
    description: richText(
      'Poradnia Ginekologiczno-Położnicza prowadzi kompleksową opiekę nad zdrowiem kobiet: diagnostykę i leczenie schorzeń ginekologicznych, prowadzenie ciąży fizjologicznej i zagrożonej, badania cytologiczne, kolposkopię, USG ginekologiczne i położnicze, konsultacje w zakresie planowania rodziny, antykoncepcji i menopauzy. Przyjmujemy ze skierowaniem i bez skierowania.',
    ),
    icon: 'Baby',
    slug: 'ginekologia',
    phone: '83 355 21 43',
    email: 'ginekologia.poradnia@spzozparczew.pl',
    location: 'Budynek przychodni, parter, gab. 05–06',
    weeklySchedule: [
      ...schedule(['monday', 'wednesday', 'friday'], [
        {
          doctorName: 'lek. med. Agnieszka Pawlak',
          specialty: 'Ginekologia i położnictwo',
          startTime: '8:00',
          endTime: '14:00',
          room: 'Gabinet 05',
        },
      ]),
      ...schedule(['tuesday', 'thursday'], [
        {
          doctorName: 'lek. med. Katarzyna Dąbrowska',
          specialty: 'Ginekologia i położnictwo',
          startTime: '8:00',
          endTime: '14:00',
          room: 'Gabinet 05',
        },
      ]),
    ],
    meta: {
      title: 'Poradnia Ginekologiczno-Położnicza | SPZOZ Parczew',
      description:
        'Poradnia Ginekologiczno-Położnicza SPZOZ Parczew — prowadzenie ciąży, cytologia, USG. Tel. 83 355 21 43.',
    },
    publishedAt: '2025-01-15T08:00:00.000Z',
    sortOrder: 3,
    _status: 'published',
  },
  {
    name: 'Poradnia Kardiologiczna',
    shortDescription:
      'Diagnostyka i leczenie chorób serca i układu krążenia, EKG, Holter, ECHO serca.',
    description: richText(
      'Poradnia Kardiologiczna prowadzi diagnostykę i leczenie chorób serca i układu krążenia: choroby wieńcowej, nadciśnienia tętniczego, niewydolności serca, zaburzeń rytmu, wad serca i stanów po zawale. Wykonujemy EKG spoczynkowe, Holter EKG (24h), Holter ciśnieniowy (ABPM), echokardiografię (ECHO serca) oraz próby wysiłkowe. Przyjmujemy ze skierowaniem.',
    ),
    icon: 'Heartbeat',
    slug: 'kardiologia',
    phone: '83 355 21 44',
    email: 'kardiologia.poradnia@spzozparczew.pl',
    location: 'Budynek przychodni, I piętro, gab. 110–111',
    weeklySchedule: [
      ...schedule(['monday', 'wednesday'], [
        {
          doctorName: 'dr n. med. Marek Zieliński',
          specialty: 'Kardiologia, choroby wewnętrzne',
          startTime: '8:00',
          endTime: '14:00',
          room: 'Gabinet 110',
          notes: 'ECHO serca: środy 10:00–13:00',
        },
      ]),
      ...schedule(['thursday'], [
        {
          doctorName: 'lek. med. Paweł Jankowski',
          specialty: 'Kardiologia',
          startTime: '8:00',
          endTime: '14:00',
          room: 'Gabinet 110',
          notes: 'Holter EKG — zakładanie i odczyt',
        },
      ]),
    ],
    meta: {
      title: 'Poradnia Kardiologiczna | SPZOZ Parczew',
      description:
        'Poradnia Kardiologiczna SPZOZ Parczew — EKG, Holter, ECHO serca, diagnostyka chorób serca. Tel. 83 355 21 44.',
    },
    publishedAt: '2025-01-15T08:00:00.000Z',
    sortOrder: 4,
    _status: 'published',
  },
  {
    name: 'Poradnia Neurologiczna',
    shortDescription:
      'Diagnostyka i leczenie schorzeń układu nerwowego, EEG, EMG.',
    description: richText(
      'Poradnia Neurologiczna zajmuje się diagnostyką i leczeniem schorzeń ośrodkowego i obwodowego układu nerwowego: bólów głowy, padaczki, choroby Parkinsona, stwardnienia rozsianego, neuropatii, zespołów bólowych kręgosłupa, zawrotów głowy i zaburzeń pamięci. Wykonujemy badania EEG (elektroencefalografia) oraz EMG (elektromiografia). Przyjmujemy ze skierowaniem.',
    ),
    icon: 'Brain',
    slug: 'neurologia',
    phone: '83 355 21 46',
    email: 'neurologia.poradnia@spzozparczew.pl',
    location: 'Budynek przychodni, I piętro, gab. 112',
    weeklySchedule: [
      ...schedule(['tuesday', 'thursday'], [
        {
          doctorName: 'lek. med. Dorota Szymańska',
          specialty: 'Neurologia',
          startTime: '8:00',
          endTime: '14:00',
          room: 'Gabinet 112',
        },
      ]),
      ...schedule(['friday'], [
        {
          doctorName: 'lek. med. Dorota Szymańska',
          specialty: 'Neurologia',
          startTime: '8:00',
          endTime: '12:00',
          room: 'Gabinet 112',
          notes: 'EEG: piątki 12:00–14:00 (po wcześniejszym umówieniu)',
        },
      ]),
    ],
    meta: {
      title: 'Poradnia Neurologiczna | SPZOZ Parczew',
      description:
        'Poradnia Neurologiczna SPZOZ Parczew — neurologia, EEG, EMG, bóle głowy, padaczka. Tel. 83 355 21 46.',
    },
    publishedAt: '2025-01-15T08:00:00.000Z',
    sortOrder: 5,
    _status: 'published',
  },
  {
    name: 'Poradnia Okulistyczna',
    shortDescription:
      'Badanie wzroku, diagnostyka i leczenie chorób oczu, pomiar ciśnienia śródgałkowego.',
    description: richText(
      'Poradnia Okulistyczna prowadzi kompleksową diagnostykę i leczenie chorób oczu: badanie ostrości wzroku, pomiar ciśnienia śródgałkowego (tonometria), badanie dna oka, biomikroskopię, diagnostykę jaskry, zaćmy, zwyrodnienia plamki, retinopatii cukrzycowej i schorzeń rogówki. Dobieramy korekcję okularową i prowadzimy kontrole po zabiegach okulistycznych.',
    ),
    icon: 'Eye',
    slug: 'okulistyka',
    phone: '83 355 21 47',
    email: 'okulistyka.poradnia@spzozparczew.pl',
    location: 'Budynek przychodni, parter, gab. 08',
    weeklySchedule: [
      ...schedule(['monday', 'wednesday'], [
        {
          doctorName: 'lek. med. Iwona Baran',
          specialty: 'Okulistyka',
          startTime: '8:00',
          endTime: '14:00',
          room: 'Gabinet 08',
        },
      ]),
      ...schedule(['friday'], [
        {
          doctorName: 'lek. med. Iwona Baran',
          specialty: 'Okulistyka',
          startTime: '8:00',
          endTime: '12:00',
          room: 'Gabinet 08',
        },
      ]),
    ],
    meta: {
      title: 'Poradnia Okulistyczna | SPZOZ Parczew',
      description:
        'Poradnia Okulistyczna SPZOZ Parczew — badanie wzroku, jaskra, zaćma, dno oka. Tel. 83 355 21 47.',
    },
    publishedAt: '2025-01-15T08:00:00.000Z',
    sortOrder: 6,
    _status: 'published',
  },
  {
    name: 'Poradnia Otolaryngologiczna',
    shortDescription:
      'Laryngologia dorosłych i dzieci — diagnostyka i leczenie chorób ucha, nosa i gardła.',
    description: richText(
      'Poradnia Otolaryngologiczna (Laryngologiczna) prowadzi diagnostykę i leczenie chorób ucha, nosa, gardła i krtani u dorosłych i dzieci: przewlekłe zapalenia zatok, polipy nosa, niedosłuch, szum w uszach, zapalenia ucha środkowego, przerost migdałków, chrypka i dysfagia. Wykonujemy audiometrię tonalną, tympanometrię, endoskopię nosa i krtani oraz drobne zabiegi ambulatoryjne.',
    ),
    icon: 'Ear',
    slug: 'laryngologia',
    phone: '83 355 21 48',
    email: 'laryngologia.poradnia@spzozparczew.pl',
    location: 'Budynek przychodni, parter, gab. 09',
    weeklySchedule: [
      ...schedule(['tuesday', 'thursday'], [
        {
          doctorName: 'lek. med. Grzegorz Wójcik',
          specialty: 'Otolaryngologia',
          startTime: '8:00',
          endTime: '14:00',
          room: 'Gabinet 09',
        },
      ]),
    ],
    meta: {
      title: 'Poradnia Otolaryngologiczna | SPZOZ Parczew',
      description:
        'Poradnia Laryngologiczna SPZOZ Parczew — ucho, nos, gardło, audiometria. Tel. 83 355 21 48.',
    },
    publishedAt: '2025-01-15T08:00:00.000Z',
    sortOrder: 7,
    _status: 'published',
  },
  {
    name: 'Poradnia Zdrowia Psychicznego',
    shortDescription:
      'Pomoc psychiatryczna i psychologiczna — konsultacje, farmakoterapia, psychoterapia.',
    description: richText(
      'Poradnia Zdrowia Psychicznego zapewnia kompleksową opiekę psychiatryczną i psychologiczną. Leczymy depresję, zaburzenia lękowe, zaburzenia snu, zaburzenia adaptacyjne, psychozy, zaburzenia osobowości i zaburzenia odżywiania. Oferujemy konsultacje psychiatryczne, farmakoterapię, psychoterapię indywidualną i grupową oraz wsparcie psychologiczne. Przyjmujemy ze skierowaniem od lekarza POZ.',
    ),
    icon: 'Brain',
    slug: 'zdrowie-psychiczne',
    phone: '83 355 21 72',
    email: 'psychiatria.poradnia@spzozparczew.pl',
    location: 'Budynek B, parter, gab. B01–B03',
    weeklySchedule: [
      ...schedule(['monday', 'wednesday', 'friday'], [
        {
          doctorName: 'lek. med. Robert Kwiatkowski',
          specialty: 'Psychiatria',
          startTime: '8:00',
          endTime: '14:00',
          room: 'Gabinet B01',
        },
      ]),
      ...schedule(['tuesday', 'thursday'], [
        {
          doctorName: 'mgr Aleksandra Wilk',
          specialty: 'Psycholog kliniczny, psychoterapeuta CBT',
          startTime: '8:00',
          endTime: '15:00',
          room: 'Gabinet B02',
          notes: 'Psychoterapia indywidualna — wymagane wcześniejsze umówienie',
        },
      ]),
    ],
    meta: {
      title: 'Poradnia Zdrowia Psychicznego | SPZOZ Parczew',
      description:
        'Poradnia Zdrowia Psychicznego SPZOZ Parczew — psychiatra, psycholog, psychoterapia. Tel. 83 355 21 72.',
    },
    publishedAt: '2025-01-15T08:00:00.000Z',
    sortOrder: 8,
    _status: 'published',
  },
  {
    name: 'Poradnia Diabetologiczna',
    shortDescription:
      'Leczenie cukrzycy typu 1 i 2, edukacja diabetologiczna, dobór insulinoterapii.',
    description: richText(
      'Poradnia Diabetologiczna prowadzi kompleksowe leczenie pacjentów z cukrzycą typu 1 i 2, cukrzycą ciężarnych, stanem przedcukrzycowym i powikłaniami cukrzycy. Oferujemy edukację diabetologiczną (obsługa glukometru, pompy insulinowej, technika wstrzyknięć), dobór i modyfikację insulinoterapii, ocenę stopy cukrzycowej, badania HbA1c i profilaktykę powikłań. Przyjmujemy ze skierowaniem.',
    ),
    icon: 'Drop',
    slug: 'diabetologia',
    phone: '83 355 21 73',
    email: 'diabetologia.poradnia@spzozparczew.pl',
    location: 'Budynek przychodni, I piętro, gab. 115',
    weeklySchedule: [
      ...schedule(['monday', 'thursday'], [
        {
          doctorName: 'lek. med. Joanna Michalska',
          specialty: 'Diabetologia, choroby wewnętrzne',
          startTime: '8:00',
          endTime: '14:00',
          room: 'Gabinet 115',
        },
      ]),
      ...schedule(['wednesday'], [
        {
          doctorName: 'mgr piel. Beata Sokołowska',
          specialty: 'Edukator diabetologiczny',
          startTime: '8:00',
          endTime: '12:00',
          room: 'Gabinet 115',
          notes: 'Edukacja — obsługa glukometru, penów insulinowych, dieta',
        },
      ]),
    ],
    meta: {
      title: 'Poradnia Diabetologiczna | SPZOZ Parczew',
      description:
        'Poradnia Diabetologiczna SPZOZ Parczew — leczenie cukrzycy, edukacja, insulinoterapia. Tel. 83 355 21 73.',
    },
    publishedAt: '2025-01-15T08:00:00.000Z',
    sortOrder: 9,
    _status: 'published',
  },
  {
    name: 'Poradnia Gruźlicy i Chorób Płuc',
    shortDescription:
      'Pulmonologia — diagnostyka chorób układu oddechowego, spirometria, RTG klatki piersiowej.',
    description: richText(
      'Poradnia Gruźlicy i Chorób Płuc (Pulmonologiczna) zajmuje się diagnostyką i leczeniem chorób układu oddechowego: astmy oskrzelowej, POChP, przewlekłego kaszlu, sarkoidozy, śródmiąższowych chorób płuc, stanów po przebytej gruźlicy i nowotworów płuc. Wykonujemy spirometrię, testy odwracalności obturacji, RTG klatki piersiowej, próby tuberkulinowe i nadzorujemy leczenie gruźlicy. Przyjmujemy ze skierowaniem.',
    ),
    icon: 'Wind',
    slug: 'pulmonologia',
    phone: '83 355 21 74',
    email: 'pulmonologia.poradnia@spzozparczew.pl',
    location: 'Budynek przychodni, I piętro, gab. 116',
    weeklySchedule: [
      ...schedule(['tuesday', 'friday'], [
        {
          doctorName: 'lek. med. Stanisław Olszewski',
          specialty: 'Choroby płuc, choroby wewnętrzne',
          startTime: '8:00',
          endTime: '14:00',
          room: 'Gabinet 116',
          notes: 'Spirometria: wt i pt 10:00–12:00',
        },
      ]),
    ],
    meta: {
      title: 'Poradnia Gruźlicy i Chorób Płuc | SPZOZ Parczew',
      description:
        'Poradnia Pulmonologiczna SPZOZ Parczew — astma, POChP, spirometria, gruźlica. Tel. 83 355 21 74.',
    },
    publishedAt: '2025-01-15T08:00:00.000Z',
    sortOrder: 10,
    _status: 'published',
  },
  {
    name: 'Poradnia Reumatologiczna',
    shortDescription:
      'Diagnostyka i leczenie chorób reumatycznych — RZS, toczeń, dna moczanowa.',
    description: richText(
      'Poradnia Reumatologiczna prowadzi diagnostykę i leczenie chorób reumatycznych i autoimmunologicznych: reumatoidalnego zapalenia stawów (RZS), tocznia rumieniowatego układowego, zesztywniającego zapalenia stawów kręgosłupa, łuszczycowego zapalenia stawów, dny moczanowej, fibromialgii i osteoporozy. Wykonujemy USG stawów, densytometrię oraz kwalifikujemy do leczenia biologicznego.',
    ),
    icon: 'Wheelchair',
    slug: 'reumatologia',
    phone: '83 355 21 75',
    email: 'reumatologia.poradnia@spzozparczew.pl',
    location: 'Budynek przychodni, I piętro, gab. 117',
    weeklySchedule: [
      ...schedule(['wednesday'], [
        {
          doctorName: 'dr n. med. Elżbieta Kowalczyk',
          specialty: 'Reumatologia, choroby wewnętrzne',
          startTime: '8:00',
          endTime: '14:00',
          room: 'Gabinet 117',
        },
      ]),
    ],
    meta: {
      title: 'Poradnia Reumatologiczna | SPZOZ Parczew',
      description:
        'Poradnia Reumatologiczna SPZOZ Parczew — RZS, toczeń, osteoporoza, USG stawów. Tel. 83 355 21 75.',
    },
    publishedAt: '2025-01-15T08:00:00.000Z',
    sortOrder: 11,
    _status: 'published',
  },
  {
    name: 'Poradnia Medycyny Pracy',
    shortDescription:
      'Badania wstępne, okresowe i kontrolne pracowników, orzecznictwo medyczne.',
    description: richText(
      'Poradnia Medycyny Pracy wykonuje badania profilaktyczne pracowników: wstępne (przed podjęciem pracy), okresowe i kontrolne (po chorobie trwającej dłużej niż 30 dni). Wydajemy orzeczenia o zdolności do pracy na danym stanowisku, w tym dla kierowców, osób pracujących na wysokości i w narażeniu na czynniki szkodliwe. Obsługujemy pracodawców na podstawie umów. Badania odpłatne — cennik dostępny w rejestracji.',
    ),
    icon: 'Briefcase',
    slug: 'medycyna-pracy',
    phone: '83 355 21 76',
    email: 'medycynapracy.poradnia@spzozparczew.pl',
    location: 'Budynek przychodni, parter, gab. 10–11',
    weeklySchedule: [
      ...schedule(['monday', 'tuesday', 'wednesday', 'thursday', 'friday'], [
        {
          doctorName: 'lek. med. Halina Grabowska',
          specialty: 'Medycyna pracy',
          startTime: '7:30',
          endTime: '14:00',
          room: 'Gabinet 10',
          notes: 'Rejestracja od 7:00. Badania kierowców: pn i śr',
        },
      ]),
    ],
    meta: {
      title: 'Poradnia Medycyny Pracy | SPZOZ Parczew',
      description:
        'Poradnia Medycyny Pracy SPZOZ Parczew — badania pracowników, orzeczenia, kierowcy. Tel. 83 355 21 76.',
    },
    publishedAt: '2025-01-15T08:00:00.000Z',
    sortOrder: 12,
    _status: 'published',
  },
  {
    name: 'Poradnia Dermatologiczna',
    shortDescription:
      'Diagnostyka i leczenie chorób skóry, dermatoskopia, kriochirurgia.',
    description: richText(
      'Poradnia Dermatologiczna prowadzi diagnostykę i leczenie chorób skóry, włosów i paznokci: łuszczycy, trądziku, atopowego zapalenia skóry, grzybic, brodawek wirusowych, zmian barwnikowych i nowotworów skóry. Wykonujemy dermatoskopię (ocenę znamion), kriochirurgię (mrożenie ciekłym azotem), biopsję skóry i fototerapię UVB. Przyjmujemy ze skierowaniem.',
    ),
    icon: 'ScanSmiley',
    slug: 'dermatologia',
    phone: '83 355 21 77',
    email: 'dermatologia.poradnia@spzozparczew.pl',
    location: 'Budynek przychodni, parter, gab. 12',
    weeklySchedule: [
      ...schedule(['monday', 'friday'], [
        {
          doctorName: 'lek. med. Monika Pietrzak',
          specialty: 'Dermatologia i wenerologia',
          startTime: '8:00',
          endTime: '14:00',
          room: 'Gabinet 12',
          notes: 'Dermatoskopia: poniedziałki od 10:00',
        },
      ]),
    ],
    meta: {
      title: 'Poradnia Dermatologiczna | SPZOZ Parczew',
      description:
        'Poradnia Dermatologiczna SPZOZ Parczew — dermatoskopia, kriochirurgia, łuszczyca, trądzik. Tel. 83 355 21 77.',
    },
    publishedAt: '2025-01-15T08:00:00.000Z',
    sortOrder: 13,
    _status: 'published',
  },
  {
    name: 'Poradnia Terapii Uzależnień',
    shortDescription:
      'Ambulatoryjna terapia uzależnienia od alkoholu i współuzależnienia.',
    description: richText(
      'Poradnia Terapii Uzależnień prowadzi ambulatoryjną diagnostykę i leczenie uzależnienia od alkoholu, współuzależnienia i problemów związanych z piciem alkoholu. Oferujemy konsultacje psychiatryczne, psychoterapię indywidualną i grupową, program ambulatoryjny dla osób uzależnionych, terapię dla współuzależnionych członków rodzin oraz grupy wsparcia. Przyjęcie bez skierowania — rejestracja telefoniczna.',
    ),
    icon: 'Pill',
    slug: 'terapia-uzaleznien',
    phone: '83 355 21 72',
    email: 'terapia.poradnia@spzozparczew.pl',
    location: 'Budynek B, parter, gab. B05',
    weeklySchedule: [
      ...schedule(['monday', 'wednesday'], [
        {
          doctorName: 'mgr Ewa Nowicka',
          specialty: 'Specjalista psychoterapii uzależnień',
          startTime: '8:00',
          endTime: '15:00',
          room: 'Gabinet B05',
        },
      ]),
      ...schedule(['tuesday'], [
        {
          doctorName: 'mgr Ewa Nowicka',
          specialty: 'Specjalista psychoterapii uzależnień',
          startTime: '8:00',
          endTime: '12:00',
          room: 'Gabinet B05',
          notes: 'Terapia grupowa: wtorek 12:00–15:00',
        },
      ]),
      ...schedule(['thursday'], [
        {
          doctorName: 'lek. med. Robert Kwiatkowski',
          specialty: 'Psychiatria',
          startTime: '10:00',
          endTime: '14:00',
          room: 'Gabinet B05',
          notes: 'Konsultacja psychiatryczna — wymagana wcześniejsza rejestracja',
        },
      ]),
    ],
    meta: {
      title: 'Poradnia Terapii Uzależnień | SPZOZ Parczew',
      description:
        'Poradnia Terapii Uzależnień SPZOZ Parczew — terapia alkoholizmu, współuzależnienie. Tel. 83 355 21 72.',
    },
    publishedAt: '2025-01-15T08:00:00.000Z',
    sortOrder: 14,
    _status: 'published',
  },
  {
    name: 'Diagnostyka Obrazowa',
    shortDescription:
      'Pracownia RTG, USG i Tomografii Komputerowej — pełna diagnostyka obrazowa.',
    description: richText(
      'Pracownia Diagnostyki Obrazowej wykonuje szerokie spektrum badań obrazowych: rentgen (RTG) cyfrowy, ultrasonografię (USG) jamy brzusznej, tarczycy, narządów miednicy, stawów, tkanek miękkich i doppler naczyniowy, tomografię komputerową (TK) głowy, klatki piersiowej, jamy brzusznej i kręgosłupa — z kontrastem i bez kontrastu. Badania wykonywane na zlecenie lekarzy szpitala i lekarzy kierujących. Rejestracja do badań USG telefonicznie, RTG i TK — w dniu zgłoszenia lub po umówieniu terminu.',
    ),
    icon: 'Scan',
    slug: 'diagnostyka-obrazowa',
    phone: '83 355 21 92',
    email: 'diagnostyka@spzozparczew.pl',
    location: 'Budynek główny, parter — Pracownia Diagnostyki Obrazowej',
    weeklySchedule: [
      ...schedule(['monday', 'tuesday', 'wednesday', 'thursday', 'friday'], [
        {
          doctorName: 'lek. med. Krzysztof Laskowski',
          specialty: 'Radiologia i diagnostyka obrazowa',
          startTime: '7:30',
          endTime: '14:30',
          room: 'Pracownia RTG/TK',
          notes: 'TK z kontrastem: wt i czw (wymagane wyniki kreatyniny)',
        },
        {
          doctorName: 'lek. med. Maria Nowak',
          specialty: 'Radiologia, USG',
          startTime: '8:00',
          endTime: '14:00',
          room: 'Pracownia USG',
        },
      ]),
    ],
    meta: {
      title: 'Diagnostyka Obrazowa | SPZOZ Parczew',
      description:
        'Diagnostyka Obrazowa SPZOZ Parczew — RTG, USG, tomografia komputerowa. Rejestracja: 83 355 21 92.',
    },
    publishedAt: '2025-01-15T08:00:00.000Z',
    sortOrder: 15,
    _status: 'published',
  },
  {
    name: 'Laboratorium Analityczne',
    shortDescription:
      'Punkt pobrań i analityka medyczna — hematologia, biochemia, serologia, koagulologia.',
    description: richText(
      'Laboratorium Analityczne wykonuje pełen zakres badań diagnostycznych: badania hematologiczne (morfologia, OB, retikulocyty), biochemiczne (glukoza, lipidogram, enzymy wątrobowe, nerkowe, markery sercowe, CRP, HbA1c), koagulologiczne (INR, APTT, D-dimery), serologiczne (grupy krwi, próby krzyżowe, odczyn Coombsa), badanie ogólne moczu oraz posiewy. Punkt pobrań czynny bez rejestracji — wystarczy skierowanie lekarza. Wyniki badań dostępne online w Portalu Pacjenta.',
    ),
    icon: 'Flask',
    slug: 'laboratorium',
    phone: '83 355 21 93',
    email: 'laboratorium@spzozparczew.pl',
    location: 'Budynek główny, parter — wejście od strony parkingu',
    weeklySchedule: [
      ...schedule(['monday', 'tuesday', 'wednesday', 'thursday', 'friday'], [
        {
          doctorName: 'mgr Renata Jaworska',
          specialty: 'Diagnosta laboratoryjny',
          startTime: '7:00',
          endTime: '14:30',
          room: 'Punkt pobrań',
          notes: 'Pobrania: 7:00–10:00 (na czczo). Wyniki: od 12:00 lub online.',
        },
      ]),
    ],
    meta: {
      title: 'Laboratorium Analityczne | SPZOZ Parczew',
      description:
        'Laboratorium SPZOZ Parczew — punkt pobrań, morfologia, biochemia, wyniki online. Tel. 83 355 21 93.',
    },
    publishedAt: '2025-01-15T08:00:00.000Z',
    sortOrder: 16,
    _status: 'published',
  },
]
