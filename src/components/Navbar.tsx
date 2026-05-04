import { useEffect, useState } from "react";
import { Menu, X, Instagram } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div
          className={`mx-auto max-w-7xl px-5 md:px-10 transition-all duration-500 ${
            scrolled ? "" : ""
          }`}
        >
          <div
            className={`glass flex items-center justify-between px-5 md:px-8 py-3.5 transition-all duration-500 ${
              scrolled ? "bg-[hsl(285_18%_6%/0.55)] border-[hsl(0_0%_100%/0.18)]" : ""
            }`}
            style={{ borderRadius: "999px" }}
          >
            <a href="#top" className="flex flex-col leading-none" aria-label="Emerance The Salon">
              <span
                className="font-sub text-cream text-[15px] md:text-base font-light"
                style={{ letterSpacing: "0.4em" }}
              >
                EMERANCE
              </span>
              <span
                className="font-sub text-gold text-[9px] md:text-[10px] uppercase mt-1 pt-1 border-t border-gold/40 self-stretch text-center"
                style={{ letterSpacing: "0.45em" }}
              >
                The Salon
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-10">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="nav-link font-sub text-[11px] uppercase"
                  style={{ letterSpacing: "0.32em" }}
                >
                  {l.label}
                </a>
              ))}
              <a href="#book" className="btn-liquid btn-liquid-solid !py-2.5 !px-6 text-[10px]">
                Book Now
              </a>
            </nav>

            <button
              className="md:hidden text-cream"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "hsl(285 20% 5% / 0.7)",
            backdropFilter: "blur(32px) saturate(180%)",
            WebkitBackdropFilter: "blur(32px) saturate(180%)",
          }}
        />
        <div className="relative h-full flex flex-col items-center justify-center gap-10 px-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display italic text-cream text-4xl"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#book"
            onClick={() => setOpen(false)}
            className="btn-liquid btn-liquid-solid mt-4"
          >
            Book Now
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="text-gold mt-6"
            aria-label="Instagram"
          >
            <Instagram size={22} />
          </a>
        </div>
      </div>
    </>
  );
};
