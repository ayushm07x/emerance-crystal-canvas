export const About = () => {
  return (
    <section id="about" className="relative py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="glass glass-strong p-10 md:p-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 relative reveal">
          {/* gold vertical divider */}
          <div className="hidden md:block absolute top-12 bottom-12 left-1/2 w-px bg-gradient-to-b from-transparent via-gold/60 to-transparent" />

          <div>
            <span
              className="font-sub text-gold text-[11px] uppercase"
              style={{ letterSpacing: "0.4em" }}
            >
              Our Ethos
            </span>
            <blockquote
              className="font-display italic text-cream mt-8 leading-[1.05]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)" }}
            >
              "Beauty is not a standard. It is a feeling."
            </blockquote>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-foreground/85 text-[15px] md:text-base leading-[1.9] font-body font-light">
              Emerance was founded as a quiet rebellion against the ordinary salon — a space where light is
              softer, conversations are slower, and every detail is chosen with intention. From the warmth
              of our chairs to the music in the air, our atelier in Surat is shaped to feel less like a
              service and more like a private ritual.
            </p>
            <p className="mt-6 text-foreground/70 text-[15px] leading-[1.9] font-body font-light">
              With over <span className="text-gold">160 five-star reviews</span> and clients who have
              trusted us for years, our craft is led by stylists who treat hair, skin and makeup as a
              living art — composed for you, in this season of your life.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-5">
              {[
                { n: "4.9", l: "Rating" },
                { n: "161+", l: "Reviews" },
                { n: "2.5y", l: "Loyal Clients" },
              ].map((s) => (
                <div key={s.l} className="text-center md:text-left">
                  <div className="font-display text-gold text-3xl md:text-4xl">{s.n}</div>
                  <div
                    className="font-sub text-foreground/60 text-[10px] uppercase mt-2"
                    style={{ letterSpacing: "0.3em" }}
                  >
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
