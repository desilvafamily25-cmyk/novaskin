import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";
import skinCancerVideo from "@/assets/skin-cancer-awareness.mp4";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 to-white/70" />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="max-w-2xl flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6 leading-tight">
              Skin Cancer Checks with Dr Premila – Fitzroy North Medical Centre
            </h1>
            <p className="text-lg md:text-xl text-foreground mb-8">
              Expert GP-led full body skin checks, mole mapping and medical skin care in Fitzroy North, Melbourne.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">Book Your Skin Check Now</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">Meet Dr Premila</Link>
              </Button>
            </div>
            <div className="mt-6">
              <Button variant="secondary" size="sm" asChild>
                <a href="https://novacompounding.netlify.app/" target="_blank" rel="noopener noreferrer">
                  Compounding Ideas (Prescribers only)
                </a>
              </Button>
            </div>
          </div>
          <div className="flex-1 max-w-md lg:max-w-lg w-full">
            <video
              className="w-full rounded-2xl shadow-xl"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={skinCancerVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
