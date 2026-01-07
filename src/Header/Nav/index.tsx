'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import type { Header as HeaderType } from '@/payload-types'

import { cn } from '@/utilities/ui'

interface HeaderNavProps {
  data: HeaderType
  mobile?: boolean
}

const navLinks = [
  { label: 'O Szpitalu', href: '/o-nas' },
  { label: 'Dla Pacjenta', href: '/dla-pacjenta' },
  { label: 'Aktualności', href: '/aktualnosci' },
  { label: 'Kariera', href: '/kariera' },
  { label: 'Przetargi', href: '/przetargi' },
  { label: 'Kontakt', href: '/#kontakt' },
]

export const HeaderNav: React.FC<HeaderNavProps> = ({ data: _data, mobile = false }) => {
  const pathname = usePathname()

  return (
    <nav
      className={cn(
        mobile ? 'flex flex-col gap-1' : 'flex gap-1 items-center',
      )}
      aria-label="Nawigacja główna"
    >
      {navLinks.map(({ label, href }) => {
        const isActive = pathname === href || (href !== '/' && pathname.startsWith(href.replace('/#', '/')))

        return (
          <Link
            key={href}
            href={href}
            className={cn(
              'text-sm font-medium transition-colors',
              mobile
                ? 'px-3 py-2 rounded-md hover:bg-primary/5 block'
                : 'px-3 py-2 rounded-md hover:bg-primary/5',
              isActive
                ? 'text-primary'
                : 'text-muted-foreground hover:text-primary',
            )}
          >
            {label}
          </Link>
        )
      })}
    </nav>
  )
}
