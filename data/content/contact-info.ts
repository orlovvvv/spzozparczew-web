/**
 * Contact information data for SPZOZ Parczew
 * Contains all contact details, working hours, and patient information
 */

export interface ContactItem {
  /** Label for the contact information */
  label: string;
  /** Contact value (phone number, email, or text) */
  value: string;
  /** Optional telephone link for phone numbers */
  tel?: string;
  /** Optional email link for email addresses */
  email?: string;
}

export interface InfoCard {
  /** Title of the information card */
  title: string;
  /** Type of icon to display */
  icon: "Phone" | "Clock" | "Mail";
  /** List of contact items */
  items: ContactItem[];
}

/**
 * Patient information cards
 */
export const patientInfo: InfoCard[] = [
  {
    title: "Telefony rejestracji",
    icon: "Phone",
    items: [
      { label: "Poradnie", value: "(83) 355-21-73", tel: "+48833552173" },
      { label: "Diagnostyka", value: "(83) 355-21-92", tel: "+48833552192" },
      { label: "Endoskopia", value: "(83) 355-21-52", tel: "+48833552152" },
    ],
  },
  {
    title: "Godziny otwarcia",
    icon: "Clock",
    items: [
      { label: "Rejestracja", value: "pon. – pt. 07:00 – 14:00" },
      { label: "Punkt pobrań", value: "pon. – pt. 07:00 – 10:00" },
      { label: "SOR", value: "całodobowo 24/7" },
    ],
  },
  {
    title: "Kontakt główny",
    icon: "Mail",
    items: [
      { label: "Tel", value: "(83) 355-21-02", tel: "+48833552102" },
      { label: "Fax", value: "(83) 355-21-00" },
      {
        label: "Email",
        value: "sekretariat@spzozparczew.pl",
        email: "sekretariat@spzozparczew.pl",
      },
    ],
  },
];

/**
 * Main hospital contact information
 */
export const mainContact = {
  /** Hospital name and type */
  hospitalName: "SPZOZ Parczew",
  hospitalType: "Szpital Powiatowy",
  fullLegalName: "Samodzielny Publiczny Zakład Opieki Zdrowotnej w Parczewie",

  /** Address */
  address: "ul. Kościelna 136, 21-200 Parczew",

  /** Main contact numbers */
  mainPhone: "(83) 355-21-02",
  mainPhoneHref: "+48833552102",
  fax: "(83) 355-21-00",

  /** Email addresses */
  email: "sekretariat@spzozparczew.pl",
  emailHref: "mailto:sekretariat@spzozparczew.pl",
  iodEmail: "iod@spzozparczew.pl",
  iodEmailHref: "mailto:iod@spzozparczew.pl",

  /** IOD (Inspektor Ochrony Danych) */
  iodName: "Sławomir Zagojski",
  iodTitle: "Inspektor Ochrony Danych",

  /** SOR (Szpitalny Oddział Ratunkowy) */
  sorPhone: "(83) 355-21-00",
  sorPhoneHref: "+48833552100",
};

/**
 * Quick links for navigation
 */
export const quickLinks = [
  { label: "Dla pacjentów", href: "#dla-pacjentow" },
  { label: "Oddziały szpitalne", href: "#oddzialy" },
  { label: "Poradnie specjalistyczne", href: "#poradnie" },
  { label: "Kariera", href: "#kariera" },
  {
    label: "ePortal Pacjenta",
    href: "https://eportal.spzozparczew.pl",
    external: true,
    ariaLabel: "ePortal Pacjenta (otwiera się w nowej karcie)",
  },
];

/**
 * Working hours information
 */
export const workingHours = {
  registration: {
    days: "pon. – pt.",
    hours: "07:00 – 14:00",
  },
  labHours: {
    days: "pon. – pt.",
    hours: "07:00 – 10:00",
  },
  sor: {
    availability: "całodobowo 24/7",
  },
};

/**
 * Section text content
 */
export const patientInfoTexts = {
  title: "Dla pacjentów",
  subtitle: "Najważniejsze informacje o rejestracji i kontakcie",
};
