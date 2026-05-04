import { useState, FormEvent } from "react";
import { toast } from "sonner";

export const Booking = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Your appointment request has been received.", {
        description: "Our concierge will reach out within the hour.",
      });
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  return (
    <section id="book" className="relative py-32 px-6 md:px-10 overflow-hidden">
      <div
        className="orb"
        style={{
          width: 500,
          height: 500,
          top: "-10%",
          right: "-5%",
          background: "radial-gradient(circle, hsl(var(--gold) / 0.45), transparent 70%)",
        }}
      />
      <div
        className="orb"
        style={{
          width: 420,
          height: 420,
          bottom: "-10%",
          left: "-5%",
          background: "radial-gradient(circle, hsl(var(--rose) / 0.45), transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto relative">
        <div className="glass glass-strong p-10 md:p-16 reveal">
          <div className="text-center mb-12">
            <span
              className="font-sub text-gold text-[11px] uppercase gold-divider"
              style={{ letterSpacing: "0.4em" }}
            >
              Reserve Your Hour
            </span>
            <h2
              className="font-display italic text-cream mt-6"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)" }}
            >
              Ready for Your Transformation?
            </h2>
            <p className="mt-4 text-foreground/70 text-sm max-w-md mx-auto">
              Tell us a little about your visit. We'll handpick the right artist for your appointment.
            </p>
          </div>

          <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-7">
            <input className="glass-input" type="text" name="name" placeholder="Your Name" required />
            <input className="glass-input" type="tel" name="phone" placeholder="Phone Number" required />
            <select className="glass-input" name="service" required defaultValue="">
              <option value="" disabled>Select a Service</option>
              <option>Hair Cut & Styling</option>
              <option>Hair Color & Balayage</option>
              <option>Bridal Makeup</option>
              <option>Skin & Facial</option>
              <option>Nail Art</option>
              <option>Hair Spa & Treatment</option>
            </select>
            <input className="glass-input" type="date" name="date" required />

            <div className="md:col-span-2 flex justify-center mt-6">
              <button type="submit" className="btn-liquid btn-liquid-solid" disabled={submitting}>
                {submitting ? "Sending…" : "Confirm Appointment"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
