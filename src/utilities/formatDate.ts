const monthsPolish = [
  'stycznia',
  'lutego',
  'marca',
  'kwietnia',
  'maja',
  'czerwca',
  'lipca',
  'sierpnia',
  'września',
  'października',
  'listopada',
  'grudnia',
]

const monthsPolishShort = [
  'sty',
  'lut',
  'mar',
  'kwi',
  'maj',
  'cze',
  'lip',
  'sie',
  'wrz',
  'paź',
  'lis',
  'gru',
]

export type DateFormat = 'short' | 'long' | 'numeric' | 'relative' | 'dateTime'

export function formatDate(
  date: string | Date | null | undefined,
  format: DateFormat = 'short',
): string {
  if (!date) return ''

  const d = new Date(date)

  if (isNaN(d.getTime())) return ''

  const day = d.getDate()
  const month = d.getMonth()
  const year = d.getFullYear()
  const hours = d.getHours().toString().padStart(2, '0')
  const minutes = d.getMinutes().toString().padStart(2, '0')

  switch (format) {
    case 'short':
      return `${day} ${monthsPolishShort[month]} ${year}`

    case 'long':
      return `${day} ${monthsPolish[month]} ${year}`

    case 'numeric':
      return `${day.toString().padStart(2, '0')}.${(month + 1).toString().padStart(2, '0')}.${year}`

    case 'dateTime':
      return `${day} ${monthsPolishShort[month]} ${year}, ${hours}:${minutes}`

    case 'relative': {
      const now = new Date()
      const diffMs = now.getTime() - d.getTime()
      const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

      if (diffDays === 0) return 'Dzisiaj'
      if (diffDays === 1) return 'Wczoraj'
      if (diffDays < 7) return `${diffDays} dni temu`
      if (diffDays < 30) return `${Math.floor(diffDays / 7)} tyg. temu`
      if (diffDays < 365) return `${Math.floor(diffDays / 30)} mies. temu`
      return `${day} ${monthsPolishShort[month]} ${year}`
    }

    default:
      return `${day} ${monthsPolishShort[month]} ${year}`
  }
}

export function getDaysUntil(date: string | Date | null | undefined): number | null {
  if (!date) return null

  const d = new Date(date)
  if (isNaN(d.getTime())) return null

  const now = new Date()
  now.setHours(0, 0, 0, 0)
  d.setHours(0, 0, 0, 0)

  const diffMs = d.getTime() - now.getTime()
  return Math.ceil(diffMs / (1000 * 60 * 60 * 24))
}

export function isExpired(date: string | Date | null | undefined): boolean {
  const days = getDaysUntil(date)
  return days !== null && days < 0
}
