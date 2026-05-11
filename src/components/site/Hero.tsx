import { Link } from "react-router-dom";
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
        alt="Luxury interior by Casa Exotique"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-overlay)" }} />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <Emblem className="fade-in text-primary-foreground/90 mb-6" size={56} />
        <p className="eyebrow fade-in" style={{ animationDelay: ".2s", color: "hsl(var(--gold-soft))" }}>
          Luxury Interior Design · Delhi NCR · Gurgaon
        </p>
        <h1 className="fade-up font-serif text-5xl md:text-7xl lg:text-8xl mt-6 max-w-5xl leading-[1.05]">
          The Casa Exotique
          <span className="block italic text-[hsl(var(--gold-soft))]">Signature</span>
        </h1>
        <p className="fade-up mt-8 max-w-2xl text-base md:text-lg font-light text-primary-foreground/85" style={{ animationDelay: ".25s" }}>
          Excellence is the cornerstone of every project. Interiors curated by Casa
          Exotique capture a rare blend of artistry and innovation.
        </p>

        <div className="fade-up mt-12 flex items-center gap-6" style={{ animationDelay: ".45s" }}>
          <Link
            to="/portfolio"
            className="text-[0.72rem] uppercase tracking-[0.32em] border border-primary-foreground/80 px-7 py-3 hover:bg-accent hover:border-accent transition-all"
          >
            View Portfolio
          </Link>
          <Link
            to="/who-we-are"
            className="text-[0.72rem] uppercase tracking-[0.32em] hover:text-[hsl(var(--gold-soft))] transition-colors"
          >
            Our Story —
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
