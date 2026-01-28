import type { Metadata } from 'next'
import Link from 'next/link'
import {
  SignOut,
  FileText,
  ClipboardText,
  Stethoscope,
  Warning,
  CaretRight,
  Clock,
  Phone,
  MapPin,
  DownloadSimple,
  NumberCircleOne,
  NumberCircleTwo,
  NumberCircleThree,
  NumberCircleFour,
  FirstAid,
  Moon,
  Siren,
  ArrowRight,
  Info,
} from '@phosphor-icons/react/dist/ssr'

export const metadata: Metadata = {
  title: 'Po Wypisie ze Szpitala | SPZOZ Parczew',
  description:
    'Informacje po wypisie ze szpitala SPZOZ Parczew — odbiór karty wypisu, dokumentacja medyczna, dalsze leczenie, postępowanie w razie pogorszenia stanu zdrowia.',
}

export default function PoWypisePage() {
  return (
    <div className="py-8">
      {/* Page Header */}
      <section className="py-12 container">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-primary/10 text-primary rounded-xl">
              <SignOut size={24} weight="duotone" />
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
              Po Wypisie ze Szpitala
            </h1>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Zakończenie hospitalizacji to nie koniec opieki. Poniżej znajdziesz informacje o odbiorze
            dokumentów wypisowych, uzyskaniu kopii dokumentacji medycznej, kontynuacji leczenia
            oraz postępowaniu w razie pogorszenia stanu zdrowia.
          </p>
        </div>
      </section>

      {/* Odbiór Wypisu */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <ClipboardText size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Odbiór Karty Informacyjnej Leczenia Szpitalnego
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <h3 className="text-base font-semibold text-foreground mb-4">
                W dniu wypisu
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Kartę informacyjną leczenia szpitalnego (tzw. wypis) otrzymasz w dniu wypisu
                od sekretarki oddziału lub lekarza prowadzącego. Dokument zawiera:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Rozpoznanie główne i współistniejące
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Opis przebiegu hospitalizacji i wykonanych zabiegów
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Zalecenia dotyczące dalszego leczenia i farmakoterapii
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Wyznaczone terminy wizyt kontrolnych
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <h3 className="text-base font-semibold text-foreground mb-4">
                Odbiór w późniejszym terminie
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Jeżeli z jakiegokolwiek powodu nie odebrałeś karty informacyjnej w dniu wypisu,
                możesz ją odebrać w Dziale Statystyki Medycznej.
              </p>
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin size={16} weight="bold" className="text-primary shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Dział Statystyki Medycznej</strong> — budynek
                    główny szpitala
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={16} weight="bold" className="text-primary shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Poniedziałek &ndash; piątek, <strong className="text-foreground">7:00 &ndash; 14:35</strong>
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} weight="bold" className="text-primary shrink-0" />
                  <a
                    href="tel:+48833552137"
                    className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    83&nbsp;355&nbsp;21&nbsp;37
                  </a>
                </div>
              </div>
              <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
                Wymagany dokument tożsamości. Osoby upoważnione muszą okazać pisemne upoważnienie
                oraz własny dowód osobisty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Udostępnianie Dokumentacji Medycznej */}
      <section className="py-16 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <FileText size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Udostępnianie Dokumentacji Medycznej
            </h2>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Masz prawo uzyskać kopię lub odpis swojej dokumentacji medycznej. Poniżej znajdziesz
            informacje krok po kroku, jak złożyć wniosek i odebrać dokumenty.
          </p>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <NumberCircleOne size={24} weight="duotone" className="text-primary mb-3" />
              <h3 className="text-sm font-semibold text-foreground mb-2">Złóż wniosek</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Wypełnij wniosek o udostępnienie dokumentacji medycznej. Formularz możesz pobrać
                poniżej lub otrzymać w Dziale Statystyki Medycznej.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <NumberCircleTwo size={24} weight="duotone" className="text-primary mb-3" />
              <h3 className="text-sm font-semibold text-foreground mb-2">Potwierdź tożsamość</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Okaż dowód osobisty. Jeśli działasz w imieniu pacjenta, przygotuj pisemne
                upoważnienie oraz swój dokument tożsamości.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <NumberCircleThree size={24} weight="duotone" className="text-primary mb-3" />
              <h3 className="text-sm font-semibold text-foreground mb-2">Poczekaj na realizację</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Wniosek realizujemy bez zbędnej zwłoki. Termin odbioru dokumentów zostanie
                uzgodniony indywidualnie &mdash; zwykle do 7 dni roboczych.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <NumberCircleFour size={24} weight="duotone" className="text-primary mb-3" />
              <h3 className="text-sm font-semibold text-foreground mb-2">Odbierz dokumenty</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Dokumenty odbierzesz osobiście w Dziale Statystyki Medycznej po okazaniu dowodu
                tożsamości. Istnieje możliwość wysyłki pocztą na Twój koszt.
              </p>
            </div>
          </div>

          {/* Fees & Download */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <h3 className="text-base font-semibold text-foreground mb-4">Opłaty</h3>
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Pierwsze udostępnienie dokumentacji w żądanym zakresie jest <strong className="text-foreground">bezpłatne</strong> (zgodnie
                  z art. 28 ust. 2a ustawy o prawach pacjenta).
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Za kolejne kopie pobierana jest opłata zgodna z obowiązującym cennikiem:
                </p>
                <ul className="space-y-1.5">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                    Kopia &mdash; maks. 0,00007 przeciętnego wynagrodzenia za stronę
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                    Odpis &mdash; maks. 0,002 przeciętnego wynagrodzenia za stronę
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                    Wyciąg &mdash; maks. 0,002 przeciętnego wynagrodzenia za stronę
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                    Nośnik elektroniczny &mdash; maks. 0,0004 przeciętnego wynagrodzenia
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 flex flex-col">
              <h3 className="text-base font-semibold text-foreground mb-4">Pobierz wniosek</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Wniosek o udostępnienie dokumentacji medycznej możesz wypełnić wcześniej i przynieść
                gotowy do Działu Statystyki Medycznej. Skróci to czas obsługi.
              </p>
              <div className="mt-auto">
                <a
                  href="/dokumenty/wniosek-dokumentacja-medyczna.pdf"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary/10 text-primary px-4 py-2.5 text-sm font-medium hover:bg-primary/15 transition-colors"
                >
                  <DownloadSimple size={18} weight="bold" />
                  Wniosek o udostępnienie dokumentacji (PDF)
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-start gap-3">
                  <Info size={16} weight="bold" className="text-blue-600 mt-0.5 shrink-0" />
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Dokumentacja medyczna udostępniana jest zgodnie z Ustawą z dnia 6 listopada 2008 r.
                    o prawach pacjenta i Rzeczniku Praw Pacjenta (Dz.U. 2009 Nr 52, poz. 417 ze zm.).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Co dalej po szpitalu */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <Stethoscope size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Co dalej po szpitalu?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Na karcie informacyjnej leczenia szpitalnego znajdziesz zalecenia dotyczące dalszego
                postępowania. Przestrzegaj ich, aby proces zdrowienia przebiegał prawidłowo.
              </p>

              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
                <h3 className="text-base font-semibold text-foreground mb-3">
                  Lekarz pierwszego kontaktu (POZ)
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Po wypisie ze szpitala zgłoś się do swojego lekarza rodzinnego z kartą informacyjną.
                  Lekarz POZ przejmuje dalszą opiekę &mdash; kontynuuje przepisane leczenie, kieruje
                  na badania kontrolne i w razie potrzeby wystawia skierowania do specjalistów.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
                <h3 className="text-base font-semibold text-foreground mb-3">
                  Wizyty kontrolne w szpitalu
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Jeśli na karcie wypisu wyznaczono termin wizyty kontrolnej w poradni przyszpitalnej,
                  zgłoś się w wyznaczonym dniu. Zabierz ze sobą kartę informacyjną, wyniki badań
                  oraz listę aktualnie przyjmowanych leków.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
                <h3 className="text-base font-semibold text-foreground mb-3">
                  Poradnie specjalistyczne SPZOZ Parczew
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Nasz szpital prowadzi poradnie specjalistyczne, w których możesz kontynuować leczenie
                  ambulatoryjne. Do większości poradni wymagane jest skierowanie od lekarza POZ.
                </p>
                <Link
                  href="/poradnie"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  Zobacz listę poradni specjalistycznych
                  <ArrowRight size={14} weight="bold" />
                </Link>
              </div>

              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
                <h3 className="text-base font-semibold text-foreground mb-3">
                  Rehabilitacja i fizjoterapia
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Jeżeli lekarz zalecił rehabilitację, poproś lekarza POZ o skierowanie do poradni
                  rehabilitacyjnej. Im szybciej rozpoczniesz ćwiczenia, tym lepsze efekty uzyskasz.
                  Nie odkładaj tego na później.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
                <h3 className="text-base font-semibold text-foreground mb-3">
                  Recepty i leki
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Na karcie wypisu znajduje się lista zaleconych leków. Przy wypisie możesz otrzymać
                  receptę na leki na okres do 7 dni. Dalsze recepty wystawia Twój lekarz POZ. Nie
                  przerywaj i nie modyfikuj leczenia samodzielnie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pogorszenie Stanu Zdrowia */}
      <section className="py-16 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-destructive/10 text-destructive rounded-lg">
              <Warning size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Pogorszenie stanu zdrowia po wypisie
            </h2>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Jeżeli po powrocie do domu poczujesz się gorzej, nie czekaj. W zależności od sytuacji
            skorzystaj z jednej z poniższych form pomocy medycznej.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* POZ */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center mb-4">
                <FirstAid size={20} weight="duotone" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                Lekarz rodzinny (POZ)
              </h3>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">
                Objawy niepokojące, ale nie nagłe
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Gorączka utrzymująca się ponad 2 dni, narastający ból, problemy z gojeniem rany,
                niepokojące objawy ze strony przewodu pokarmowego, pogorszenie samopoczucia.
              </p>
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <Clock size={14} weight="bold" className="text-blue-600 shrink-0" />
                  <p className="text-xs text-muted-foreground">
                    Poniedziałek &ndash; piątek, godziny pracy przychodni
                  </p>
                </div>
              </div>
            </div>

            {/* NSwL */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 text-amber-600 flex items-center justify-center mb-4">
                <Moon size={20} weight="duotone" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                Nocna i Świąteczna Opieka Zdrowotna
              </h3>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">
                Pilne, ale nie zagrażające życiu
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Nagłe pogorszenie stanu zdrowia poza godzinami pracy POZ: wysoka gorączka, silny ból,
                zaostrzenie choroby przewlekłej, gdy stan wymaga pilnej konsultacji lekarskiej.
              </p>
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-3 space-y-2">
                <div className="flex items-center gap-2">
                  <Clock size={14} weight="bold" className="text-amber-600 shrink-0" />
                  <p className="text-xs text-muted-foreground">
                    Pn&ndash;pt od 18:00, weekendy i święta całodobowo
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={14} weight="bold" className="text-amber-600 shrink-0" />
                  <a
                    href="tel:+48833552100"
                    className="text-xs font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    83&nbsp;355&nbsp;21&nbsp;00
                  </a>
                </div>
              </div>
            </div>

            {/* SOR */}
            <div className="bg-white dark:bg-slate-900 border border-destructive/30 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-destructive/10 text-destructive flex items-center justify-center mb-4">
                <Siren size={20} weight="duotone" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                Szpitalny Oddział Ratunkowy
              </h3>
              <p className="text-xs font-medium text-destructive uppercase tracking-wide mb-3">
                Zagrożenie życia lub zdrowia
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Silny ból w klatce piersiowej, duszność, utrata przytomności, masywne krwawienie,
                nagły paraliż, uraz wymagający natychmiastowej interwencji chirurgicznej.
              </p>
              <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-3 space-y-2">
                <div className="flex items-center gap-2">
                  <Clock size={14} weight="bold" className="text-destructive shrink-0" />
                  <p className="text-xs text-muted-foreground">
                    Całodobowo, 7 dni w tygodniu
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Phone size={14} weight="bold" className="text-destructive shrink-0" />
                    <span className="text-xs text-muted-foreground">Numer alarmowy:</span>
                  </div>
                  <a
                    href="tel:112"
                    className="text-lg font-bold text-destructive"
                  >
                    112
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Important note */}
          <div className="mt-8 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <Warning size={20} weight="duotone" className="text-amber-600 mt-0.5 shrink-0" />
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-1">
                  Kiedy dzwonić pod 112?
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Zadzwoń na numer alarmowy 112, jeżeli Ty lub osoba bliska macie objawy bezpośredniego
                  zagrożenia życia: ból w klatce piersiowej promieniujący do żuchwy lub ramienia,
                  nagłą duszność, zaburzenia mowy lub niedowład połowiczy, utratę przytomności,
                  masywne krwawienie, które nie ustępuje po ucisku. W takich sytuacjach liczy się
                  każda minuta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
