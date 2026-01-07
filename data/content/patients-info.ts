/**
 * Patient information data for SPZOZ Parczew
 * Contains contact information, opening hours, and registration details
 */

import { Phone, Clock, Mail } from "lucide-react";

export interface PatientInfoItem {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  items: Array<{
    label: string;
    value: string;
    tel?: string;
    email?: string;
  }>;
}

export const patientsInfo: PatientInfoItem[] = [
  {
    title: "Telefony rejestracji",
    icon: Phone,
    items: [
      { label: "Poradnie", value: "(83) 355-21-73", tel: "+48833552173" },
      { label: "Diagnostyka", value: "(83) 355-21-92", tel: "+48833552192" },
      { label: "Endoskopia", value: "(83) 355-21-52", tel: "+48833552152" },
    ],
  },
  {
    title: "Godziny otwarcia",
    icon: Clock,
    items: [
      { label: "Rejestracja", value: "pon. – pt. 07:00 – 14:00" },
      {
        label: "Punkt pobrań",
        value: "pon. – pt. 07:00 – 10:00",
      },
      { label: "SOR", value: "całodobowo 24/7" },
    ],
  },
  {
    title: "Kontakt główny",
    icon: Mail,
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

export const patientsInfoTexts = {
  title: "Dla pacjentów",
  subtitle: "Najważniejsze informacje o rejestracji i kontakcie",
};
