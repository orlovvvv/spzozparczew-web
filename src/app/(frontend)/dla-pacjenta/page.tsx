import type { Metadata } from 'next'
import React from 'react'
import Link from 'next/link'
import {
  UserCircle,
  Phone,
  Clock,
  ClipboardText,
  Buildings,
  Stethoscope,
  ArrowRight,
  FirstAid,
  FileText,
  IdentificationCard,
  UsersThree,
  CaretRight,
} from '@phosphor-icons/react/dist/ssr'

export const metadata: Metadata = {
  title: 'Dla Pacjenta - Informacje Praktyczne | SPZOZ Parczew',
  description:
    'Praktyczne informacje dla pacjentów SPZOZ Parczew: rejestracja, przyjęcie do szpitala, odwiedziny, dokumentacja medyczna.',
}

export default function ForPatientsPage() {
  return (
    <div className="py-8">
      {/* Page Header */}
      <section className="py-12 container">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-primary/10 text-primary rounded-xl">
              <UserCircle size={24} weight="duotone" />
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
              Informacje dla Pacjenta
            </h1>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Wszystko, co musisz wiedzieć przed wizytą lub pobytem w naszym szpitalu. Znajdziesz tu
            informacje o rejestracji, przyjęciu, odwiedzinach i dokumentacji medycznej.
          </p>
        </div>
      </section>

      {/* Quick Links to Departments & Clinics */}
      <section className="pb-12 container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/oddzialy"
            className="group flex items-center justify-between gap-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                <Buildings size={24} weight="duotone" />
              </div>
              <div>
                <h2 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                  Oddziały Szpitalne
                </h2>
                <p className="text-sm text-muted-foreground">
                  Lista oddziałów i informacje kontaktowe
                </p>
              </div>
            </div>
            <ArrowRight
              size={20}
              weight="bold"
              className="text-muted-foreground group-hover:text-primary shrink-0 transition-colors"
            />
          </Link>
          <Link
            href="/poradnie"
            className="group flex items-center justify-between gap-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 hover:border-blue-500/30 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                <Stethoscope size={24} weight="duotone" />
              </div>
              <div>
                <h2 className="text-base font-semibold text-foreground group-hover:text-blue-600 transition-colors">
                  Poradnie Specjalistyczne
                </h2>
                <p className="text-sm text-muted-foreground">
                  Poradnie, diagnostyka i grafiki przyjęć
                </p>
              </div>
            </div>
            <ArrowRight
              size={20}
              weight="bold"
              className="text-muted-foreground group-hover:text-blue-600 shrink-0 transition-colors"
            />
          </Link>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <Phone size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Rejestracja
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <h3 className="text-base font-semibold text-foreground mb-4">
                Rejestracja Telefoniczna
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock size={16} weight="bold" className="text-primary shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Czynna od poniedziałku do piątku w godzinach <strong className="text-foreground">7:00 - 15:00</strong>
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      Poradnie Specjalistyczne
                    </span>
                    <a
                      href="tel:+48833552173"
                      className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      83&nbsp;355&nbsp;21&nbsp;73
                    </a>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      Diagnostyka Obrazowa
                    </span>
                    <a
                      href="tel:+48833552192"
                      className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      83&nbsp;355&nbsp;21&nbsp;92
                    </a>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      Pracownia Endoskopowa
                    </span>
                    <a
                      href="tel:+48833552152"
                      className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      83&nbsp;355&nbsp;21&nbsp;52
                    </a>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      Zdrowie Psychiczne
                    </span>
                    <a
                      href="tel:+48833552172"
                      className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      83&nbsp;355&nbsp;21&nbsp;72
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <h3 className="text-base font-semibold text-foreground mb-4">
                Rejestracja Online
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Umów wizytę bez wychodzenia z domu. Nasz e-Portal Pacjenta umożliwia rejestrację
                online do wybranych poradni specjalistycznych.
              </p>
              <Link
                href="/e-portal"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Przejdź do e-Portalu Pacjenta
                <CaretRight size={14} weight="bold" />
              </Link>

              <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                <h4 className="text-sm font-semibold text-foreground mb-3">
                  Wymagane dokumenty przy rejestracji
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <IdentificationCard size={16} weight="bold" className="text-primary mt-0.5 shrink-0" />
                    Dowód osobisty lub inny dokument tożsamości
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <FileText size={16} weight="bold" className="text-primary mt-0.5 shrink-0" />
                    Skierowanie (jeśli wymagane do danej poradni)
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <ClipboardText size={16} weight="bold" className="text-primary mt-0.5 shrink-0" />
                    Wyniki wcześniejszych badań (jeśli posiada)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Section */}
      <section className="py-16 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <FirstAid size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Przyjęcie do Szpitala
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <h3 className="text-base font-semibold text-foreground mb-3">Przyjęcie planowe</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Przyjęcie planowe odbywa się na podstawie skierowania lekarskiego. Zgłoś się do
                Izby Przyjęć w wyznaczonym terminie.
              </p>
              <h4 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2">
                Co zabrać ze sobą
              </h4>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Dowód osobisty
                </li>
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Skierowanie do szpitala
                </li>
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Wyniki badań i dokumentację medyczną
                </li>
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Przyjmowane leki
                </li>
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Przybory toaletowe i piżamę
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <h3 className="text-base font-semibold text-foreground mb-3">Przyjęcie nagłe</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                W stanach zagrożenia życia lub zdrowia, zgłoś się bezpośrednio do Szpitalnego
                Oddziału Ratunkowego (SOR) lub zadzwoń na numer alarmowy.
              </p>
              <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-4">
                <p className="text-sm font-semibold text-destructive mb-1">Numer alarmowy</p>
                <a
                  href="tel:112"
                  className="text-2xl font-bold text-destructive"
                >
                  112
                </a>
                <p className="text-xs text-muted-foreground mt-2">
                  SOR czynny jest całą dobę, 7 dni w tygodniu.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <h3 className="text-base font-semibold text-foreground mb-3">Izba Przyjęć</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Izba Przyjęć stanowi miejsce rejestracji pacjentów kierowanych na leczenie
                szpitalne. Tu realizowane są formalności związane z przyjęciem.
              </p>
              <h4 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2">
                Formalności
              </h4>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Weryfikacja danych osobowych
                </li>
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Podpisanie zgód na leczenie
                </li>
                <li className="flex items-start gap-2">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Wstępna ocena stanu zdrowia
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Visiting Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <UsersThree size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Odwiedziny
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <h3 className="text-base font-semibold text-foreground mb-4">Godziny odwiedzin</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock size={16} weight="bold" className="text-primary shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Codziennie w godzinach <strong className="text-foreground">14:00 - 18:00</strong>
                  </p>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Godziny odwiedzin mogą ulec zmianie w zależności od sytuacji epidemicznej
                  lub zarządzenia Dyrektora Szpitala. Aktualne informacje są dostępne na tablicach
                  informacyjnych na oddziałach.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <h3 className="text-base font-semibold text-foreground mb-4">Zasady odwiedzin</h3>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Przy pacjencie mogą przebywać jednocześnie maksymalnie 2 osoby odwiedzające
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Prosimy o zachowanie ciszy i spokoju na oddziałach
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Osoby z objawami infekcji proszone są o powstrzymanie się od odwiedzin
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Prosimy o dezynfekcję rąk przed wejściem na oddział
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-16 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <FileText size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Dokumentacja Medyczna
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <h3 className="text-base font-semibold text-foreground mb-4">
                Udostępnianie dokumentacji
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Pacjent lub osoba przez niego upoważniona ma prawo do uzyskania kopii dokumentacji
                medycznej. Wnioski przyjmowane są w Dziale Statystyki Medycznej.
              </p>
              <h4 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2">
                Jak uzyskać dokumentację
              </h4>
              <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                <li>Złóż pisemny wniosek w Dziale Statystyki Medycznej</li>
                <li>Okaż dowód osobisty (lub upoważnienie)</li>
                <li>Odbierz dokumentację w wyznaczonym terminie</li>
              </ol>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <h3 className="text-base font-semibold text-foreground mb-4">
                Prawa pacjenta
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Każdy pacjent ma prawo do informacji o swoim stanie zdrowia, poszanowania
                intymności i godności oraz dostępu do dokumentacji medycznej.
              </p>
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4">
                <p className="text-xs font-semibold text-foreground mb-1.5">
                  Rzecznik Praw Pacjenta
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  Bezpłatna infolinia czynna pn-pt 8:00 - 18:00
                </p>
                <a
                  href="tel:+48800190590"
                  className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                >
                  800&nbsp;190&nbsp;590
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
