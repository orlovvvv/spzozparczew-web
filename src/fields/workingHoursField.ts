import type { ArrayField } from 'payload'

export const dayOfWeekOptions = [
  { label: { pl: 'Poniedziałek', en: 'Monday' }, value: 'monday' },
  { label: { pl: 'Wtorek', en: 'Tuesday' }, value: 'tuesday' },
  { label: { pl: 'Środa', en: 'Wednesday' }, value: 'wednesday' },
  { label: { pl: 'Czwartek', en: 'Thursday' }, value: 'thursday' },
  { label: { pl: 'Piątek', en: 'Friday' }, value: 'friday' },
  { label: { pl: 'Sobota', en: 'Saturday' }, value: 'saturday' },
  { label: { pl: 'Niedziela', en: 'Sunday' }, value: 'sunday' },
] as const

export type DayOfWeek = (typeof dayOfWeekOptions)[number]['value']

export const dayLabels: Record<DayOfWeek, string> = {
  monday: 'Poniedziałek',
  tuesday: 'Wtorek',
  wednesday: 'Środa',
  thursday: 'Czwartek',
  friday: 'Piątek',
  saturday: 'Sobota',
  sunday: 'Niedziela',
}

export const dayOrder: DayOfWeek[] = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
]

const timeValidation = (val: string | null | undefined) => {
  if (!val) return true
  if (!/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(val)) {
    return 'Nieprawidłowy format czasu. Użyj HH:MM (np. 08:00)'
  }
  return true
}

export const workingHoursField = (): ArrayField => ({
  name: 'weeklySchedule',
  type: 'array',
  label: { pl: 'Grafik tygodniowy', en: 'Weekly Schedule' },
  admin: {
    initCollapsed: true,
    description: {
      pl: 'Zdefiniuj godziny pracy dla każdego dnia tygodnia',
      en: 'Define working hours for each day of the week',
    },
    components: {
      RowLabel: '@/fields/workingHoursField/DayRowLabel#DayRowLabel',
    },
  },
  fields: [
    {
      name: 'dayOfWeek',
      type: 'select',
      label: { pl: 'Dzień tygodnia', en: 'Day of Week' },
      required: true,
      options: [...dayOfWeekOptions],
    },
    {
      name: 'shifts',
      type: 'array',
      label: { pl: 'Dyżury/Zmiany', en: 'Shifts' },
      minRows: 1,
      admin: {
        initCollapsed: false,
        components: {
          RowLabel: '@/fields/workingHoursField/ShiftRowLabel#ShiftRowLabel',
        },
      },
      fields: [
        {
          name: 'doctorName',
          type: 'text',
          label: { pl: 'Imię i nazwisko lekarza', en: 'Doctor Name' },
          required: true,
          admin: {
            placeholder: 'np. Dr Jan Kowalski',
          },
        },
        {
          name: 'specialty',
          type: 'text',
          label: { pl: 'Specjalizacja', en: 'Specialty' },
          admin: {
            placeholder: 'np. Kardiolog, Chirurg',
          },
        },
        {
          type: 'row',
          fields: [
            {
              name: 'startTime',
              type: 'text',
              label: { pl: 'Od godziny', en: 'Start Time' },
              required: true,
              admin: {
                width: '50%',
                placeholder: '08:00',
                description: {
                  pl: 'Format: GG:MM (24h)',
                  en: 'Format: HH:MM (24h)',
                },
              },
              validate: timeValidation,
            },
            {
              name: 'endTime',
              type: 'text',
              label: { pl: 'Do godziny', en: 'End Time' },
              required: true,
              admin: {
                width: '50%',
                placeholder: '16:00',
                description: {
                  pl: 'Format: GG:MM (24h)',
                  en: 'Format: HH:MM (24h)',
                },
              },
              validate: timeValidation,
            },
          ],
        },
        {
          name: 'room',
          type: 'text',
          label: { pl: 'Gabinet', en: 'Room' },
          admin: {
            placeholder: 'np. Gabinet 12, Parter',
          },
        },
        {
          name: 'notes',
          type: 'textarea',
          label: { pl: 'Uwagi', en: 'Notes' },
          admin: {
            rows: 2,
            placeholder: 'np. Tylko umówione wizyty, Bez przyjęć w czwartki',
          },
        },
      ],
    },
  ],
})
