"use client";

import { motion } from "framer-motion";
import { Briefcase, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { careerTexts, jobOpenings } from "@/data/content/career";

export function CareerSection() {
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
              {careerTexts.title}
            </h2>
            <Badge variant="default" className="text-xs rounded-full shadow-sm">
              {jobOpenings.length} {careerTexts.badge}
            </Badge>
          </div>
          <p className="mt-0.5 text-sm font-light text-muted-foreground">
            {careerTexts.subtitle}
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobOpenings.map((job, index) => (
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
                    <span className="font-medium">
                      {careerTexts.requirements}
                    </span>{" "}
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
                    {careerTexts.applyButton}
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="text-center pt-2">
        <p className="text-sm font-light text-muted-foreground">
          {careerTexts.spontaneousApplication}{" "}
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
