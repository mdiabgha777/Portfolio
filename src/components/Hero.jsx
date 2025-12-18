import { ArrowRight } from "lucide-react";
import Button from "./ui/Button";
import { useEffect, useState } from "react";
import HeroImg from "../assets/photo.webp"


export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 font-sans"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT: Text Content */}
        <div
          className={`transition-all duration-700 transform ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h3>
            Hey, I'm <span className="text-[var(--accent2)] font-bold">Muhammed Diab Ghanim</span>
          </h3>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--foreground)] leading-tight mb-6">
            <span className="text-[var(--accent2)] font-bold">Front</span>end <br />
            Developer
          </h1>

          <p className="text-lg md:text-xl text-[var(--muted-foreground)] mb-10 max-w-xl">
            I design and develop fast, responsive, and conversion-focused
            websites that your users will love.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="md" href="#portfolio">
              View My Work
              <ArrowRight size={18} className="ml-2" />
            </Button>

            <Button variant="outline" size="md" href="#contact">
              Contact Me
            </Button>
          </div>
        </div>

        {/*Image Placeholder */}
        <div
          className={`flex justify-center transition-all duration-700 transform ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-[var(--card)] border border-[var(--border)] shadow-card flex items-center justify-center text-[var(--muted-foreground)] text-sm">
            <img src={HeroImg} 
            alt="Hero Image" 
            className="w-full h-full object-cover rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}