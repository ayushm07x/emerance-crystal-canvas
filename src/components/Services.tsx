import { Scissors, Palette, Sparkles, Flower2, Brush, Droplets } from "lucide-react";

const services = [
  { icon: Scissors, name: "Hair Cut & Styling", desc: "Editorial cuts shaped to your face, lifestyle and silhouette." },
  { icon: Palette, name: "Hair Color & Balayage", desc: "Hand-painted dimension in champagne, copper and cool noir tones." },
  { icon: Sparkles, name: "Bridal Makeup", desc: "Heirloom looks engineered for camera, candlelight and forever." },
  { icon: Flower2, name: "Skin & Facial", desc: "Quiet rituals — lymphatic, brightening, deeply restorative." },
  { icon: Brush, name: "Nail Art", desc: "Minimal couture nails — chrome, glaze, sculpted French." },
  { icon: Droplets, name: "Hair Spa & Treatment", desc: "Reparative scalp ceremonies for shine, density and softness." },
];

export const Services = () => {
  return (
    <section id="services" className="relative py-32 px-6 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 reveal">
          <span
            className="font-sub text-gold text-[11px] uppercase gold-divider"
            style={{ letterSpacing: "0.4em" }}
          >
            Our Craft
          </span>
          <h2 className="font-display italic mt-6 text-cream" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}>
            Services, refined to a ritual
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-foreground/70 text-sm md:text-base">
            Each appointment at Emerance is a quiet hour of considered detail — never rushed, always bespoke.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {services.map((s, i) => (
            <div
              key={s.name}
              className="glass glass-card p-9 md:p-10 reveal flex flex-col"
              data-delay={i * 90}
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-7 border border-gold/30 bg-gold/5 text-gold">
                <s.icon size={22} strokeWidth={1.2} />
              </div>
              <h3
                className="font-sub text-cream text-[13px] uppercase mb-4"
                style={{ letterSpacing: "0.28em" }}
              >
                {s.name}
              </h3>
              <p className="text-foreground/75 text-[15px] leading-relaxed font-body font-light flex-1">
                {s.desc}
              </p>
              <a href="#book" className="story-link mt-8 self-start">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
