'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Buildings,
  Stethoscope,
  CaretDown,
  FirstAid,
  UsersThree,
  ShieldCheck,
  SignOut,
  CurrencyCircleDollar,
  Hospital,
  Certificate,
  IdentificationBadge,
  Wheelchair,
  Briefcase,
  GraduationCap,
  HandHeart,
  Gavel,
  Trophy,
  Storefront,
  Heartbeat,
  Leaf,
} from '@phosphor-icons/react'

import type { Header as HeaderType } from '@/payload-types'
import { cn } from '@/utilities/ui'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

type NavLink = {
  label: string
  href: string
}

type NavGroup = {
  label: string
  children: {
    label: string
    href: string
    description: string
    icon?: React.ReactNode
  }[]
}

type NavItem = NavLink | NavGroup

function isNavGroup(item: NavItem): item is NavGroup {
  return 'children' in item
}

const navItems: NavItem[] = [
  {
    label: 'Strefa Pacjenta',
    children: [
      {
        label: 'Oddziały Szpitalne',
        href: '/oddzialy',
        description: 'Lista oddziałów i informacje kontaktowe',
        icon: <Buildings size={20} weight="duotone" className="text-primary" />,
      },
      {
        label: 'Poradnie Specjalistyczne',
        href: '/poradnie',
        description: 'Poradnie, diagnostyka i grafiki przyjęć',
        icon: <Stethoscope size={20} weight="duotone" className="text-blue-600" />,
      },
      {
        label: 'Przyjęcie do Szpitala',
        href: '/przyjecie',
        description: 'Przyjęcie planowe i nagłe, wymagane dokumenty',
        icon: <FirstAid size={20} weight="duotone" className="text-red-600" />,
      },
      {
        label: 'Pobyt i Odwiedziny',
        href: '/pobyt-i-odwiedziny',
        description: 'Godziny odwiedzin, zasady pobytu',
        icon: <UsersThree size={20} weight="duotone" className="text-primary" />,
      },
      {
        label: 'Prawa i Bezpieczeństwo',
        href: '/prawa-pacjenta',
        description: 'Prawa pacjenta, Rzecznik Praw Pacjenta',
        icon: <ShieldCheck size={20} weight="duotone" className="text-emerald-600" />,
      },
      {
        label: 'Po Wypisie',
        href: '/po-wypisie',
        description: 'Dalsze leczenie, dokumentacja, zalecenia',
        icon: <SignOut size={20} weight="duotone" className="text-slate-500" />,
      },
      {
        label: 'Cennik Usług',
        href: '/cennik',
        description: 'Cennik badań, konsultacji i zabiegów',
        icon: <CurrencyCircleDollar size={20} weight="duotone" className="text-amber-600" />,
      },
    ],
  },
  {
    label: 'O Szpitalu',
    children: [
      {
        label: 'O Nas',
        href: '/o-nas',
        description: 'Historia, misja, struktura organizacyjna',
        icon: <Hospital size={20} weight="duotone" className="text-primary" />,
      },
      {
        label: 'Jakość i Akredytacja',
        href: '/jakosc',
        description: 'Standardy, certyfikaty, system zarządzania',
        icon: <Certificate size={20} weight="duotone" className="text-amber-600" />,
      },
      {
        label: 'Dyrekcja',
        href: '/dyrekcja',
        description: 'Kadra zarządzająca szpitala',
        icon: <IdentificationBadge size={20} weight="duotone" className="text-slate-600" />,
      },
      {
        label: 'Deklaracja Dostępności',
        href: '/deklaracja-dostepnosci',
        description: 'Dostępność cyfrowa i architektoniczna',
        icon: <Wheelchair size={20} weight="duotone" className="text-blue-600" />,
      },
    ],
  },
  { label: 'Aktualności', href: '/aktualnosci' },
  {
    label: 'Kariera',
    children: [
      {
        label: 'Oferty Pracy',
        href: '/kariera',
        description: 'Aktualne oferty zatrudnienia',
        icon: <Briefcase size={20} weight="duotone" className="text-primary" />,
      },
      {
        label: 'Praktyki i Staże',
        href: '/praktyki-i-staze',
        description: 'Oferta dla studentów i absolwentów',
        icon: <GraduationCap size={20} weight="duotone" className="text-blue-600" />,
      },
      {
        label: 'Wolontariat',
        href: '/wolontariat',
        description: 'Dołącz do naszego zespołu wolontariuszy',
        icon: <HandHeart size={20} weight="duotone" className="text-rose-500" />,
      },
    ],
  },
  {
    label: 'Dla Biznesu',
    children: [
      {
        label: 'Zamówienia Publiczne',
        href: '/przetargi',
        description: 'Aktualne postępowania przetargowe',
        icon: <Gavel size={20} weight="duotone" className="text-primary" />,
      },
      {
        label: 'Konkursy Ofert',
        href: '/konkursy',
        description: 'Aktualne postępowania konkursowe',
        icon: <Trophy size={20} weight="duotone" className="text-amber-600" />,
      },
      {
        label: 'Wynajem Powierzchni',
        href: '/wynajem',
        description: 'Dostępne lokale i warunki najmu',
        icon: <Storefront size={20} weight="duotone" className="text-slate-600" />,
      },
    ],
  },
  {
    label: 'Baza Wiedzy',
    children: [
      {
        label: 'Programy Profilaktyczne',
        href: '/profilaktyka',
        description: 'Badania przesiewowe i profilaktyka',
        icon: <Heartbeat size={20} weight="duotone" className="text-red-500" />,
      },
      {
        label: 'Promocja Zdrowia',
        href: '/promocja-zdrowia',
        description: 'Edukacja zdrowotna, materiały informacyjne',
        icon: <Leaf size={20} weight="duotone" className="text-emerald-600" />,
      },
    ],
  },
]

interface HeaderNavProps {
  data: HeaderType
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ data: _data }) => {
  const pathname = usePathname()

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navItems.map((item) => {
          if (isNavGroup(item)) {
            const isGroupActive = item.children.some(
              (child) =>
                pathname === child.href ||
                (child.href !== '/' && pathname.startsWith(child.href)),
            )

            return (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuTrigger
                  className={cn(
                    navigationMenuTriggerStyle(),
                    isGroupActive && 'text-primary',
                  )}
                >
                  {item.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[340px] gap-1">
                    {item.children.map((child) => {
                      const isActive =
                        pathname === child.href ||
                        (child.href !== '/' && pathname.startsWith(child.href))

                      return (
                        <li key={child.href}>
                          <NavigationMenuLink
                            render={<Link href={child.href} />}
                            className={cn(
                              'flex items-start gap-3 rounded-xl p-3 text-sm transition-all outline-none hover:bg-muted focus:bg-muted',
                              isActive && 'bg-muted/50',
                            )}
                          >
                            {child.icon && (
                              <span className="mt-0.5 shrink-0">{child.icon}</span>
                            )}
                            <div className="flex flex-col gap-0.5">
                              <span
                                className={cn(
                                  'text-sm font-medium leading-tight',
                                  isActive ? 'text-primary' : 'text-foreground',
                                )}
                              >
                                {child.label}
                              </span>
                              <span className="text-xs text-muted-foreground leading-snug">
                                {child.description}
                              </span>
                            </div>
                          </NavigationMenuLink>
                        </li>
                      )
                    })}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            )
          }

          const isActive =
            pathname === item.href ||
            (item.href !== '/' && pathname.startsWith(item.href.replace('/#', '/')))

          return (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink
                render={<Link href={item.href} />}
                className={cn(
                  navigationMenuTriggerStyle(),
                  isActive ? 'text-primary' : '',
                )}
              >
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          )
        })}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

// Mobile navigation - used in Sheet sidebar
interface MobileNavProps {
  data: HeaderType
  onNavigate?: () => void
}

export const MobileNav: React.FC<MobileNavProps> = ({ data: _data, onNavigate }) => {
  const pathname = usePathname()
  const [expandedGroup, setExpandedGroup] = React.useState<string | null>(null)

  return (
    <nav className="flex flex-col gap-1" aria-label="Nawigacja główna">
      {navItems.map((item) => {
        if (isNavGroup(item)) {
          const isGroupActive = item.children.some(
            (child) =>
              pathname === child.href ||
              (child.href !== '/' && pathname.startsWith(child.href)),
          )
          const isExpanded = expandedGroup === item.label

          const groupId = `nav-group-${item.label.toLowerCase().replace(/\s+/g, '-')}`

          return (
            <div key={item.label}>
              <button
                type="button"
                onClick={() => setExpandedGroup(isExpanded ? null : item.label)}
                className={cn(
                  'flex w-full items-center justify-between px-3 py-2.5 text-sm font-medium rounded-md transition-colors hover:bg-primary/5',
                  isGroupActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground',
                )}
                aria-expanded={isExpanded}
                aria-controls={groupId}
              >
                {item.label}
                <CaretDown
                  size={14}
                  weight="bold"
                  className={cn(
                    'transition-transform duration-200',
                    isExpanded && 'rotate-180',
                  )}
                />
              </button>
              <div
                id={groupId}
                role="region"
                className={cn(
                  'overflow-hidden transition-all duration-200',
                  isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
                )}
              >
                <div className="ml-3 border-l border-border pl-3 py-1 space-y-0.5">
                  {item.children.map((child) => {
                    const isActive =
                      pathname === child.href ||
                      (child.href !== '/' && pathname.startsWith(child.href))

                    return (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={onNavigate}
                        className={cn(
                          'flex items-center gap-3 px-3 py-2.5 text-sm rounded-md transition-colors hover:bg-primary/5',
                          isActive
                            ? 'text-primary font-medium'
                            : 'text-muted-foreground hover:text-foreground',
                        )}
                      >
                        {child.icon && <span className="shrink-0">{child.icon}</span>}
                        <div className="flex flex-col">
                          <span className="leading-tight">{child.label}</span>
                          <span className="text-xs text-muted-foreground leading-snug mt-0.5">
                            {child.description}
                          </span>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        }

        const isActive =
          pathname === item.href ||
          (item.href !== '/' && pathname.startsWith(item.href.replace('/#', '/')))

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={cn(
              'px-3 py-2.5 text-sm font-medium rounded-md transition-colors hover:bg-primary/5 block',
              isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground',
            )}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}

export { navItems }
