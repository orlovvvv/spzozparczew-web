/**
 * Chat assistant responses for SPZOZ Parczew
 * Contains predefined responses for common patient queries
 */

export interface ChatResponse {
  /** Question that triggers this response */
  question: string;
  /** Detailed answer for the patient */
  answer: string;
}

/**
 * Predefined chat responses for common queries
 */
export const chatResponses: Record<string, string> = {
  "Godziny otwarcia rejestracji":
    "Rejestracja do poradni specjalistycznych czynna jest od poniedziałku do piątku w godzinach 07:00–14:00. Rejestracja telefoniczna: 83 355 21 28. Można również zarejestrować się osobiście w budynku przychodni.",
  "Telefon do poradni":
    "Główny numer rejestracji: 83 355 21 28\n\nPoradnia Kardiologiczna: 83 355 21 30\nPoradnia Neurologiczna: 83 355 21 31\nPoradnia Chirurgiczna: 83 355 21 32\nSzpitalny Oddział Ratunkowy (SOR): 83 355 21 00\n\nWszystkie numery dostępne w godzinach pracy poradni.",
  "Lista oddziałów":
    "SPZOZ Parczew posiada następujące oddziały szpitalne:\n\n• Oddział Anestezjologii i Intensywnej Terapii\n• Oddział Chirurgiczno-Urazowy\n• Oddział Dziecięcy\n• Oddział Geriatryczny\n• Oddział Chorób Wewnętrznych\n• Oddział Rehabilitacyjny\n• Szpitalny Oddział Ratunkowy (SOR)\n• Oddział Psychiatryczny\n• Oddział Dzienny Psychiatryczny\n• Oddział Leczenia Uzależnień\n• Oddział Dzienny Terapii Uzależnienia od Alkoholu",
  "Wyniki badań online":
    "Wyniki badań laboratoryjnych dostępne są online pod adresem:\n\nhttps://wyniki.spzozparczew.pl:5443/web\n\nDo logowania potrzebny jest numer PESEL oraz kod dostępu otrzymany przy pobraniu materiału. Wyniki dostępne są zazwyczaj w ciągu 24-48 godzin od wykonania badania.",
};

/**
 * Default response for unrecognized queries
 */
export const defaultResponse =
  "Przepraszam, nie mam informacji na ten temat. Proszę skontaktować się z rejestracją pod numerem 83 355 21 28.";

/**
 * Generic response for custom user questions
 */
export const genericResponse =
  "Dziękuję za pytanie. W celu uzyskania szczegółowych informacji, proszę skontaktować się z rejestracją pod numerem 83 355 21 28 lub skorzystać z jednej z sugerowanych opcji poniżej.";

/**
 * Suggested questions for users
 */
export const suggestedQuestions = [
  "Godziny otwarcia rejestracji",
  "Telefon do poradni",
  "Lista oddziałów",
  "Wyniki badań online",
] as const;

/**
 * Chat interface text content
 */
export const chatTexts = {
  title: "Asystent SPZOZ",
  subtitle: "Nie udzielam porad medycznych",
  disclaimer:
    "Nie udzielam porad medycznych. W sprawach zdrowotnych skontaktuj się z lekarzem.",
  placeholder: "Wpisz pytanie, np. godziny otwarcia...",
  placeholderWithHistory: "Wpisz kolejne pytanie...",
  sendButton: "Wyślij pytanie",
  userInputError: {
    empty: "Pole pytania nie może być puste",
    tooShort: "Pytanie musi zawierać co najmniej 3 znaki",
  },
  inputDescription:
    "Możesz zapytać o godziny, numery telefonów lub dostępne usługi",
  scrollToContent: "Więcej informacji",
  chatLogLabel: "Asystent SPZOZ - Nie udzielam porad medycznych",
  chatHistoryLabel: "Historia rozmowy z asystentem",
  userMessageLabel: "Twoje pytanie",
  assistantMessageLabel: "Odpowiedź asystenta",
  responseAnnouncement: "Otrzymano odpowiedź:",
  suggestionPrefix: "Zapytaj o:",
};

/**
 * Chat message interface
 */
export interface ChatMessage {
  /** Unique identifier for the message */
  id: string;
  /** Type of message: user or assistant */
  type: "user" | "assistant";
  /** Content of the message */
  content: string;
}
