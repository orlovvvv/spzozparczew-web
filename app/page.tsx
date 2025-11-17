"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Activity,
  Brain,
  Briefcase,
  ChevronDown,
  Clock,
  ExternalLink,
  Heart,
  Mail,
  MapPin,
  Monitor,
  Phone,
  ScanLine,
  Send,
  Shield,
  Stethoscope,
  TestTube,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { Header } from "@/components/layout/header";
import { AuroraText } from "@/components/ui/aurora-text";
import { Badge } from "@/components/ui/badge";
import { BentoGrid, BentoServiceCard } from "@/components/ui/bento-grid";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function SuggestionChip({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick?.();
    }
  };

  return (
    <button
      type="button"
      onClick={onClick}
      onKeyDown={handleKeyDown}
      className="inline-flex items-center rounded-full border border-outline-variant bg-background px-4 py-2 text-sm font-light text-muted-foreground shadow-sm hover:bg-primary/10 hover:border-primary/40 hover:text-primary hover:shadow-md hover:scale-105 active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-all duration-medium-2 ease-standard high-contrast:border-foreground high-contrast:bg-surface-container-low high-contrast:text-foreground high-contrast:hover:bg-primary high-contrast:hover:text-primary-foreground high-contrast:hover:border-primary"
    >
      {children}
    </button>
  );
}

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

function HeroSection() {
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
                              <p className="whitespace-pre-line text-left leading-relaxed">
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
                        value={inputValue}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        aria-invalid={inputError ? "true" : "false"}
                        aria-describedby={
                          inputError ? "hero-search-error" : undefined
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

function NewsSection() {
  const prefersReducedMotion = useReducedMotion();

  const news = [
    {
      date: "Marzec 2025",
      dateTime: "2025-03",
      title: "Nowy ortopeda w zespole",
      content: "Dr Jacek Ławnicki przyjmuje we wtorki 8:00-16:00",
      badge: "Nowe",
    },
    {
      date: "Luty 2025",
      dateTime: "2025-02",
      title: "Szpital Przyjazny Wojsku",
      content: "Dołączyliśmy do programu współpracy z MON",
    },
    {
      date: "Styczeń 2025",
      dateTime: "2025-01",
      title: "Nowa Poradnia Gastroenterologiczna",
      content: "Otwarcie poradni z pełnym zapleczem diagnostycznym",
    },
  ];

  return (
    <section
      id="aktualnosci"
      aria-labelledby="aktualnosci-heading"
      className="space-y-6"
    >
      <div className="flex items-center gap-3">
        <div className="h-8 w-1.5 bg-primary rounded-full" />
        <div>
          <h2
            id="aktualnosci-heading"
            className="text-xl font-semibold tracking-tight text-foreground"
          >
            Aktualności
          </h2>
          <p className="mt-0.5 text-sm font-light text-muted-foreground">
            Najnowsze informacje i ogłoszenia
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {news.map((item, index) => (
          <motion.article
            key={item.title}
            initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Card className="h-full rounded-xl bg-white/60 backdrop-blur-xl dark:bg-white/5 high-contrast:bg-surface-container-low high-contrast:backdrop-blur-none border border-white/40 dark:border-white/10 high-contrast:border-2 high-contrast:border-foreground shadow-lg dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-xl hover:-translate-y-1 transition-all duration-medium-2 ease-standard focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2">
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <time
                    className="text-xs font-light text-muted-foreground"
                    dateTime={item.dateTime}
                  >
                    {item.date}
                  </time>
                  {item.badge && (
                    <Badge
                      variant="default"
                      className="text-xs rounded-lg shadow-xs"
                    >
                      {item.badge}
                    </Badge>
                  )}
                </div>
                <h3 className="text-base font-medium text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm font-light text-muted-foreground">
                  {item.content}
                </p>
              </CardContent>
            </Card>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function ForPatientsSection() {
  const prefersReducedMotion = useReducedMotion();

  const info = [
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
        { label: "Rejestracja", value: "pon.–pt. 07:00–14:00" },
        { label: "Laboratorium", value: "pobrania 07:00–10:00" },
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

  return (
    <section
      id="dla-pacjentow"
      aria-labelledby="dla-pacjentow-heading"
      className="space-y-6"
    >
      <div className="flex items-center gap-3">
        <div className="h-8 w-1.5 bg-primary rounded-full" />
        <div>
          <h2
            id="dla-pacjentow-heading"
            className="text-xl font-semibold tracking-tight text-foreground"
          >
            Dla pacjentów
          </h2>
          <p className="mt-0.5 text-sm font-light text-muted-foreground">
            Najważniejsze informacje o rejestracji i kontakcie
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {info.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.title}
              initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Card className="h-full rounded-xl bg-white/60 backdrop-blur-xl dark:bg-white/5 high-contrast:bg-surface-container-low high-contrast:backdrop-blur-none border border-white/40 dark:border-white/10 high-contrast:border-2 high-contrast:border-foreground shadow-lg dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-xl hover:-translate-y-1 transition-all duration-medium-2 ease-standard focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-container dark:bg-primary/20 high-contrast:bg-primary text-on-primary-container dark:text-primary high-contrast:text-primary-foreground shrink-0"
                      aria-hidden="true"
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base font-medium text-foreground mb-2">
                        {card.title}
                      </h3>
                      <div className="space-y-1.5">
                        {card.items.map((item) => (
                          <p
                            key={item.label}
                            className="text-sm text-muted-foreground"
                          >
                            <span className="font-medium text-foreground">
                              {item.label}:
                            </span>{" "}
                            {item.tel ? (
                              <a
                                href={`tel:${item.tel}`}
                                aria-label={`Zadzwoń: ${item.label} - ${item.value}`}
                                className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded high-contrast:text-primary high-contrast:underline"
                              >
                                {item.value}
                              </a>
                            ) : item.email ? (
                              <a
                                href={`mailto:${item.email}`}
                                aria-label={`Wyślij email: ${item.label} - ${item.value}`}
                                className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded high-contrast:text-primary high-contrast:underline"
                              >
                                {item.value}
                              </a>
                            ) : (
                              item.value
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function ClinicsSection() {
  const prefersReducedMotion = useReducedMotion();

  const clinics = [
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

  return (
    <section
      id="poradnie"
      aria-labelledby="poradnie-heading"
      className="space-y-6"
    >
      <div className="flex items-center gap-3">
        <div className="h-8 w-1.5 bg-primary rounded-full" />
        <div>
          <h2
            id="poradnie-heading"
            className="text-xl font-semibold tracking-tight text-foreground"
          >
            Poradnie specjalistyczne
          </h2>
          <p className="mt-0.5 text-sm font-light text-muted-foreground">
            Rejestracja:{" "}
            <a
              href="tel:+48833552173"
              className="text-primary font-normal hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded high-contrast:text-primary high-contrast:underline"
            >
              (83) 355-21-73
            </a>{" "}
            (pon.–pt. 07:00–14:00)
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {clinics.map((clinic, index) => (
          <motion.div
            key={clinic.name}
            initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.02 }}
          >
            <Card className="h-full rounded-xl bg-white/60 backdrop-blur-xl dark:bg-white/5 high-contrast:bg-surface-container-low high-contrast:backdrop-blur-none border border-white/40 dark:border-white/10 high-contrast:border-2 high-contrast:border-foreground shadow-lg dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-xl hover:-translate-y-1 transition-all duration-medium-2 ease-standard focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-container dark:bg-primary/20 high-contrast:bg-primary text-on-primary-container dark:text-primary high-contrast:text-primary-foreground shrink-0"
                    aria-hidden="true"
                  >
                    <Stethoscope className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-medium text-foreground leading-tight">
                        {clinic.name}
                      </h3>
                      {clinic.badge && (
                        <Badge
                          variant="default"
                          className="text-xs shrink-0 rounded-lg shadow-xs"
                        >
                          {clinic.badge}
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm font-light text-muted-foreground mt-1 line-clamp-2">
                      {clinic.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function DepartmentsSection() {
  const prefersReducedMotion = useReducedMotion();

  const departments = [
    {
      name: "Szpitalny Oddział Ratunkowy (SOR)",
      description: "Całodobowa pomoc w nagłych przypadkach",
      icon: Shield,
      badge: "24/7",
    },
    {
      name: "Anestezjologii i Intensywnej Terapii",
      description: "Opieka nad pacjentami w stanach krytycznych",
      icon: Heart,
    },
    {
      name: "Chirurgiczno-Urazowy",
      description: "Leczenie operacyjne i pourazowe",
      icon: Activity,
    },
    {
      name: "Dziecięcy",
      description: "Opieka pediatryczna dla dzieci",
      icon: Users,
    },
    {
      name: "Geriatryczny",
      description: "Specjalistyczna opieka dla osób starszych",
      icon: Heart,
    },
    {
      name: "Chorób Wewnętrznych",
      description: "Diagnostyka i leczenie chorób internistycznych",
      icon: Stethoscope,
    },
    {
      name: "Rehabilitacyjny",
      description: "Kompleksowa rehabilitacja lecznicza",
      icon: Activity,
    },
    {
      name: "Psychiatryczny",
      description: "Leczenie zaburzeń psychicznych",
      icon: Brain,
    },
    {
      name: "Dzienny Psychiatryczny",
      description: "Dzienna opieka psychiatryczna",
      icon: Brain,
    },
    {
      name: "Leczenia Uzależnień",
      description: "Terapia uzależnień",
      icon: Heart,
    },
    {
      name: "Dzienny Terapii Uzależnienia od Alkoholu",
      description: "Dzienna terapia alkoholowa",
      icon: Heart,
    },
  ];

  return (
    <section
      id="oddzialy"
      aria-labelledby="oddzialy-heading"
      className="space-y-6 bg-primary-container dark:bg-neutral-900 high-contrast:bg-surface-container-high -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12 rounded-3xl"
    >
      <div className="flex items-center gap-3">
        <div className="h-8 w-1.5 bg-on-primary-container dark:bg-primary high-contrast:bg-foreground rounded-full" />
        <div>
          <h2
            id="oddzialy-heading"
            className="text-xl font-semibold tracking-tight text-foreground"
          >
            Oddziały szpitalne
          </h2>
          <p className="mt-0.5 text-sm font-light text-muted-foreground">
            11 specjalistycznych oddziałów
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {departments.map((dept, index) => {
          const Icon = dept.icon;
          return (
            <motion.div
              key={dept.name}
              initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
            >
              <Card className="h-full rounded-xl bg-white/60 backdrop-blur-xl dark:bg-white/5 high-contrast:bg-surface-container-low high-contrast:backdrop-blur-none border border-white/40 dark:border-white/10 high-contrast:border-2 high-contrast:border-foreground shadow-lg dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-xl hover:-translate-y-1 transition-all duration-medium-2 ease-standard focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-container dark:bg-primary/20 high-contrast:bg-primary text-on-primary-container dark:text-primary high-contrast:text-primary-foreground shrink-0"
                      aria-hidden="true"
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-medium text-foreground leading-tight">
                          {dept.name}
                        </h3>
                        {dept.badge && (
                          <Badge
                            variant="secondary"
                            className="text-xs shrink-0 rounded-lg shadow-xs"
                          >
                            {dept.badge}
                          </Badge>
                        )}
                      </div>
                      <p
                        className="text-sm font-light text-muted-foreground mt-1 line-clamp-2"
                        id={`dept-desc-${index}`}
                      >
                        {dept.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function ServicesBentoSection() {
  const prefersReducedMotion = useReducedMotion();

  const diagnosticsServices = [
    {
      name: "Rentgenodiagnostyka",
      description: "Badania RTG kości i narządów",
      phone: "(83) 355-21-92",
    },
    {
      name: "Tomografia Komputerowa",
      description: "Szczegółowe obrazowanie CT",
      phone: "(83) 355-21-92",
    },
    {
      name: "Ultrasonografia",
      description: "Badania USG narządów wewnętrznych",
      phone: "(83) 355-21-92",
    },
    {
      name: "Endoskopia",
      description: "Gastroskopia i kolonoskopia",
      phone: "(83) 355-21-52",
    },
  ];

  const mentalHealthServices = [
    {
      name: "Oddział Psychiatryczny",
      description: "Całodobowa opieka psychiatryczna",
    },
    {
      name: "Oddział Dzienny Psychiatryczny",
      description: "Dzienna terapia i rehabilitacja",
    },
    {
      name: "Poradnia Zdrowia Psychicznego",
      description: "Konsultacje i psychoterapia",
    },
    {
      name: "Zespół Leczenia Środowiskowego",
      description: "Wsparcie w środowisku domowym",
    },
  ];

  const rehabilitationServices = [
    {
      name: "Ośrodek Rehabilitacji Dziennej",
      description: "Kompleksowa rehabilitacja ambulatoryjna",
    },
    {
      name: "Dział Fizjoterapii",
      description: "Zabiegi fizykoterapeutyczne i kinezyterapia",
    },
    {
      name: "Zespół Rehabilitacji Domowej",
      description: "Rehabilitacja w domu pacjenta",
    },
  ];

  return (
    <section
      id="uslugi-specjalistyczne"
      aria-labelledby="uslugi-specjalistyczne-heading"
      className="space-y-6"
    >
      <div className="flex items-center gap-3">
        <div className="h-8 w-1.5 bg-primary rounded-full" />
        <div>
          <h2
            id="uslugi-specjalistyczne-heading"
            className="text-xl font-semibold tracking-tight text-foreground"
          >
            Usługi specjalistyczne
          </h2>
          <p className="mt-0.5 text-sm font-light text-muted-foreground">
            Diagnostyka, zdrowie psychiczne i rehabilitacja
          </p>
        </div>
      </div>

      <motion.div
        initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <BentoServiceCard
            title="Diagnostyka"
            subtitle="Nowoczesne pracownie diagnostyczne"
            Icon={ScanLine}
            className="col-span-1"
            background={
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            }
          >
            <div className="space-y-2">
              {diagnosticsServices.map((service) => (
                <div
                  key={service.name}
                  className="group/item p-3 rounded-xl bg-white/30 dark:bg-white/5 high-contrast:bg-surface-container-high transition-colors duration-short-4 ease-standard"
                >
                  <h4 className="text-sm font-medium text-foreground group-hover/item:text-primary transition-colors duration-short-4">
                    {service.name}
                  </h4>
                  <p className="text-xs font-light text-muted-foreground mt-0.5">
                    {service.description}
                  </p>
                  <a
                    href={`tel:+48${service.phone.replace(/[^0-9]/g, "")}`}
                    className="inline-flex items-center gap-1 text-xs text-primary hover:underline mt-1.5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded high-contrast:text-primary high-contrast:underline"
                  >
                    <Phone className="h-3 w-3" aria-hidden="true" />
                    {service.phone}
                  </a>
                </div>
              ))}
            </div>
          </BentoServiceCard>

          <BentoServiceCard
            title="Centrum Zdrowia Psychicznego"
            subtitle="Kompleksowa opieka psychiatryczna"
            phone="(83) 355-21-72"
            Icon={Brain}
            className="col-span-1"
            background={
              <div className="absolute inset-0 bg-gradient-to-br from-on-primary-container/5 to-transparent" />
            }
          >
            <div className="space-y-2">
              {mentalHealthServices.map((service) => (
                <div
                  key={service.name}
                  className="group/item p-3 rounded-xl bg-white/30 dark:bg-white/5 high-contrast:bg-surface-container-high transition-colors duration-short-4 ease-standard"
                >
                  <h4 className="text-sm font-medium text-foreground group-hover/item:text-primary transition-colors duration-short-4">
                    {service.name}
                  </h4>
                  <p className="text-xs font-light text-muted-foreground mt-0.5">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </BentoServiceCard>

          <BentoServiceCard
            title="Rehabilitacja"
            subtitle="Kompleksowe usługi rehabilitacyjne"
            Icon={Activity}
            className="col-span-1 md:col-span-2 lg:col-span-1"
            background={
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            }
          >
            <div className="space-y-2">
              {rehabilitationServices.map((service) => (
                <div
                  key={service.name}
                  className="group/item p-3 rounded-xl bg-white/30 dark:bg-white/5 high-contrast:bg-surface-container-high transition-colors duration-short-4 ease-standard"
                >
                  <h4 className="text-sm font-medium text-foreground group-hover/item:text-primary transition-colors duration-short-4">
                    {service.name}
                  </h4>
                  <p className="text-xs font-light text-muted-foreground mt-0.5">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </BentoServiceCard>
        </BentoGrid>
      </motion.div>
    </section>
  );
}

function CareerSection() {
  const prefersReducedMotion = useReducedMotion();

  const jobs = [
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

  return (
    <section
      id="kariera"
      aria-labelledby="kariera-heading"
      className="space-y-6"
    >
      <div className="flex items-center gap-3">
        <div className="h-8 w-1.5 bg-primary rounded-full" />
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h2
              id="kariera-heading"
              className="text-xl font-semibold tracking-tight text-foreground"
            >
              Oferty pracy
            </h2>
            <Badge variant="default" className="text-xs rounded-full shadow-sm">
              {jobs.length} otwartych
            </Badge>
          </div>
          <p className="mt-0.5 text-sm font-light text-muted-foreground">
            Dołącz do zespołu SPZOZ Parczew
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.map((job, index) => (
          <motion.div
            key={job.title}
            initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Card className="h-full rounded-xl bg-white/60 backdrop-blur-xl dark:bg-white/5 high-contrast:bg-surface-container-low high-contrast:backdrop-blur-none border border-white/40 dark:border-white/10 high-contrast:border-2 high-contrast:border-foreground shadow-lg dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-xl hover:-translate-y-1 transition-all duration-medium-2 ease-standard focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2">
              <CardContent className="p-5 flex flex-col h-full">
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-container dark:bg-primary/20 high-contrast:bg-primary text-on-primary-container dark:text-primary high-contrast:text-primary-foreground shrink-0"
                    aria-hidden="true"
                  >
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-base font-medium text-foreground leading-tight">
                        {job.title}
                      </h3>
                      <Badge
                        variant={
                          job.type === "Pełny etat" ? "default" : "secondary"
                        }
                        className="text-xs shrink-0 rounded-full shadow-sm"
                      >
                        {job.type}
                      </Badge>
                    </div>
                    <p className="text-sm font-light text-muted-foreground mt-1">
                      {job.department}
                    </p>
                  </div>
                </div>

                <div className="flex-1">
                  <p className="text-sm font-light text-muted-foreground mb-3">
                    <span className="font-medium">Wymagania:</span>{" "}
                    {job.requirements}
                  </p>
                </div>

                <Button
                  size="sm"
                  className="w-full mt-auto rounded-full shadow-sm"
                  asChild
                >
                  <a
                    href={`mailto:sekretariat@spzozparczew.pl?subject=Aplikacja: ${job.title}`}
                  >
                    <Mail className="h-3.5 w-3.5 mr-2" aria-hidden="true" />
                    Aplikuj
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="text-center pt-2">
        <p className="text-sm font-light text-muted-foreground">
          Nie znalazłeś odpowiedniej oferty?{" "}
          <a
            href="mailto:sekretariat@spzozparczew.pl?subject=Spontaniczna aplikacja"
            className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded font-medium high-contrast:text-primary high-contrast:underline"
          >
            Wyślij spontaniczną aplikację
          </a>
        </p>
      </div>
    </section>
  );
}

function ElectronicServicesSection() {
  const prefersReducedMotion = useReducedMotion();

  const services = [
    {
      title: "ePortal Pacjenta",
      description:
        "Zarejestruj się online do poradni specjalistycznych. Zarządzaj wizytami, sprawdzaj historię i umawiaj się na wizyty 24/7.",
      icon: Monitor,
      cta: "Otwórz ePortal",
      url: "https://eportal.spzozparczew.pl",
      imagePosition: "left" as const,
    },
    {
      title: "Wyniki badań online",
      description:
        "Sprawdź wyniki badań laboratoryjnych bez wychodzenia z domu. Bezpieczny dostęp do pełnej historii badań.",
      icon: TestTube,
      cta: "Sprawdź wyniki",
      url: "https://wyniki.spzozparczew.pl:5443/web",
      imagePosition: "right" as const,
    },
  ];

  return (
    <section
      id="e-uslugi"
      aria-labelledby="e-uslugi-heading"
      className="space-y-12"
    >
      <div className="flex items-center gap-3">
        <div className="h-8 w-1.5 bg-primary rounded-full" />
        <div>
          <h2
            id="e-uslugi-heading"
            className="text-xl font-semibold tracking-tight text-foreground"
          >
            Usługi online
          </h2>
          <p className="mt-0.5 text-sm font-light text-muted-foreground">
            Wygodny dostęp do usług medycznych przez internet
          </p>
        </div>
      </div>

      <div className="space-y-16">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isLeft = service.imagePosition === "left";

          return (
            <motion.div
              key={service.title}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`flex flex-col ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-8 lg:gap-16`}
            >
              <div className="flex-1 w-full lg:w-auto">
                <div className="relative aspect-[4/3] w-full max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-gradient-to-br from-primary-container to-surface-container-low shadow-lg group-hover:shadow-xl transition-shadow duration-medium-2 high-contrast:bg-surface-container-low high-contrast:from-surface-container-low high-contrast:to-surface-container-low high-contrast:border-2 high-contrast:border-foreground high-contrast:shadow-none">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-surface-container-lowest shadow-md mb-4 high-contrast:bg-primary high-contrast:shadow-none">
                        <Icon
                          className="h-10 w-10 text-primary high-contrast:text-primary-foreground"
                          aria-hidden="true"
                        />
                      </div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Podgląd interfejsu
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent high-contrast:bg-none" />
                </div>
              </div>

              <div className="flex-1 space-y-4 text-center lg:text-left">
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight">
                  {service.title}
                </h3>
                <p className="text-base font-light text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
                  {service.description}
                </p>
                <div className="pt-2">
                  <Button
                    asChild
                    className="rounded-full bg-white/60 backdrop-blur-xl dark:bg-white/10 text-foreground border border-white/40 dark:border-white/20 shadow-lg dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:bg-white/80 dark:hover:bg-white/20 hover:shadow-xl px-8 high-contrast:bg-primary high-contrast:text-primary-foreground high-contrast:backdrop-blur-none"
                  >
                    <a
                      href={service.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${service.cta} (otwiera się w nowej karcie)`}
                    >
                      <span aria-hidden="true">{service.cta}</span>
                      <ExternalLink
                        className="h-4 w-4 ml-2"
                        aria-hidden="true"
                      />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="kontakt" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-primary-container dark:bg-background high-contrast:bg-surface-container-low" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.2)_0%,transparent_60%)] dark:bg-[radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.25)_0%,transparent_60%)] high-contrast:bg-none" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 dark:bg-primary/20 high-contrast:bg-primary shadow">
                <span className="text-primary dark:text-primary high-contrast:text-primary-foreground font-semibold text-lg">
                  SP
                </span>
              </div>
              <div>
                <p className="font-semibold text-foreground">SPZOZ Parczew</p>
                <p className="text-sm font-light text-muted-foreground">
                  Szpital Powiatowy
                </p>
              </div>
            </div>
            <p className="text-sm font-light text-muted-foreground">
              Samodzielny Publiczny Zakład Opieki Zdrowotnej w Parczewie
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Kontakt</h3>
            <div className="space-y-2.5 text-sm font-light text-muted-foreground">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                ul. Kościelna 136, 21-200 Parczew
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                (83) 355-21-02
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                Fax: (83) 355-21-00
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                sekretariat@spzozparczew.pl
              </p>
              <p className="flex items-center gap-2">
                <Shield className="h-4 w-4 shrink-0" aria-hidden="true" />
                IOD: iod@spzozparczew.pl
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">
              Szybkie linki
            </h3>
            <nav className="space-y-2.5 text-sm font-light text-muted-foreground">
              <Link
                href="#dla-pacjentow"
                className="block hover:text-foreground focus:text-foreground focus:outline-none transition-colors duration-short-4 ease-standard"
              >
                Dla pacjentów
              </Link>
              <Link
                href="#oddzialy"
                className="block hover:text-foreground focus:text-foreground focus:outline-none transition-colors duration-short-4 ease-standard"
              >
                Oddziały szpitalne
              </Link>
              <Link
                href="#poradnie"
                className="block hover:text-foreground focus:text-foreground focus:outline-none transition-colors duration-short-4 ease-standard"
              >
                Poradnie specjalistyczne
              </Link>
              <Link
                href="#kariera"
                className="block hover:text-foreground focus:text-foreground focus:outline-none transition-colors duration-short-4 ease-standard"
              >
                Kariera
              </Link>
              <a
                href="https://eportal.spzozparczew.pl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ePortal Pacjenta (otwiera się w nowej karcie)"
                className="block hover:text-foreground focus:text-foreground focus:outline-none transition-colors duration-short-4 ease-standard"
              >
                ePortal Pacjenta
              </a>
            </nav>
          </div>
        </div>

        <div className="border-t border-outline-variant/30 dark:border-outline/20 high-contrast:border-foreground mt-8 pt-8 text-center text-sm font-light">
          <p className="text-muted-foreground">
            &copy; {new Date().getFullYear()} SPZOZ Parczew. Wszelkie prawa
            zastrzeżone.
          </p>
          <p className="mt-2 text-muted-foreground/70 high-contrast:text-muted-foreground">
            Inspektor Ochrony Danych: Sławomir Zagojski
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Link
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:bg-white focus:text-slate-900 rounded-md px-4 py-2"
      >
        Przejdź do treści głównej
      </Link>
      <Link
        href="#main-navigation"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:bg-white focus:text-slate-900 rounded-md px-4 py-2"
      >
        Przejdź do nawigacji głównej
      </Link>
      <Link
        href="#dla-pacjentow"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:bg-white focus:text-slate-900 rounded-md px-4 py-2"
      >
        Przejdź do informacji dla pacjentów
      </Link>
      <Link
        href="#kontakt"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:bg-white focus:text-slate-900 rounded-md px-4 py-2"
      >
        Przejdź do kontaktu
      </Link>

      <div className="flex-1 flex flex-col">
        <HeroSection />
        <div className="relative z-20 bg-background rounded-t-4xl -mt-12 shadow-2xl shadow-foreground high-contrast:shadow-none high-contrast:border-t-2 high-contrast:border-foreground">
          <main id="main-content">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-16 sm:space-y-20">
              <NewsSection />
              <ForPatientsSection />
              <DepartmentsSection />
              <ClinicsSection />
              <ServicesBentoSection />
              <ElectronicServicesSection />
              <CareerSection />
            </div>
          </main>

          <Footer />
        </div>
      </div>
    </div>
  );
}
