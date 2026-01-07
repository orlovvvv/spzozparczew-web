/**
 * Electronic services data for SPZOZ Parczew
 * Contains information about online medical services
 */

export interface ElectronicService {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  cta: string;
  url: string;
  imagePosition: "left" | "right";
}

export const electronicServicesTexts = {
  title: "Usługi online",
  subtitle: "Wygodny dostęp do usług medycznych przez internet",
};

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
