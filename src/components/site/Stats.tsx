interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "87", label: "Design Projects" },
  { value: "5", label: "Years In Business" },
  { value: "10", label: "Awards" },
  { value: "1.28 LAC", label: "Sq. Ft Largest Project" },
];

const Stats = () => (
  <section className="py-20 md:py-28 bg-foreground text-background">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="eyebrow" style={{ color: "hsl(var(--gold-soft))" }}>From Vision to Reality</p>
        <h2 className="font-serif text-3xl md:text-5xl mt-6">Crafting Excellence Through Experience</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-background/10">
        {stats.map((s) => (
          <div key={s.label} className="bg-foreground p-10 text-center">
            <p className="font-serif text-5xl md:text-6xl text-accent">{s.value}</p>
            <p className="mt-4 text-xs uppercase tracking-[0.28em] text-background/70">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
