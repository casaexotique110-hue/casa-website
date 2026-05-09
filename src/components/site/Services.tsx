const services = [
  {
    n: "01",
    title: "Architecture",
    desc: "Iconic estate residences shaped by classical proportion and modern craft.",
  },
  {
    n: "02",
    title: "Interior Design",
    desc: "Bespoke interiors composed of fine materials, light and quiet luxury.",
  },
  {
    n: "03",
    title: "Furniture",
    desc: "A signature collection of hand-finished pieces, made to order.",
  },
  {
    n: "04",
    title: "Landscape",
    desc: "Formal gardens and considered grounds that complete the residence.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-36 bg-secondary/60">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">What We Do</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-6">Services</h2>
          <div className="rule-gold" />
          <p className="text-muted-foreground">
            From the first sketch to the final flourish, every detail is conceived,
            drawn and delivered under one roof.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border mt-16">
          {services.map((s) => (
            <article
              key={s.n}
              className="group bg-background p-10 md:p-12 transition-colors duration-500 hover:bg-foreground hover:text-background"
            >
              <span className="font-serif text-accent text-sm tracking-widest">{s.n}</span>
              <h3 className="font-serif text-3xl md:text-4xl mt-6">{s.title}</h3>
              <div className="w-8 h-px bg-accent my-6 transition-all duration-500 group-hover:w-16" />
              <p className="text-sm leading-relaxed opacity-80">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
