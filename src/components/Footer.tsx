import { Instagram, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative px-6 md:px-10 pb-10">
      <div
        className="glass max-w-7xl mx-auto px-8 md:px-12 py-10 border-t"
        style={{ borderTopColor: "hsl(var(--gold) / 0.4)" }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <a href="#top" className="flex flex-col leading-none items-start" aria-label="Emerance">
            <span
              className="font-sub text-cream text-base font-light"
              style={{ letterSpacing: "0.4em" }}
            >
              EMERANCE
            </span>
            <span
              className="font-sub text-gold text-[10px] uppercase mt-1 pt-1 border-t border-gold/40 self-stretch text-center"
              style={{ letterSpacing: "0.45em" }}
            >
              The Salon
            </span>
          </a>

          <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {["Services", "Gallery", "About", "Book Now"].map((l) => (
              <a
                key={l}
                href={l === "Book Now" ? "#book" : `#${l.toLowerCase()}`}
                className="nav-link font-sub text-[10px] uppercase"
                style={{ letterSpacing: "0.32em" }}
              >
                {l}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-foreground/70 hover:text-gold transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} strokeWidth={1.3} />
            </a>
            <a
              href="https://maps.google.com/?q=Emerance+The+Salon+Surat"
              target="_blank"
              rel="noreferrer"
              className="text-foreground/70 hover:text-gold transition-colors"
              aria-label="Directions"
            >
              <MapPin size={18} strokeWidth={1.3} />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3 text-foreground/55 text-[11px] font-sub uppercase" style={{ letterSpacing: "0.28em" }}>
          <p>Shop No. 5, Srushti Residency, Parvat Patiya, Surat</p>
          <p>© {new Date().getFullYear()} Emerance · Crafted with intention</p>
        </div>
      </div>
    </footer>
  );
};
