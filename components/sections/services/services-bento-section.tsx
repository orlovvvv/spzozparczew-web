"use client";

import { motion } from "framer-motion";
import { Activity, Brain, Phone, ScanLine } from "lucide-react";
import {
  diagnosticServices,
  mentalHealthServices,
  mentalHealthContact,
  rehabilitationServices,
} from "@/data/content/services";
import { BentoGrid, BentoServiceCard } from "@/components/ui/bento-grid";

/**
 * ServicesBentoSection component displaying specialist services in a bento grid layout.
 * Features diagnostic, mental health, and rehabilitation services with hover effects.
 */
export function ServicesBentoSection() {
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
              {diagnosticServices.map((service) => (
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
            phone={mentalHealthContact.phone}
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