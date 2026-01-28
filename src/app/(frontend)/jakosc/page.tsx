import type { Metadata } from 'next'
import {
  Certificate,
  ShieldCheck,
  ChartBar,
  UsersThree,
  CheckCircle,
  Star,
  Handshake,
  Heartbeat,
  CaretRight,
  Seal,
  ClipboardText,
  FirstAidKit,
  Virus,
  Pill,
  UsersFour,
} from '@phosphor-icons/react/dist/ssr'

export const metadata: Metadata = {
  title: 'Jakość i Akredytacja | SPZOZ Parczew',
  description:
    'System zarządzania jakością SPZOZ Parczew — certyfikaty akredytacyjne, polityka jakości, wyniki badania satysfakcji pacjentów, komisje i zespoły ds. jakości.',
}

export default function JakoscPage() {
  return (
    <div className="py-8">
      {/* Page Header */}
      <section className="py-12 container">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-primary/10 text-primary rounded-xl">
              <Certificate size={24} weight="duotone" />
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
              Jakość i Akredytacja
            </h1>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            SPZOZ w Parczewie realizuje systematyczne działania na rzecz poprawy jakości i
            bezpieczeństwa udzielanych świadczeń zdrowotnych. Poniżej przedstawiamy informacje
            o posiadanych certyfikatach, polityce jakości, wynikach badań satysfakcji pacjentów
            oraz działających komisjach i zespołach.
          </p>
        </div>
      </section>

      {/* Certyfikaty */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <Seal size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Certyfikaty i Akredytacja
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* CMJ Accreditation */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center">
                  <ShieldCheck size={24} weight="duotone" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    Akredytacja Centrum Monitorowania Jakości
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    Certyfikat Akredytacyjny Ministra Zdrowia
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                SPZOZ w Parczewie posiada certyfikat akredytacyjny przyznany przez Centrum
                Monitorowania Jakości w Ochronie Zdrowia. Akredytacja potwierdza spełnienie
                standardów jakości i bezpieczeństwa opieki zdrowotnej określonych przez Ministra
                Zdrowia.
              </p>
              {/* Placeholder for certificate scan */}
              <div className="bg-slate-50 dark:bg-slate-800/50 border border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-8 flex flex-col items-center justify-center text-center">
                <Certificate size={32} weight="duotone" className="text-slate-400 mb-2" />
                <p className="text-xs text-muted-foreground">
                  Skan certyfikatu akredytacyjnego CMJ
                </p>
              </div>
            </div>

            {/* ISO Certificate */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center">
                  <CheckCircle size={24} weight="duotone" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    System Zarządzania Jakością
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    Zgodność z wymaganiami normy ISO 9001
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Szpital wdraża system zarządzania jakością oparty na wymaganiach normy ISO 9001,
                obejmujący procesy diagnostyczne, lecznicze i administracyjne. System podlega
                regularnym audytom wewnętrznym i zewnętrznym.
              </p>
              {/* Placeholder for certificate scan */}
              <div className="bg-slate-50 dark:bg-slate-800/50 border border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-8 flex flex-col items-center justify-center text-center">
                <Certificate size={32} weight="duotone" className="text-slate-400 mb-2" />
                <p className="text-xs text-muted-foreground">
                  Skan certyfikatu ISO 9001
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Polityka Jakości */}
      <section className="py-16 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <ClipboardText size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Polityka Jakości
            </h2>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 md:p-8 mb-6">
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Dyrekcja i pracownicy Samodzielnego Publicznego Zakładu Opieki Zdrowotnej w Parczewie
              zobowiązują się do ciągłego doskonalenia jakości udzielanych świadczeń zdrowotnych.
              Polityka jakości stanowi fundament wszystkich działań organizacyjnych i klinicznych
              szpitala.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4">
                <div className="w-10 h-10 shrink-0 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600 flex items-center justify-center mt-0.5">
                  <Heartbeat size={20} weight="duotone" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">
                    Bezpieczeństwo pacjenta
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Identyfikacja i minimalizacja ryzyk klinicznych. Monitorowanie zdarzeń
                    niepożądanych. Wdrażanie procedur zapobiegawczych i korygujących.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4">
                <div className="w-10 h-10 shrink-0 rounded-lg bg-amber-100 dark:bg-amber-900/30 text-amber-600 flex items-center justify-center mt-0.5">
                  <ChartBar size={20} weight="duotone" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">
                    Ciągłe doskonalenie
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Systematyczna analiza wskaźników jakości. Realizacja programów poprawy jakości.
                    Regularne audyty wewnętrzne i przeglądy zarządzania.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4">
                <div className="w-10 h-10 shrink-0 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center mt-0.5">
                  <UsersThree size={20} weight="duotone" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">
                    Rozwój kadry medycznej
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Szkolenia i podnoszenie kwalifikacji personelu. Wspieranie specjalizacji
                    zawodowych. Budowanie kultury organizacyjnej zorientowanej na jakość.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4">
                <div className="w-10 h-10 shrink-0 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center mt-0.5">
                  <Star size={20} weight="duotone" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">
                    Medycyna oparta na dowodach
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Stosowanie aktualnych standardów i wytycznych medycznych. Podejmowanie decyzji
                    klinicznych w oparciu o najlepsze dostępne dane naukowe.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-lg p-4 flex items-start gap-3">
            <Handshake size={20} weight="duotone" className="text-primary shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Polityka jakości SPZOZ w Parczewie jest znana wszystkim pracownikom szpitala
              i podlega okresowemu przeglądowi pod kątem aktualności i adekwatności do
              prowadzonej działalności leczniczej.
            </p>
          </div>
        </div>
      </section>

      {/* Badanie Satysfakcji Pacjentów - visually prominent */}
      <section className="py-16 bg-primary/5 dark:bg-primary/10 border-t border-primary/10 dark:border-primary/20">
        <div className="container">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-primary/15 text-primary rounded-lg">
              <ChartBar size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Badanie Satysfakcji Pacjentów
            </h2>
          </div>
          <p className="text-xs font-medium text-muted-foreground mb-8 ml-11">
            Zgodnie z wymogami standardów akredytacyjnych PJ 9 / 2025 -- wyniki publikowane
            cyklicznie
          </p>

          {/* Key stats banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-1">90%</p>
              <p className="text-sm text-muted-foreground">
                pacjentów poleciłoby nasz szpital bliskim
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-1">4,2/5</p>
              <p className="text-sm text-muted-foreground">
                średnia ocena opieki pielęgniarskiej
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-1">87%</p>
              <p className="text-sm text-muted-foreground">
                pacjentów ocenia komunikację z lekarzem jako dobrą lub bardzo dobrą
              </p>
            </div>
          </div>

          {/* Chart placeholder */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 md:p-8 mb-6">
            <h3 className="text-base font-semibold text-foreground mb-2">
              Wyniki badania satysfakcji -- ostatni okres sprawozdawczy
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Badanie przeprowadzono metodą ankietową wśród pacjentów hospitalizowanych
              i korzystających z usług ambulatoryjnych. Poniżej przedstawiono rozkład odpowiedzi
              w kluczowych kategoriach oceny.
            </p>

            {/* Bar chart placeholder */}
            <div className="bg-slate-50 dark:bg-slate-800/50 border border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-6">
              <div className="space-y-4">
                {[
                  { label: 'Ogólna ocena pobytu', value: 88 },
                  { label: 'Komunikacja z personelem lekarskim', value: 87 },
                  { label: 'Opieka pielęgniarska', value: 91 },
                  { label: 'Warunki bytowe', value: 78 },
                  { label: 'Informowanie o stanie zdrowia', value: 85 },
                  { label: 'Poszanowanie intymności i godności', value: 92 },
                  { label: 'Skłonność do polecenia szpitala', value: 90 },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm text-foreground">{item.label}</span>
                      <span className="text-sm font-semibold text-foreground">{item.value}%</span>
                    </div>
                    <div className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4 text-center">
                Dane przykładowe -- do aktualizacji na podstawie bieżących wyników badania
                ankietowego
              </p>
            </div>
          </div>

          {/* Methodology note */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
            <h3 className="text-sm font-semibold text-foreground mb-3">
              Metodologia badania
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                Badanie prowadzone jest w sposób ciągły z wykorzystaniem standaryzowanego
                kwestionariusza ankiety
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                Ankiety są anonimowe i dobrowolne, dystrybuowane wśród pacjentów hospitalizowanych
                oraz ambulatoryjnych
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                Wyniki analizowane są kwartalnie przez Zespół ds. Jakości i przedstawiane Dyrekcji
                Szpitala
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                Na podstawie wyników opracowywane są działania korygujące i doskonalące
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Komisje i Zespoły */}
      <section className="py-16 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <UsersFour size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Komisje i Zespoły ds. Jakości
            </h2>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-3xl">
            W SPZOZ w Parczewie działają komisje i zespoły odpowiedzialne za nadzór nad jakością
            i bezpieczeństwem opieki zdrowotnej. Ich praca opiera się na analizie danych,
            monitorowaniu wskaźników oraz wdrażaniu działań naprawczych.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Zespół ds. Zakażeń Szpitalnych */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 shrink-0 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600 flex items-center justify-center">
                  <Virus size={20} weight="duotone" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    Komitet Kontroli Zakażeń Szpitalnych
                  </h3>
                </div>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Nadzór nad stanem sanitarno-epidemiologicznym szpitala
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Monitorowanie i rejestracja zakażeń szpitalnych
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Opracowywanie procedur zapobiegania zakażeniom
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Nadzór nad polityką antybiotykową
                </li>
              </ul>
            </div>

            {/* Komitet Terapeutyczny */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 shrink-0 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center">
                  <Pill size={20} weight="duotone" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    Komitet Terapeutyczny
                  </h3>
                </div>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Opracowywanie i aktualizacja receptariusza szpitalnego
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Monitorowanie racjonalnej gospodarki lekami
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Analiza interakcji lekowych i działań niepożądanych
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Wdrażanie standardów farmakoterapii
                </li>
              </ul>
            </div>

            {/* Zespół ds. Jakości */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 shrink-0 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center">
                  <ShieldCheck size={20} weight="duotone" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    Zespół ds. Jakości
                  </h3>
                </div>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Koordynacja wdrażania standardów akredytacyjnych
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Przeprowadzanie audytów wewnętrznych
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Analiza wyników badania satysfakcji pacjentów
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Monitorowanie i raportowanie wskaźników jakości
                </li>
              </ul>
            </div>

            {/* Zespół ds. Zdarzeń Niepożądanych */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 shrink-0 rounded-lg bg-amber-100 dark:bg-amber-900/30 text-amber-600 flex items-center justify-center">
                  <FirstAidKit size={20} weight="duotone" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    Zespół ds. Zdarzeń Niepożądanych
                  </h3>
                </div>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Rejestrowanie i analiza zdarzeń niepożądanych
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Opracowywanie rekomendacji zapobiegawczych
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Wdrażanie kultury bezpieczeństwa -- system zgłoszeń bez obwiniania
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Raportowanie do Dyrekcji i organów nadzoru
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Standards reference footer */}
      <section className="py-8 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
        <div className="container">
          <p className="text-xs text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto">
            Informacje publikowane zgodnie z wymogami standardów akredytacyjnych w zakresie
            Poprawy Jakości (PJ) oraz wytycznymi PJ 9 / 2025 dotyczącymi obowiązku publikacji
            wyników badania satysfakcji pacjentów.
          </p>
        </div>
      </section>
    </div>
  )
}
