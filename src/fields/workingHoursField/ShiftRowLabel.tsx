'use client'

import { useRowLabel } from '@payloadcms/ui'

interface ShiftData {
  doctorName?: string
  startTime?: string
  endTime?: string
  specialty?: string
}

export const ShiftRowLabel: React.FC = () => {
  const { data, rowNumber } = useRowLabel<ShiftData>()

  const doctorName = data?.doctorName
  const startTime = data?.startTime
  const endTime = data?.endTime

  if (doctorName && startTime && endTime) {
    return (
      <span>
        {doctorName} • {startTime} - {endTime}
      </span>
    )
  }

  if (doctorName) {
    return <span>{doctorName}</span>
  }

  return <span>Dyżur {(rowNumber || 0) + 1}</span>
}
