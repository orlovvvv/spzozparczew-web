import type { Metadata } from 'next'
import {
  Leaf,
  Chalkboard,
  Hospital,
  BookOpenText,
  Handshake,
  CaretRight,
  CalendarCheck,
  MegaphoneSimple,
  Users,
  FirstAidKit,
  Student,
  GraduationCap,
  HeartHalf,
  TreeStructure,
} from '@phosphor-icons/react/dist/ssr'

export const metadata: Metadata = {
  title: 'Promocja Zdrowia | SPZOZ Parczew',
  description:
    'Promocja zdrowia w SPZOZ Parczew — działania edukacyjne, Szpital Promujący Zdrowie, edukacja pacjentów, współpraca z partnerami lokalnymi.',
}

export default function PromocjaZdrowiaPage() {
  return (
    <div className="py-8">
      {/* Page Header */}
      <section className="py-12 container">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-xl">
              <Leaf size={24} weight="duotone" />
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
              Promocja Zdrowia
            </h1>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Samodzielny Publiczny Zakład Opieki Zdrowotnej w Parczewie aktywnie uczestniczy
            w promowaniu zdrowego stylu życia i profilaktyce chorób wśród mieszkańców powiatu
            parczewskiego. Nasze działania obejmują edukację zdrowotną, kampanie profilaktyczne
            oraz współpracę z instytucjami lokalnymi na rzecz zdrowia społeczności.
          </p>
        </div>
      </section>

      {/* Działania Edukacyjne */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
              <Chalkboard size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Działania Edukacyjne
            </h2>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-3xl">
            Realizujemy cykliczne wydarzenia edukacyjne skierowane do pacjentów, ich rodzin
            oraz całej społeczności lokalnej. Działania te mają na celu podnoszenie świadomości
            zdrowotnej i kształtowanie prozdrowotnych nawyków.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                <CalendarCheck size={20} weight="duotone" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-3">Dni Zdrowia</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Organizujemy cykliczne wydarzenia z okazji Światowego Dnia Zdrowia (7 kwietnia)
                oraz innych dni tematycznych, takich jak Światowy Dzień Serca, Dzień Walki
                z Cukrzycą czy Europejski Dzień Wiedzy o Antybiotykach.
              </p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-blue-600 mt-1 shrink-0" />
                  Bezpłatne pomiary ciśnienia i poziomu glukozy
                </li>
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-blue-600 mt-1 shrink-0" />
                  Konsultacje z dietetykiem i fizjoterapeutą
                </li>
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-blue-600 mt-1 shrink-0" />
                  Dystrybucja materiałów edukacyjnych
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4">
                <MegaphoneSimple size={20} weight="duotone" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-3">
                Kampanie Profilaktyczne
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Uczestniczymy w ogólnopolskich kampaniach profilaktycznych, dostosowując je
                do potrzeb naszej społeczności lokalnej.
              </p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-purple-600 mt-1 shrink-0" />
                  Październik — Miesiąc Świadomości Raka Piersi
                </li>
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-purple-600 mt-1 shrink-0" />
                  Listopad — kampania profilaktyki cukrzycy
                </li>
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-purple-600 mt-1 shrink-0" />
                  Edukacja na temat szczepień ochronnych
                </li>
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-purple-600 mt-1 shrink-0" />
                  Kampanie antynikotynowe i antyalkoholowe
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4">
                <Users size={20} weight="duotone" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-3">
                Wykłady i Prelekcje
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Nasi specjaliści prowadzą otwarte wykłady i prelekcje dla mieszkańców
                powiatu parczewskiego na temat najczęstszych problemów zdrowotnych.
              </p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-amber-600 mt-1 shrink-0" />
                  Profilaktyka chorób układu krążenia
                </li>
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-amber-600 mt-1 shrink-0" />
                  Zdrowe odżywianie i aktywność fizyczna
                </li>
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-amber-600 mt-1 shrink-0" />
                  Profilaktyka nowotworowa i badania przesiewowe
                </li>
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-amber-600 mt-1 shrink-0" />
                  Zdrowie psychiczne i radzenie sobie ze stresem
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Szpital Promujący Zdrowie */}
      <section className="py-16 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg">
              <Hospital size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Szpital Promujący Zdrowie
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <h3 className="text-base font-semibold text-foreground mb-4">
                Polska Sieć Szpitali Promujących Zdrowie
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                SPZOZ w Parczewie uczestniczy w Polskiej Sieci Szpitali Promujących Zdrowie,
                działającej w ramach międzynarodowej sieci WHO — International Network of Health
                Promoting Hospitals &amp; Health Services (HPH). Członkostwo zobowiązuje nas do
                systematycznego wdrażania działań prozdrowotnych skierowanych do pacjentów,
                personelu oraz społeczności lokalnej.
              </p>
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <p className="text-xs font-semibold text-green-800 dark:text-green-300 uppercase tracking-wide mb-2">
                  Standardy HPH
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Realizujemy standardy Szpitala Promującego Zdrowie, obejmujące politykę
                  zarządzania, ocenę potrzeb zdrowotnych pacjentów, edukację zdrowotną
                  oraz tworzenie zdrowego środowiska pracy dla personelu.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <h3 className="text-base font-semibold text-foreground mb-4">
                Cele programu
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold">1</span>
                  </div>
                  Podnoszenie jakości opieki zdrowotnej poprzez włączenie promocji zdrowia
                  do codziennej praktyki szpitalnej
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold">2</span>
                  </div>
                  Poprawa stanu zdrowia pacjentów, personelu i społeczności lokalnej
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold">3</span>
                  </div>
                  Zmiana orientacji szpitala z naprawczej na prozdrowotną — od leczenia
                  do zapobiegania chorobom
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold">4</span>
                  </div>
                  Tworzenie zdrowego i bezpiecznego środowiska pracy dla pracowników szpitala
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Edukacja Pacjentów */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <BookOpenText size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Edukacja Pacjentów
            </h2>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-3xl">
            Na każdym oddziale szpitalnym prowadzona jest indywidualna i grupowa edukacja
            zdrowotna pacjentów. Personel medyczny przekazuje wiedzę niezbędną do świadomego
            udziału w procesie leczenia i dalszej samoopieki po wypisie ze szpitala.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <FirstAidKit size={20} weight="duotone" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-3">
                Przygotowanie do Zabiegu
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Pacjenci kwalifikowani do zabiegów operacyjnych otrzymują szczegółowe informacje
                dotyczące przygotowania przedoperacyjnego, przebiegu zabiegu oraz postępowania
                pooperacyjnego. Rozmowy edukacyjne prowadzone są przez lekarzy prowadzących
                i pielęgniarki oddziałowe.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Student size={20} weight="duotone" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-3">
                Samokontrola w Cukrzycy
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Pacjenci z rozpoznaną cukrzycą uczestniczą w szkoleniach dotyczących
                samodzielnego monitorowania glikemii, techniki podawania insuliny,
                zasad diety cukrzycowej oraz rozpoznawania objawów hipo- i hiperglikemii.
                Edukację prowadzą pielęgniarki przeszkolone w edukacji diabetologicznej.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <GraduationCap size={20} weight="duotone" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-3">
                Rehabilitacja i Samoopieka
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Fizjoterapeuci i pielęgniarki instruują pacjentów w zakresie ćwiczeń
                rehabilitacyjnych do kontynuowania w domu, prawidłowego poruszania się
                po zabiegach ortopedycznych, pielęgnacji ran oraz stosowania zleconych
                leków. Rodziny pacjentów są włączane w proces edukacji.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 max-w-3xl">
            <h3 className="text-base font-semibold text-foreground mb-3">
              Materiały edukacyjne
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Na oddziałach i w poradniach dostępne są ulotki, broszury i plakaty edukacyjne
              dotyczące najczęstszych schorzeń, zasad zdrowego odżywiania, aktywności fizycznej
              oraz profilaktyki uzależnień. Materiały są regularnie aktualizowane i dostosowane
              do potrzeb pacjentów naszego szpitala.
            </p>
          </div>
        </div>
      </section>

      {/* Współpraca */}
      <section className="py-16 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 rounded-lg">
              <Handshake size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Współpraca na Rzecz Zdrowia
            </h2>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-3xl">
            Promocja zdrowia wymaga zaangażowania wielu podmiotów. SPZOZ w Parczewie współpracuje
            z instytucjami publicznymi, placówkami oświatowymi i organizacjami pozarządowymi
            w realizacji wspólnych działań prozdrowotnych.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 flex items-center justify-center mb-4">
                <TreeStructure size={20} weight="duotone" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-3">
                Samorząd i Administracja
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Współpracujemy z Powiatem Parczewskim, Gminą Parczew oraz Powiatową Stacją
                Sanitarno-Epidemiologiczną w zakresie realizacji programów zdrowotnych
                i działań profilaktycznych na terenie powiatu.
              </p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-teal-600 mt-1 shrink-0" />
                  Wspólne akcje szczepień i badań przesiewowych
                </li>
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-teal-600 mt-1 shrink-0" />
                  Udział w lokalnych strategiach zdrowotnych
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 flex items-center justify-center mb-4">
                <HeartHalf size={20} weight="duotone" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-3">
                Szkoły i Placówki Oświatowe
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Nasi specjaliści prowadzą prelekcje edukacyjne w szkołach podstawowych
                i ponadpodstawowych powiatu parczewskiego, poruszając tematy dostosowane
                do grup wiekowych uczniów.
              </p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-teal-600 mt-1 shrink-0" />
                  Zajęcia o higienie i zdrowym odżywianiu
                </li>
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-teal-600 mt-1 shrink-0" />
                  Profilaktyka uzależnień wśród młodzieży
                </li>
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-teal-600 mt-1 shrink-0" />
                  Pierwsza pomoc przedmedyczna
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 flex items-center justify-center mb-4">
                <Handshake size={20} weight="duotone" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-3">
                Organizacje Pozarządowe
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Współpracujemy z organizacjami pozarządowymi działającymi w obszarze zdrowia
                i pomocy społecznej, wspólnie organizując wydarzenia prozdrowotne
                i grupy wsparcia dla pacjentów.
              </p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-teal-600 mt-1 shrink-0" />
                  Grupy wsparcia dla pacjentów onkologicznych
                </li>
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-teal-600 mt-1 shrink-0" />
                  Współpraca z klubami abstynenta
                </li>
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-teal-600 mt-1 shrink-0" />
                  Wolontariat w akcjach zdrowotnych
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
