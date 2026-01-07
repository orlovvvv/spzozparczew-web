import Link from 'next/link'
import React from 'react'
import { Heart, Phone, Envelope, Clock } from '@phosphor-icons/react/dist/ssr'

export async function Footer() {
  return (
    <footer className="mt-auto bg-white pt-16 pb-8 border-t border-slate-200 dark:bg-slate-950 dark:border-slate-800" id="kontakt">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Address */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <Heart size={24} weight="duotone" className="text-primary fill-primary/20" />
              <span className="text-foreground font-bold tracking-tight text-sm">
                SPZOZ Parczew
              </span>
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed mb-4">
              ul. Kościelna 136
              <br />
              21-200 Parczew
              <br />
              NIP: 539-13-17-640
            </p>
          </div>

          {/* Szpital */}
          <div>
            <h4 className="font-semibold text-foreground text-sm mb-4">Szpital</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Link href="/o-nas" className="hover:text-primary transition-colors">
                  O nas
                </Link>
              </li>
              <li>
                <Link href="/dyrekcja" className="hover:text-primary transition-colors">
                  Dyrekcja
                </Link>
              </li>
              <li>
                <Link href="/struktura" className="hover:text-primary transition-colors">
                  Struktura organizacyjna
                </Link>
              </li>
              <li>
                <Link href="/projekty-unijne" className="hover:text-primary transition-colors">
                  Projekty unijne
                </Link>
              </li>
            </ul>
          </div>

          {/* Dla Pacjenta */}
          <div>
            <h4 className="font-semibold text-foreground text-sm mb-4">Dla Pacjenta</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Link href="/rejestracja" className="hover:text-primary transition-colors">
                  Rejestracja Online
                </Link>
              </li>
              <li>
                <Link href="/dla-pacjenta#prawa" className="hover:text-primary transition-colors">
                  Prawa Pacjenta
                </Link>
              </li>
              <li>
                <Link href="/dla-pacjenta#odwiedziny" className="hover:text-primary transition-colors">
                  Odwiedziny
                </Link>
              </li>
              <li>
                <Link href="/cennik" className="hover:text-primary transition-colors">
                  Cennik
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="font-semibold text-foreground text-sm mb-4">Kontakt</h4>
            <ul className="space-y-3 text-xs text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone size={14} weight="bold" className="text-primary shrink-0" />
                <a href="tel:+48833552102" className="hover:text-primary transition-colors">
                  Centrala: 83 355 21 02
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Envelope size={14} weight="bold" className="text-primary shrink-0" />
                <a href="mailto:sekretariat@spzozparczew.pl" className="hover:text-primary transition-colors">
                  sekretariat@spzozparczew.pl
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={14} weight="bold" className="text-primary shrink-0" />
                <span>Administracja: 7:25 - 15:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-muted-foreground">
            © {new Date().getFullYear()} SPZOZ Parczew. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex gap-4">
            <Link href="/polityka-prywatnosci" className="text-[10px] text-muted-foreground hover:text-foreground transition-colors">
              Polityka Prywatności
            </Link>
            <Link href="/mapa-strony" className="text-[10px] text-muted-foreground hover:text-foreground transition-colors">
              Mapa Strony
            </Link>
            <Link href="/deklaracja-dostepnosci" className="text-[10px] text-muted-foreground hover:text-foreground transition-colors">
              Deklaracja Dostępności
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
