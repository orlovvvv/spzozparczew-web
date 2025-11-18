"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Brain,
  Heart,
  Shield,
  Stethoscope,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { departments, type Department } from "@/data/content/departments";

// Icon mapping for dynamic icon rendering
const iconMap = {
  Shield,
  Heart,
  Activity,
  Users,
  Stethoscope,
  Brain,
} as const;

function DepartmentsSection() {
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
            {departments.length} specjalistycznych oddziałów
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {departments.map((dept: Department, index: number) => {
          const Icon = iconMap[dept.iconName];
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

export { DepartmentsSection };
