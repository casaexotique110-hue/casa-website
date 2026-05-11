const testimonials = [
  {
    text: "We were on the lookout for a very good designer to shape up our home in the best possible way. Bhawana truly put her heart and soul into designing our home and the result was brilliant.",
    name: "Aditya Dasta",
    title: "General Manager, Sales, DLF",
  },
  {
    text: "After having used the services of CASA, it's been an absolute pleasure to have them work on the project. They have been able to deliver an exceptional quality of work in the time expected.",
    name: "Pinaki Aich",
    title: "Chief Executive Officer, Forward Investments",
  },
  {
    text: "Living in Dubai, away from home, working with Bhawana is like working with family. My home was ready before the expected date. She is so talented and understood the needs of the customer.",
    name: "Irfan Izhar",
    title: "Founder, Entertainment Box",
  },
];

const Testimonials = () => (
  <section className="py-24 md:py-36 bg-secondary/60">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto">
        <p className="eyebrow">From Vision to Reality</p>
        <h2 className="font-serif text-4xl md:text-5xl mt-6">Client Feedback</h2>
        <div className="rule-gold" />
      </div>
      <div className="grid md:grid-cols-3 gap-8 mt-16">
        {testimonials.map((t) => (
          <article key={t.name} className="bg-background p-10 border border-border">
            <p className="font-serif text-accent text-3xl leading-none">"</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground italic">{t.text}</p>
            <div className="w-8 h-px bg-accent my-6" />
            <p className="font-serif text-lg">{t.name}</p>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">{t.title}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
