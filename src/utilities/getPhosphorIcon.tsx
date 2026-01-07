import React from 'react'
import type { Icon } from '@phosphor-icons/react'
import {
  FirstAid,
  Heart,
  Heartbeat,
  Brain,
  Stethoscope,
  Pill,
  Drop,
  Bone,
  Eye,
  Ear,
  Baby,
  Sun,
  Users,
  Handshake,
  Wheelchair,
  Ambulance,
  House,
  Scissors,
  WaveSine,
  Wind,
  Flask,
  Scan,
  ScanSmiley,
  Briefcase,
  Buildings,
} from '@phosphor-icons/react/dist/ssr'

import type { PhosphorIconName } from '@/fields/phosphorIconField'

const iconMap: Record<PhosphorIconName, Icon> = {
  FirstAid,
  Heart,
  Heartbeat,
  Brain,
  Stethoscope,
  Pill,
  Drop,
  Bone,
  Eye,
  Ear,
  Baby,
  Sun,
  Users,
  Handshake,
  Wheelchair,
  Ambulance,
  House,
  Scissors,
  WaveSine,
  Wind,
  Flask,
  Scan,
  ScanSmiley,
  Briefcase,
  Buildings,
}

interface GetPhosphorIconOptions {
  size?: number
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone'
  className?: string
}

export function getPhosphorIcon(
  iconName: string | null | undefined,
  options: GetPhosphorIconOptions = {},
): React.ReactNode {
  const { size = 24, weight = 'duotone', className } = options

  if (!iconName || !(iconName in iconMap)) {
    if (iconName && process.env.NODE_ENV === 'development') {
      console.warn(`[getPhosphorIcon] Invalid icon name: "${iconName}", falling back to FirstAid`)
    }
    return <FirstAid size={size} weight={weight} className={className} />
  }

  const IconComponent = iconMap[iconName as PhosphorIconName]
  return <IconComponent size={size} weight={weight} className={className} />
}

export function getPhosphorIconComponent(
  iconName: string | null | undefined,
): Icon {
  if (!iconName || !(iconName in iconMap)) {
    if (iconName && process.env.NODE_ENV === 'development') {
      console.warn(`[getPhosphorIconComponent] Invalid icon name: "${iconName}", falling back to FirstAid`)
    }
    return FirstAid
  }
  return iconMap[iconName as PhosphorIconName]
}
