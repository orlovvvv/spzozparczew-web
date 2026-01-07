import type { SelectField } from 'payload'

export const phosphorIconOptions = [
  { label: { pl: 'Pierwsza pomoc', en: 'First Aid' }, value: 'FirstAid' },
  { label: { pl: 'Serce', en: 'Heart' }, value: 'Heart' },
  { label: { pl: 'Bicie serca', en: 'Heartbeat' }, value: 'Heartbeat' },
  { label: { pl: 'Mózg', en: 'Brain' }, value: 'Brain' },
  { label: { pl: 'Stetoskop', en: 'Stethoscope' }, value: 'Stethoscope' },
  { label: { pl: 'Pigułka', en: 'Pill' }, value: 'Pill' },
  { label: { pl: 'Kropla krwi', en: 'Blood Drop' }, value: 'Drop' },
  { label: { pl: 'Kość', en: 'Bone' }, value: 'Bone' },
  { label: { pl: 'Oko', en: 'Eye' }, value: 'Eye' },
  { label: { pl: 'Ucho', en: 'Ear' }, value: 'Ear' },
  { label: { pl: 'Niemowlę', en: 'Baby' }, value: 'Baby' },
  { label: { pl: 'Słońce', en: 'Sun' }, value: 'Sun' },
  { label: { pl: 'Użytkownicy', en: 'Users' }, value: 'Users' },
  { label: { pl: 'Uścisk dłoni', en: 'Handshake' }, value: 'Handshake' },
  { label: { pl: 'Wózek inwalidzki', en: 'Wheelchair' }, value: 'Wheelchair' },
  { label: { pl: 'Karetka', en: 'Ambulance' }, value: 'Ambulance' },
  { label: { pl: 'Dom', en: 'House' }, value: 'House' },
  { label: { pl: 'Nożyczki/Chirurgia', en: 'Scissors/Surgery' }, value: 'Scissors' },
  { label: { pl: 'Fala EKG', en: 'ECG Wave' }, value: 'WaveSine' },
  { label: { pl: 'Wiatr/Płuca', en: 'Wind/Lungs' }, value: 'Wind' },
  { label: { pl: 'Kolba/Laboratorium', en: 'Flask/Laboratory' }, value: 'Flask' },
  { label: { pl: 'Skan/RTG', en: 'Scan/X-Ray' }, value: 'Scan' },
  { label: { pl: 'Uśmiech/Dermatologia', en: 'Smile/Dermatology' }, value: 'ScanSmiley' },
  { label: { pl: 'Teczka/Medycyna pracy', en: 'Briefcase/Occupational Medicine' }, value: 'Briefcase' },
  { label: { pl: 'Budynki', en: 'Buildings' }, value: 'Buildings' },
] as const

export type PhosphorIconName = (typeof phosphorIconOptions)[number]['value']

export const phosphorIconField = (): SelectField => ({
  name: 'icon',
  type: 'select',
  label: { pl: 'Ikona', en: 'Icon' },
  required: true,
  defaultValue: 'FirstAid',
  options: [...phosphorIconOptions],
  admin: {
    description: {
      pl: 'Wybierz ikonę z biblioteki Phosphor Icons',
      en: 'Select an icon from Phosphor Icons library',
    },
  },
})
