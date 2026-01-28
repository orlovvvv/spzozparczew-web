import type { Metadata } from 'next'
import {
  CurrencyCircleDollar,
  FileArrowDown,
  CreditCard,
  Clock,
  MapPin,
  Info,
  CaretRight,
} from '@phosphor-icons/react/dist/ssr'

export const metadata: Metadata = {
  title: 'Cennik Usług | SPZOZ Parczew',
  description:
    'Cennik usług medycznych SPZOZ Parczew — odpłatne badania, konsultacje, dokumentacja medyczna. Sprawdź ceny i formy płatności.',
}

const documentationPrices = [
  { name: 'Kopia dokumentacji medycznej (ksero) — za stronę', price: '0,50 zł' },
  { name: 'Kopia dokumentacji medycznej na nośniku elektronicznym', price: '2,00 zł' },
  { name: 'Odpis dokumentacji medycznej — za stronę', price: '15,00 zł' },
]

const stayPrices = [
  { name: 'Pobyt osoby towarzyszącej (doba)', price: '50,00 zł' },
  { name: 'Parking szpitalny — pierwsza godzina', price: 'bezpłatny' },
  { name: 'Parking szpitalny — każda kolejna rozpoczęta godzina', price: '3,00 zł' },
  { name: 'Parking szpitalny — doba', price: '15,00 zł' },
]

const labPrices = [
  { name: 'Morfologia krwi', price: '15,00 zł' },
  { name: 'Glukoza', price: '8,00 zł' },
  { name: 'Badanie ogólne moczu', price: '10,00 zł' },
  { name: 'CRP (białko C-reaktywne)', price: '15,00 zł' },
  { name: 'TSH', price: '25,00 zł' },
  { name: 'Panel lipidowy (cholesterol, HDL, LDL, trójglicerydy)', price: '35,00 zł' },
]

const consultationPrices = [
  { name: 'Konsultacja lekarza specjalisty', price: '150,00 zł' },
  { name: 'Konsultacja lekarza POZ (poza kontraktem NFZ)', price: '100,00 zł' },
]

type PriceRow = { name: string; price: string }

function PriceTableSection({ title, rows }: { title: string; rows: PriceRow[] }) {
  return (
    <>
      <tr>
        <td
          colSpan={2}
          className="bg-slate-50 dark:bg-slate-800/50 px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-foreground"
        >
          {title}
        </td>
      </tr>
      {rows.map((row, i) => (
        <tr
          key={i}
          className="border-b border-slate-100 dark:border-slate-800 last:border-b-0"
        >
          <td className="px-4 py-3 text-sm text-muted-foreground">{row.name}</td>
          <td className="px-4 py-3 text-sm font-medium text-foreground text-right whitespace-nowrap">
            {row.price}
          </td>
        </tr>
      ))}
    </>
  )
}

export default function CennikPage() {
  return (
    <div className="py-8">
      {/* Page Header */}
      <section className="py-12 container">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-primary/10 text-primary rounded-xl">
              <CurrencyCircleDollar size={24} weight="duotone" />
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
              Cennik Usług
            </h1>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Samodzielny Publiczny Zakład Opieki Zdrowotnej w Parczewie realizuje świadczenia
            zdrowotne w ramach umowy z Narodowym Funduszem Zdrowia (NFZ). Dla pacjentów
            ubezpieczonych większość usług jest bezpłatna.
          </p>
          <p className="mt-3 text-base text-muted-foreground leading-relaxed">
            Poniższy cennik dotyczy usług, które nie są objęte finansowaniem ze środków publicznych
            lub są realizowane odpłatnie na życzenie pacjenta.
          </p>
        </div>
      </section>

      {/* Price Table */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <CurrencyCircleDollar size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Wybrane usługi odpłatne
            </h2>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Usługa
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Cena
                  </th>
                </tr>
              </thead>
              <tbody>
                <PriceTableSection title="Dokumentacja medyczna" rows={documentationPrices} />
                <PriceTableSection title="Pobyt i usługi towarzyszące" rows={stayPrices} />
                <PriceTableSection title="Badania laboratoryjne (komercyjne)" rows={labPrices} />
                <PriceTableSection title="Konsultacje komercyjne" rows={consultationPrices} />
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            Podane ceny mają charakter orientacyjny. Aktualne ceny można potwierdzić w Dziale
            Rozliczeń lub w rejestracji.
          </p>
        </div>
      </section>

      {/* Full Price List PDF */}
      <section className="py-16 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <FileArrowDown size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Pełny cennik usług
            </h2>
          </div>

          <div className="max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Kompletny cennik usług medycznych SPZOZ w Parczewie, zatwierdzony zarządzeniem
              Dyrektora, jest dostępny do pobrania w formacie PDF.
            </p>
            {/* TODO: Replace href with actual PDF path when available */}
            <a
              href="/cennik-uslug-spzoz-parczew.pdf"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <FileArrowDown size={18} weight="bold" />
              Pobierz pełny cennik (PDF)
            </a>
            <p className="mt-4 text-xs text-muted-foreground">
              Cennik obowiązuje od 1 stycznia 2025 r. Aktualne ceny można potwierdzić w Dziale
              Rozliczeń lub w rejestracji.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <Info size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Informacje dodatkowe
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Payment Methods */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <CreditCard size={18} weight="duotone" className="text-primary" />
                <h3 className="text-base font-semibold text-foreground">Formy płatności</h3>
              </div>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Gotówka
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Karta płatnicza (Visa, Mastercard)
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CaretRight size={12} weight="bold" className="text-primary mt-1 shrink-0" />
                  Przelew bankowy (na podstawie wystawionej faktury)
                </li>
              </ul>
            </div>

            {/* Cashier Info */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <MapPin size={18} weight="duotone" className="text-primary" />
                <h3 className="text-base font-semibold text-foreground">Kasa szpitalna</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Kasa znajduje się w budynku głównym szpitala, parter, pokój nr 3.
              </p>
              <div className="flex items-center gap-3 mb-3">
                <Clock size={16} weight="bold" className="text-primary shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Poniedziałek – Piątek:{' '}
                  <strong className="text-foreground">7:30 – 14:30</strong>
                </p>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Płatności poza godzinami pracy kasy można dokonać kartą w rejestracji danego
                oddziału lub poradni.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
