/**
 * Career and job openings data for SPZOZ Parczew
 * Contains information about current job opportunities and application process
 */

export interface Job {
  /** Job title */
  title: string;
  /** Department where the position is available */
  department: string;
  /** Employment type */
  type: "Pełny etat" | "Część etatu";
  /** Job requirements and qualifications */
  requirements: string;
}

/**
 * Current job openings at SPZOZ Parczew
 */
export const jobOpenings: Job[] = [
  {
    title: "Lekarz Specjalista",
    department: "Oddział Chorób Wewnętrznych",
    type: "Pełny etat",
    requirements:
      "Specjalizacja z chorób wewnętrznych, prawo wykonywania zawodu",
  },
  {
    title: "Pielęgniarka/Pielęgniarz",
    department: "Oddział Chirurgiczny",
    type: "Pełny etat",
    requirements: "Dyplom pielęgniarstwa, aktualne prawo wykonywania zawodu",
  },
  {
    title: "Psychoterapeuta",
    department: "Centrum Zdrowia Psychicznego",
    type: "Część etatu",
    requirements: "Certyfikat psychoterapeuty, doświadczenie kliniczne",
  },
  {
    title: "Fizjoterapeuta",
    department: "Dział Rehabilitacji",
    type: "Pełny etat",
    requirements: "Dyplom fizjoterapii, prawo wykonywania zawodu",
  },
  {
    title: "Technik Farmacji",
    department: "Apteka Szpitalna",
    type: "Pełny etat",
    requirements: "Dyplom technika farmacji, doświadczenie mile widziane",
  },
  {
    title: "Pracownik Administracyjny",
    department: "Dział Administracji",
    type: "Pełny etat",
    requirements: "Wykształcenie średnie, obsługa komputera, komunikatywność",
  },
];

/**
 * HR contact information
 */
export const hrContact = {
  email: "sekretariat@spzozparczew.pl",
  emailHref: "mailto:sekretariat@spzozparczew.pl",
  applicationSubject: "Aplikacja: ",
  spontaneousSubject: "Spontaniczna aplikacja",
};

/**
 * Career section text content
 */
export const careerTexts = {
  title: "Oferty pracy",
  subtitle: "Dołącz do zespołu SPZOZ Parczew",
  badge: "otwartych",
  requirements: "Wymagania:",
  applyButton: "Aplikuj",
  spontaneousApplication:
    "Nie znalazłeś odpowiedniej oferty? Wyślij spontaniczną aplikację",
};
