import { Cursor } from "@/components/Cursor";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { About } from "@/components/About";
import { Booking } from "@/components/Booking";
import { Footer } from "@/components/Footer";
import { useReveal } from "@/hooks/useReveal";

const Index = () => {
  useReveal();

  return (
    <div className="relative min-h-screen bg-mesh grain">
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Booking />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
