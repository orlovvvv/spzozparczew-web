import type { Metadata } from 'next'
import React from 'react'
import {
  UsersThree,
  Clock,
  ShieldWarning,
  Handshake,
  Storefront,
  Cross,
  Car,
  CaretRight,
  Warning,
  Baby,
  HandSoap,
  Bed,
  CheckCircle,
  XCircle,
  Heart,
  Info,
} from '@phosphor-icons/react/dist/ssr'

export const metadata: Metadata = {
  title: 'Pobyt i Odwiedziny | SPZOZ Parczew',
  description:
    'Godziny odwiedzin, regulamin pobytu, rola opiekuna oraz udogodnienia w SPZOZ Parczew. Informacje dla pacjentów i rodzin.',
}

export default function PobytIOdwiedzinyPage() {
  return (
    <div className="py-8">
      {/* Page Header */}
      <section className="py-12 container">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-primary/10 text-primary rounded-xl">
              <UsersThree size={24} weight="duotone" />
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
              Pobyt i Odwiedziny
            </h1>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Obecność bliskich wspiera proces leczenia. Prosimy o zapoznanie się z zasadami
            odwiedzin, które pozwalają pogodzić otwartość wobec rodzin z bezpieczeństwem sanitarnym
            na oddziałach.
          </p>
        </div>
      </section>

      {/* Visiting Hours */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <Clock size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Godziny Odwiedzin
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <h3 className="text-base font-semibold text-foreground mb-4">
                Zalecane godziny wizyt
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock size={16} weight="bold" className="text-primary shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Rano:{' '}
                    <strong className="text-foreground">10:00&ndash;12:00</strong>
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={16} weight="bold" className="text-primary shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Po południu:{' '}
                    <strong className="text-foreground">15:00&ndash;18:00</strong>
                  </p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed pt-2 border-t border-slate-100 dark:border-slate-800">
                  Odwiedziny są możliwe codziennie, w tym w weekendy i święta. Powyższe godziny
                  zapewniają, że wizyty nie kolidują z obchodami lekarskimi, zabiegami
                  pielęgniarskimi i podawaniem posiłków.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <h3 className="text-base font-semibold text-foreground mb-4">
                Wyjątki i ograniczenia
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  <span>
                    <strong className="text-foreground">Oddział Intensywnej Terapii</strong> &mdash;
                    odwiedziny wyłącznie po uzgodnieniu z lekarzem dyżurnym, ograniczone do 1 osoby
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  <span>
                    <strong className="text-foreground">Pacjenci w izolacji</strong> &mdash;
                    obowiązuje odrębny reżim sanitarny; prosimy o kontakt z personelem oddziału
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  <span>
                    <strong className="text-foreground">Sytuacje epidemiczne</strong> &mdash;
                    godziny i zasady odwiedzin mogą ulec zmianie na mocy zarządzenia Dyrektora
                    Szpitala. Aktualne komunikaty wywieszane są przy wejściu na oddziały
                  </span>
                </li>
              </ul>
              <div className="mt-4 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                <p className="text-xs text-blue-700 dark:text-blue-400 leading-relaxed">
                  <strong>Pacjenci niesamodzielni i dzieci</strong> mogą mieć przy sobie osobę bliską
                  także poza zalecanymi godzinami &mdash; po uzgodnieniu z pielęgniarką oddziałową.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visiting Rules */}
      <section className="py-16 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <ShieldWarning size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Regulamin Odwiedzin
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Visitors limit */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <UsersThree size={20} weight="duotone" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-3">Liczba odwiedzających</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Przy łóżku pacjenta mogą jednocześnie przebywać <strong className="text-foreground">maksymalnie 2 osoby</strong>.
                W salach wieloosobowych prosimy o ograniczenie wizyt, aby nie zakłócać odpoczynku
                pozostałych pacjentów.
              </p>
            </div>

            {/* Hygiene rules */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <HandSoap size={20} weight="duotone" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-3">Zasady higieniczne</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Zdezynfekuj ręce przy wejściu na oddział
                </li>
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  <strong className="text-foreground">Nie siadaj na łóżku pacjenta</strong> &mdash;
                  to wymóg kontroli zakażeń szpitalnych
                </li>
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Osoby z objawami infekcji (kaszel, gorączka, biegunka) powinny odłożyć wizytę
                </li>
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Używaj odzieży ochronnej, jeśli wymaga tego oddział (np. jednorazowe fartuchy)
                </li>
              </ul>
            </div>

            {/* Children */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Baby size={20} weight="duotone" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-3">Odwiedziny z dziećmi</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Dzieci poniżej <strong className="text-foreground">10 roku życia</strong> mogą odwiedzać pacjentów wyłącznie
                pod opieką osoby dorosłej. Personel oddziału może ograniczyć obecność dzieci
                ze względu na bezpieczeństwo epidemiczne lub specyfikę oddziału (np. OIT, oddział
                zakaźny).
              </p>
              <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                Prosimy, aby dzieci nie biegały po korytarzach i nie dotykały sprzętu medycznego.
              </p>
            </div>
          </div>

          {/* General conduct */}
          <div className="mt-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
            <h3 className="text-base font-semibold text-foreground mb-4">Zachowanie na oddziale</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Zachowaj ciszę &mdash; hałas utrudnia wypoczynek i rekonwalescencję
                </li>
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Wycisz telefon komórkowy; rozmowy prowadź poza salą chorych
                </li>
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Nie przynoś pacjentom alkoholu ani produktów zabronionych przez lekarza
                </li>
              </ul>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Kwiaty doniczkowe i cięte są dozwolone wyłącznie na oddziałach ogólnych
                </li>
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Na terenie szpitala obowiązuje całkowity zakaz palenia tytoniu
                </li>
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Stosuj się do poleceń personelu medycznego
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Caregiver's Role */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <Handshake size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Rola Opiekuna
            </h2>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mb-8">
            Rodzina i bliscy mogą aktywnie uczestniczyć w opiece nad pacjentem. Współpraca z
            personelem medycznym jest mile widziana i odbywa się zgodnie ze standardami
            akredytacyjnymi (PP&nbsp;8). Poniżej przedstawiamy, w jaki sposób mogą Państwo pomagać
            &mdash; oraz jakie czynności są zastrzeżone wyłącznie dla personelu.
          </p>

          {/* Highlighted Help Section */}
          <div className="mb-8 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Heart size={20} weight="duotone" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">Pomoc w opiece</h3>
                <p className="text-xs text-emerald-700 dark:text-emerald-400">
                  Udział rodziny w opiece &mdash; standard akredytacyjny PP&nbsp;8
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Szpital zapewnia pacjentowi możliwość udziału rodziny lub osoby bliskiej w
              procesie opieki. Opiekun nie zastępuje personelu medycznego, lecz go wspiera &mdash;
              zawsze po uzyskaniu zgody pielęgniarki lub lekarza prowadzącego. Wspólna opieka
              przyspiesza powrót do zdrowia i wzmacnia komfort psychiczny pacjenta.
            </p>
            <p className="text-xs text-emerald-700 dark:text-emerald-400 leading-relaxed">
              Aby uzyskać zgodę na stałą obecność przy pacjencie (np. przy osobach
              niesamodzielnych), należy zgłosić się do pielęgniarki oddziałowej.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* What family CAN do */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle size={20} weight="duotone" className="text-emerald-600" />
                <h3 className="text-base font-semibold text-foreground">
                  Dozwolone formy pomocy
                </h3>
              </div>
              <p className="text-xs text-muted-foreground mb-4">
                Po uzyskaniu zgody personelu opiekun może:
              </p>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-emerald-600 mt-1 shrink-0" />
                  Pomagać przy karmieniu i podawaniu napojów
                </li>
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-emerald-600 mt-1 shrink-0" />
                  Asystować w codziennej higienie (mycie, czesanie, pielęgnacja jamy ustnej)
                </li>
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-emerald-600 mt-1 shrink-0" />
                  Pomagać przy zmianie pozycji w łóżku i mobilizacji
                </li>
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-emerald-600 mt-1 shrink-0" />
                  Zapewniać wsparcie emocjonalne i towarzystwo
                </li>
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-emerald-600 mt-1 shrink-0" />
                  Informować personel o zmianach w samopoczuciu pacjenta
                </li>
              </ul>
            </div>

            {/* What family MUST NOT do */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <XCircle size={20} weight="duotone" className="text-destructive" />
                <h3 className="text-base font-semibold text-foreground">
                  Czynności zastrzeżone dla personelu
                </h3>
              </div>
              <p className="text-xs text-muted-foreground mb-4">
                Następujących czynności nie wolno wykonywać bez udziału personelu medycznego:
              </p>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-destructive mt-1 shrink-0" />
                  Podawanie jakichkolwiek leków &mdash; również tych własnych pacjenta
                </li>
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-destructive mt-1 shrink-0" />
                  Regulowanie szybkości wlewów kroplowych (kroplówek)
                </li>
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-destructive mt-1 shrink-0" />
                  Odłączanie lub modyfikowanie aparatury medycznej
                </li>
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-destructive mt-1 shrink-0" />
                  Zmiana opatrunków i drenów
                </li>
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-destructive mt-1 shrink-0" />
                  Samodzielne przenoszenie pacjenta na wózek lub nosze
                </li>
              </ul>
              <div className="mt-4 flex items-start gap-2 bg-destructive/5 border border-destructive/20 rounded-lg p-3">
                <Warning size={16} weight="bold" className="text-destructive mt-0.5 shrink-0" />
                <p className="text-xs text-destructive leading-relaxed">
                  W razie wątpliwości zawsze zapytaj pielęgniarkę. Samowolne działania mogą
                  zagrażać zdrowiu pacjenta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <Info size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Udogodnienia na terenie szpitala
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Shop */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Storefront size={20} weight="duotone" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-3">Sklepik szpitalny</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Na terenie szpitala działa sklepik, w którym można kupić artykuły higieniczne,
                przekąski, napoje i prasę.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock size={14} weight="bold" className="text-primary shrink-0" />
                <span>
                  Czynny: pn&ndash;pt <strong className="text-foreground">8:00&ndash;16:00</strong>
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Lokalizacja: parter budynku głównego, przy wejściu od strony parkingu.
              </p>
            </div>

            {/* Chapel */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Cross size={20} weight="duotone" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-3">Kaplica szpitalna</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Kaplica jest otwarta dla pacjentów, rodzin i personelu. Zapewniona jest opieka
                duszpasterska zgodnie ze standardem akredytacyjnym PP&nbsp;12.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock size={14} weight="bold" className="text-primary shrink-0" />
                  <span>
                    Msza Św.: niedziela, godz. <strong className="text-foreground">10:00</strong>
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock size={14} weight="bold" className="text-primary shrink-0" />
                  <span>
                    Kaplica czynna: <strong className="text-foreground">codziennie 7:00&ndash;20:00</strong>
                  </span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                Kapelan szpitalny dostępny na wezwanie &mdash; zgłoszenia przez dyżurkę
                pielęgniarską.
              </p>
            </div>

            {/* Parking */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Car size={20} weight="duotone" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-3">Parking</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Szpital dysponuje parkingiem dla pacjentów i odwiedzających. Parking jest płatny.
              </p>
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-3 space-y-1.5">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Pierwsza godzina</span>
                  <strong className="text-foreground">2,00 zł</strong>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Każda kolejna godzina</span>
                  <strong className="text-foreground">1,50 zł</strong>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Opłata dobowa (maks.)</span>
                  <strong className="text-foreground">10,00 zł</strong>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                Osoby z niepełnosprawnościami &mdash; oznakowane miejsca przy wejściu głównym,
                bezpłatnie za okazaniem karty parkingowej.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation Note */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="max-w-3xl mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                <Bed size={20} weight="duotone" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  Standardy akredytacyjne
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Zasady odwiedzin i pobytu w SPZOZ Parczew są zgodne z wymaganiami Centrum
                  Monitorowania Jakości w Ochronie Zdrowia: PP&nbsp;7 (zapewnienie możliwości
                  odwiedzin), PP&nbsp;8 (uczestnictwo rodziny w opiece) oraz PP&nbsp;12 (opieka
                  duszpasterska). Naszym celem jest zapewnienie godnych warunków pobytu przy
                  zachowaniu bezpieczeństwa sanitarnego.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
