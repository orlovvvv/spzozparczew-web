import type { RequiredDataFromCollectionSlug } from 'payload'

type PostData = Omit<
  RequiredDataFromCollectionSlug<'posts'>,
  'id' | 'createdAt' | 'updatedAt' | 'authors' | 'populatedAuthors' | 'heroImage' | 'relatedPosts'
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

export const postsData: PostData[] = [
  {
    title: 'Nowy tomograf komputerowy w Diagnostyce Obrazowej',
    slug: 'nowy-tomograf-komputerowy',
    content: richText(
      'Z przyjemnością informujemy, że Pracownia Diagnostyki Obrazowej SPZOZ Parczew została wyposażona w nowy, 64-rzędowy tomograf komputerowy. Urządzenie pozwala na wykonywanie badań z większą precyzją i krótszym czasem ekspozycji na promieniowanie.',
      'Nowy tomograf umożliwia wykonywanie zaawansowanych badań angiograficznych, kardiologicznych oraz onkologicznych. Dzięki niższej dawce promieniowania badania są bezpieczniejsze, szczególnie dla pacjentów wymagających regularnej diagnostyki.',
      'Rejestracja na badania TK odbywa się telefonicznie pod numerem 83 355 21 92 lub osobiście w Pracowni Diagnostyki Obrazowej. Badania z kontrastem wykonywane są we wtorki i czwartki — wymagane aktualne wyniki kreatyniny.',
    ),
    meta: {
      title: 'Nowy tomograf komputerowy | SPZOZ Parczew',
      description:
        'SPZOZ Parczew otrzymał nowy 64-rzędowy tomograf komputerowy. Wyższa jakość badań i niższa dawka promieniowania.',
    },
    publishedAt: '2025-12-15T09:00:00.000Z',
    _status: 'published',
  },
  {
    title: 'Bezpłatne badania profilaktyczne — Tydzień Zdrowia 2026',
    slug: 'tydzien-zdrowia-2026',
    content: richText(
      'Zapraszamy mieszkańców powiatu parczewskiego na Tydzień Zdrowia organizowany przez SPZOZ Parczew w dniach 10–14 marca 2026 roku. W ramach wydarzenia oferujemy bezpłatne badania profilaktyczne i konsultacje specjalistyczne.',
      'Program obejmuje: pomiar ciśnienia tętniczego i glikemii (pn–pt), badanie poziomu cholesterolu (wt–czw), konsultacje kardiologiczne (śr), badania densytometryczne — profilaktyka osteoporozy (pt) oraz konsultacje dietetyczne i edukację zdrowotną (pn–pt).',
      'Badania nie wymagają skierowania. Rejestracja w dniu badania od godz. 7:30 w holu głównym szpitala. Liczba miejsc ograniczona — decyduje kolejność zgłoszeń. Szczegółowy harmonogram dostępny w rejestracji i na stronie internetowej.',
    ),
    meta: {
      title: 'Tydzień Zdrowia 2026 — bezpłatne badania | SPZOZ Parczew',
      description:
        'Bezpłatne badania profilaktyczne w ramach Tygodnia Zdrowia 10–14 marca 2026 w SPZOZ Parczew.',
    },
    publishedAt: '2026-01-20T08:00:00.000Z',
    _status: 'published',
  },
  {
    title: 'Zmiana godzin odwiedzin na oddziałach szpitalnych',
    slug: 'zmiana-godzin-odwiedzin',
    content: richText(
      'Informujemy, że od 1 lutego 2026 roku obowiązują nowe godziny odwiedzin na oddziałach szpitalnych SPZOZ Parczew. Odwiedziny są możliwe codziennie w godzinach 14:00–18:00.',
      'Prosimy o przestrzeganie następujących zasad: przy pacjencie mogą przebywać jednocześnie maksymalnie 2 osoby, prosimy o dezynfekcję rąk przed wejściem na oddział, osoby z objawami infekcji proszone są o powstrzymanie się od odwiedzin, na Oddziale Dziecięcym rodzice mogą przebywać z dzieckiem bez ograniczeń czasowych.',
      'W sytuacjach wyjątkowych (pacjenci w stanie ciężkim, oddział intensywnej terapii) godziny odwiedzin ustalane są indywidualnie z ordynatorem oddziału. Dodatkowe informacje dostępne pod numerem 83 355 21 02.',
    ),
    meta: {
      title: 'Nowe godziny odwiedzin | SPZOZ Parczew',
      description:
        'Od 1 lutego 2026 nowe godziny odwiedzin w SPZOZ Parczew — codziennie 14:00–18:00.',
    },
    publishedAt: '2026-01-25T10:00:00.000Z',
    _status: 'published',
  },
  {
    title: 'Oddział Rehabilitacyjny z nową salą kinezyterapii',
    slug: 'nowa-sala-kinezyterapii',
    content: richText(
      'Oddział Rehabilitacyjny SPZOZ Parczew zakończył modernizację sali kinezyterapii. Nowe pomieszczenie zostało wyposażone w profesjonalny sprzęt do ćwiczeń rehabilitacyjnych, w tym bieżnie, cykloergometry, platformy stabilometryczne oraz zestawy do ćwiczeń z oporem.',
      'Sala jest klimatyzowana i dostosowana do potrzeb osób z niepełnosprawnościami. Zabiegi prowadzone są przez wykwalifikowanych fizjoterapeutów pod nadzorem lekarza specjalisty rehabilitacji medycznej dr. n. med. Piotra Lewandowskiego.',
      'Przyjęcie na oddział rehabilitacyjny odbywa się na podstawie skierowania od lekarza specjalisty. Czas oczekiwania wynosi obecnie ok. 4–6 tygodni. Informacje pod numerem 83 355 21 80.',
    ),
    meta: {
      title: 'Nowa sala kinezyterapii | SPZOZ Parczew',
      description:
        'Oddział Rehabilitacyjny SPZOZ Parczew z nową, w pełni wyposażoną salą kinezyterapii.',
    },
    publishedAt: '2026-01-10T12:00:00.000Z',
    _status: 'published',
  },
  {
    title: 'Wyniki badań laboratoryjnych dostępne online',
    slug: 'wyniki-badan-online',
    content: richText(
      'Informujemy, że wyniki badań laboratoryjnych wykonanych w Laboratorium Analitycznym SPZOZ Parczew są teraz dostępne online za pośrednictwem Portalu Pacjenta. Po zalogowaniu się na stronie pacjenci mogą przeglądać i pobierać wyniki swoich badań.',
      'Aby uzyskać dostęp do Portalu Pacjenta, należy jednorazowo zarejestrować się w Punkcie Pobrań (budynek główny, parter) okazując dowód osobisty. Dane do logowania zostaną wydane na miejscu. Wyniki badań są dostępne w systemie od godziny 12:00 w dniu pobrania.',
      'Portal Pacjenta jest dostępny pod adresem /laboratorium/wyniki lub bezpośrednio ze strony głównej szpitala. W przypadku pytań prosimy o kontakt z Laboratorium pod numerem 83 355 21 93.',
    ),
    meta: {
      title: 'Wyniki badań online | SPZOZ Parczew',
      description:
        'Wyniki badań laboratoryjnych SPZOZ Parczew dostępne online w Portalu Pacjenta.',
    },
    publishedAt: '2025-11-20T08:00:00.000Z',
    _status: 'published',
  },
  {
    title: 'Poradnia Kardiologiczna rozszerza ofertę diagnostyczną',
    slug: 'kardiologia-nowa-diagnostyka',
    content: richText(
      'Poradnia Kardiologiczna SPZOZ Parczew rozszerza swoją ofertę o nowe badania diagnostyczne. Od stycznia 2026 roku wykonujemy echokardiografię przezprzełykową (TEE), próby wysiłkowe na bieżni ruchomej oraz 7-dniowy monitoring Holtera EKG.',
      'Nowe badania uzupełniają dotychczasową ofertę obejmującą EKG spoczynkowe, 24-godzinny Holter EKG, Holter ciśnieniowy (ABPM) oraz standardową echokardiografię przezklatkową. Badania wykonywane są przez dr. n. med. Marka Zielińskiego, specjalistę kardiologii i chorób wewnętrznych.',
      'Rejestracja na badania kardiologiczne ze skierowaniem od lekarza POZ lub specjalisty. Kontakt: 83 355 21 44. Przyjęcia: poniedziałki, środy i czwartki.',
    ),
    meta: {
      title: 'Nowe badania kardiologiczne | SPZOZ Parczew',
      description:
        'Poradnia Kardiologiczna SPZOZ Parczew — echo przezprzełykowe, próby wysiłkowe, 7-dniowy Holter.',
    },
    publishedAt: '2026-01-05T09:30:00.000Z',
    _status: 'published',
  },
]
