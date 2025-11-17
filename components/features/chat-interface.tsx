"use client";

import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

function BotMessage({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <div
        className=" flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium shrink-0"
        aria-hidden="true"
      >
        SP
      </div>
      <div className="flex-1">
        <div className="rounded-2xl rounded-tl-sm bg-muted px-4 py-3">
          {children}
        </div>
      </div>
    </div>
  );
}

export function ChatInterface() {
  return (
    <Card className="rounded-2xl border-border bg-card shadow-xl shadow-foreground/10 flex flex-col min-h-[400px] sm:min-h-[450px]">
      <ScrollArea className="flex-1 p-4 sm:p-6">
        <div className="space-y-4" aria-live="polite">
          <BotMessage>
            <p className="text-base text-card-foreground leading-relaxed">
              Witaj! Jestem asystentem informacyjnym SPZOZ Parczew. Mogę
              odpowiedzieć na pytania dotyczące:
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              <li>• Godzin otwarcia poradni i rejestracji</li>
              <li>• Numerów telefonów do poszczególnych oddziałów</li>
              <li>• Dostępnych usług medycznych</li>
              <li>• Informacji kontaktowych</li>
            </ul>
            <p className="mt-3 text-sm text-muted-foreground">
              Nie udzielam porad medycznych. W sprawach zdrowotnych skontaktuj
              się z lekarzem.
            </p>
          </BotMessage>
        </div>
      </ScrollArea>

      <form
        className="border-t border-border bg-muted p-4 sm:p-5 rounded-b-2xl"
        aria-label="Pole do zadawania pytań"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex items-center gap-3">
          <label htmlFor="chat-input" className="sr-only">
            Zadaj pytanie o szpital
          </label>
          <span id="chat-input-description" className="sr-only">
            Możesz zapytać o godziny otwarcia, numery telefonów lub dostępne
            usługi medyczne
          </span>
          <textarea
            id="chat-input"
            name="pytanie"
            rows={1}
            autoComplete="off"
            placeholder="Zapytaj o godziny otwarcia, telefony, usługi..."
            aria-describedby="chat-input-description"
            className="flex-1 resize-none rounded-xl border border-input bg-background px-4 py-3 text-base text-foreground placeholder-muted-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          />
          <Button
            type="submit"
            size="lg"
            className="rounded-xl min-w-[44px] min-h-[44px] px-4"
          >
            <Send className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">Wyślij wiadomość</span>
          </Button>
        </div>
      </form>
    </Card>
  );
}
