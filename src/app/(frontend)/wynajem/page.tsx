import type { Metadata } from 'next'
import {
  Storefront,
  Buildings,
  MapPin,
  Ruler,
  Tag,
  FileText,
  ClipboardText,
  Phone,
  EnvelopeSimple,
  Clock,
  CaretRight,
  Handshake,
  ListNumbers,
  Eye,
} from '@phosphor-icons/react/dist/ssr'

export const metadata: Metadata = {
  title: 'Wynajem Powierzchni | SPZOZ Parczew',
  description:
    'Wynajem powierzchni użytkowych w SPZOZ Parczew — lokale biurowe, usługowe i handlowe na terenie szpitala. Warunki najmu i procedura.',
}

const availableSpaces = [
  {
    name: 'Lokal usługowy nr 1',
    location: 'Budynek główny, parter, wejście od ul. Szpitalnej',
    area: '45',
    use: 'Działalność usługowa (np. optyk, sklep medyczny)',
    rate: '25 zł/m² netto',
  },
  {
    name: 'Lokal biurowy nr 2',
    location: 'Budynek administracyjny, I piętro',
    area: '28',
    use: 'Działalność biurowa, gabinet specjalistyczny',
    rate: '30 zł/m² netto',
  },
  {
    name: 'Pomieszczenie magazynowe',
    location: 'Budynek gospodarczy, poziom -1',
    area: '60',
    use: 'Magazynowanie, archiwum',
    rate: 'Do negocjacji',
  },
  {
    name: 'Lokal handlowy nr 3',
    location: 'Budynek główny, parter, przy holu wejściowym',
    area: '35',
    use: 'Działalność handlowa (np. kiosk, kawiarnia)',
    rate: 'Do negocjacji',
  },
]

const rentalTerms = [
  {
    label: 'Okres najmu',
    value: 'Umowa na czas określony (min. 12 miesięcy) lub nieokreślony',
  },
  {
    label: 'Kaucja',
    value: 'Równowartość 2-miesięcznego czynszu, zwracana po zakończeniu najmu',
  },
  {
    label: 'Media',
    value: 'Opłaty za media (energia, woda, ogrzewanie) rozliczane wg zużycia na podstawie podliczników',
  },
  {
    label: 'Waloryzacja',
    value: 'Czynsz podlega corocznej waloryzacji o wskaźnik GUS',
  },
  {
    label: 'Przeznaczenie',
    value: 'Działalność zgodna z profilem placówki medycznej i obowiązującymi przepisami',
  },
]

const procedureSteps = [
  {
    step: 1,
    title: 'Złożenie wniosku',
    description:
      'Złóż pisemny wniosek do Dyrektora SPZOZ Parczew z określeniem interesującej powierzchni i planowanego rodzaju działalności.',
  },
  {
    step: 2,
    title: 'Wizja lokalna',
    description:
      'Po wstępnej akceptacji wniosku, umów się na oględziny lokalu z przedstawicielem Działu Administracyjno-Gospodarczego.',
  },
  {
    step: 3,
    title: 'Negocjacje warunków',
    description:
      'Ustalenie szczegółowych warunków najmu: stawka czynszu, okres umowy, zakres ewentualnych prac adaptacyjnych.',
  },
  {
    step: 4,
    title: 'Podpisanie umowy',
    description:
      'Po uzgodnieniu warunków, podpisanie umowy najmu i protokolarne przekazanie lokalu.',
  },
]

export default function WynajemPage() {
  return (
    <div className="py-8">
      {/* Page Header */}
      <section className="py-12 container">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-primary/10 text-primary rounded-xl">
              <Storefront size={24} weight="duotone" />
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
              Wynajem Powierzchni
            </h1>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            SPZOZ w Parczewie dysponuje powierzchniami użytkowymi przeznaczonymi do wynajmu. Oferujemy
            lokale biurowe, usługowe i handlowe na terenie kompleksu szpitalnego — w lokalizacji
            z naturalnym ruchem pacjentów i odwiedzających.
          </p>
        </div>
      </section>

      {/* Available Spaces */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <Buildings size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Dostępne Powierzchnie
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {availableSpaces.map((space) => (
              <div
                key={space.name}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6"
              >
                <h3 className="text-base font-semibold text-foreground mb-4">{space.name}</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <MapPin size={16} weight="bold" className="text-primary mt-0.5 shrink-0" />
                    <span>{space.location}</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Ruler size={16} weight="bold" className="text-primary mt-0.5 shrink-0" />
                    <span>
                      Powierzchnia: <strong className="text-foreground">{space.area} m²</strong>
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Storefront size={16} weight="bold" className="text-primary mt-0.5 shrink-0" />
                    <span>{space.use}</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <Tag size={16} weight="bold" className="text-primary shrink-0" />
                    <span className="text-sm font-semibold text-foreground">{space.rate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            Przedstawiona oferta ma charakter orientacyjny. Aktualna lista dostępnych lokali oraz
            stawki czynszowe mogą ulec zmianie. Prosimy o kontakt w celu potwierdzenia dostępności.
          </p>
        </div>
      </section>

      {/* Rental Terms */}
      <section className="py-16 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <Handshake size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">Warunki Najmu</h2>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
            <ul className="space-y-4">
              {rentalTerms.map((term) => (
                <li key={term.label} className="flex items-start gap-3">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1.5 shrink-0" />
                  <div>
                    <span className="text-sm font-semibold text-foreground">{term.label}</span>
                    <p className="text-sm text-muted-foreground mt-0.5">{term.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-xl p-5">
            <div className="flex items-start gap-3">
              <FileText size={20} weight="duotone" className="text-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-foreground mb-1">Ważna informacja</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Szczegółowe warunki najmu, w tym zakres odpowiedzialności stron, zasady
                  rozwiązania umowy oraz ewentualne prace adaptacyjne, są ustalane indywidualnie
                  i zawarte w umowie najmu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Procedure */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <ListNumbers size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Procedura Wynajmu
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {procedureSteps.map((item) => (
              <div
                key={item.step}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <Eye size={20} weight="duotone" className="text-primary mt-0.5 shrink-0" />
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-1">Wizja lokalna</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Zachęcamy do umówienia oględzin lokalu przed złożeniem wniosku. Wizje lokalne
                  odbywają się w dni robocze po wcześniejszym uzgodnieniu telefonicznym z Działem
                  Administracyjno-Gospodarczym.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <ClipboardText size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">Kontakt</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <h3 className="text-base font-semibold text-foreground mb-4">
                Dział Administracyjno-Gospodarczy
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Wszelkie zapytania dotyczące wynajmu powierzchni prosimy kierować do Działu
                Administracyjno-Gospodarczego SPZOZ w Parczewie.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone size={16} weight="bold" className="text-primary shrink-0" />
                  <a
                    href="tel:+48833552135"
                    className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    83&nbsp;355&nbsp;21&nbsp;35
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <EnvelopeSimple size={16} weight="bold" className="text-primary shrink-0" />
                  <a
                    href="mailto:administracja@spzozparczew.pl"
                    className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    administracja@spzozparczew.pl
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={16} weight="bold" className="text-primary shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Poniedziałek - piątek, <strong className="text-foreground">7:00 - 15:00</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <h3 className="text-base font-semibold text-foreground mb-4">Adres do korespondencji</h3>
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 mb-4">
                <p className="text-sm text-foreground font-medium leading-relaxed">
                  Samodzielny Publiczny Zakład Opieki Zdrowotnej w Parczewie
                  <br />
                  ul. Szpitalna 2
                  <br />
                  21-200 Parczew
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  z dopiskiem: &ldquo;Wynajem powierzchni&rdquo;
                </p>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Wniosek powinien zawierać: dane wnioskodawcy (imię, nazwisko / nazwa firmy, NIP),
                opis planowanej działalności oraz wskazanie interesującego lokalu.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
