/**
 * Hospital departments data for SPZOZ Parczew
 * Contains information about all hospital departments and their specialties
 */

import {
  Shield,
  Heart,
  Activity,
  Users,
  Brain,
  Stethoscope,
} from "lucide-react";

export interface Department {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

export const departments: Department[] = [
  {
    name: "Szpitalny Oddział Ratunkowy (SOR)",
    description: "Całodobowa pomoc w nagłych przypadkach",
    icon: Shield,
    badge: "24/7",
  },
  {
    name: "Anestezjologii i Intensywnej Terapii",
    description: "Opieka nad pacjentami w stanach krytycznych",
    icon: Heart,
  },
  {
    name: "Chirurgiczno-Urazowy",
    description: "Leczenie operacyjne i pourazowe",
    icon: Activity,
  },
  {
    name: "Dziecięcy",
    description: "Opieka pediatryczna dla dzieci",
    icon: Users,
  },
  {
    name: "Geriatryczny",
    description: "Specjalistyczna opieka dla osób starszych",
    icon: Heart,
  },
  {
    name: "Chorób Wewnętrznych",
    description: "Diagnostyka i leczenie chorób internistycznych",
    icon: Stethoscope,
  },
  {
    name: "Rehabilitacyjny",
    description: "Kompleksowa rehabilitacja lecznicza",
    icon: Activity,
  },
  {
    name: "Psychiatryczny",
    description: "Leczenie zaburzeń psychicznych",
    icon: Brain,
  },
  {
    name: "Dzienny Psychiatryczny",
    description: "Dzienna opieka psychiatryczna",
    icon: Brain,
  },
  {
    name: "Leczenia Uzależnień",
    description: "Terapia uzależnień",
    icon: Heart,
  },
  {
    name: "Dzienny Terapii Uzależnienia od Alkoholu",
    description: "Dzienna terapia alkoholowa",
    icon: Heart,
  },
];

export const departmentsTexts = {
  title: "Oddziały szpitalne",
  subtitle: "11 specjalistycznych oddziałów",
};
