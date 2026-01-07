import React from 'react'
import { Clock, User, Stethoscope, Door, Info } from '@phosphor-icons/react/dist/ssr'

import type { Clinic } from '@/payload-types'
import { dayLabels, dayOrder, type DayOfWeek } from '@/fields/workingHoursField'
import { cn } from '@/utilities/ui'

type WeeklyScheduleData = NonNullable<Clinic['weeklySchedule']>

interface WeeklyScheduleProps {
  schedule: WeeklyScheduleData | null | undefined
  className?: string
}

export const WeeklySchedule: React.FC<WeeklyScheduleProps> = ({ schedule, className }) => {
  if (!schedule || schedule.length === 0) {
    return (
      <div className="text-center py-12 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <Clock size={40} className="mx-auto mb-3 text-muted-foreground opacity-50" weight="duotone" />
        <p className="text-muted-foreground">Grafik przyjęć nie został jeszcze opublikowany</p>
        <p className="text-sm text-muted-foreground mt-1">Skontaktuj się z poradnią telefonicznie</p>
      </div>
    )
  }

  // Sort by day order
  const sortedSchedule = [...schedule].sort((a, b) => {
    const aIndex = dayOrder.indexOf(a.dayOfWeek as DayOfWeek)
    const bIndex = dayOrder.indexOf(b.dayOfWeek as DayOfWeek)
    return aIndex - bIndex
  })

  return (
    <div className={cn('space-y-4', className)}>
      {sortedSchedule.map((day, idx) => {
        const shifts = day.shifts || []
        if (shifts.length === 0) return null

        const dayLabel = dayLabels[day.dayOfWeek as DayOfWeek] || day.dayOfWeek

        return (
          <div
            key={day.id || idx}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden"
          >
            <div className="px-5 py-3 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700">
              <h3 className="text-base font-semibold text-foreground">{dayLabel}</h3>
            </div>
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {shifts.map((shift, shiftIdx) => (
                <div
                  key={shift.id || shiftIdx}
                  className="px-5 py-4 flex flex-col sm:flex-row sm:items-start gap-4"
                >
                  {/* Time */}
                  <div className="flex items-center gap-2 text-primary shrink-0 min-w-[120px]">
                    <Clock size={18} weight="bold" />
                    <span className="font-semibold text-sm">
                      {shift.startTime} - {shift.endTime}
                    </span>
                  </div>

                  {/* Doctor info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <User size={16} className="text-muted-foreground shrink-0" weight="duotone" />
                      <span className="font-medium text-foreground">{shift.doctorName}</span>
                    </div>

                    {shift.specialty && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                        <Stethoscope size={14} className="shrink-0" weight="duotone" />
                        <span>{shift.specialty}</span>
                      </div>
                    )}

                    {shift.room && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Door size={14} className="shrink-0" weight="duotone" />
                        <span>{shift.room}</span>
                      </div>
                    )}

                    {shift.notes && (
                      <div className="flex items-start gap-2 mt-2 text-xs text-muted-foreground bg-slate-50 dark:bg-slate-800/50 rounded-lg p-2">
                        <Info size={14} className="shrink-0 mt-0.5" weight="duotone" />
                        <span className="italic">{shift.notes}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
