"use client";

import { motion } from "framer-motion";
import { Stethoscope } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { clinicRegistration, clinics } from "@/data/content/clinics";

export function ClinicsSection() {
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
              href={`tel:${clinicRegistration.phoneHref}`}
              className="text-primary font-normal hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded high-contrast:text-primary high-contrast:underline"
            >
              {clinicRegistration.phone}
            </a>{" "}
            ({clinicRegistration.hours})
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
