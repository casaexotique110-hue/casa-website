import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { PageHero } from "@/components/site/ContentPage";

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

const NewsPage = () => (
  <main className="min-h-screen bg-background text-foreground">
    <Header />
    <PageHero
      eyebrow="Media · News"
      title={<>Casa Exotique <em className="text-accent">in the press</em></>}
      intro="Featured stories, expert commentary and design insights from across leading publications."
    />
    <section className="py-16 md:py-24">
      <div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {items.map((i) => (
          <article key={i.title} className="bg-background p-8 group">
            <p className="text-[0.65rem] uppercase tracking-[0.28em] text-accent">{i.src}</p>
            <h3 className="font-serif text-xl mt-4 leading-snug">{i.title}</h3>
            <a href="#" className="mt-6 inline-block text-[0.65rem] uppercase tracking-[0.28em] border-b border-foreground pb-1 group-hover:text-accent group-hover:border-accent transition-colors">
              Read More →
            </a>
          </article>
        ))}
      </div>
    </section>
    <Footer />
  </main>
);

export default NewsPage;
