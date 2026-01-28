import type { RequiredDataFromCollectionSlug } from 'payload'

type ProcurementData = Omit<
  RequiredDataFromCollectionSlug<'publicProcurements'>,
  'id' | 'createdAt' | 'updatedAt' | 'attachments' | 'year'
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

export const procurementsData: ProcurementData[] = [
  {
    title:
      'Dostawa odczynników laboratoryjnych i materiałów zużywalnych dla Laboratorium Analitycznego SPZOZ Parczew',
    slug: 'odczynniki-laboratoryjne-2026',
    procurementNumber: 'ZP.271.01.2026',
    procedureType: 'basic',
    publishDate: '2026-01-10T00:00:00.000Z',
    deadlineDate: '2026-02-10T10:00:00.000Z',
    openingDate: '2026-02-10T10:30:00.000Z',
    estimatedValue: 'powyżej 130 000 zł netto',
    euProject: false,
    description: richText(
      'Przedmiotem zamówienia jest sukcesywna dostawa odczynników laboratoryjnych, kalibratorów, materiałów kontrolnych i materiałów zużywalnych do aparatury analitycznej dla Laboratorium Analitycznego SPZOZ Parczew na okres 24 miesięcy.',
      'Zamówienie podzielone jest na 5 pakietów: Pakiet 1 — Odczynniki do analityki biochemicznej, Pakiet 2 — Odczynniki do hematologii, Pakiet 3 — Odczynniki do koagulologii, Pakiet 4 — Odczynniki do serologii transfuzjologicznej, Pakiet 5 — Materiały zużywalne (probówki, końcówki, kuwety).',
      'Zamawiający dopuszcza składanie ofert częściowych na poszczególne pakiety. Termin realizacji: 24 miesiące od daty podpisania umowy. Szczegółowy opis przedmiotu zamówienia zawiera Specyfikacja Warunków Zamówienia (SWZ).',
    ),
    cpvCodes: [
      { code: '33696500-0', description: 'Odczynniki laboratoryjne' },
      { code: '33793000-5', description: 'Laboratoryjne wyroby szklane' },
    ],
    contactPerson: 'Specjalista ds. zamówień publicznych — Mariusz Kaczmarek',
    contactPhone: '83 355 21 07',
    contactEmail: 'zamowienia@spzozparczew.pl',
    status: 'active',
    meta: {
      title: 'Dostawa odczynników laboratoryjnych | SPZOZ Parczew',
      description:
        'Przetarg ZP.271.01.2026 — dostawa odczynników i materiałów zużywalnych dla Laboratorium SPZOZ Parczew.',
    },
    publishedAt: '2026-01-10T08:00:00.000Z',
    _status: 'published',
  },
  {
    title:
      'Świadczenie usług w zakresie żywienia pacjentów SPZOZ Parczew',
    slug: 'uslugi-zywienia-pacjentow-2026',
    procurementNumber: 'ZP.271.02.2026',
    procedureType: 'open',
    publishDate: '2026-01-15T00:00:00.000Z',
    deadlineDate: '2026-02-20T10:00:00.000Z',
    openingDate: '2026-02-20T10:30:00.000Z',
    estimatedValue: 'powyżej 750 000 zł netto',
    euProject: false,
    description: richText(
      'Przedmiotem zamówienia jest świadczenie kompleksowych usług w zakresie całodziennego żywienia pacjentów SPZOZ Parczew, obejmujące przygotowanie i dostawę posiłków na oddziały szpitalne, ZOL oraz Hospicjum Domowe.',
      'Szacunkowa liczba posiłków: ok. 150 dziennie. Usługa obejmuje przygotowanie 3 posiłków dziennych (śniadanie, obiad, kolacja) z uwzględnieniem diet specjalistycznych (cukrzycowa, wątrobowa, niskobiałkowa, bezglutenowa, papkowata i inne wg zaleceń lekarzy).',
      'Zamawiający wymaga posiadania decyzji SANEPID, systemu HACCP oraz doświadczenia w żywieniu zbiorowym w placówkach szpitalnych. Termin realizacji: 12 miesięcy z opcją przedłużenia o kolejne 12 miesięcy.',
    ),
    cpvCodes: [
      { code: '55321000-6', description: 'Usługi przygotowywania posiłków' },
      { code: '55520000-1', description: 'Usługi dostarczania posiłków' },
    ],
    contactPerson: 'Specjalista ds. zamówień publicznych — Mariusz Kaczmarek',
    contactPhone: '83 355 21 07',
    contactEmail: 'zamowienia@spzozparczew.pl',
    status: 'active',
    meta: {
      title: 'Usługi żywienia pacjentów | SPZOZ Parczew',
      description:
        'Przetarg ZP.271.02.2026 — kompleksowe żywienie pacjentów SPZOZ Parczew.',
    },
    publishedAt: '2026-01-15T08:00:00.000Z',
    _status: 'published',
  },
  {
    title:
      'Zakup i dostawa sprzętu medycznego jednorazowego użytku dla SPZOZ Parczew',
    slug: 'sprzet-jednorazowy-2026',
    procurementNumber: 'ZP.271.03.2026',
    procedureType: 'basic',
    publishDate: '2026-01-20T00:00:00.000Z',
    deadlineDate: '2026-02-25T10:00:00.000Z',
    openingDate: '2026-02-25T10:30:00.000Z',
    estimatedValue: 'powyżej 130 000 zł netto',
    euProject: false,
    description: richText(
      'Przedmiotem zamówienia jest sukcesywna dostawa sprzętu medycznego jednorazowego użytku dla potrzeb SPZOZ Parczew na okres 12 miesięcy.',
      'Zamówienie obejmuje 8 pakietów: Pakiet 1 — Rękawice medyczne, Pakiet 2 — Strzykawki i igły, Pakiet 3 — Kaniule i zestawy do infuzji, Pakiet 4 — Materiały opatrunkowe, Pakiet 5 — Cewniki i sondy, Pakiet 6 — Sprzęt do drenażu, Pakiet 7 — Sprzęt anestezjologiczny jednorazowy, Pakiet 8 — Odzież ochronna jednorazowa.',
      'Szczegółowy asortyment z ilościami zawiera załącznik nr 2 do SWZ (formularz asortymentowo-cenowy). Dopuszczalne składanie ofert częściowych na poszczególne pakiety.',
    ),
    cpvCodes: [
      { code: '33140000-3', description: 'Materiały medyczne' },
      { code: '33141000-0', description: 'Jednorazowe, niechemiczne artykuły medyczne i hematologiczne' },
    ],
    contactPerson: 'Specjalista ds. zamówień publicznych — Mariusz Kaczmarek',
    contactPhone: '83 355 21 07',
    contactEmail: 'zamowienia@spzozparczew.pl',
    status: 'active',
    meta: {
      title: 'Sprzęt medyczny jednorazowy | SPZOZ Parczew',
      description:
        'Przetarg ZP.271.03.2026 — dostawa sprzętu medycznego jednorazowego dla SPZOZ Parczew.',
    },
    publishedAt: '2026-01-20T08:00:00.000Z',
    _status: 'published',
  },
  {
    title:
      'Dostawa produktów leczniczych dla apteki szpitalnej SPZOZ Parczew',
    slug: 'leki-apteka-szpitalna-2025',
    procurementNumber: 'ZP.271.18.2025',
    procedureType: 'open',
    publishDate: '2025-09-01T00:00:00.000Z',
    deadlineDate: '2025-10-15T10:00:00.000Z',
    openingDate: '2025-10-15T10:30:00.000Z',
    estimatedValue: 'powyżej 750 000 zł netto',
    euProject: false,
    description: richText(
      'Przedmiotem zamówienia była sukcesywna dostawa produktów leczniczych dla apteki szpitalnej SPZOZ Parczew na okres 12 miesięcy. Zamówienie obejmowało 12 pakietów obejmujących leki różnych grup terapeutycznych.',
      'Postępowanie zostało zakończone. Umowa podpisana z wybranym wykonawcą w dniu 10 listopada 2025 r. Informacja o wyborze najkorzystniejszej oferty dostępna w dokumentach postępowania.',
    ),
    cpvCodes: [
      { code: '33600000-6', description: 'Produkty farmaceutyczne' },
    ],
    contactPerson: 'Specjalista ds. zamówień publicznych — Mariusz Kaczmarek',
    contactPhone: '83 355 21 07',
    contactEmail: 'zamowienia@spzozparczew.pl',
    status: 'closed',
    meta: {
      title: 'Dostawa leków — zakończone | SPZOZ Parczew',
      description:
        'Przetarg ZP.271.18.2025 — dostawa produktów leczniczych dla apteki szpitalnej SPZOZ Parczew. Zakończone.',
    },
    publishedAt: '2025-09-01T08:00:00.000Z',
    _status: 'published',
  },
  {
    title:
      'Modernizacja systemu klimatyzacji w budynku głównym SPZOZ Parczew',
    slug: 'modernizacja-klimatyzacji-2025',
    procurementNumber: 'ZP.271.15.2025',
    procedureType: 'basic',
    publishDate: '2025-07-15T00:00:00.000Z',
    deadlineDate: '2025-08-15T10:00:00.000Z',
    openingDate: '2025-08-15T10:30:00.000Z',
    estimatedValue: 'powyżej 130 000 zł netto',
    euProject: false,
    description: richText(
      'Przedmiotem zamówienia była modernizacja systemu klimatyzacji w budynku głównym SPZOZ Parczew, obejmująca blok operacyjny, Oddział Anestezjologii i Intensywnej Terapii oraz Szpitalny Oddział Ratunkowy.',
      'Postępowanie unieważnione na podstawie art. 255 pkt 3 ustawy Pzp — cena najkorzystniejszej oferty przewyższała kwotę, jaką Zamawiający zamierzał przeznaczyć na sfinansowanie zamówienia.',
    ),
    cpvCodes: [
      { code: '45331220-4', description: 'Instalowanie urządzeń klimatyzacyjnych' },
    ],
    contactPerson: 'Specjalista ds. zamówień publicznych — Mariusz Kaczmarek',
    contactPhone: '83 355 21 07',
    contactEmail: 'zamowienia@spzozparczew.pl',
    status: 'cancelled',
    meta: {
      title: 'Klimatyzacja — unieważnione | SPZOZ Parczew',
      description:
        'Przetarg ZP.271.15.2025 — modernizacja klimatyzacji w SPZOZ Parczew. Unieważnione.',
    },
    publishedAt: '2025-07-15T08:00:00.000Z',
    _status: 'published',
  },
]
