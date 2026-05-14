import { ArrowRight } from "lucide-react";
import Button from "./ui/Button";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 font-sans"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div
          className={`transition-all duration-700 transform ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--foreground)] leading-tight mb-6">
            Fast Websites That <br />
            Turn Visitors Into Customers
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-[var(--muted-foreground)] mb-10 max-w-2xl mx-auto">
            Modern, professional, mobile-friendly websites for service businesses that build trust and help you get more leads.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="hero" size="md" href="#contact">
              Get in touch
              <ArrowRight size={18} className="ml-2" />
            </Button>

            <Button variant="outline" size="md" href="#portfolio">
              See My Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}