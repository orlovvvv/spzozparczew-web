import type { Metadata } from 'next'
import {
  HandHeart,
  Users,
  BookOpenText,
  Path,
  Phone,
  EnvelopeSimple,
  CaretRight,
  CheckCircle,
  UserCircleCheck,
  Handshake,
  ClipboardText,
  Heart,
} from '@phosphor-icons/react/dist/ssr'

export const metadata: Metadata = {
  title: 'Wolontariat | SPZOZ Parczew',
  description:
    'Wolontariat w SPZOZ Parczew — dołącz do zespołu wolontariuszy wspierających pacjentów Zakładu Opiekuńczo-Leczniczego.',
}

export default function WolontariatPage() {
  return (
    <div className="py-8">
      {/* Page Header */}
      <section className="py-12 container">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-primary/10 text-primary rounded-xl">
              <HandHeart size={24} weight="duotone" />
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
              Wolontariat
            </h1>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nasz szpital otwiera się na osoby, które chcą poświęcić swój czas dla drugiego
            człowieka. Wolontariusze działają przede wszystkim w Zakładzie Opiekuńczo-Leczniczym,
            gdzie ich obecność jest dla pacjentów szczególnie cenna. Nie potrzebujesz
            wykształcenia medycznego — wystarczy empatia, cierpliwość i chęć pomocy.
          </p>
        </div>
      </section>

      {/* What Volunteers Do */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <Heart size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Czym Zajmują się Wolontariusze
            </h2>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mb-8">
            Pacjenci Zakładu Opiekuńczo-Leczniczego to najczęściej osoby starsze, które wymagają
            długotrwałej opieki. Personel medyczny zapewnia im leczenie i pielęgnację — ale czas
            na rozmowę czy wspólne spędzenie chwili bywa ograniczony. Tu wkraczają wolontariusze.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Users size={20} weight="duotone" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">Towarzyszenie</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Rozmowa, wysłuchanie, obecność. Dla wielu pacjentów wizyta wolontariusza to
                jedyny kontakt z osobą spoza personelu.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <BookOpenText size={20} weight="duotone" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                Czytanie i aktywności
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Czytanie prasy i książek, wspólne gry planszowe, pomoc w pisaniu listów, drobne
                zajęcia manualne.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Handshake size={20} weight="duotone" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">Pomoc codzienna</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Spacery po terenie szpitala, asystowanie podczas posiłków, pomoc w drobnych
                codziennych czynnościach.
              </p>
            </div>
          </div>

          <div className="mt-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Ważne:</strong> Wolontariusze nie wykonują
              czynności medycznych ani pielęgniarskich. Ich rola to wsparcie społeczne i
              emocjonalne pacjentów.
            </p>
          </div>
        </div>
      </section>

      {/* Who Can Volunteer */}
      <section className="py-16 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <UserCircleCheck size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Kto Może Zostać Wolontariuszem
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <h3 className="text-base font-semibold text-foreground mb-4">
                Wymagania formalne
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle size={18} weight="duotone" className="text-primary mt-0.5 shrink-0" />
                  <span>
                    Ukończone <strong className="text-foreground">18 lat</strong> (osoby w wieku
                    16-17 lat mogą uczestniczyć za pisemną zgodą rodzica lub opiekuna prawnego)
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle size={18} weight="duotone" className="text-primary mt-0.5 shrink-0" />
                  <span>
                    Dobry stan zdrowia — brak przeciwwskazań do przebywania w środowisku szpitalnym
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle size={18} weight="duotone" className="text-primary mt-0.5 shrink-0" />
                  <span>Niekaralność (oświadczenie składane przy podpisaniu porozumienia)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <h3 className="text-base font-semibold text-foreground mb-4">
                Cechy osobowe
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Nie szukamy osób idealnych, ale szukamy osób, które potrafią:
              </p>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Okazać cierpliwość i empatię wobec osób starszych i chorych
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Zachować dyskrecję — szanować prywatność pacjentów
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Systematycznie wywiązywać się z przyjętych zobowiązań
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Pracować w zespole i stosować się do zasad obowiązujących w szpitalu
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <Path size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Jak Dołączyć
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 relative">
              <div className="text-xs font-bold text-primary/40 mb-3">01</div>
              <h3 className="text-base font-semibold text-foreground mb-2">Kontakt</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Skontaktuj się z koordynatorem wolontariatu telefonicznie lub mailowo. Opowiedz
                krótko o sobie i swojej motywacji.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 relative">
              <div className="text-xs font-bold text-primary/40 mb-3">02</div>
              <h3 className="text-base font-semibold text-foreground mb-2">Spotkanie</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Umówimy się na rozmowę w szpitalu. Poznasz zasady wolontariatu i zobaczysz
                oddział, na którym będziesz działać.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 relative">
              <div className="text-xs font-bold text-primary/40 mb-3">03</div>
              <h3 className="text-base font-semibold text-foreground mb-2">Szkolenie</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Krótkie szkolenie wstępne obejmujące zasady bezpieczeństwa, higieny szpitalnej
                oraz komunikacji z pacjentami.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 relative">
              <div className="text-xs font-bold text-primary/40 mb-3">04</div>
              <h3 className="text-base font-semibold text-foreground mb-2">Porozumienie</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Podpisanie porozumienia wolontariackiego zgodnie z ustawą o działalności pożytku
                publicznego. Określamy w nim zakres i harmonogram.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <ClipboardText size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Kontakt
            </h2>
          </div>

          <div className="max-w-lg">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <h3 className="text-base font-semibold text-foreground mb-1">
                Koordynator Wolontariatu
              </h3>
              <p className="text-sm text-muted-foreground mb-5">
                Zakład Opiekuńczo-Leczniczy, SPZOZ Parczew
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone size={16} weight="bold" className="text-primary shrink-0" />
                  <a
                    href="tel:+48833552100"
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    83&nbsp;355&nbsp;21&nbsp;00
                  </a>
                  <span className="text-xs text-muted-foreground">(centrala szpitala)</span>
                </div>
                <div className="flex items-center gap-3">
                  <EnvelopeSimple size={16} weight="bold" className="text-primary shrink-0" />
                  <a
                    href="mailto:wolontariat@spzozparczew.pl"
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    wolontariat@spzozparczew.pl
                  </a>
                </div>
              </div>

              <div className="mt-5 pt-5 border-t border-slate-100 dark:border-slate-800">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Odpowiadamy w ciągu kilku dni roboczych. W temacie wiadomości wpisz
                  &quot;Wolontariat&quot; — ułatwi nam to szybsze skontaktowanie się z Tobą.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
