import Emblem from "./Emblem";

const Quote = () => (
  <section className="py-28 md:py-40 bg-foreground text-background">
    <div className="container max-w-4xl text-center">
      <Emblem className="mx-auto text-accent mb-8" size={48} />
      <p className="eyebrow" style={{ color: "hsl(var(--gold-soft))" }}>
        Philosophy
      </p>
      <blockquote className="font-serif text-3xl md:text-5xl lg:text-6xl mt-8 leading-[1.15] italic">
        “Luxury is an experience that must be felt in every texture, every material,
        and every detail.”
      </blockquote>
      <div className="w-12 h-px bg-accent mx-auto mt-12" />
      <p className="mt-6 text-xs uppercase tracking-[0.32em] text-background/70">
        Bhawana Bhatnagar · Founder, Casa Exotique
      </p>
    </div>
  </section>
);

export default Quote;
