"use client";

import Link from "next/link";
import { Footer } from "@/components/layout/footer";
import { NewsSection } from "@/components/sections/news/news-section";
import { HeroSection } from "@/components/sections/hero/hero-section";
import { ForPatientsSection } from "@/components/sections/patients/for-patients-section";
import { ClinicsSection } from "@/components/sections/clinics/clinics-section";
import { DepartmentsSection } from "@/components/sections/departments/departments-section";
import { ServicesBentoSection } from "@/components/sections/services/services-bento-section";
import { CareerSection } from "@/components/sections/career/career-section";
import { ElectronicServicesSection } from "@/components/sections/electronic-services/electronic-services-section";

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