/**
 * Electronic services data for SPZOZ Parczew
 * Contains information about online services and their access points
 */

export interface ElectronicService {
  /** Title of the electronic service */
  title: string;
  /** Detailed description of the service */
  description: string;
  /** Path to the service image */
  image: string;
  /** Alt text for the service image */
  imageAlt: string;
  /** Call-to-action button text */
  cta: string;
  /** URL to access the service */
  url: string;
  /** Image position in layout */
  imagePosition: "left" | "right";
}

/**
 * Electronic services available at SPZOZ Parczew
 */
export const electronicServices: ElectronicService[] = [
  {
    title: "ePortal Pacjenta",
    description:
      "Zarejestruj się online do poradni specjalistycznych. Zarządzaj wizytami, sprawdzaj historię i umawiaj się na wizyty 24/7.",
    image: "/eportal.png",
    imageAlt: "ePortal Pacjenta - system rejestracji online",
    cta: "Otwórz ePortal",
    url: "https://eportal.spzozparczew.pl",
    imagePosition: "left",
  },
  {
    title: "Wyniki badań online",
    description:
      "Sprawdź wyniki badań laboratoryjnych bez wychodzenia z domu. Bezpieczny dostęp do pełnej historii badań.",
    image: "/intelilab.png",
    imageAlt: "InteliLab - system wyników badań laboratoryjnych",
    cta: "Sprawdź wyniki",
    url: "https://wyniki.spzozparczew.pl:5443/web",
    imagePosition: "right",
  },
];

/**
 * Electronic services section text content
 */
export const electronicServicesTexts = {
  title: "Usługi online",
  subtitle: "Wygodny dostęp do usług medycznych przez internet",
};
