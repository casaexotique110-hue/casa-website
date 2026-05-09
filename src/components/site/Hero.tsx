import heroImg from "@/assets/hero-mansion.jpg";
import Emblem from "./Emblem";

const Hero = () => {
  return (
    <section
      id="top"
      className="relative h-screen min-h-[680px] w-full overflow-hidden text-primary-foreground"
    >
      <img
        src={heroImg}
        alt="Ultra-luxury neoclassical estate by Maison Aurelia at golden hour"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-overlay)" }}
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <Emblem className="fade-in text-primary-foreground/90 mb-6" size={56} />
        <p className="eyebrow fade-in" style={{ animationDelay: ".2s", color: "hsl(var(--gold-soft))" }}>
          Architecture · Interiors · Furniture
        </p>
        <h1 className="fade-up font-serif text-5xl md:text-7xl lg:text-8xl mt-6 max-w-5xl leading-[1.05]">
          Designing a home is like
          <span className="block italic text-[hsl(var(--gold-soft))]">drawing a portrait of your client</span>
        </h1>
        <p className="fade-up mt-8 max-w-xl text-base md:text-lg font-light text-primary-foreground/85" style={{ animationDelay: ".25s" }}>
          A studio devoted to ultra-luxury estates that blend European classicism with modern refinement.
        </p>

        <div className="fade-up mt-12 flex items-center gap-6" style={{ animationDelay: ".45s" }}>
          <a
            href="#projects"
            className="text-[0.72rem] uppercase tracking-[0.32em] border border-primary-foreground/80 px-7 py-3 hover:bg-accent hover:border-accent transition-all"
          >
            View Portfolio
          </a>
          <a
            href="#story"
            className="text-[0.72rem] uppercase tracking-[0.32em] hover:text-[hsl(var(--gold-soft))] transition-colors"
          >
            Our Story —
          </a>
        </div>
      </div>

      <a
        href="#story"
        className="scroll-arrow absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-primary-foreground/80"
        aria-label="Scroll down"
      >
        <svg width="24" height="40" viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="1">
          <rect x="6" y="1" width="12" height="22" rx="6" />
          <line x1="12" y1="30" x2="12" y2="39" />
          <polyline points="8,35 12,39 16,35" />
        </svg>
      </a>
    </section>
  );
};

export default Hero;
