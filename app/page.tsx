"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Brain,
  Briefcase,
  Clock,
  ExternalLink,
  Heart,
  Mail,
  MapPin,
  Phone,
  ScanLine,
  Shield,
  Stethoscope,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero/hero-section";
import { NewsSection } from "@/components/sections/news/news-section";
import { AuroraText } from "@/components/ui/aurora-text";
import { Badge } from "@/components/ui/badge";
import { BentoGrid, BentoServiceCard } from "@/components/ui/bento-grid";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function NewsSection() {
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
            initial={false}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Card className="h-full rounded-xl bg-white/60 backdrop-blur-xl dark:bg-white/5 high-contrast:bg-surface-container-low high-contrast:backdrop-blur-none border border-white/40 dark:border-white/10 high-contrast:border-2 high-contrast:border-foreground shadow-lg dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-xl hover:-translate-y-1 transition-all duration-medium-2 motion-reduce:hover:translate-y-0 motion-reduce:transition-colors ease-standard focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2">
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
              initial={false}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Card className="h-full rounded-xl bg-white/60 backdrop-blur-xl dark:bg-white/5 high-contrast:bg-surface-container-low high-contrast:backdrop-blur-none border border-white/40 dark:border-white/10 high-contrast:border-2 high-contrast:border-foreground shadow-lg dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-xl hover:-translate-y-1 transition-all duration-medium-2 motion-reduce:hover:translate-y-0 motion-reduce:transition-colors ease-standard focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2">
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
            initial={false}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.02 }}
          >
            <Card className="h-full rounded-xl bg-white/60 backdrop-blur-xl dark:bg-white/5 high-contrast:bg-surface-container-low high-contrast:backdrop-blur-none border border-white/40 dark:border-white/10 high-contrast:border-2 high-contrast:border-foreground shadow-lg dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-xl hover:-translate-y-1 transition-all duration-medium-2 motion-reduce:hover:translate-y-0 motion-reduce:transition-colors ease-standard focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2">
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
              initial={false}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
            >
              <Card className="h-full rounded-xl bg-white/60 backdrop-blur-xl dark:bg-white/5 high-contrast:bg-surface-container-low high-contrast:backdrop-blur-none border border-white/40 dark:border-white/10 high-contrast:border-2 high-contrast:border-foreground shadow-lg dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-xl hover:-translate-y-1 transition-all duration-medium-2 motion-reduce:hover:translate-y-0 motion-reduce:transition-colors ease-standard focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2">
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
        initial={false}
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
            initial={false}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Card className="h-full rounded-xl bg-white/60 backdrop-blur-xl dark:bg-white/5 high-contrast:bg-surface-container-low high-contrast:backdrop-blur-none border border-white/40 dark:border-white/10 high-contrast:border-2 high-contrast:border-foreground shadow-lg dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-xl hover:-translate-y-1 transition-all duration-medium-2 motion-reduce:hover:translate-y-0 motion-reduce:transition-colors ease-standard focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2">
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
  const services = [
    {
      title: "ePortal Pacjenta",
      description:
        "Zarejestruj się online do poradni specjalistycznych. Zarządzaj wizytami, sprawdzaj historię i umawiaj się na wizyty 24/7.",
      image: "/eportal.png",
      imageAlt: "ePortal Pacjenta - system rejestracji online",
      cta: "Otwórz ePortal",
      url: "https://eportal.spzozparczew.pl",
      imagePosition: "left" as const,
    },
    {
      title: "Wyniki badań online",
      description:
        "Sprawdź wyniki badań laboratoryjnych bez wychodzenia z domu. Bezpieczny dostęp do pełnej historii badań.",
      image: "/intelilab.png",
      imageAlt: "InteliLab - system wyników badań laboratoryjnych",
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
          const isLeft = service.imagePosition === "left";

          return (
            <motion.div
              key={service.title}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`flex flex-col ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-8 lg:gap-16`}
            >
              <div className="flex-1 w-full lg:w-auto">
                <div className="group relative aspect-[4/3] w-full max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-white/60 backdrop-blur-xl dark:bg-white/5 border border-white/40 dark:border-white/10 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transform-gpu transition-all duration-medium-2 ease-standard motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100 high-contrast:bg-surface-container-low high-contrast:backdrop-blur-none high-contrast:border-2 high-contrast:border-foreground high-contrast:shadow-none">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover transition-transform duration-medium-2 ease-standard group-hover:scale-105 motion-reduce:group-hover:scale-100"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 448px"
                  />
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
