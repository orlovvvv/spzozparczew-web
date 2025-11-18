"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { newsItems } from "@/data/content/news";

export function NewsSection() {
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
        {newsItems.map((item, index) => (
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
