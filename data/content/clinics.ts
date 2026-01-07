/**
 * Specialist clinics data for SPZOZ Parczew
 * Contains information about all specialist clinics and their descriptions
 */

export interface Clinic {
  /** Name of the specialist clinic */
  name: string;
  /** Brief description of the clinic's specialty */
  description: string;
  /** Optional badge for special clinics */
  badge?: string;
}

/**
 * Specialist clinics available at SPZOZ Parczew
 * Registration phone: (83) 355-21-73 (Monday-Friday 07:00-14:00)
 */
export const clinics: Clinic[] = [
  { name: "Kardiologiczna", description: "Choroby serca i układu krążenia" },
  { name: "Neurologiczna", description: "Schorzenia układu nerwowego" },
  {
    name: "Gastroenterologiczna",
    description: "Choroby układu pokarmowego",
    badge: "Nowa",
  },
  { name: "Urologiczna", description: "Choroby układu moczowego" },
  {
    name: "Ginekologiczno-Położnicza",
    description: "Zdrowie kobiet i ciąża",
  },
  {
    name: "Chirurgii Urazowo-Ortopedycznej",
    description: "Urazy i choroby kości",
  },
  { name: "Laryngologiczna", description: "Choroby uszu, nosa i gardła" },
  { name: "Endokrynologiczna", description: "Zaburzenia hormonalne" },
  {
    name: "Gruźlicy i Chorób Płuc",
    description: "Choroby układu oddechowego",
  },
  { name: "Hematologiczna", description: "Choroby krwi" },
  { name: "Rehabilitacyjna", description: "Rehabilitacja pourazowa" },
  { name: "Pediatryczna", description: "Zdrowie dzieci i młodzieży" },
  { name: "Proktologiczna", description: "Choroby odbytu i odbytnicy" },
  { name: "Diabetologiczna", description: "Cukrzyca i jej powikłania" },
  {
    name: "Nocnej i Świątecznej Opieki",
    description: "Pomoc poza godzinami pracy",
  },
  {
    name: "Terapii Uzależnienia od Alkoholu",
    description: "Wsparcie w uzależnieniach",
  },
];

/**
 * Registration contact information for clinics
 */
export const clinicRegistration = {
  phone: "(83) 355-21-73",
  phoneHref: "+48833552173",
  hours: "pon. – pt. 07:00 – 14:00",
};
