import { MapPin, Phone, Mail, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { mainContact, quickLinks } from "@/data/content/contact-info";

export function Footer() {
  return (
    <footer id="kontakt" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-primary-container dark:bg-background high-contrast:bg-surface-container-low" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.2)_0%,transparent_60%)] dark:bg-[radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.25)_0%,transparent_60%)] high-contrast:bg-none" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative h-12 w-12 rounded-xl overflow-hidden bg-white/10 dark:bg-white/5 high-contrast:bg-primary shadow flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Logo SPZOZ Parczew"
                  fill
                  className="object-contain p-1"
                  sizes="48px"
                />
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  {mainContact.fullLegalName}
                </p>
                <p className="text-sm font-light text-muted-foreground">
                  {mainContact.hospitalType}
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Kontakt</h3>
            <div className="space-y-2.5 text-sm font-light text-muted-foreground">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                {mainContact.address}
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                <a
                  href={`tel:${mainContact.mainPhoneHref}`}
                  aria-label={`Zadzwoń: ${mainContact.mainPhone}`}
                  className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded high-contrast:text-primary high-contrast:underline"
                >
                  {mainContact.mainPhone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                Fax: {mainContact.fax}
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                <a
                  href={mainContact.emailHref}
                  aria-label={`Wyślij email: ${mainContact.email}`}
                  className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded high-contrast:text-primary high-contrast:underline"
                >
                  {mainContact.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Shield className="h-4 w-4 shrink-0" aria-hidden="true" />
                <a
                  href={mainContact.iodEmailHref}
                  aria-label={`Wyślij email do IOD: ${mainContact.iodEmail}`}
                  className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded high-contrast:text-primary high-contrast:underline"
                >
                  IOD: {mainContact.iodEmail}
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">
              Szybkie linki
            </h3>
            <nav className="space-y-2.5 text-sm font-light text-muted-foreground">
              {quickLinks.map((link) => {
                if (link.external) {
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.ariaLabel}
                      className="block hover:text-foreground focus:text-foreground focus:outline-none transition-colors duration-short-4 ease-standard"
                    >
                      {link.label}
                    </a>
                  );
                }
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block hover:text-foreground focus:text-foreground focus:outline-none transition-colors duration-short-4 ease-standard"
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>

        <div className="border-t border-outline-variant/30 dark:border-outline/20 high-contrast:border-foreground mt-8 pt-8 text-center text-sm font-light">
          <p className="text-muted-foreground">
            &copy; {new Date().getFullYear()} {mainContact.hospitalName}.
            Wszelkie prawa zastrzeżone.
          </p>
          <p className="mt-2 text-muted-foreground/70 high-contrast:text-muted-foreground">
            {mainContact.iodTitle}: {mainContact.iodName}
          </p>
        </div>
      </div>
    </footer>
  );
}
