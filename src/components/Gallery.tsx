const tiles = [
  { swatch: "swatch-1", label: "Soft Balayage", h: "tall" },
  { swatch: "swatch-2", label: "Champagne Glow", h: "short" },
  { swatch: "swatch-3", label: "Bridal Reverie", h: "mid" },
  { swatch: "swatch-4", label: "Copper Dusk", h: "mid" },
  { swatch: "swatch-5", label: "Studio Light", h: "tall" },
  { swatch: "swatch-6", label: "Lavender Haze", h: "short" },
];

const heightMap: Record<string, string> = {
  short: "h-64",
  mid: "h-80",
  tall: "h-[28rem]",
};

export const Gallery = () => {
  return (
    <section id="gallery" className="relative py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 reveal">
          <span
            className="font-sub text-gold text-[11px] uppercase gold-divider"
            style={{ letterSpacing: "0.4em" }}
          >
            The Edit
          </span>
          <h2 className="font-display italic mt-6 text-cream" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}>
            The Emerance Edit
          </h2>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {tiles.map((t, i) => (
            <div
              key={t.label}
              className={`gallery-tile reveal mb-6 break-inside-avoid ${heightMap[t.h]}`}
              data-delay={i * 80}
            >
              <div className={`tile-img ${t.swatch}`} />
              <div className="tile-overlay">
                <span>{t.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
