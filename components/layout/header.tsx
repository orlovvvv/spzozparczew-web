"use client";

import { ExternalLink, Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const departments = [
  "Anestezjologii i Intensywnej Terapii",
  "Chirurgiczno-Urazowy",
  "Dziecięcy",
  "Geriatryczny",
  "Chorób Wewnętrznych",
  "Rehabilitacyjny",
  "Szpitalny Oddział Ratunkowy (SOR)",
  "Psychiatryczny",
  "Dzienny Psychiatryczny",
  "Leczenia Uzależnień",
  "Dzienny Terapii Uzależnienia od Alkoholu",
];

const clinics = [
  "Urologiczna",
  "Gastroenterologiczna",
  "Ginekologiczno-Położnicza",
  "Chirurgii Urazowo-Ortopedycznej",
  "Laryngologiczna",
  "Neurologiczna",
  "Endokrynologiczna",
  "Gruźlicy i Chorób Płuc",
  "Kardiologiczna",
  "Hematologiczna",
  "Nocnej i Świątecznej Opieki Zdrowotnej",
  "Rehabilitacyjna",
  "Pediatryczna",
  "Proktologiczna",
  "Diabetologiczna",
  "Terapii Uzależnienia od Alkoholu",
];

function ListItem({
  className,
  title,
  children,
  href = "#",
}: {
  className?: string;
  title: string;
  children?: React.ReactNode;
  href?: string;
}) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "group block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors duration-medium-2 ease-standard hover:bg-accent focus:bg-accent focus:ring-2 focus:ring-primary focus:ring-offset-2 high-contrast:hover:bg-primary high-contrast:hover:text-primary-foreground high-contrast:focus:bg-primary high-contrast:focus:text-primary-foreground",
            className,
          )}
        >
          <div className="text-sm font-medium leading-none text-foreground group-hover:text-current">
            {title}
          </div>
          {children && (
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-current">
              {children}
            </p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export function Header() {
  return (
    <header role="banner" className="relative z-40">
      <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/"
          aria-label="SPZOZ Parczew - strona główna"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg p-1 -m-1"
        >
          <div
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 dark:bg-primary/20 high-contrast:bg-primary shadow-sm group-hover:bg-primary/15 dark:group-hover:bg-primary/30 high-contrast:group-hover:bg-primary/90 transition-colors duration-medium-2 ease-standard"
            aria-hidden="true"
          >
            <span
              className="text-primary dark:text-primary high-contrast:text-primary-foreground font-semibold tracking-tight leading-none text-lg"
              aria-hidden="true"
            >
              SP
            </span>
          </div>
          <span
            className="text-base font-semibold tracking-tight text-foreground hidden sm:block group-hover:text-foreground/80 high-contrast:group-hover:text-foreground transition-colors duration-medium-2 ease-standard"
            aria-hidden="true"
          >
            SPZOZ Parczew
          </span>
        </Link>

        <NavigationMenu
          id="main-navigation"
          className="hidden xl:flex"
          aria-label="Nawigacja główna"
        >
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-white/60 backdrop-blur-xl dark:bg-white/10 high-contrast:bg-background high-contrast:backdrop-blur-none text-foreground hover:bg-white/80 dark:hover:bg-white/20 focus:bg-white/80 dark:focus:bg-white/20 data-[state=open]:bg-white/80 dark:data-[state=open]:bg-white/20 border border-white/40 dark:border-white/20 high-contrast:border-foreground shadow-sm">
                Działalność Lecznicza
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white/80 backdrop-blur-xl dark:bg-white/10 high-contrast:bg-popover high-contrast:backdrop-blur-none border border-white/40 dark:border-white/20 high-contrast:border-2 high-contrast:border-foreground shadow-lg dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                <div className="grid gap-3 p-6 min-w-[min(600px,90vw)] max-w-[min(700px,95vw)] lg:grid-cols-[1fr_1fr]">
                  <div>
                    <h3 className="font-medium text-sm text-foreground mb-3">
                      Oddziały szpitalne
                    </h3>
                    <ul className="space-y-1">
                      {departments.map((dept) => (
                        <li key={dept}>
                          <Link
                            href="#oddzialy"
                            className="text-sm text-muted-foreground hover:text-primary block py-1.5 rounded transition-colors duration-short-4 ease-standard focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                          >
                            {dept}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-foreground mb-3">
                      Poradnie specjalistyczne
                    </h3>
                    <ul className="space-y-1">
                      {clinics.map((clinic) => (
                        <li key={clinic}>
                          <Link
                            href="#poradnie"
                            className="text-sm text-muted-foreground hover:text-primary block py-1.5 rounded transition-colors duration-short-4 ease-standard focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                          >
                            {clinic}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-white/60 backdrop-blur-xl dark:bg-white/10 high-contrast:bg-background high-contrast:backdrop-blur-none text-foreground hover:bg-white/80 dark:hover:bg-white/20 focus:bg-white/80 dark:focus:bg-white/20 data-[state=open]:bg-white/80 dark:data-[state=open]:bg-white/20 border border-white/40 dark:border-white/20 high-contrast:border-foreground shadow-sm">
                Dla Pacjenta
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white/80 backdrop-blur-xl dark:bg-white/10 high-contrast:bg-popover high-contrast:backdrop-blur-none border border-white/40 dark:border-white/20 high-contrast:border-2 high-contrast:border-foreground shadow-lg dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                <ul className="grid min-w-[min(400px,90vw)] max-w-[min(500px,95vw)] gap-3 p-4">
                  <ListItem title="Rejestracja" href="#dla-pacjentow">
                    Informacje o rejestracji do poradni specjalistycznych
                  </ListItem>
                  <ListItem title="Prawa i Obowiązki Pacjenta" href="#">
                    Dokumenty i regulaminy
                  </ListItem>
                  <ListItem title="Dokumentacja Medyczna" href="#">
                    Zasady udostępniania dokumentacji
                  </ListItem>
                  <ListItem title="Telefony Kontaktowe" href="#kontakt">
                    Numery do rejestracji i oddziałów
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-white/60 backdrop-blur-xl dark:bg-white/10 high-contrast:bg-background high-contrast:backdrop-blur-none text-foreground hover:bg-white/80 dark:hover:bg-white/20 focus:bg-white/80 dark:focus:bg-white/20 data-[state=open]:bg-white/80 dark:data-[state=open]:bg-white/20 border border-white/40 dark:border-white/20 high-contrast:border-foreground shadow-sm">
                O Nas
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white/80 backdrop-blur-xl dark:bg-white/10 high-contrast:bg-popover high-contrast:backdrop-blur-none border border-white/40 dark:border-white/20 high-contrast:border-2 high-contrast:border-foreground shadow-lg dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                <ul className="grid min-w-[min(400px,90vw)] max-w-[min(500px,95vw)] gap-3 p-4">
                  <ListItem title="Informacje o Szpitalu" href="#">
                    Historia i struktura organizacyjna
                  </ListItem>
                  <ListItem title="Aktualności" href="#aktualnosci">
                    Ogłoszenia i wydarzenia
                  </ListItem>
                  <ListItem title="Jakość i Certyfikaty" href="#">
                    Standardy i akredytacje
                  </ListItem>
                  <ListItem title="Deklaracja Dostępności" href="#">
                    Informacje o dostępności cyfrowej
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="#kontakt"
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-white/60 backdrop-blur-xl dark:bg-white/10 high-contrast:bg-background high-contrast:backdrop-blur-none text-foreground hover:bg-white/80 dark:hover:bg-white/20 focus:bg-white/80 dark:focus:bg-white/20 border border-white/40 dark:border-white/20 high-contrast:border-foreground shadow-sm",
                )}
              >
                Kontakt
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            className="hidden md:inline-flex rounded-full border-white/40 dark:border-white/20 high-contrast:border-foreground bg-white/60 dark:bg-white/10 high-contrast:bg-background backdrop-blur-xl high-contrast:backdrop-blur-none text-foreground hover:bg-white/80 dark:hover:bg-white/20 hover:border-white/50 shadow-sm transition-all duration-medium-2 ease-standard"
            asChild
          >
            <a
              href="https://wyniki.spzozparczew.pl:5443/web"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wyniki badań
              <ExternalLink className="h-3.5 w-3.5 ml-1.5" aria-hidden="true" />
            </a>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="xl:hidden rounded-full border-white/40 dark:border-white/20 high-contrast:border-foreground bg-white/60 dark:bg-white/10 high-contrast:bg-background backdrop-blur-xl high-contrast:backdrop-blur-none text-foreground hover:bg-white/80 dark:hover:bg-white/20 hover:border-white/50 shadow-sm transition-all duration-medium-2 ease-standard"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Otwórz menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[320px] overflow-y-auto p-0 bg-white/80 backdrop-blur-xl dark:bg-black/80 high-contrast:bg-popover high-contrast:backdrop-blur-none"
            >
              <SheetTitle className="sr-only">Menu nawigacyjne</SheetTitle>
              <nav
                className="flex flex-col gap-8 px-6 pt-16 pb-6"
                aria-label="Menu mobilne"
              >
                <div>
                  <h3 className="font-semibold text-foreground mb-2 px-3 text-sm uppercase tracking-wide">
                    Działalność Lecznicza
                  </h3>
                  <div className="flex flex-col -mx-3">
                    <Link
                      href="#poradnie"
                      className="flex items-center min-h-[48px] px-3 text-sm text-muted-foreground hover:text-foreground hover:bg-accent active:bg-accent/80 rounded-lg transition-colors duration-short-4 ease-standard focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                    >
                      Poradnie specjalistyczne
                    </Link>
                    <Link
                      href="#oddzialy"
                      className="flex items-center min-h-[48px] px-3 text-sm text-muted-foreground hover:text-foreground hover:bg-accent active:bg-accent/80 rounded-lg transition-colors duration-short-4 ease-standard focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                    >
                      Oddziały szpitalne
                    </Link>
                    <Link
                      href="#diagnostyka"
                      className="flex items-center min-h-[48px] px-3 text-sm text-muted-foreground hover:text-foreground hover:bg-accent active:bg-accent/80 rounded-lg transition-colors duration-short-4 ease-standard focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                    >
                      Diagnostyka
                    </Link>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2 px-3 text-sm uppercase tracking-wide">
                    Dla Pacjenta
                  </h3>
                  <div className="flex flex-col -mx-3">
                    <Link
                      href="#dla-pacjentow"
                      className="flex items-center min-h-[48px] px-3 text-sm text-muted-foreground hover:text-foreground hover:bg-accent active:bg-accent/80 rounded-lg transition-colors duration-short-4 ease-standard focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                    >
                      Rejestracja
                    </Link>
                    <Link
                      href="#kontakt"
                      className="flex items-center min-h-[48px] px-3 text-sm text-muted-foreground hover:text-foreground hover:bg-accent active:bg-accent/80 rounded-lg transition-colors duration-short-4 ease-standard focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                    >
                      Telefony kontaktowe
                    </Link>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2 px-3 text-sm uppercase tracking-wide">
                    O Nas
                  </h3>
                  <div className="flex flex-col -mx-3">
                    <Link
                      href="#aktualnosci"
                      className="flex items-center min-h-[48px] px-3 text-sm text-muted-foreground hover:text-foreground hover:bg-accent active:bg-accent/80 rounded-lg transition-colors duration-short-4 ease-standard focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                    >
                      Aktualności
                    </Link>
                    <Link
                      href="#kontakt"
                      className="flex items-center min-h-[48px] px-3 text-sm text-muted-foreground hover:text-foreground hover:bg-accent active:bg-accent/80 rounded-lg transition-colors duration-short-4 ease-standard focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                    >
                      Kontakt
                    </Link>
                  </div>
                </div>
                <div className="pt-2 border-t border-outline-variant">
                  <Button asChild className="w-full rounded-full" size="lg">
                    <a
                      href="https://wyniki.spzozparczew.pl:5443/web"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Wyniki badań online
                      <ExternalLink
                        className="h-4 w-4 ml-2"
                        aria-hidden="true"
                      />
                    </a>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
