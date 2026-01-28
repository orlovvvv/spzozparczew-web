import type { Metadata } from 'next'
import {
  IdentificationBadge,
  User,
  Phone,
  Envelope,
  Clock,
  MapPin,
  Buildings,
} from '@phosphor-icons/react/dist/ssr'

export const metadata: Metadata = {
  title: 'Dyrekcja | SPZOZ Parczew',
  description:
    'Kadra zarządzająca SPZOZ Parczew — Dyrektor Szpitala, Zastępcy Dyrektora, Główna Księgowa, Naczelna Pielęgniarka. Dane kontaktowe i godziny przyjęć.',
}

interface ManagementMember {
  role: string
  name: string
  description: string
  phone: string
  email: string
  receptionHours: string
}

const managementTeam: ManagementMember[] = [
  {
    role: 'Dyrektor Szpitala',
    name: '[Imię i Nazwisko]',
    description:
      'Kieruje całokształtem działalności SPZOZ w Parczewie i reprezentuje zakład na zewnątrz. Odpowiada za organizację pracy, politykę kadrową oraz strategię rozwoju szpitala.',
    phone: '[numer telefonu]',
    email: '[adres e-mail]',
    receptionHours: 'Poniedziałek - Piątek, 8:00 - 10:00',
  },
  {
    role: 'Z-ca Dyrektora ds. Lecznictwa',
    name: '[Imię i Nazwisko]',
    description:
      'Nadzoruje działalność medyczną szpitala. Koordynuje pracę oddziałów szpitalnych i poradni specjalistycznych, dba o jakość udzielanych świadczeń zdrowotnych.',
    phone: '[numer telefonu]',
    email: '[adres e-mail]',
    receptionHours: 'Poniedziałek - Piątek, 10:00 - 12:00',
  },
  {
    role: 'Z-ca Dyrektora ds. Administracyjno-Ekonomicznych',
    name: '[Imię i Nazwisko]',
    description:
      'Odpowiada za sprawy administracyjne, gospodarcze i techniczne szpitala. Nadzoruje inwestycje, zamówienia publiczne oraz zarządzanie infrastrukturą.',
    phone: '[numer telefonu]',
    email: '[adres e-mail]',
    receptionHours: 'Poniedziałek - Piątek, 10:00 - 12:00',
  },
  {
    role: 'Główna Księgowa',
    name: '[Imię i Nazwisko]',
    description:
      'Prowadzi rachunkowość szpitala zgodnie z obowiązującymi przepisami. Odpowiada za gospodarkę finansową, sprawozdawczość oraz kontrolę wewnętrzną.',
    phone: '[numer telefonu]',
    email: '[adres e-mail]',
    receptionHours: 'Poniedziałek - Piątek, 8:00 - 10:00',
  },
  {
    role: 'Naczelna Pielęgniarka',
    name: '[Imię i Nazwisko]',
    description:
      'Nadzoruje i organizuje pracę personelu pielęgniarskiego i położniczego. Dba o standardy opieki pielęgniarskiej oraz rozwój zawodowy kadry.',
    phone: '[numer telefonu]',
    email: '[adres e-mail]',
    receptionHours: 'Poniedziałek - Piątek, 8:00 - 10:00',
  },
]

function PersonCard({ member }: { member: ManagementMember }) {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 flex flex-col">
      {/* Photo placeholder + name */}
      <div className="flex items-start gap-4 mb-4">
        <div className="w-16 h-16 shrink-0 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
          <User size={24} weight="duotone" className="text-slate-400 dark:text-slate-500" />
        </div>
        <div className="min-w-0">
          <p className="text-xs font-medium text-primary uppercase tracking-wide mb-1">
            {member.role}
          </p>
          <h3 className="text-base font-semibold text-foreground leading-tight">
            {member.name}
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed mb-5">
        {member.description}
      </p>

      {/* Contact details */}
      <div className="mt-auto space-y-2.5 pt-4 border-t border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2.5">
          <Phone size={14} weight="bold" className="text-primary shrink-0" />
          <span className="text-sm text-muted-foreground">{member.phone}</span>
        </div>
        <div className="flex items-center gap-2.5">
          <Envelope size={14} weight="bold" className="text-primary shrink-0" />
          <span className="text-sm text-muted-foreground">{member.email}</span>
        </div>
        <div className="flex items-center gap-2.5">
          <Clock size={14} weight="bold" className="text-primary shrink-0" />
          <span className="text-sm text-muted-foreground">{member.receptionHours}</span>
        </div>
      </div>
    </div>
  )
}

export default function DyrekcjaPage() {
  return (
    <div className="py-8">
      {/* Page Header */}
      <section className="py-12 container">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-primary/10 text-primary rounded-xl">
              <IdentificationBadge size={24} weight="duotone" />
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
              Dyrekcja
            </h1>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Kadra zarządzająca Samodzielnego Publicznego Zakładu Opieki Zdrowotnej w Parczewie.
            Poniżej znajdziesz informacje o osobach odpowiedzialnych za funkcjonowanie szpitala
            oraz dane kontaktowe.
          </p>
        </div>
      </section>

      {/* Management Team Grid */}
      <section className="pb-12 container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {managementTeam.map((member) => (
            <PersonCard key={member.role} member={member} />
          ))}
        </div>
      </section>

      {/* Secretary Office Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <Buildings size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Sekretariat Dyrekcji
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <h3 className="text-base font-semibold text-foreground mb-4">Dane kontaktowe</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone size={16} weight="bold" className="text-primary shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      Telefon
                    </p>
                    <p className="text-sm text-foreground font-medium">[numer telefonu]</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Envelope size={16} weight="bold" className="text-primary shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      E-mail
                    </p>
                    <p className="text-sm text-foreground font-medium">[adres e-mail]</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={16} weight="bold" className="text-primary shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      Lokalizacja
                    </p>
                    <p className="text-sm text-foreground font-medium">
                      Budynek administracji, I piętro
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <h3 className="text-base font-semibold text-foreground mb-4">Godziny pracy</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock size={16} weight="bold" className="text-primary shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Poniedziałek - Piątek:{' '}
                    <strong className="text-foreground">7:25 - 15:00</strong>
                  </p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Sekretariat przyjmuje korespondencję, wnioski oraz udziela informacji na temat
                  działalności szpitala. Tutaj można umówić spotkanie z Dyrektorem lub Zastępcami
                  Dyrektora.
                </p>
                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 mt-2">
                  <p className="text-xs font-semibold text-foreground mb-1">Adres korespondencyjny</p>
                  <p className="text-sm text-muted-foreground">
                    SPZOZ w Parczewie
                    <br />
                    ul. Szpitalna 12
                    <br />
                    21-200 Parczew
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
