import type { Metadata } from 'next'
import React from 'react'
import {
  Heartbeat,
  MagnifyingGlass,
  Heart,
  Drop,
  ListChecks,
  IdentificationCard,
  FileText,
  ClipboardText,
  FilePdf,
  Phone,
  EnvelopeSimple,
  CaretRight,
  Clock,
  MapPin,
  ShieldCheck,
  FirstAidKit,
} from '@phosphor-icons/react/dist/ssr'

export const metadata: Metadata = {
  title: 'Programy Profilaktyczne | SPZOZ Parczew',
  description:
    'Programy profilaktyczne realizowane w SPZOZ Parczew — badania przesiewowe, kolonoskopia, mammografia, cytologia, ocena ryzyka sercowo-naczyniowego. Bezpłatne badania finansowane przez NFZ.',
}

const screeningPrograms = [
  {
    title: 'Program Badań Przesiewowych Raka Jelita Grubego',
    subtitle: 'Kolonoskopia przesiewowa',
    icon: <MagnifyingGlass size={24} weight="duotone" />,
    color: 'primary',
    eligible: 'Osoby w wieku 50-65 lat, które nie miały wykonanej kolonoskopii w ciągu ostatnich 10 lat',
    expandedEligible:
      'Osoby w wieku 40-49 lat, u których krewny pierwszego stopnia zachorował na raka jelita grubego',
    description:
      'Rak jelita grubego jest jednym z najczęstszych nowotworów w Polsce. Wykryty we wczesnym stadium jest w pełni uleczalny. Kolonoskopia pozwala na wykrycie i usunięcie polipów, zanim przekształcą się w nowotwór.',
    details: 'Badanie jest bezbolesne (wykonywane w sedacji), trwa ok. 20-30 minut. Nie wymaga skierowania.',
  },
  {
    title: 'Program Wczesnego Wykrywania Raka Piersi',
    subtitle: 'Mammografia przesiewowa',
    icon: <Heart size={24} weight="duotone" />,
    color: 'pink',
    eligible: 'Kobiety w wieku 50-69 lat, które nie miały mammografii w ciągu ostatnich 2 lat',
    description:
      'Mammografia to badanie rentgenowskie piersi, które pozwala wykryć zmiany nowotworowe na bardzo wczesnym etapie, zanim staną się wyczuwalne. Regularne badania zwiększają szanse na skuteczne leczenie.',
    details: 'Badanie trwa kilka minut i nie wymaga skierowania od lekarza.',
  },
  {
    title: 'Program Profilaktyki Raka Szyjki Macicy',
    subtitle: 'Cytologia przesiewowa',
    icon: <ShieldCheck size={24} weight="duotone" />,
    color: 'violet',
    eligible: 'Kobiety w wieku 25-64 lat, które nie miały cytologii w ciągu ostatnich 3 lat',
    description:
      'Cytologia to proste badanie, które pozwala wykryć stany przedrakowe i wczesne stadium raka szyjki macicy. Regularne wykonywanie cytologii co 3 lata znacząco obniża ryzyko zachorowania.',
    details: 'Badanie jest szybkie i bezbolesne. Nie wymaga skierowania.',
  },
  {
    title: 'Program Profilaktyki Chorób Układu Krążenia',
    subtitle: 'Ocena ryzyka sercowo-naczyniowego',
    icon: <Drop size={24} weight="duotone" />,
    color: 'red',
    eligible: 'Osoby w wieku 35-65 lat, obciążone czynnikami ryzyka chorób układu krążenia',
    description:
      'Choroby sercowo-naczyniowe są główną przyczyną zgonów w Polsce. Program obejmuje ocenę ryzyka na podstawie badań laboratoryjnych, pomiaru ciśnienia tętniczego, BMI oraz wywiadu rodzinnego.',
    details:
      'W ramach programu wykonywane są: morfologia, lipidogram, glukoza, pomiar ciśnienia tętniczego. Na podstawie wyników lekarz określa indywidualny plan profilaktyki.',
  },
]

const educationalMaterials = [
  {
    title: 'Cukrzyca — poradnik pacjenta',
    description:
      'Zasady diety, monitorowanie glikemii, rozpoznawanie objawów hipo- i hiperglikemii, pielęgnacja stóp.',
    filename: 'poradnik-cukrzyca.pdf',
  },
  {
    title: 'Nadciśnienie tętnicze — jak żyć z nadciśnieniem',
    description:
      'Prawidłowy pomiar ciśnienia, dieta DASH, aktywność fizyczna, przyjmowanie leków hipotensyjnych.',
    filename: 'poradnik-nadcisnienie.pdf',
  },
  {
    title: 'Zdrowa dieta — zasady prawidłowego żywienia',
    description:
      'Piramida żywieniowa, planowanie posiłków, ograniczanie soli i cukru, nawodnienie organizmu.',
    filename: 'poradnik-zdrowa-dieta.pdf',
  },
]

function getColorClasses(color: string) {
  const map: Record<string, { bg: string; text: string; border: string }> = {
    primary: {
      bg: 'bg-primary/10',
      text: 'text-primary',
      border: 'hover:border-primary/30',
    },
    pink: {
      bg: 'bg-pink-100 dark:bg-pink-900/30',
      text: 'text-pink-600',
      border: 'hover:border-pink-500/30',
    },
    violet: {
      bg: 'bg-violet-100 dark:bg-violet-900/30',
      text: 'text-violet-600',
      border: 'hover:border-violet-500/30',
    },
    red: {
      bg: 'bg-red-100 dark:bg-red-900/30',
      text: 'text-red-600',
      border: 'hover:border-red-500/30',
    },
  }
  return map[color] ?? map.primary
}

export default function ProfilaktykaPage() {
  return (
    <div className="py-8">
      {/* Page Header */}
      <section className="py-12 container">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-primary/10 text-primary rounded-xl">
              <Heartbeat size={24} weight="duotone" />
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
              Programy Profilaktyczne
            </h1>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            SPZOZ w Parczewie realizuje programy profilaktyczne finansowane przez Narodowy Fundusz
            Zdrowia. Badania przesiewowe są bezpłatne i nie wymagają skierowania. Wczesne wykrycie
            choroby daje największe szanse na skuteczne leczenie.
          </p>
        </div>
      </section>

      {/* NFZ Info Banner */}
      <section className="pb-12 container">
        <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-xl p-5 flex items-start gap-4">
          <div className="w-10 h-10 shrink-0 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 flex items-center justify-center">
            <FirstAidKit size={20} weight="duotone" />
          </div>
          <div>
            <p className="text-sm font-semibold text-emerald-800 dark:text-emerald-300 mb-1">
              Badania finansowane przez NFZ
            </p>
            <p className="text-sm text-emerald-700 dark:text-emerald-400 leading-relaxed">
              Wszystkie wymienione programy przesiewowe są realizowane w ramach umowy z Narodowym
              Funduszem Zdrowia. Pacjent nie ponosi żadnych kosztów. Wystarczy spełnić kryteria
              wiekowe i zgłosić się do rejestracji.
            </p>
          </div>
        </div>
      </section>

      {/* Screening Programs */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <MagnifyingGlass size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Programy Przesiewowe
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {screeningPrograms.map((program) => {
              const colors = getColorClasses(program.color)
              return (
                <div
                  key={program.title}
                  className={`bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 ${colors.border} hover:shadow-lg transition-all duration-300`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-12 h-12 shrink-0 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center`}
                    >
                      {program.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-foreground">{program.title}</h3>
                      <p className="text-sm text-muted-foreground">{program.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {program.description}
                  </p>

                  <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 mb-3">
                    <h4 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2">
                      Kto może skorzystać
                    </h4>
                    <ul className="space-y-1.5">
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                        {program.eligible}
                      </li>
                      {program.expandedEligible && (
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CaretRight
                            size={12}
                            weight="bold"
                            className="text-primary mt-1 shrink-0"
                          />
                          {program.expandedEligible}
                        </li>
                      )}
                    </ul>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed">{program.details}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How to Participate */}
      <section className="py-16 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <ListChecks size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Jak Skorzystać z Programu
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Registration Process */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <h3 className="text-base font-semibold text-foreground mb-4">
                Rejestracja na badanie
              </h3>
              <ol className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-7 h-7 shrink-0 rounded-full bg-primary/10 text-primary text-xs font-bold">
                    1
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Sprawdź, czy spełniasz kryteria wiekowe
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Każdy program ma określoną grupę docelową
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-7 h-7 shrink-0 rounded-full bg-primary/10 text-primary text-xs font-bold">
                    2
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Zadzwoń lub zgłoś się osobiście
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Rejestracja telefoniczna lub w Rejestracji Głównej szpitala
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-7 h-7 shrink-0 rounded-full bg-primary/10 text-primary text-xs font-bold">
                    3
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Zgłoś się w wyznaczonym terminie
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Przy rejestracji otrzymasz informację o przygotowaniu do badania
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-7 h-7 shrink-0 rounded-full bg-primary/10 text-primary text-xs font-bold">
                    4
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Odbierz wynik badania
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Wynik otrzymasz osobiście lub podczas wizyty kontrolnej
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            {/* What to Bring */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <h3 className="text-base font-semibold text-foreground mb-4">
                Co zabrać ze sobą
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <IdentificationCard
                    size={16}
                    weight="bold"
                    className="text-primary mt-0.5 shrink-0"
                  />
                  <span>
                    <strong className="text-foreground">Dowód osobisty</strong> lub inny dokument
                    tożsamości z numerem PESEL
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <FileText size={16} weight="bold" className="text-primary mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-foreground">Wyniki wcześniejszych badań</strong>{' '}
                    (jeśli były wykonywane w innej placówce)
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <ClipboardText size={16} weight="bold" className="text-primary mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-foreground">Listę przyjmowanych leków</strong> (dotyczy
                    badania kolonoskopowego i oceny ryzyka sercowo-naczyniowego)
                  </span>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                <h4 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-3">
                  Ważne informacje
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                    Badania przesiewowe nie wymagają skierowania od lekarza
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                    Na kolonoskopię wymagane jest wcześniejsze przygotowanie (dieta)
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                    Na badanie ryzyka sercowo-naczyniowego należy zgłosić się na czczo
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Materials */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <FilePdf size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Materiały Edukacyjne
            </h2>
          </div>
          <p className="text-sm text-muted-foreground mb-8 max-w-2xl">
            Przygotowaliśmy materiały edukacyjne dotyczące najczęstszych chorób cywilizacyjnych.
            Poradniki zawierają praktyczne wskazówki do codziennego stosowania.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {educationalMaterials.map((material) => (
              <div
                key={material.filename}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 flex flex-col"
              >
                <div className="w-10 h-10 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600 flex items-center justify-center mb-4">
                  <FilePdf size={20} weight="duotone" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{material.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {material.description}
                </p>
                <a
                  href={`/materialy/${material.filename}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  download
                >
                  Pobierz poradnik (PDF)
                  <CaretRight size={14} weight="bold" />
                </a>
              </div>
            ))}
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
              Kontakt — Koordynator ds. Profilaktyki
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <h3 className="text-base font-semibold text-foreground mb-4">
                Rejestracja do programów profilaktycznych
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock size={16} weight="bold" className="text-primary shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Poniedziałek - Piątek w godzinach{' '}
                    <strong className="text-foreground">7:30 - 14:30</strong>
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} weight="bold" className="text-primary shrink-0" />
                  <a
                    href="tel:+48833552152"
                    className="text-sm text-foreground font-semibold hover:text-primary transition-colors"
                  >
                    83 355 21 52
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <EnvelopeSimple size={16} weight="bold" className="text-primary shrink-0" />
                  <a
                    href="mailto:profilaktyka@spzozparczew.pl"
                    className="text-sm text-foreground font-semibold hover:text-primary transition-colors"
                  >
                    profilaktyka@spzozparczew.pl
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={16} weight="bold" className="text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    SPZOZ Parczew, ul. Szpitalna 12, 21-200 Parczew
                    <br />
                    Budynek główny, parter — Rejestracja Główna
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <h3 className="text-base font-semibold text-foreground mb-4">
                Promocja Zdrowia
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Szpital prowadzi działania z zakresu promocji zdrowia zgodnie ze standardami
                akredytacyjnymi (PZ). Organizujemy spotkania edukacyjne, akcje profilaktyczne oraz
                przygotowujemy materiały informacyjne dla pacjentów i mieszkańców powiatu
                parczewskiego.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Jeśli chcesz dowiedzieć się więcej o planowanych akcjach profilaktycznych lub
                zamówić materiały edukacyjne dla swojej instytucji, skontaktuj się z Koordynatorem
                ds. Profilaktyki.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
