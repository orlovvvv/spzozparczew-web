import type { Metadata } from 'next'
import {
  GraduationCap,
  Stethoscope,
  FirstAidKit,
  ListChecks,
  Phone,
  EnvelopeSimple,
  MapPin,
  Clock,
  CaretRight,
  CheckCircle,
  NumberCircleOne,
  NumberCircleTwo,
  NumberCircleThree,
  NumberCircleFour,
  UserCircleGear,
  Certificate,
} from '@phosphor-icons/react/dist/ssr'

export const metadata: Metadata = {
  title: 'Praktyki i Staże | SPZOZ Parczew',
  description:
    'Praktyki i staże w SPZOZ Parczew — informacje dla lekarzy stażystów, rezydentów oraz studentów kierunków medycznych. Wymagane dokumenty i procedura zgłoszenia.',
}

export default function PraktykiIStazePage() {
  return (
    <div className="py-8">
      {/* Page Header */}
      <section className="py-12 container">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-primary/10 text-primary rounded-xl">
              <GraduationCap size={24} weight="duotone" />
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
              Praktyki i Staże
            </h1>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            SPZOZ w Parczewie realizuje kształcenie praktyczne dla lekarzy stażystów, lekarzy
            rezydentów oraz studentów kierunków medycznych. Poniżej znajdziesz informacje o
            dostępnych programach, wymaganych dokumentach i procedurze zgłoszenia.
          </p>
        </div>
      </section>

      {/* Candidate Type Cards */}
      <section className="pb-16 container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card: Intern & Resident Doctors */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Stethoscope size={24} weight="duotone" />
              </div>
              <h2 className="text-lg font-semibold text-foreground">
                Dla Lekarzy Stażystów i Rezydentów
              </h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Szpital posiada uprawnienia do prowadzenia staży podyplomowych oraz wybranych modułów
              specjalizacyjnych. Zapewniamy realizację programu stażu zgodnie z wymogami Ministerstwa
              Zdrowia.
            </p>
            <h3 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-3">
              Dostępne kierunki kształcenia
            </h3>
            <ul className="space-y-2 mb-5">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                Staż podyplomowy lekarza i lekarza dentysty
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                Rotacje w ramach szkolenia specjalizacyjnego (chirurgia ogólna, choroby wewnętrzne,
                medycyna ratunkowa, pediatria)
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                Moduły podstawowe i kierunkowe wybranych specjalizacji
              </li>
            </ul>
            <h3 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-3">
              Warunki odbywania stażu
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                Każdy stażysta i rezydent pracuje pod nadzorem wyznaczonego opiekuna stażu
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                Harmonogram rotacji ustalany jest indywidualnie, zgodnie z programem specjalizacji
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                Szpital zapewnia dostęp do procedur diagnostycznych i leczniczych przewidzianych
                programem
              </li>
            </ul>
          </div>

          {/* Card: Nursing & Paramedic Students */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center">
                <FirstAidKit size={24} weight="duotone" />
              </div>
              <h2 className="text-lg font-semibold text-foreground">
                Dla Studentów Pielęgniarstwa i Ratownictwa
              </h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Przyjmujemy studentów kierunków pielęgniarstwo, położnictwo i ratownictwo medyczne na
              praktyki zawodowe realizowane w ramach programu studiów. Praktyki odbywają się na
              oddziałach szpitalnych oraz w poradniach specjalistycznych.
            </p>
            <h3 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-3">
              Oddziały przyjmujące studentów
            </h3>
            <ul className="space-y-2 mb-5">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <CaretRight size={12} weight="bold" className="text-blue-600 mt-1 shrink-0" />
                Oddział Chorób Wewnętrznych
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <CaretRight size={12} weight="bold" className="text-blue-600 mt-1 shrink-0" />
                Oddział Chirurgii Ogólnej
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <CaretRight size={12} weight="bold" className="text-blue-600 mt-1 shrink-0" />
                Oddział Pediatryczny
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <CaretRight size={12} weight="bold" className="text-blue-600 mt-1 shrink-0" />
                Szpitalny Oddział Ratunkowy (SOR)
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <CaretRight size={12} weight="bold" className="text-blue-600 mt-1 shrink-0" />
                Blok Operacyjny (w ramach praktyk z chirurgii)
              </li>
            </ul>
            <h3 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-3">
              Organizacja praktyk
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <CaretRight size={12} weight="bold" className="text-blue-600 mt-1 shrink-0" />
                Nad każdą grupą studentów czuwa wyznaczony opiekun praktyk
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <CaretRight size={12} weight="bold" className="text-blue-600 mt-1 shrink-0" />
                Praktyki realizowane zgodnie z programem uczelni kierującej
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <CaretRight size={12} weight="bold" className="text-blue-600 mt-1 shrink-0" />
                Wymagane jest posiadanie odzieży ochronnej (fartuch, obuwie zmienne)
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <ListChecks size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Wymagane Dokumenty
            </h2>
          </div>
          <p className="text-sm text-muted-foreground mb-8 max-w-2xl">
            Przed rozpoczęciem praktyki lub stażu przygotuj komplet wymaganych dokumentów.
            Niekompletna dokumentacja uniemożliwia dopuszczenie do zajęć klinicznych.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-start gap-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5">
              <CheckCircle size={20} weight="duotone" className="text-emerald-600 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-foreground">Ubezpieczenie OC</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Aktualna polisa odpowiedzialności cywilnej obejmująca okres praktyki/stażu
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5">
              <CheckCircle size={20} weight="duotone" className="text-emerald-600 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-foreground">Książeczka sanepidowska</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Aktualne badania do celów sanitarno-epidemiologicznych
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5">
              <CheckCircle size={20} weight="duotone" className="text-emerald-600 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-foreground">Zaświadczenie lekarskie</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Orzeczenie o braku przeciwwskazań zdrowotnych do odbywania praktyk w podmiocie
                  leczniczym
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5">
              <CheckCircle size={20} weight="duotone" className="text-emerald-600 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-foreground">Legitymacja studencka</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Ważna legitymacja uczelni kierującej na praktykę (dotyczy studentów)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5">
              <CheckCircle size={20} weight="duotone" className="text-emerald-600 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-foreground">Skierowanie / umowa z uczelnią</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Porozumienie pomiędzy uczelnią a szpitalem lub skierowanie na staż z właściwej Izby
                  Lekarskiej
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5">
              <CheckCircle size={20} weight="duotone" className="text-emerald-600 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-foreground">Ubezpieczenie NNW</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Polisa od następstw nieszczęśliwych wypadków (wymagana przez większość uczelni)
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
            <p className="text-sm text-amber-800 dark:text-amber-300">
              <strong>Uwaga:</strong> Dokumenty należy dostarczyć w oryginale do Działu Kadr
              najpóźniej 7 dni roboczych przed planowanym rozpoczęciem praktyki. Kopie dokumentów
              zostaną wykonane na miejscu.
            </p>
          </div>
        </div>
      </section>

      {/* Application Procedure */}
      <section className="py-16 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <UserCircleGear size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Procedura Zgłoszenia
            </h2>
          </div>
          <p className="text-sm text-muted-foreground mb-8 max-w-2xl">
            Zgłoszenie na praktykę lub staż wymaga kontaktu z Działem Kadr. Poniżej przedstawiamy
            kolejne kroki.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <NumberCircleOne size={24} weight="duotone" className="text-primary mb-3" />
              <h3 className="text-sm font-semibold text-foreground mb-2">Kontakt z Działem Kadr</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Skontaktuj się telefonicznie lub mailowo z Działem Kadr w celu ustalenia
                dostępności miejsc i terminu praktyki.
              </p>
            </div>

            <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <NumberCircleTwo size={24} weight="duotone" className="text-primary mb-3" />
              <h3 className="text-sm font-semibold text-foreground mb-2">Złożenie dokumentów</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Dostarcz komplet wymaganych dokumentów osobiście do Działu Kadr lub prześlij skany
                drogą elektroniczną do wstępnej weryfikacji.
              </p>
            </div>

            <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <NumberCircleThree size={24} weight="duotone" className="text-primary mb-3" />
              <h3 className="text-sm font-semibold text-foreground mb-2">Przydział do oddziału</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Po akceptacji dokumentów zostaniesz przydzielony do oddziału zgodnie z programem
                praktyki i bieżącą dostępnością miejsc.
              </p>
            </div>

            <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <NumberCircleFour size={24} weight="duotone" className="text-primary mb-3" />
              <h3 className="text-sm font-semibold text-foreground mb-2">Rozpoczęcie praktyki</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Pierwszego dnia zgłoś się do Działu Kadr po odbiór identyfikatora, a następnie do
                wyznaczonego opiekuna na oddziale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation Note */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <Certificate size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Akredytacja Dydaktyczna
            </h2>
          </div>
          <div className="max-w-3xl">
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              SPZOZ w Parczewie posiada uprawnienia do prowadzenia kształcenia podyplomowego lekarzy
              i lekarzy dentystów, nadane przez Ministra Zdrowia. Szpital figuruje w rejestrze
              podmiotów uprawnionych do prowadzenia staży podyplomowych oraz szkolenia
              specjalizacyjnego w wybranych dziedzinach medycyny.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Kształcenie realizowane jest zgodnie ze standardami akredytacyjnymi w zakresie
              dydaktyki (DO), co obejmuje zapewnienie odpowiedniej kadry nadzorującej, dostęp do bazy
              klinicznej oraz systematyczną ewaluację procesu szkolenia.
            </p>
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
              Kontakt — Dział Kadr
            </h2>
          </div>

          <div className="max-w-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              W sprawach dotyczących praktyk i staży prosimy o kontakt z Działem Kadr SPZOZ w
              Parczewie.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone size={16} weight="bold" className="text-primary shrink-0" />
                <div>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide block">
                    Telefon
                  </span>
                  <a
                    href="tel:+48833552135"
                    className="text-base font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    83&nbsp;355&nbsp;21&nbsp;35
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeSimple size={16} weight="bold" className="text-primary shrink-0" />
                <div>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide block">
                    E-mail
                  </span>
                  <a
                    href="mailto:kadry@spzozparczew.pl"
                    className="text-base font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    kadry@spzozparczew.pl
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} weight="bold" className="text-primary shrink-0" />
                <div>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide block">
                    Adres
                  </span>
                  <p className="text-sm text-foreground">
                    ul. Kościelna 136, 21-200 Parczew
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={16} weight="bold" className="text-primary shrink-0" />
                <div>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide block">
                    Godziny pracy
                  </span>
                  <p className="text-sm text-foreground">
                    Poniedziałek — Piątek, 7:00 — 15:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
