import interior1 from "@/assets/gallery/interior-1.jpg";
import interior2 from "@/assets/gallery/interior-2.jpg";
import interior3 from "@/assets/gallery/interior-3.jpg";
import interior4 from "@/assets/gallery/interior-4.jpg";
import interior5 from "@/assets/gallery/interior-5.jpg";
import interior6 from "@/assets/gallery/interior-6.jpg";
import storefront from "@/assets/gallery/storefront.jpg";

const tiles = [
  { src: interior5, label: "The Styling Floor", h: "tall" },
  { src: interior2, label: "Wash & Pedicure Lounge", h: "short" },
  { src: interior4, label: "Mirror Stations", h: "mid" },
  { src: interior1, label: "Cutting Bay", h: "mid" },
  { src: storefront, label: "Emerance, Surat", h: "tall" },
  { src: interior3, label: "Spa Suite", h: "short" },
  { src: interior6, label: "Hair Spa Lounge", h: "mid" },
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
              <img
                src={t.src}
                alt={`${t.label} — Emerance The Salon`}
                loading="lazy"
                className="tile-img w-full h-full object-cover"
              />
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
