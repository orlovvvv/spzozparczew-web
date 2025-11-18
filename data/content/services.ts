/**
 * Specialist services data for SPZOZ Parczew
 * Contains diagnostic, mental health, and rehabilitation services
 */

export interface DiagnosticService {
  /** Name of the diagnostic service */
  name: string;
  /** Brief description of the service */
  description: string;
  /** Contact phone number */
  phone: string;
}

export interface MentalHealthService {
  /** Name of the mental health service */
  name: string;
  /** Brief description of the service */
  description: string;
}

export interface RehabilitationService {
  /** Name of the rehabilitation service */
  name: string;
  /** Brief description of the service */
  description: string;
}

/**
 * Diagnostic services at SPZOZ Parczew
 */
export const diagnosticServices: DiagnosticService[] = [
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

/**
 * Mental health services at SPZOZ Parczew
 */
export const mentalHealthServices: MentalHealthService[] = [
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

/**
 * Rehabilitation services at SPZOZ Parczew
 */
export const rehabilitationServices: RehabilitationService[] = [
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

/**
 * Mental Health Center contact information
 */
export const mentalHealthContact = {
  phone: "(83) 355-21-72",
  phoneHref: "+48833552172",
};
