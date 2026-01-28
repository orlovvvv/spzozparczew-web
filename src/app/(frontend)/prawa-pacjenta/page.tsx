import type { Metadata } from 'next'
import React from 'react'
import {
  ShieldCheck,
  Phone,
  Clock,
  MapPin,
  UserCircleGear,
  Scales,
  Eye,
  LockSimple,
  FileText,
  FirstAidKit,
  CaretRight,
  NumberCircleOne,
  NumberCircleTwo,
  NumberCircleThree,
  NumberCircleFour,
  Warning,
  ShieldStar,
  VideoCamera,
  Fingerprint,
  ArrowSquareOut,
  Envelope,
} from '@phosphor-icons/react/dist/ssr'

export const metadata: Metadata = {
  title: 'Prawa i Bezpieczeństwo Pacjenta | SPZOZ Parczew',
  description:
    'Prawa pacjenta w SPZOZ Parczew. Pełnomocnik ds. Praw Pacjenta, procedura składania skarg, Karta Praw Pacjenta, bezpieczeństwo i ochrona danych osobowych.',
}

export default function PrawaPacjentaPage() {
  return (
    <div className="py-8">
      {/* Page Header */}
      <section className="py-12 container">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-primary/10 text-primary rounded-xl">
              <ShieldCheck size={24} weight="duotone" />
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
              Prawa i Bezpieczeństwo Pacjenta
            </h1>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Szanujemy prawa każdego pacjenta. Na tej stronie znajdziesz informacje o swoich
            uprawnieniach, dane kontaktowe Pełnomocnika ds. Praw Pacjenta oraz procedurę
            postępowania w przypadku zastrzeżeń dotyczących udzielanych świadczeń.
          </p>
        </div>
      </section>

      {/* Patient Rights Advocate - TOP PRIORITY */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <UserCircleGear size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Pełnomocnik ds. Praw Pacjenta
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Main contact card */}
            <div className="lg:col-span-3 bg-white dark:bg-slate-900 border-2 border-primary/20 rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Pełnomocnik ds. Praw Pacjenta jest osobą, do której możesz zwrócić się w każdej
                sprawie dotyczącej Twoich praw jako pacjenta. Pomaga w rozwiązywaniu problemów,
                udziela informacji i przyjmuje skargi.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      Pełnomocnik
                    </span>
                    <p className="text-base font-semibold text-foreground mt-1">
                      {/* TODO: Uzupełnić danymi */}
                      [Imię i Nazwisko]
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={16} weight="bold" className="text-primary shrink-0" />
                    <div>
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide block">
                        Telefon
                      </span>
                      <a
                        href="tel:+48833552100"
                        className="text-base font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        83&nbsp;355&nbsp;21&nbsp;00
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Envelope size={16} weight="bold" className="text-primary shrink-0" />
                    <div>
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide block">
                        E-mail
                      </span>
                      <a
                        href="mailto:prawa.pacjenta@spzozparczew.pl"
                        className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                      >
                        prawa.pacjenta@spzozparczew.pl
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock size={16} weight="bold" className="text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide block">
                        Godziny przyjęć
                      </span>
                      <p className="text-sm text-foreground mt-1">
                        Poniedziałek - Piątek
                      </p>
                      <p className="text-base font-semibold text-foreground">
                        8:00 - 14:00
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={16} weight="bold" className="text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide block">
                        Lokalizacja
                      </span>
                      <p className="text-sm text-foreground mt-1">
                        Budynek Administracji
                      </p>
                      <p className="text-sm text-muted-foreground">
                        ul. Kościelna 136, 21-200 Parczew
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Side info card */}
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
                <h3 className="text-base font-semibold text-foreground mb-3">
                  Kiedy zwrócić się do Pełnomocnika?
                </h3>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                    Masz wątpliwości dotyczące poszanowania Twoich praw
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                    Chcesz złożyć skargę lub wniosek
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                    Potrzebujesz informacji o swoich uprawnieniach
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                    Chcesz zgłosić problem z dostępem do świadczeń
                  </li>
                </ul>
              </div>
              <div className="bg-primary/5 border border-primary/15 rounded-xl p-5">
                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
                  Rzecznik Praw Pacjenta
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  Bezpłatna infolinia czynna pn-pt 8:00 - 18:00
                </p>
                <a
                  href="tel:+48800190590"
                  className="text-xl font-bold text-foreground hover:text-primary transition-colors"
                >
                  800&nbsp;190&nbsp;590
                </a>
                <a
                  href="https://www.gov.pl/web/rpp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  gov.pl/web/rpp
                  <ArrowSquareOut size={12} weight="bold" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complaints & Requests */}
      <section className="py-16 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <Scales size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Skargi i Wnioski
            </h2>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Jeśli uważasz, że Twoje prawa jako pacjenta zostały naruszone, masz prawo złożyć
            skargę. Poniżej przedstawiamy kolejne kroki postępowania.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <NumberCircleOne size={24} weight="duotone" className="text-primary shrink-0" />
                <h3 className="text-base font-semibold text-foreground">Ordynator / Kierownik</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                W pierwszej kolejności zgłoś problem Ordynatorowi lub Kierownikowi oddziału,
                w którym przebywasz. Większość spraw można rozwiązać na tym poziomie.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <NumberCircleTwo size={24} weight="duotone" className="text-primary shrink-0" />
                <h3 className="text-base font-semibold text-foreground">Pełnomocnik</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Jeśli sprawa nie została rozwiązana, zwróć się do Pełnomocnika ds. Praw Pacjenta.
                Skargę możesz złożyć osobiście, telefonicznie, pisemnie lub e-mailem.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <NumberCircleThree size={24} weight="duotone" className="text-primary shrink-0" />
                <h3 className="text-base font-semibold text-foreground">Dyrektor Szpitala</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Pisemną skargę możesz skierować bezpośrednio do Dyrektora SPZOZ Parczew.
                Odpowiedź otrzymasz w terminie do 30 dni od daty wpływu skargi.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <NumberCircleFour size={24} weight="duotone" className="text-primary shrink-0" />
                <h3 className="text-base font-semibold text-foreground">Instytucje zewnętrzne</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Masz prawo zwrócić się do instytucji zewnętrznych:
              </p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Rzecznik Praw Pacjenta
                </li>
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Narodowy Fundusz Zdrowia
                </li>
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Okręgowa Izba Lekarska
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
            <div className="flex items-start gap-3">
              <Warning size={20} weight="duotone" className="text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-amber-800 dark:text-amber-300 mb-1">
                  Co powinna zawierać skarga?
                </p>
                <p className="text-sm text-amber-700 dark:text-amber-400/80 leading-relaxed">
                  Imię i nazwisko, adres do korespondencji, opis zdarzenia (data, miejsce, osoby),
                  oczekiwania wobec szpitala. Skargi anonimowe nie podlegają rozpatrzeniu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Rights Charter */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <ShieldStar size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Karta Praw Pacjenta
            </h2>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Zgodnie z ustawą z dnia 6 listopada 2008 r. o prawach pacjenta i Rzeczniku Praw
            Pacjenta, każdemu pacjentowi przysługują poniższe prawa.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-primary/10 text-primary rounded-lg">
                  <FirstAidKit size={20} weight="duotone" />
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  Prawo do świadczeń zdrowotnych
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Masz prawo do świadczeń zdrowotnych odpowiadających wymaganiom aktualnej wiedzy
                medycznej. W sytuacji zagrożenia zdrowia lub życia masz prawo do natychmiastowej
                pomocy medycznej.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-primary/10 text-primary rounded-lg">
                  <Eye size={20} weight="duotone" />
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  Prawo do informacji
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Masz prawo do uzyskania przystępnej informacji o swoim stanie zdrowia, rozpoznaniu,
                proponowanych metodach diagnostycznych i leczniczych, wynikach leczenia oraz
                rokowaniu.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-primary/10 text-primary rounded-lg">
                  <FileText size={20} weight="duotone" />
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  Prawo do dokumentacji medycznej
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Masz prawo do dostępu do swojej dokumentacji medycznej oraz do uzyskania jej kopii,
                odpisu lub wyciągu. Dokumentacja udostępniana jest na Twój wniosek lub osoby przez
                Ciebie upoważnionej.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-primary/10 text-primary rounded-lg">
                  <LockSimple size={20} weight="duotone" />
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  Prawo do tajemnicy i prywatności
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Masz prawo do zachowania w tajemnicy informacji o Twoim stanie zdrowia przez osoby
                wykonujące zawód medyczny. Masz prawo do poszanowania intymności i godności
                podczas udzielania świadczeń.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-primary/10 text-primary rounded-lg">
                  <Scales size={20} weight="duotone" />
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  Prawo do wyrażenia zgody
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Masz prawo do wyrażenia świadomej zgody na udzielenie określonych świadczeń
                zdrowotnych lub ich odmowy, po uzyskaniu informacji o proponowanych metodach
                leczenia i ich ryzyku.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-primary/10 text-primary rounded-lg">
                  <ShieldCheck size={20} weight="duotone" />
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  Prawo do zgłoszenia sprzeciwu
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Masz prawo do zgłoszenia sprzeciwu wobec opinii albo orzeczenia lekarza, jeżeli
                wpływa ono na Twoje prawa lub obowiązki wynikające z przepisów prawa. Sprzeciw
                wnosi się do Komisji Lekarskiej.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Data Protection */}
      <section className="py-16 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <Fingerprint size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Bezpieczeństwo i Ochrona Danych
            </h2>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Twoje bezpieczeństwo i ochrona danych osobowych to nasz priorytet. Stosujemy
            rozwiązania zgodne z obowiązującymi przepisami prawa.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <VideoCamera size={20} weight="duotone" className="text-primary shrink-0" />
                <h3 className="text-base font-semibold text-foreground">Monitoring wizyjny</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                W celu zapewnienia bezpieczeństwa pacjentów, personelu i mienia, na terenie szpitala
                prowadzony jest monitoring wizyjny (CCTV). Kamery obejmują ciągi komunikacyjne,
                wejścia do budynków, parking oraz wybrane obszary ogólnodostępne.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Monitoring nie obejmuje sal chorych, gabinetów lekarskich ani pomieszczeń sanitarnych
                </li>
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Nagrania przechowywane są przez okres wymagany przepisami prawa
                </li>
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Dostęp do nagrań mają wyłącznie upoważnione osoby
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <LockSimple size={20} weight="duotone" className="text-primary shrink-0" />
                <h3 className="text-base font-semibold text-foreground">
                  Ochrona danych osobowych (RODO)
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                SPZOZ Parczew przetwarza dane osobowe pacjentów zgodnie z Rozporządzeniem
                Parlamentu Europejskiego i Rady (UE) 2016/679 (RODO). Administratorem danych
                jest Samodzielny Publiczny Zakład Opieki Zdrowotnej w Parczewie.
              </p>
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4">
                <h4 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2">
                  Twoje prawa wynikające z RODO
                </h4>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                    Prawo dostępu do swoich danych
                  </li>
                  <li className="flex items-start gap-2">
                    <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                    Prawo do sprostowania danych
                  </li>
                  <li className="flex items-start gap-2">
                    <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                    Prawo do ograniczenia przetwarzania
                  </li>
                  <li className="flex items-start gap-2">
                    <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                    Prawo do wniesienia skargi do organu nadzorczego (UODO)
                  </li>
                </ul>
              </div>
              <div className="mt-4 flex items-start gap-3 text-sm text-muted-foreground">
                <Envelope size={16} weight="bold" className="text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide block">
                    Inspektor Ochrony Danych
                  </span>
                  <a
                    href="mailto:iod@spzozparczew.pl"
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    iod@spzozparczew.pl
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal basis footer */}
      <section className="py-10 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <p className="text-xs text-muted-foreground leading-relaxed max-w-3xl">
            <strong className="text-foreground">Podstawa prawna:</strong> Ustawa z dnia 6 listopada
            2008 r. o prawach pacjenta i Rzeczniku Praw Pacjenta (Dz.U. 2009 Nr 52, poz. 417 z
            późn. zm.), Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27
            kwietnia 2016 r. (RODO). Treść niniejszej strony spełnia wymagania standardów
            akredytacyjnych PP 1-PP 13.
          </p>
        </div>
      </section>
    </div>
  )
}
