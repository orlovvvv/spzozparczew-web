"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { patientsInfo, patientsInfoTexts } from "@/data/content/patients-info";

export function ForPatientsSection() {
  const prefersReducedMotion = useReducedMotion();

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
            {patientsInfoTexts.title}
          </h2>
          <p className="mt-0.5 text-sm font-light text-muted-foreground">
            {patientsInfoTexts.subtitle}
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {patientsInfo.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.title}
              initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.95 }}
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
