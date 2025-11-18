/**
 * Hospital departments data for SPZOZ Parczew
 * Contains information about all hospital departments and their functions
 */

export type IconName =
  | "Shield"
  | "Heart"
  | "Activity"
  | "Users"
  | "Stethoscope"
  | "Brain";

export interface Department {
  /** Name of the hospital department */
  name: string;
  /** Brief description of the department's function */
  description: string;
  /** Icon name for visual representation */
  iconName: IconName;
  /** Optional badge for special departments */
  badge?: string;
}

/**
 * Hospital departments at SPZOZ Parczew
 * Total: 11 specialist departments
 */
export const departments: Department[] = [
  {
    name: "Szpitalny Oddział Ratunkowy (SOR)",
    description: "Całodobowa pomoc w nagłych przypadkach",
    iconName: "Shield",
    badge: "24/7",
  },
  {
    name: "Anestezjologii i Intensywnej Terapii",
    description: "Opieka nad pacjentami w stanach krytycznych",
    iconName: "Heart",
  },
  {
    name: "Chirurgiczno-Urazowy",
    description: "Leczenie operacyjne i pourazowe",
    iconName: "Activity",
  },
  {
    name: "Dziecięcy",
    description: "Opieka pediatryczna dla dzieci",
    iconName: "Users",
  },
  {
    name: "Geriatryczny",
    description: "Specjalistyczna opieka dla osób starszych",
    iconName: "Heart",
  },
  {
    name: "Chorób Wewnętrznych",
    description: "Diagnostyka i leczenie chorób internistycznych",
    iconName: "Stethoscope",
  },
  {
    name: "Rehabilitacyjny",
    description: "Kompleksowa rehabilitacja lecznicza",
    iconName: "Activity",
  },
  {
    name: "Psychiatryczny",
    description: "Leczenie zaburzeń psychicznych",
    iconName: "Brain",
  },
  {
    name: "Dzienny Psychiatryczny",
    description: "Dzienna opieka psychiatryczna",
    iconName: "Brain",
  },
  {
    name: "Leczenia Uzależnień",
    description: "Terapia uzależnień",
    iconName: "Heart",
  },
  {
    name: "Dzienny Terapii Uzależnienia od Alkoholu",
    description: "Dzienna terapia alkoholowa",
    iconName: "Heart",
  },
];
