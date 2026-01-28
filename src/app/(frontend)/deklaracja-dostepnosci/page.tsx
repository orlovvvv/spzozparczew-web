import type { Metadata } from 'next'
import {
  Wheelchair,
  CheckCircle,
  Warning,
  CalendarBlank,
  Envelope,
  Phone,
  Scales,
  Buildings,
  DeviceMobile,
  CaretRight,
  ArrowSquareOut,
} from '@phosphor-icons/react/dist/ssr'

export const metadata: Metadata = {
  title: 'Deklaracja Dostępności | SPZOZ Parczew',
  description:
    'Deklaracja dostępności cyfrowej strony internetowej Samodzielnego Publicznego Zakładu Opieki Zdrowotnej w Parczewie zgodnie z ustawą z dnia 4 kwietnia 2019 r.',
}

export default function DeklaracjaDostepnosciPage() {
  return (
    <div className="py-8">
      {/* Page Header */}
      <section className="py-12 container">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-primary/10 text-primary rounded-xl">
              <Wheelchair size={24} weight="duotone" />
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
              Deklaracja Dostępności
            </h1>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Samodzielny Publiczny Zakład Opieki Zdrowotnej w Parczewie zobowiązuje się zapewnić
            dostępność swojej strony internetowej zgodnie z przepisami ustawy z dnia 4 kwietnia
            2019&nbsp;r. o dostępności cyfrowej stron internetowych i aplikacji mobilnych podmiotów
            publicznych.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Oświadczenie w sprawie dostępności ma zastosowanie do strony internetowej{' '}
            <a
              href="https://spzozparczew.pl"
              className="font-medium text-primary hover:text-primary/80 transition-colors"
            >
              spzozparczew.pl
            </a>
            .
          </p>
        </div>
      </section>

      {/* Status Zgodności */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <CheckCircle size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Status zgodności
            </h2>
          </div>

          <div className="max-w-3xl space-y-6">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Strona internetowa jest{' '}
              <strong className="text-foreground">częściowo zgodna</strong> z ustawą z dnia
              4&nbsp;kwietnia 2019&nbsp;r. o dostępności cyfrowej stron internetowych i aplikacji
              mobilnych podmiotów publicznych z powodu niezgodności lub wyłączeń wymienionych
              poniżej.
            </p>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Warning size={18} weight="duotone" className="text-amber-600" />
                <h3 className="text-base font-semibold text-foreground">
                  Treści niedostępne
                </h3>
              </div>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Część dokumentów PDF nie posiada warstwy tekstowej (skany dokumentów)
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Niektóre zdjęcia i grafiki mogą nie posiadać pełnych opisów alternatywnych
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Materiały wideo mogą nie posiadać napisów dla osób niesłyszących
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Część treści archiwalnych może nie spełniać wymogów dostępności cyfrowej
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <h3 className="text-base font-semibold text-foreground mb-3">
                Wyłączenia
              </h3>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Mapy i treści interaktywne, które nie mogą zostać przedstawione w sposób
                  alternatywny
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Dokumenty opublikowane przed wejściem w życie ustawy o dostępności cyfrowej
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Treści pochodzące od podmiotów zewnętrznych, które nie zostały wytworzone przez
                  SPZOZ Parczew
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Data publikacji i aktualizacji */}
      <section className="py-16 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <CalendarBlank size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Data publikacji i aktualizacji
            </h2>
          </div>

          <div className="max-w-3xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Data publikacji strony internetowej
                </span>
                <p className="mt-1 text-lg font-semibold text-foreground">2024-01-15</p>
              </div>
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Data ostatniej istotnej aktualizacji
                </span>
                <p className="mt-1 text-lg font-semibold text-foreground">2025-01-28</p>
              </div>
            </div>
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
              Oświadczenie sporządzono dnia{' '}
              <strong className="text-foreground">2025-01-28</strong>. Deklarację sporządzono na
              podstawie samooceny przeprowadzonej przez podmiot publiczny.
            </p>
          </div>
        </div>
      </section>

      {/* Informacje zwrotne i dane kontaktowe */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <Envelope size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Informacje zwrotne i dane kontaktowe
            </h2>
          </div>

          <div className="max-w-3xl space-y-6">
            <p className="text-sm text-muted-foreground leading-relaxed">
              W przypadku problemów z dostępnością strony internetowej prosimy o kontakt. Osobą
              kontaktową jest:
            </p>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <h3 className="text-base font-semibold text-foreground mb-4">
                Koordynator ds. dostępności
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide w-20 shrink-0">
                    Osoba
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    Koordynator ds. dostępności SPZOZ Parczew
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide w-20 shrink-0">
                    E-mail
                  </span>
                  <a
                    href="mailto:dostepnosc@spzozparczew.pl"
                    className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    dostepnosc@spzozparczew.pl
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide w-20 shrink-0">
                    Telefon
                  </span>
                  <a
                    href="tel:+48833552100"
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    83&nbsp;355&nbsp;21&nbsp;00
                  </a>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Tą samą drogą można składać wnioski o udostępnienie informacji niedostępnej oraz składać
              żądania zapewnienia dostępności.
            </p>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <h3 className="text-base font-semibold text-foreground mb-3">
                Żądanie zapewnienia dostępności
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Każdy ma prawo do wystąpienia z żądaniem zapewnienia dostępności cyfrowej strony
                internetowej, aplikacji mobilnej lub jakiegoś ich elementu. Żądanie powinno zawierać:
              </p>
              <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                <li>Dane kontaktowe osoby zgłaszającej żądanie</li>
                <li>Wskazanie strony internetowej lub jej elementu, którego dotyczy żądanie</li>
                <li>
                  Wskazanie sposobu kontaktu z osobą występującą z żądaniem
                </li>
                <li>
                  Wskazanie alternatywnego sposobu dostępu (jeżeli dotyczy)
                </li>
              </ol>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Podmiot publiczny powinien zrealizować żądanie niezwłocznie, nie później niż w ciągu
                7&nbsp;dni od dnia wystąpienia z żądaniem. Jeżeli dotrzymanie tego terminu nie jest
                możliwe, podmiot publiczny niezwłocznie informuje o tym wnoszącego żądanie, kiedy
                realizacja żądania będzie możliwa, przy czym termin ten nie może być dłuższy niż
                2&nbsp;miesiące od dnia wystąpienia z żądaniem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Procedura wnioskowo-skargowa */}
      <section className="py-16 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <Scales size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Procedura wnioskowo-skargowa
            </h2>
          </div>

          <div className="max-w-3xl space-y-6">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Jeżeli zapewnienie dostępności cyfrowej nie jest możliwe, podmiot publiczny może
              zaproponować alternatywny sposób dostępu do informacji. W przypadku, gdy podmiot
              publiczny odmówi realizacji żądania zapewnienia dostępności lub alternatywnego sposobu
              dostępu do informacji, wnoszący żądanie może złożyć skargę w sprawie zapewnienia
              dostępności cyfrowej strony internetowej lub jej elementu.
            </p>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Po wyczerpaniu wskazanej wyżej procedury można także złożyć wniosek do{' '}
              <strong className="text-foreground">Rzecznika Praw Obywatelskich</strong>.
            </p>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <h3 className="text-base font-semibold text-foreground mb-3">
                Rzecznik Praw Obywatelskich
              </h3>
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Biuro Rzecznika Praw Obywatelskich
                </p>
                <p className="text-sm text-muted-foreground">
                  al. Solidarności 77, 00-090 Warszawa
                </p>
                <div className="flex items-center gap-3">
                  <Phone size={16} weight="bold" className="text-primary shrink-0" />
                  <a
                    href="tel:+48800676676"
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    800&nbsp;676&nbsp;676
                  </a>
                  <span className="text-xs text-muted-foreground">(infolinia, pn-pt 10:00-15:00)</span>
                </div>
                <div className="flex items-center gap-3">
                  <ArrowSquareOut size={16} weight="bold" className="text-primary shrink-0" />
                  <a
                    href="https://bip.brpo.gov.pl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    bip.brpo.gov.pl
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dostępność architektoniczna */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <Buildings size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Dostępność architektoniczna
            </h2>
          </div>

          <div className="max-w-3xl space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Samodzielny Publiczny Zakład Opieki Zdrowotnej w Parczewie, ul.&nbsp;Szpitalna&nbsp;12,
              21-200 Parczew.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
                <h3 className="text-base font-semibold text-foreground mb-3">Wejście do budynku</h3>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                    Wejście główne do budynku szpitala jest dostępne dla osób z
                    niepełnosprawnościami ruchowymi
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                    Przy wejściu głównym znajduje się podjazd dla wózków inwalidzkich
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                    Drzwi wejściowe posiadają odpowiednią szerokość umożliwiającą przejazd wózkiem
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
                <h3 className="text-base font-semibold text-foreground mb-3">Komunikacja wewnętrzna</h3>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                    Budynek wyposażony jest w windy przystosowane dla osób z niepełnosprawnościami
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                    Korytarze i ciągi komunikacyjne posiadają odpowiednią szerokość
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                    Toalety przystosowane dla osób z niepełnosprawnościami znajdują się na
                    poszczególnych kondygnacjach
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
                <h3 className="text-base font-semibold text-foreground mb-3">Parking</h3>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                    Na terenie szpitala wyznaczone są miejsca parkingowe dla osób z
                    niepełnosprawnościami
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                    Miejsca parkingowe znajdują się w bezpośrednim sąsiedztwie wejścia głównego
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
                <h3 className="text-base font-semibold text-foreground mb-3">Pomoc i asystent</h3>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                    Do budynku i wszystkich jego pomieszczeń można wejść z psem asystującym lub psem
                    przewodnikiem
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                    Osoby niesłyszące mogą skorzystać z pomocy tłumacza polskiego języka migowego
                    (PJM) po wcześniejszym umówieniu wizyty
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                    Personel szpitala udziela pomocy w dotarciu do poszczególnych oddziałów i poradni
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aplikacje mobilne */}
      <section className="py-16 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <DeviceMobile size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Aplikacje mobilne
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Samodzielny Publiczny Zakład Opieki Zdrowotnej w Parczewie nie posiada aplikacji
              mobilnych.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
