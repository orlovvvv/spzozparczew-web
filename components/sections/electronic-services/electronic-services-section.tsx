"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  electronicServices,
  electronicServicesTexts,
} from "@/data/content/electronic-services";

export function ElectronicServicesSection() {
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
            {electronicServicesTexts.title}
          </h2>
          <p className="mt-0.5 text-sm font-light text-muted-foreground">
            {electronicServicesTexts.subtitle}
          </p>
        </div>
      </div>

      <div className="space-y-16">
        {electronicServices.map((service, index) => {
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
