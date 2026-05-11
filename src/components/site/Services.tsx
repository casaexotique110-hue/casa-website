import { Link } from "react-router-dom";

const services = [
  {
    n: "01",
    title: "Bespoke Furniture",
    desc: "Custom media units, wardrobes, kitchens and more — crafted to your space.",
    href: "/services/bespoke-furniture",
  },
  {
    n: "02",
    title: "Turnkey Execution",
    desc: "End-to-end delivery from concept and procurement to flawless installation.",
    href: "/services/turnkey-execution",
  },
  {
    n: "03",
    title: "Custom Fit-Outs",
    desc: "Tailored interior fit-outs that reinforce brand identity and function.",
    href: "/services/custom-fit-outs",
  },
  {
    n: "04",
    title: "In-House Customization",
    desc: "Master artisans realising bespoke detail under one roof.",
    href: "/services/in-house-customization",
  },
  {
    n: "05",
    title: "Seamless Procurement",
    desc: "Expert procurement of premium global products and finishes.",
    href: "/services/seamless-procurement",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-36 bg-secondary/60">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">What We Do</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-6">Our Services</h2>
          <div className="rule-gold" />
          <p className="text-muted-foreground">
            A distinctive design process — every stage an orchestration of
            creativity and precision, from concept to completion.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-px bg-border mt-16">
          {services.map((s) => (
            <Link
              to={s.href}
              key={s.n}
              className="group bg-background p-10 transition-colors duration-500 hover:bg-foreground hover:text-background"
            >
              <span className="font-serif text-accent text-sm tracking-widest">{s.n}</span>
              <h3 className="font-serif text-2xl md:text-3xl mt-6">{s.title}</h3>
              <div className="w-8 h-px bg-accent my-6 transition-all duration-500 group-hover:w-16" />
              <p className="text-sm leading-relaxed opacity-80">{s.desc}</p>
              <p className="mt-6 text-[0.65rem] uppercase tracking-[0.28em] text-accent">Explore →</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
