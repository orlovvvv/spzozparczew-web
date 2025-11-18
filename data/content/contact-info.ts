/**
 * Contact information and quick links for SPZOZ Parczew
 * Contains contact details and navigation links for the footer
 */

export interface ContactItem {
  label: string;
  value: string;
  tel?: string;
  email?: string;
}

export interface QuickLink {
  href: string;
  label: string;
  external?: boolean;
  ariaLabel?: string;
}

export const mainContact: {
  hospitalName: string;
  hospitalMotto: string;
  fullLegalName: string;
  mainPhone: string;
  mainPhoneHref: string;
  fax: string;
  email: string;
  emailHref: string;
  address: string;
  iodEmail: string;
  iodEmailHref: string;
  iodTitle: string;
  iodName: string;
} = {
  hospitalName: "SPZOZ Parczew",
  hospitalMotto: "Celem do którego dążymy, jest zdrowie naszych pacjentów",
  fullLegalName: "Samodzielny Publiczny Zakład Opieki Zdrowotnej w Parczewie",
  mainPhone: "(83) 355-21-02",
  mainPhoneHref: "+48833552102",
  fax: "(83) 355-21-00",
  email: "sekretariat@spzozparczew.pl",
  emailHref: "mailto:sekretariat@spzozparczew.pl",
  address: "ul. Kościelna 136, 21-200 Parczew",
  iodEmail: "iod@spzozparczew.pl",
  iodEmailHref: "mailto:iod@spzozparczew.pl",
  iodTitle: "Inspektor Ochrony Danych",
  iodName: "Sławomir Zagojski",
};

export const quickLinks: QuickLink[] = [
  { href: "#dla-pacjentow", label: "Dla pacjentów" },
  { href: "#oddzialy", label: "Oddziały szpitalne" },
  { href: "#poradnie", label: "Poradnie specjalistyczne" },
  { href: "#kariera", label: "Kariera" },
  {
    href: "https://eportal.spzozparczew.pl",
    label: "ePortal Pacjenta",
    external: true,
    ariaLabel: "ePortal Pacjenta (otwiera się w nowej karcie)",
  },
];
