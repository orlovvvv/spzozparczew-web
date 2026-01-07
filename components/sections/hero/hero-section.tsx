"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ChevronDown, Clock, Send } from "lucide-react";
import { useRef, useState } from "react";
import { Header } from "@/components/layout/header";
import { AuroraText } from "@/components/ui/aurora-text";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SuggestionChip } from "@/components/ui/suggestion-chip";

type ChatMessage = {
  id: string;
  type: "user" | "assistant";
  content: string;
};

const chatResponses: Record<string, string> = {
  "Godziny otwarcia rejestracji":
    "Rejestracja do poradni specjalistycznych czynna jest od poniedziałku do piątku w godzinach 07:00–14:00. Rejestracja telefoniczna: 83 355 21 28. Można również zarejestrować się osobiście w budynku przychodni.",
  "Telefon do poradni":
    "Główny numer rejestracji: 83 355 21 28\n\nPoradnia Kardiologiczna: 83 355 21 30\nPoradnia Neurologiczna: 83 355 21 31\nPoradnia Chirurgiczna: 83 355 21 32\nSzpitalny Oddział Ratunkowy (SOR): 83 355 21 00\n\nWszystkie numery dostępne w godzinach pracy poradni.",
  "Lista oddziałów":
    "SPZOZ Parczew posiada następujące oddziały szpitalne:\n\n• Oddział Anestezjologii i Intensywnej Terapii\n• Oddział Chirurgiczno-Urazowy\n• Oddział Dziecięcy\n• Oddział Geriatryczny\n• Oddział Chorób Wewnętrznych\n• Oddział Rehabilitacyjny\n• Szpitalny Oddział Ratunkowy (SOR)\n• Oddział Psychiatryczny\n• Oddział Dzienny Psychiatryczny\n• Oddział Leczenia Uzależnień\n• Oddział Dzienny Terapii Uzależnienia od Alkoholu",
  "Wyniki badań online":
    "Wyniki badań laboratoryjnych dostępne są online pod adresem:\n\nhttps://wyniki.spzozparczew.pl:5443/web\n\nDo logowania potrzebny jest numer PESEL oraz kod dostępu otrzymany przy pobraniu materiału. Wyniki dostępne są zazwyczaj w ciągu 24-48 godzin od wykonania badania.",
};

export function HeroSection() {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState("");
  const [announcement, setAnnouncement] = useState("");
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const handleSuggestionClick = (question: string) => {
    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      type: "user",
      content: question,
    };
    const assistantMessage: ChatMessage = {
      id: `assistant-${Date.now()}`,
      type: "assistant",
      content:
        chatResponses[question] ||
        "Przepraszam, nie mam informacji na ten temat. Proszę skontaktować się z rejestracją pod numerem 83 355 21 28.",
    };
    setMessages((prev) => [...prev, userMessage, assistantMessage]);

    // Announce response to screen readers
    setAnnouncement(`Otrzymano odpowiedź: ${assistantMessage.content}`);
    setTimeout(() => setAnnouncement(""), 100);
  };

  const validateInput = (value: string): string => {
    const trimmedValue = value.trim();

    if (trimmedValue.length === 0) {
      return "Pole pytania nie może być puste";
    }

    if (trimmedValue.length < 3) {
      return "Pytanie musi zawierać co najmniej 3 znaki";
    }

    return "";
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    // Clear error when user starts typing
    if (inputError) {
      setInputError("");
    }
  };

  const handleInputBlur = () => {
    if (inputValue.trim().length > 0) {
      const error = validateInput(inputValue);
      setInputError(error);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const error = validateInput(inputValue);
    if (error) {
      setInputError(error);
      setAnnouncement(error);
      setTimeout(() => setAnnouncement(""), 100);
      return;
    }

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      type: "user",
      content: inputValue,
    };
    const assistantMessage: ChatMessage = {
      id: `assistant-${Date.now()}`,
      type: "assistant",
      content:
        "Dziękuję za pytanie. W celu uzyskania szczegółowych informacji, proszę skontaktować się z rejestracją pod numerem 83 355 21 28 lub skorzystać z jednej z sugerowanych opcji poniżej.",
    };
    setMessages((prev) => [...prev, userMessage, assistantMessage]);
    setInputValue("");
    setInputError("");

    // Announce response to screen readers
    setAnnouncement(`Otrzymano odpowiedź: ${assistantMessage.content}`);
    setTimeout(() => setAnnouncement(""), 100);
  };

  return (
    <header ref={ref} className="relative min-h-screen flex flex-col">
      <div className="absolute inset-0 bg-linear-to-b from-primary-90 via-primary-95 to-primary-container dark:from-background dark:via-background dark:to-background high-contrast:from-background high-contrast:via-background high-contrast:to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.25)_0%,transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.25)_0%,transparent_60%)] high-contrast:bg-none" />

      <Header />

      <motion.div
        style={prefersReducedMotion ? {} : { y, opacity }}
        className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6"
      >
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div
              className={`text-center lg:text-left ${messages.length > 0 ? "hidden lg:block" : ""}`}
            >
              <Badge
                variant="outline"
                className="mb-8 bg-background/80 text-primary border-primary/20 px-4 py-1.5 backdrop-blur-sm inline-flex high-contrast:bg-surface-container-low high-contrast:border-foreground high-contrast:text-foreground high-contrast:backdrop-blur-none"
              >
                <Clock className="h-3.5 w-3.5 mr-2" aria-hidden="true" />
                Rejestracja: pon. – pt. 07:00 – 14:00
              </Badge>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
                W czym możemy Ci{" "}
                <AuroraText
                  colors={["#0d9488", "#0f766e", "#115e59", "#14b8a6"]}
                  darkColors={["#042f2e", "#0d4a47", "#115e59", "#0f766e"]}
                  speed={0.8}
                >
                  pomóc?
                </AuroraText>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl font-light tracking-wide">
                Zapytaj o informacje o usługach oraz godzinach otwarcia
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
                <SuggestionChip
                  onClick={() =>
                    handleSuggestionClick("Godziny otwarcia rejestracji")
                  }
                >
                  Godziny otwarcia rejestracji
                </SuggestionChip>
                <SuggestionChip
                  onClick={() => handleSuggestionClick("Telefon do poradni")}
                >
                  Telefon do poradni
                </SuggestionChip>
                <SuggestionChip
                  onClick={() => handleSuggestionClick("Lista oddziałów")}
                >
                  Lista oddziałów
                </SuggestionChip>
                <SuggestionChip
                  onClick={() => handleSuggestionClick("Wyniki badań online")}
                >
                  Wyniki badań online
                </SuggestionChip>
              </div>
            </div>

            <div
              className={`w-full mx-auto lg:mx-0 ${messages.length > 0 ? "max-w-2xl lg:max-w-lg col-span-1 lg:col-span-1" : "max-w-lg"}`}
            >
              <div className="space-y-3">
                {messages.length > 0 && (
                  <>
                    <div
                      aria-label="Asystent SPZOZ - Nie udzielam porad medycznych"
                      className="lg:hidden text-center mb-2"
                    >
                      <p className="text-lg font-semibold text-foreground">
                        Asystent SPZOZ
                      </p>
                      <p className="text-xs text-muted-foreground/80">
                        Nie udzielam porad medycznych
                      </p>
                    </div>
                    <div
                      className="h-[280px] sm:h-[320px] overflow-y-auto rounded-2xl bg-surface-container/40 dark:bg-surface-container-high/50 high-contrast:bg-surface-container-high backdrop-blur-md border border-outline-variant/30 dark:border-outline/20 high-contrast:border-foreground p-4 shadow-sm"
                      role="log"
                      aria-live="polite"
                      aria-atomic="false"
                      aria-label="Historia rozmowy z asystentem"
                      lang="pl"
                    >
                      <div className="space-y-3">
                        {messages.map((message) => (
                          <div
                            key={message.id}
                            className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                            role="article"
                            aria-label={
                              message.type === "user"
                                ? "Twoje pytanie"
                                : "Odpowiedź asystenta"
                            }
                          >
                            <div
                              className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm high-contrast:border high-contrast:border-foreground high-contrast:shadow-none ${
                                message.type === "user"
                                  ? "bg-primary text-primary-foreground rounded-br-sm high-contrast:bg-primary high-contrast:text-primary-foreground high-contrast:border-primary"
                                  : "bg-white/80 dark:bg-neutral-800 high-contrast:bg-surface-container-low backdrop-blur-sm text-foreground rounded-bl-sm high-contrast:backdrop-blur-none"
                              }`}
                            >
                              <span className="sr-only">
                                {message.type === "user" ? "Ty:" : "Asystent:"}
                              </span>
                              <p className="whitespace-pre-line text-left leading-relaxed flex items-start gap-2">
                                <span
                                  aria-hidden="true"
                                  className="text-xs opacity-70"
                                >
                                  {message.type === "user" ? "▶" : "◀"}
                                </span>
                                {message.content}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
                <form onSubmit={handleSubmit} className="space-y-2" noValidate>
                  <div className="flex items-start gap-3">
                    <div className="flex-1 min-w-0">
                      <label htmlFor="hero-search" className="sr-only">
                        Zadaj pytanie o szpital
                      </label>
                      <input
                        type="text"
                        id="hero-search"
                        name="pytanie"
                        autoComplete="off"
                        value={inputValue}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        aria-invalid={inputError ? "true" : "false"}
                        aria-describedby={
                          inputError
                            ? "hero-search-error hero-search-description"
                            : "hero-search-description"
                        }
                        aria-required="true"
                        placeholder={
                          messages.length > 0
                            ? "Wpisz kolejne pytanie..."
                            : "Wpisz pytanie, np. godziny otwarcia..."
                        }
                        className={`w-full rounded-full border bg-surface-container/50 dark:bg-surface-container-high/50 high-contrast:bg-surface-container-low backdrop-blur-md px-5 py-3 text-sm text-foreground placeholder-muted-foreground/70 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-all duration-medium-2 ease-standard ${
                          inputError
                            ? "border-destructive focus-visible:ring-destructive/50 aria-[invalid=true]:ring-destructive/20 dark:aria-[invalid=true]:ring-destructive/40"
                            : "border-outline-variant/40 dark:border-outline/30 high-contrast:border-foreground focus-visible:border-primary/50 focus-visible:bg-surface-container/60"
                        }`}
                      />
                      <span id="hero-search-description" className="sr-only">
                        Możesz zapytać o godziny, numery telefonów lub dostępne
                        usługi
                      </span>
                      {inputError && (
                        <p
                          id="hero-search-error"
                          className="mt-1.5 text-xs text-destructive px-5"
                          role="alert"
                          aria-live="polite"
                        >
                          {inputError}
                        </p>
                      )}
                    </div>
                    <Button
                      type="submit"
                      size="icon"
                      className="shrink-0 rounded-full h-11 w-11 shadow-sm"
                      aria-label="Wyślij pytanie"
                    >
                      <Send className="h-4 w-4" aria-hidden="true" />
                      <span className="sr-only">Wyślij pytanie</span>
                    </Button>
                  </div>
                </form>
                {messages.length === 0 && (
                  <p className="text-xs font-light text-muted-foreground/80 text-center lg:text-left px-1">
                    Nie udzielam porad medycznych. W sprawach zdrowotnych
                    skontaktuj się z lekarzem.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="relative z-10 flex justify-center pb-12">
        <button
          type="button"
          onClick={() =>
            document
              .getElementById("main-content")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          aria-label="Przewiń do głównej treści strony"
          className="inline-flex flex-col items-center gap-2 text-sm text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-2 transition-colors duration-short-4 ease-standard"
        >
          <span aria-hidden="true">Więcej informacji</span>
          <ChevronDown
            className="h-4 w-4 animate-bounce motion-reduce:animate-none"
            aria-hidden="true"
          />
        </button>
      </div>

      {/* Live region for screen reader announcements */}
      <div aria-live="assertive" aria-atomic="true" className="sr-only">
        {announcement}
      </div>
    </header>
  );
}
