export const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-mesh-animated"
    >
      {/* Drifting orbs */}
      <div
        className="orb"
        style={{
          width: 420,
          height: 420,
          top: "8%",
          left: "10%",
          background: "radial-gradient(circle, hsl(var(--rose) / 0.6), transparent 70%)",
          animationDuration: "20s",
        }}
      />
      <div
        className="orb"
        style={{
          width: 520,
          height: 520,
          top: "30%",
          right: "5%",
          background: "radial-gradient(circle, hsl(var(--gold) / 0.5), transparent 70%)",
          animationDuration: "26s",
          animationDelay: "-6s",
        }}
      />
      <div
        className="orb"
        style={{
          width: 380,
          height: 380,
          bottom: "8%",
          left: "35%",
          background: "radial-gradient(circle, hsl(var(--lavender) / 0.55), transparent 70%)",
          animationDuration: "24s",
          animationDelay: "-12s",
        }}
      />

      <div className="relative z-10 text-center max-w-5xl mx-auto pt-24">
        <div
          className="hero-line font-sub text-gold/90 text-[10px] md:text-[11px] uppercase mb-8"
          style={{ letterSpacing: "0.5em", animationDelay: "0.1s" }}
        >
          <span className="gold-divider">Vadodara · Surat · Est. for the few</span>
        </div>

        <h1 className="font-display text-cream leading-[0.95]" style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}>
          <span
            className="hero-line block italic font-light"
            style={{ animationDelay: "0.35s" }}
          >
            Where Beauty
          </span>
          <span
            className="hero-line block italic font-light"
            style={{ animationDelay: "0.65s" }}
          >
            Becomes <span className="text-gold">Art</span>
          </span>
        </h1>

        <p
          className="hero-line mt-10 font-sub text-foreground/80 text-[10px] md:text-xs uppercase"
          style={{ letterSpacing: "0.32em", animationDelay: "0.95s" }}
        >
          Emerance The Salon — Elevated Hair & Beauty, Surat
        </p>

        <div
          className="hero-line mt-14 flex flex-col sm:flex-row items-center justify-center gap-5"
          style={{ animationDelay: "1.2s" }}
        >
          <a href="#services" className="btn-ghost-glass">Explore Services</a>
          <a href="#book" className="btn-liquid btn-liquid-solid">Book an Appointment</a>
        </div>

        <div
          className="hero-line mt-20 flex items-center justify-center gap-3 text-foreground/70"
          style={{ animationDelay: "1.45s" }}
        >
          <span className="text-gold font-display text-2xl leading-none">4.9</span>
          <span className="font-sub text-[10px] uppercase" style={{ letterSpacing: "0.3em" }}>
            ★★★★★ · 161 Reviews
          </span>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hero-line" style={{ animationDelay: "1.7s" }}>
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-gold/60 to-transparent" />
      </div>
    </section>
  );
};
