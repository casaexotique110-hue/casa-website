import { Link } from "react-router-dom";

const items = [
  { src: "lth.com", title: "Transform Your Home Into An Ideal Workplace" },
  { src: "99acres.com", title: "Smart decor ideas during quarantine" },
  { src: "Higher Education", title: "Retro Interior Styling Never Goes Out Of Trend" },
  { src: "Medium.com", title: "Transforming Your Home Interior With Art" },
  { src: "newindianexpress.com", title: "Japandi home decor" },
  { src: "Indianretailer.com", title: "How COVID-19 is brutally affecting the MSMEs" },
  { src: "indiatimes.com", title: "Show your home some love" },
  { src: "indiatoday.in", title: "Featured insights from Casa Exotique" },
];

const Press = () => (
  <section className="py-24 md:py-32">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto">
        <p className="eyebrow">In The Press</p>
        <h2 className="font-serif text-4xl md:text-5xl mt-6">
          World Has A Lot More <em className="text-accent">To Fascinate You</em>
        </h2>
        <div className="rule-gold" />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border mt-16">
        {items.map((i) => (
          <article key={i.title} className="bg-background p-8 group">
            <p className="text-[0.65rem] uppercase tracking-[0.28em] text-accent">{i.src}</p>
            <h3 className="font-serif text-xl mt-4 leading-snug min-h-[3.5rem]">{i.title}</h3>
            <Link to="/media/news" className="mt-6 inline-block text-[0.65rem] uppercase tracking-[0.28em] border-b border-foreground pb-1 group-hover:text-accent group-hover:border-accent transition-colors">
              Read More →
            </Link>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Press;
