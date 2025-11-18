/**
 * Career and job data for SPZOZ Parczew
 * Contains information about current job openings and career opportunities
 */

import { Briefcase } from "lucide-react";

export interface Job {
  title: string;
  department: string;
  type: "Pełny etat" | "Część etatu";
  requirements: string;
}

export const jobs: Job[] = [
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

export const careerTexts = {
  title: "Oferty pracy",
  subtitle: "Dołącz do zespołu SPZOZ Parczew",
  spontaneousApplication:
    "Nie znalazłeś odpowiedniej oferty? Wyślij spontaniczną aplikację",
};
