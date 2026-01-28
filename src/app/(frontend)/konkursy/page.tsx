import type { Metadata } from 'next'
import React from 'react'
import {
  Trophy,
  CalendarBlank,
  Clock,
  DownloadSimple,
  Archive,
  Info,
  MapPin,
  Phone,
  EnvelopeSimple,
  CaretRight,
  CheckCircle,
  XCircle,
  Scales,
  FileText,
} from '@phosphor-icons/react/dist/ssr'

export const metadata: Metadata = {
  title: 'Konkursy Ofert | SPZOZ Parczew',
  description:
    'Konkursy ofert SPZOZ Parczew — aktualne postępowania konkursowe na udzielanie świadczeń zdrowotnych, archiwum rozstrzygniętych konkursów oraz informacje dla oferentów.',
}

// ------------------------------------------------------------------
// Data – hospital administration updates these arrays directly.
// Each entry represents one competition / tender.
// ------------------------------------------------------------------

type CompetitionStatus = 'open' | 'resolved'

interface Competition {
  name: string
  number: string
  submissionDeadline: string
  status: CompetitionStatus
  documentUrl: string
}

const currentCompetitions: Competition[] = [
  {
    name: 'Konkurs ofert na udzielanie świadczeń zdrowotnych w zakresie dyżurów lekarskich na Oddziale Chirurgii Ogólnej',
    number: 'K/01/2025',
    submissionDeadline: '31 marca 2025 r., godz. 10:00',
    status: 'open',
    documentUrl: '#',
  },
  {
    name: 'Konkurs ofert na udzielanie świadczeń zdrowotnych w zakresie diagnostyki laboratoryjnej',
    number: 'K/02/2025',
    submissionDeadline: '15 marca 2025 r., godz. 12:00',
    status: 'open',
    documentUrl: '#',
  },
  {
    name: 'Konkurs ofert na udzielanie świadczeń zdrowotnych w zakresie nocnej i świątecznej opieki zdrowotnej',
    number: 'K/03/2025',
    submissionDeadline: '28 lutego 2025 r., godz. 10:00',
    status: 'resolved',
    documentUrl: '#',
  },
]

const archivedCompetitions: Competition[] = [
  {
    name: 'Konkurs ofert na udzielanie świadczeń zdrowotnych w zakresie anestezjologii i intensywnej terapii',
    number: 'K/05/2024',
    submissionDeadline: '30 listopada 2024 r.',
    status: 'resolved',
    documentUrl: '#',
  },
  {
    name: 'Konkurs ofert na udzielanie świadczeń zdrowotnych w zakresie dyżurów lekarskich na SOR',
    number: 'K/03/2024',
    submissionDeadline: '15 września 2024 r.',
    status: 'resolved',
    documentUrl: '#',
  },
  {
    name: 'Konkurs ofert na udzielanie świadczeń zdrowotnych w zakresie radiologii i diagnostyki obrazowej',
    number: 'K/01/2024',
    submissionDeadline: '10 czerwca 2024 r.',
    status: 'resolved',
    documentUrl: '#',
  },
]

// ------------------------------------------------------------------
// Components
// ------------------------------------------------------------------

function StatusBadge({ status }: { status: CompetitionStatus }) {
  if (status === 'open') {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
        <CheckCircle size={14} weight="bold" />
        Otwarty
      </span>
    )
  }

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
      <XCircle size={14} weight="bold" />
      Rozstrzygnięty
    </span>
  )
}

function CompetitionCard({ competition }: { competition: Competition }) {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 flex flex-col gap-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-xs font-medium text-muted-foreground mb-1">
            {competition.number}
          </p>
          <h3 className="text-base font-semibold text-foreground leading-snug">
            {competition.name}
          </h3>
        </div>
        <StatusBadge status={competition.status} />
      </div>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <CalendarBlank size={16} weight="bold" className="text-primary shrink-0" />
          <span>
            Termin składania ofert:{' '}
            <strong className="text-foreground">{competition.submissionDeadline}</strong>
          </span>
        </span>
      </div>

      <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-3">
        <a
          href={competition.documentUrl}
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          <DownloadSimple size={16} weight="bold" />
          Pobierz dokumentację konkursową
        </a>
        {competition.status === 'resolved' && (
          <a
            href={competition.documentUrl}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <FileText size={16} weight="bold" />
            Wyniki konkursu
          </a>
        )}
      </div>
    </div>
  )
}

// ------------------------------------------------------------------
// Page
// ------------------------------------------------------------------

export default function KonkursyPage() {
  return (
    <div className="py-8">
      {/* Page Header */}
      <section className="py-12 container">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-primary/10 text-primary rounded-xl">
              <Trophy size={24} weight="duotone" />
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
              Konkursy Ofert
            </h1>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Samodzielny Publiczny Zakład Opieki Zdrowotnej w Parczewie przeprowadza konkursy ofert
            na udzielanie świadczeń zdrowotnych zgodnie z ustawą z dnia 15 kwietnia 2011 r.
            o działalności leczniczej (Dz.U. z 2024 r. poz. 799). Na tej stronie publikujemy
            ogłoszenia o aktualnych postępowaniach konkursowych oraz wyniki rozstrzygniętych
            konkursów.
          </p>
        </div>
      </section>

      {/* Legal Basis Notice */}
      <section className="pb-12 container">
        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-xl p-5 flex items-start gap-4">
          <div className="shrink-0 mt-0.5">
            <Scales size={24} weight="duotone" className="text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-1">
              Podstawa prawna
            </h2>
            <p className="text-sm text-blue-800 dark:text-blue-400 leading-relaxed">
              Konkursy ofert prowadzone są na podstawie art. 26 ustawy z dnia 15 kwietnia 2011 r.
              o działalności leczniczej oraz odpowiednich przepisów wykonawczych. Postępowania mają
              charakter jawny i transparentny.
            </p>
          </div>
        </div>
      </section>

      {/* Current Competitions */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <Clock size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Aktualne Konkursy
            </h2>
          </div>

          {currentCompetitions.length > 0 ? (
            <div className="grid grid-cols-1 gap-4">
              {currentCompetitions.map((competition) => (
                <CompetitionCard key={competition.number} competition={competition} />
              ))}
            </div>
          ) : (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-8 text-center">
              <p className="text-sm text-muted-foreground">
                Aktualnie nie ma ogłoszonych konkursów ofert. Zapraszamy do regularnego sprawdzania
                tej strony.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Archive */}
      <section className="py-16 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <Archive size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Archiwum Konkursów
            </h2>
          </div>

          <p className="text-sm text-muted-foreground mb-6 max-w-2xl">
            Poniżej prezentujemy rozstrzygnięte konkursy ofert wraz z wynikami. Dokumentacja
            archiwalna dostępna jest do wglądu w Dziale Administracji.
          </p>

          <div className="grid grid-cols-1 gap-4">
            {archivedCompetitions.map((competition) => (
              <CompetitionCard key={competition.number} competition={competition} />
            ))}
          </div>
        </div>
      </section>

      {/* Information for Bidders */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <Info size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Informacje dla Oferentów
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <h3 className="text-base font-semibold text-foreground mb-4">
                Składanie ofert
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Oferty należy składać w zamkniętych kopertach z dopiskiem nazwy konkursu
                w Sekretariacie SPZOZ Parczew do terminu wskazanego w ogłoszeniu konkursowym.
              </p>
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin size={16} weight="bold" className="text-primary mt-0.5 shrink-0" />
                  <div className="text-sm text-muted-foreground">
                    <p className="font-semibold text-foreground">Adres do składania ofert</p>
                    <p>SPZOZ Parczew, Sekretariat</p>
                    <p>ul. Kościelna 136, 21-200 Parczew</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={16} weight="bold" className="text-primary mt-0.5 shrink-0" />
                  <div className="text-sm text-muted-foreground">
                    <p className="font-semibold text-foreground">Godziny przyjmowania ofert</p>
                    <p>Poniedziałek - Piątek: 7:00 - 15:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <h3 className="text-base font-semibold text-foreground mb-4">
                Wymagania formalne
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Każda oferta powinna zawierać komplet wymaganych dokumentów zgodnie ze
                szczegółowymi warunkami konkursu. Oferty niekompletne lub złożone po terminie
                nie będą rozpatrywane.
              </p>
              <h4 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2">
                Typowe wymagania
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Formularz ofertowy (wzór w dokumentacji konkursowej)
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Kopia prawa wykonywania zawodu / wpis do rejestru
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Polisa ubezpieczenia OC
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Zaświadczenie o wpisie do CEIDG lub KRS
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Oświadczenie o zapoznaniu się z warunkami konkursu
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <Phone size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Kontakt
            </h2>
          </div>

          <div className="max-w-xl">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <h3 className="text-base font-semibold text-foreground mb-4">
                Dział Administracji
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                W sprawie konkursów ofert prosimy o kontakt z Działem Administracji SPZOZ Parczew.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone size={16} weight="bold" className="text-primary shrink-0" />
                  <div className="text-sm">
                    <span className="text-muted-foreground">Telefon: </span>
                    <a
                      href="tel:+48833552135"
                      className="font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      83&nbsp;355&nbsp;21&nbsp;35
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <EnvelopeSimple size={16} weight="bold" className="text-primary shrink-0" />
                  <div className="text-sm">
                    <span className="text-muted-foreground">E-mail: </span>
                    <a
                      href="mailto:administracja@spzozparczew.pl"
                      className="font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      administracja@spzozparczew.pl
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={16} weight="bold" className="text-primary shrink-0 mt-0.5" />
                  <div className="text-sm text-muted-foreground">
                    <p>SPZOZ Parczew</p>
                    <p>ul. Kościelna 136, 21-200 Parczew</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
