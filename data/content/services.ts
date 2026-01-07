/**
 * Services data for SPZOZ Parczew
 * Contains information about specialized medical services
 */

import { ScanLine, Brain, Activity } from "lucide-react";

export interface ServiceItem {
  name: string;
  description: string;
  phone?: string;
}

export interface ServiceCategory {
  title: string;
  subtitle: string;
  Icon: React.ComponentType<{ className?: string }>;
  phone?: string;
  background: string;
  services: ServiceItem[];
}

export const diagnosticsServices: ServiceItem[] = [
  {
    name: "Rentgenodiagnostyka",
    description: "Badania RTG kości i narządów",
    phone: "(83) 355-21-92",
  },
  {
    name: "Tomografia Komputerowa",
    description: "Szczegółowe obrazowanie CT",
    phone: "(83) 355-21-92",
  },
  {
    name: "Ultrasonografia",
    description: "Badania USG narządów wewnętrznych",
    phone: "(83) 355-21-92",
  },
  {
    name: "Endoskopia",
    description: "Gastroskopia i kolonoskopia",
    phone: "(83) 355-21-52",
  },
];

export const mentalHealthServices: ServiceItem[] = [
  {
    name: "Oddział Psychiatryczny",
    description: "Całodobowa opieka psychiatryczna",
  },
  {
    name: "Oddział Dzienny Psychiatryczny",
    description: "Dzienna terapia i rehabilitacja",
  },
  {
    name: "Poradnia Zdrowia Psychicznego",
    description: "Konsultacje i psychoterapia",
  },
  {
    name: "Zespół Leczenia Środowiskowego",
    description: "Wsparcie w środowisku domowym",
  },
];

export const rehabilitationServices: ServiceItem[] = [
  {
    name: "Ośrodek Rehabilitacji Dziennej",
    description: "Kompleksowa rehabilitacja ambulatoryjna",
  },
  {
    name: "Dział Fizjoterapii",
    description: "Zabiegi fizykoterapeutyczne i kinezyterapia",
  },
  {
    name: "Zespół Rehabilitacji Domowej",
    description: "Rehabilitacja w domu pacjenta",
  },
];

export const servicesCategories: ServiceCategory[] = [
  {
    title: "Diagnostyka",
    subtitle: "Nowoczesne pracownie diagnostyczne",
    Icon: ScanLine,
    background: "from-primary/5 to-transparent",
    services: diagnosticsServices,
  },
  {
    title: "Centrum Zdrowia Psychicznego",
    subtitle: "Kompleksowa opieka psychiatryczna",
    phone: "(83) 355-21-72",
    Icon: Brain,
    background: "from-on-primary-container/5 to-transparent",
    services: mentalHealthServices,
  },
  {
    title: "Rehabilitacja",
    subtitle: "Kompleksowe usługi rehabilitacyjne",
    Icon: Activity,
    background: "from-primary/5 to-transparent",
    services: rehabilitationServices,
  },
];

export const servicesTexts = {
  title: "Usługi specjalistyczne",
  subtitle: "Diagnostyka, zdrowie psychiczne i rehabilitacja",
};
