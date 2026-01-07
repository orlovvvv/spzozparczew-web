'use client'

import { useRowLabel } from '@payloadcms/ui'

import { dayLabels, type DayOfWeek } from '@/fields/workingHoursField'

interface DayData {
  dayOfWeek?: string
  shifts?: Array<{ doctorName?: string }>
}

const getPolishPlural = (count: number): string => {
  if (count === 1) return 'dyżur'
  const lastDigit = count % 10
  const lastTwoDigits = count % 100
  if (lastTwoDigits >= 12 && lastTwoDigits <= 14) return 'dyżurów'
  if (lastDigit >= 2 && lastDigit <= 4) return 'dyżury'
  return 'dyżurów'
}

export const DayRowLabel: React.FC = () => {
  const { data, rowNumber } = useRowLabel<DayData>()

  const dayOfWeek = data?.dayOfWeek || ''
  const shiftsCount = data?.shifts?.length || 0
  const dayLabel = dayLabels[dayOfWeek as DayOfWeek] || `Dzień ${(rowNumber || 0) + 1}`

  if (shiftsCount > 0) {
    return (
      <span>
        {dayLabel} ({shiftsCount} {getPolishPlural(shiftsCount)})
      </span>
    )
  }

  return <span>{dayLabel}</span>
}
