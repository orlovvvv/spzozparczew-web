import type { Metadata } from 'next'
import React from 'react'
import Link from 'next/link'
import {
  FirstAid,
  FileText,
  IdentificationCard,
  ClipboardText,
  Briefcase,
  TShirt,
  Pill,
  Warning,
  CalendarCheck,
  Siren,
  Clock,
  Lock,
  CaretRight,
  Phone,
  ArrowRight,
  CheckCircle,
  XCircle,
  Info,
} from '@phosphor-icons/react/dist/ssr'

export const metadata: Metadata = {
  title: 'Przyjęcie do Szpitala | SPZOZ Parczew',
  description:
    'Informacje o przyjęciu do szpitala SPZOZ Parczew — wymagane dokumenty, co zabrać ze sobą, przyjęcie planowe i nagłe, depozyt rzeczy wartościowych.',
}

export default function PrzyjęciePage() {
  return (
    <div className="py-8">
      {/* Page Header */}
      <section className="py-12 container">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-primary/10 text-primary rounded-xl">
              <FirstAid size={24} weight="duotone" />
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
              Przyjęcie do Szpitala
            </h1>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Pobyt w szpitalu to stresująca sytuacja. Dobre przygotowanie pozwoli Ci skupić się na
            zdrowiu, a nam -- sprawnie przeprowadzić formalności. Na tej stronie znajdziesz wszystko,
            czego potrzebujesz przed przyjęciem.
          </p>
        </div>
      </section>

      {/* Dokumenty */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <FileText size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Wymagane dokumenty
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <h3 className="text-base font-semibold text-foreground mb-4">
                Dokumenty obowiązkowe
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Przygotuj te dokumenty przed przyjazdem do szpitala. Bez nich nie będziemy mogli
                rozpocząć procedury przyjęcia.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <IdentificationCard size={18} weight="duotone" className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <span className="font-medium text-foreground">Dowód osobisty</span> lub inny
                    dokument ze zdjęciem potwierdzający tożsamość
                  </div>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <ClipboardText size={18} weight="duotone" className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <span className="font-medium text-foreground">Skierowanie do szpitala</span>{' '}
                    -- oryginał wystawiony przez lekarza kierującego (nie dotyczy przyjęcia nagłego)
                  </div>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <FileText size={18} weight="duotone" className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <span className="font-medium text-foreground">Wyniki dotychczasowych badań</span>{' '}
                    -- dokumentacja medyczna, karty informacyjne z poprzednich pobytów, wyniki badań
                    laboratoryjnych i obrazowych
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <h3 className="text-base font-semibold text-foreground mb-4">
                Dokumenty dodatkowe
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                W zależności od sytuacji mogą być potrzebne dodatkowe dokumenty. Przygotuj je, jeśli
                Cię dotyczą.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Briefcase size={18} weight="duotone" className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <span className="font-medium text-foreground">NIP pracodawcy</span> -- potrzebny
                    do wystawienia zwolnienia lekarskiego (e-ZLA)
                  </div>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Pill size={18} weight="duotone" className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <span className="font-medium text-foreground">Lista przyjmowanych leków</span>{' '}
                    -- nazwy, dawki i częstotliwość stosowania. Najlepiej przynieś leki w oryginalnych
                    opakowaniach
                  </div>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Info size={18} weight="duotone" className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <span className="font-medium text-foreground">Karta alergiologiczna</span> --
                    jeśli posiadasz, informacja o alergiach i uczuleniach na leki
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Niezbędnik Pacjenta */}
      <section className="py-16 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <TShirt size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Niezbędnik Pacjenta
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Co zabrać */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle size={20} weight="duotone" className="text-green-600 dark:text-green-400" />
                <h3 className="text-base font-semibold text-foreground">Co zabrać ze sobą</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-green-600 dark:text-green-400 mt-1 shrink-0" />
                  <span>
                    <strong className="text-foreground">Piżamę lub dres i koszulkę</strong> --
                    wygodne ubranie do spania i przebywania na oddziale
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-green-600 dark:text-green-400 mt-1 shrink-0" />
                  <span>
                    <strong className="text-foreground">Obuwie zmienne</strong> -- kapcie lub klapki
                    z antypoślizgową podeszwą
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-green-600 dark:text-green-400 mt-1 shrink-0" />
                  <span>
                    <strong className="text-foreground">Przybory toaletowe</strong> -- szczoteczka,
                    pasta do zębów, mydło, ręcznik, chusteczki higieniczne
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-green-600 dark:text-green-400 mt-1 shrink-0" />
                  <span>
                    <strong className="text-foreground">Leki w oryginalnych opakowaniach</strong> --
                    wszystkie przyjmowane na stałe leki wraz z ulotkami
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-green-600 dark:text-green-400 mt-1 shrink-0" />
                  <span>
                    <strong className="text-foreground">Kubek i sztućce</strong> -- opcjonalnie,
                    własne naczynia do posiłków
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-green-600 dark:text-green-400 mt-1 shrink-0" />
                  <span>
                    <strong className="text-foreground">Telefon z ładowarką</strong> -- do kontaktu
                    z rodziną
                  </span>
                </li>
              </ul>
            </div>

            {/* Czego NIE zabierać */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <XCircle size={20} weight="duotone" className="text-red-600 dark:text-red-400" />
                <h3 className="text-base font-semibold text-foreground">Czego nie zabierać</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Szpital nie ponosi odpowiedzialności za rzeczy wartościowe przechowywane na oddziale.
                Zostaw w domu:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-red-600 dark:text-red-400 mt-1 shrink-0" />
                  <span>
                    <strong className="text-foreground">Biżuterię i kosztowności</strong> --
                    pierścionki, łańcuszki, zegarki
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-red-600 dark:text-red-400 mt-1 shrink-0" />
                  <span>
                    <strong className="text-foreground">Dużych sum pieniędzy</strong> -- zabierz
                    tylko drobne na podstawowe potrzeby
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-red-600 dark:text-red-400 mt-1 shrink-0" />
                  <span>
                    <strong className="text-foreground">Sprzętu elektronicznego</strong> -- poza
                    telefonem, zostaw laptopy i tablety w domu
                  </span>
                </li>
              </ul>

              <div className="mt-6 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <Warning size={16} weight="duotone" className="text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
                  <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
                    Jeśli musisz mieć przy sobie wartościowe przedmioty, skorzystaj z depozytu
                    szpitalnego (szczegóły poniżej).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tryby Przyjęcia */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <CalendarCheck size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Tryby przyjęcia
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Przyjęcie planowe */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <CalendarCheck size={20} weight="duotone" />
                </div>
                <h3 className="text-base font-semibold text-foreground">Przyjęcie planowe</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Dotyczy pacjentów ze skierowaniem do szpitala, których termin hospitalizacji został
                wcześniej ustalony. Przyjęcie planowe odbywa się w Izbie Przyjęć.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock size={16} weight="bold" className="text-primary shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Zgłoś się w wyznaczonym dniu w godzinach{' '}
                    <strong className="text-foreground">7:00 - 14:00</strong>
                  </p>
                </div>
                <h4 className="text-xs font-semibold text-foreground uppercase tracking-wide pt-2">
                  Przebieg przyjęcia planowego
                </h4>
                <ol className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                      1
                    </span>
                    Zgłoś się do Izby Przyjęć z kompletem dokumentów
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                      2
                    </span>
                    Weryfikacja danych osobowych i ubezpieczenia
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                      3
                    </span>
                    Podpisanie zgody na hospitalizację i leczenie
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                      4
                    </span>
                    Wstępna ocena stanu zdrowia i skierowanie na oddział
                  </li>
                </ol>
              </div>
            </div>

            {/* Przyjęcie nagłe */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-red-100 dark:bg-red-900/30 text-red-600 flex items-center justify-center">
                  <Siren size={20} weight="duotone" />
                </div>
                <h3 className="text-base font-semibold text-foreground">Przyjęcie nagłe</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                W stanach zagrożenia życia lub zdrowia nie potrzebujesz skierowania. Zgłoś się
                bezpośrednio do Szpitalnego Oddziału Ratunkowego (SOR) lub wezwij pogotowie.
              </p>

              <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-4">
                <p className="text-sm font-semibold text-red-700 dark:text-red-400 mb-1">
                  Numer alarmowy
                </p>
                <a href="tel:112" className="text-2xl font-bold text-red-700 dark:text-red-400">
                  112
                </a>
                <p className="text-xs text-muted-foreground mt-2">
                  SOR czynny jest całą dobę, 7 dni w tygodniu.
                </p>
              </div>

              <h4 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2">
                Kiedy zgłosić się na SOR
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-red-600 dark:text-red-400 mt-1 shrink-0" />
                  Nagły ból w klatce piersiowej, duszność
                </li>
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-red-600 dark:text-red-400 mt-1 shrink-0" />
                  Urazy wymagające natychmiastowej pomocy
                </li>
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-red-600 dark:text-red-400 mt-1 shrink-0" />
                  Zaburzenia świadomości, utrata przytomności
                </li>
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-red-600 dark:text-red-400 mt-1 shrink-0" />
                  Silne krwawienie, zatrucie
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Depozyt */}
      <section className="py-16 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <Lock size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Depozyt rzeczy wartościowych
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <h3 className="text-base font-semibold text-foreground mb-4">
                Jak działa depozyt szpitalny
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Szpital prowadzi depozyt, w którym możesz bezpiecznie przechować pieniądze,
                dokumenty i inne wartościowe przedmioty na czas hospitalizacji. Jest to jedyny
                sposób, w jaki szpital bierze odpowiedzialność za Twoje rzeczy wartościowe.
              </p>

              <h4 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-3">
                Procedura złożenia depozytu
              </h4>
              <ol className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                    1
                  </span>
                  Zgłoś chęć złożenia depozytu w Izbie Przyjęć podczas przyjęcia lub na oddziale
                  u pielęgniarki oddziałowej
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                    2
                  </span>
                  Rzeczy zostaną spisane w protokole i zabezpieczone
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                    3
                  </span>
                  Otrzymasz pokwitowanie, które zachowaj do momentu odbioru
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                    4
                  </span>
                  Przy wypisie odbierz depozyt na podstawie pokwitowania i dowodu tożsamości
                </li>
              </ol>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <h3 className="text-base font-semibold text-foreground mb-4">Co można zdeponować</h3>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle size={14} weight="bold" className="text-green-600 dark:text-green-400 mt-0.5 shrink-0" />
                  Pieniądze (gotówka)
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle size={14} weight="bold" className="text-green-600 dark:text-green-400 mt-0.5 shrink-0" />
                  Dokumenty (dowód osobisty, prawo jazdy)
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle size={14} weight="bold" className="text-green-600 dark:text-green-400 mt-0.5 shrink-0" />
                  Biżuteria i zegarki
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle size={14} weight="bold" className="text-green-600 dark:text-green-400 mt-0.5 shrink-0" />
                  Klucze
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle size={14} weight="bold" className="text-green-600 dark:text-green-400 mt-0.5 shrink-0" />
                  Karty płatnicze
                </li>
              </ul>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Depozyt jest <strong className="text-foreground">bezpłatny</strong>. Rzeczy
                  niezdeponowane przechowywane są na odpowiedzialność pacjenta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt - Izba Przyjęć */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <Phone size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Kontakt z Izbą Przyjęć
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <h3 className="text-base font-semibold text-foreground mb-4">Izba Przyjęć</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock size={16} weight="bold" className="text-primary shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Czynna <strong className="text-foreground">całą dobę</strong>, 7 dni w tygodniu
                  </p>
                </div>
                <div className="flex flex-col gap-1 pt-2">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Telefon
                  </span>
                  <a
                    href="tel:+48833552131"
                    className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    83&nbsp;355&nbsp;21&nbsp;31
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <h3 className="text-base font-semibold text-foreground mb-4">Masz pytania?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Jeśli masz wątpliwości dotyczące przyjęcia, dokumentów lub przygotowania do
                hospitalizacji, zadzwoń do Izby Przyjęć. Personel udzieli Ci wszystkich potrzebnych
                informacji.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/dla-pacjenta"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  Informacje dla pacjenta
                  <ArrowRight size={14} weight="bold" />
                </Link>
                <Link
                  href="/pobyt-i-odwiedziny"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  Pobyt i odwiedziny
                  <ArrowRight size={14} weight="bold" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
