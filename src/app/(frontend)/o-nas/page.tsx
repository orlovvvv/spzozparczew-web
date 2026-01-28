import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Hospital,
  Target,
  Eye,
  Clock,
  Buildings,
  Stethoscope,
  FirstAidKit,
  Baby,
  Heartbeat,
  Wheelchair,
  Flask,
  ImageSquare,
  Brain,
  Users,
  Bed,
  ChartBar,
  ArrowRight,
} from '@phosphor-icons/react/dist/ssr'

export const metadata: Metadata = {
  title: 'O Szpitalu | SPZOZ Parczew',
  description:
    'Samodzielny Publiczny Zakład Opieki Zdrowotnej w Parczewie — misja i wizja, historia, struktura organizacyjna, kluczowe dane.',
}

const departments = [
  {
    name: 'Oddział Chirurgiczny',
    icon: FirstAidKit,
    description: 'Chirurgia ogólna i zabiegowa',
  },
  {
    name: 'Oddział Chorób Wewnętrznych',
    icon: Heartbeat,
    description: 'Interna, kardiologia, gastroenterologia',
  },
  {
    name: 'Oddział Dziecięcy',
    icon: Baby,
    description: 'Pediatria i neonatologia',
  },
  {
    name: 'Oddział Ginekologiczno-Położniczy',
    icon: Users,
    description: 'Ginekologia, położnictwo, perinatologia',
  },
  {
    name: 'Oddział Anestezjologii i Intensywnej Terapii',
    icon: Heartbeat,
    description: 'OIT, anestezjologia, resuscytacja',
  },
  {
    name: 'Oddział Rehabilitacji',
    icon: Wheelchair,
    description: 'Rehabilitacja lecznicza i pourazowa',
  },
  {
    name: 'Poradnie Specjalistyczne',
    icon: Stethoscope,
    description: 'Ambulatoryjna opieka specjalistyczna',
    href: '/poradnie',
  },
  {
    name: 'Laboratorium Diagnostyczne',
    icon: Flask,
    description: 'Diagnostyka laboratoryjna',
  },
  {
    name: 'Diagnostyka Obrazowa',
    icon: ImageSquare,
    description: 'RTG, USG, tomografia komputerowa',
  },
]

const stats = [
  { value: '180', label: 'Łóżek szpitalnych', icon: Bed },
  { value: '500+', label: 'Pracowników', icon: Users },
  { value: '9', label: 'Oddziałów i zakładów', icon: Buildings },
  { value: '25 000+', label: 'Pacjentów rocznie', icon: ChartBar },
]

export default function ONasPage() {
  return (
    <div className="py-8">
      {/* Page Header */}
      <section className="py-12 container">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-primary/10 text-primary rounded-xl">
              <Hospital size={24} weight="duotone" />
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
              O Szpitalu
            </h1>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Samodzielny Publiczny Zakład Opieki Zdrowotnej w Parczewie jest powiatowym szpitalem
            zapewniającym opiekę zdrowotną mieszkańcom powiatu parczewskiego. Placówka prowadzi
            działalność leczniczą w zakresie leczenia szpitalnego, ambulatoryjnej opieki
            specjalistycznej, rehabilitacji oraz diagnostyki medycznej.
          </p>
        </div>
      </section>

      {/* Mission & Vision — visually prominent per ZZ accreditation standard */}
      <section className="py-16 bg-primary/5 dark:bg-primary/10 border-y border-primary/10 dark:border-primary/20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white dark:bg-slate-900 border-2 border-primary/20 dark:border-primary/30 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 bg-primary/10 text-primary rounded-xl">
                  <Target size={24} weight="duotone" />
                </div>
                <h2 className="text-xl font-semibold text-foreground tracking-tight">Misja</h2>
              </div>
              <blockquote className="text-base text-foreground leading-relaxed font-medium italic border-l-4 border-primary pl-4">
                Misją SPZOZ w Parczewie jest zapewnienie mieszkańcom powiatu parczewskiego
                dostępnej, kompleksowej i bezpiecznej opieki zdrowotnej na każdym etapie leczenia
                &mdash; od diagnostyki, przez hospitalizację, po rehabilitację &mdash; z
                poszanowaniem godności i praw każdego pacjenta.
              </blockquote>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Szpital realizuje swoją misję poprzez utrzymanie wysokich standardów medycznych,
                ciągłe doskonalenie kompetencji personelu oraz inwestycje w nowoczesny sprzęt
                diagnostyczny i leczniczy.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white dark:bg-slate-900 border-2 border-primary/20 dark:border-primary/30 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 bg-primary/10 text-primary rounded-xl">
                  <Eye size={24} weight="duotone" />
                </div>
                <h2 className="text-xl font-semibold text-foreground tracking-tight">Wizja</h2>
              </div>
              <blockquote className="text-base text-foreground leading-relaxed font-medium italic border-l-4 border-primary pl-4">
                SPZOZ w Parczewie dąży do bycia nowoczesną placówką, w której pacjent znajduje się w
                centrum procesu leczniczego, a opieka zdrowotna jest świadczona zgodnie z aktualną
                wiedzą medyczną i najwyższymi standardami bezpieczeństwa.
              </blockquote>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Wizja zakłada systematyczny rozwój bazy diagnostycznej i leczniczej, poszerzanie
                zakresu świadczonych usług medycznych oraz budowanie trwałych relacji z pacjentami
                opartych na zaufaniu i profesjonalizmie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats — "W Liczbach" */}
      <section className="py-16 border-b border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-10">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <ChartBar size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">W Liczbach</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <div
                  key={stat.label}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 text-center"
                >
                  <div className="mx-auto mb-3 w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <Icon size={20} weight="duotone" />
                  </div>
                  <p className="text-3xl font-bold text-foreground tracking-tight">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <Clock size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">Historia</h2>
          </div>

          <div className="max-w-3xl space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              SPZOZ w Parczewie powstał jako szpital powiatowy, utworzony w celu zapewnienia opieki
              zdrowotnej mieszkańcom Parczewa i okolicznych gmin. Od początku swojego istnienia
              placówka pełni funkcję podstawowego ośrodka szpitalnego dla powiatu parczewskiego,
              obejmującego gminy: Parczew, Dębowa Kłoda, Jabłoń, Milanów, Podedwórze, Siemień i
              Sosnowica.
            </p>
            <p>
              Na przestrzeni lat szpital systematycznie rozbudowywał bazę diagnostyczną i leczniczą.
              Kolejne inwestycje pozwoliły na uruchomienie nowych oddziałów, modernizację
              infrastruktury oraz wyposażenie placówki w nowoczesną aparaturę medyczną. Szpital
              przeszedł transformację z niewielkiego ośrodka leczniczego w wieloprofilowy zakład
              opieki zdrowotnej.
            </p>
            <p>
              Obecnie SPZOZ w Parczewie prowadzi działalność w zakresie lecznictwa zamkniętego
              (oddziały szpitalne), ambulatoryjnej opieki specjalistycznej (poradnie), rehabilitacji
              leczniczej oraz diagnostyki laboratoryjnej i obrazowej. Placówka jest
              zakontraktowana przez Narodowy Fundusz Zdrowia.
            </p>
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section className="py-16 border-b border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <Buildings size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Struktura Organizacyjna
            </h2>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Szpital składa się z oddziałów szpitalnych, poradni specjalistycznych oraz zakładów
            diagnostycznych. Poniżej przedstawiono główne jednostki organizacyjne.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {departments.map((dept) => {
              const Icon = dept.icon
              const content = (
                <div
                  className={`bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 h-full ${
                    dept.href
                      ? 'group hover:border-primary/30 hover:shadow-lg transition-all duration-300'
                      : ''
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <Icon size={20} weight="duotone" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-foreground leading-tight">
                        {dept.name}
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground">{dept.description}</p>
                    </div>
                    {dept.href && (
                      <ArrowRight
                        size={16}
                        weight="bold"
                        className="text-muted-foreground group-hover:text-primary shrink-0 mt-0.5 transition-colors"
                      />
                    )}
                  </div>
                </div>
              )

              if (dept.href) {
                return (
                  <Link key={dept.name} href={dept.href}>
                    {content}
                  </Link>
                )
              }

              return <div key={dept.name}>{content}</div>
            })}
          </div>
        </div>
      </section>

      {/* Links to subpages */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <Brain size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Dowiedz się więcej
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/dyrekcja"
              className="group flex items-center justify-between gap-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div>
                <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                  Dyrekcja
                </h3>
                <p className="text-sm text-muted-foreground mt-0.5">
                  Kierownictwo szpitala
                </p>
              </div>
              <ArrowRight
                size={20}
                weight="bold"
                className="text-muted-foreground group-hover:text-primary shrink-0 transition-colors"
              />
            </Link>
            <Link
              href="/jakosc"
              className="group flex items-center justify-between gap-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div>
                <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                  Jakość i Bezpieczeństwo
                </h3>
                <p className="text-sm text-muted-foreground mt-0.5">
                  Standardy i certyfikaty
                </p>
              </div>
              <ArrowRight
                size={20}
                weight="bold"
                className="text-muted-foreground group-hover:text-primary shrink-0 transition-colors"
              />
            </Link>
            <Link
              href="/oddzialy"
              className="group flex items-center justify-between gap-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div>
                <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                  Oddziały Szpitalne
                </h3>
                <p className="text-sm text-muted-foreground mt-0.5">
                  Pełna lista oddziałów
                </p>
              </div>
              <ArrowRight
                size={20}
                weight="bold"
                className="text-muted-foreground group-hover:text-primary shrink-0 transition-colors"
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
