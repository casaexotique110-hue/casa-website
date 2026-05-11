import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { PageHero } from "@/components/site/ContentPage";

const homes = [
  { name: "Antilia — Mukesh Ambani", value: "₹15,000 crore", body: "Located in South Mumbai, this 27-story private residence spans 400,000 sq ft and features 168 rooms, including a private movie theater, spa, swimming pool, and snow room. Designed by Perkins & Will, the interiors combine marble floors, intricate crystal chandeliers, and massive panoramic windows — a mix of traditional and contemporary elements with rich textures like velvet and silk." },
  { name: "Jalsa — Amitabh Bachchan", value: "₹112 crore", body: "An iconic residence in upscale Juhu, Mumbai blending traditional Indian aesthetics with modern design. Rich, dark wood accents and intricate carvings sit alongside contemporary furniture, vintage-style pieces and elegant chandeliers — paying tribute to the legend's legacy in Bollywood." },
  { name: "Mannat — Shah Rukh Khan", value: "₹200 crore", body: "Sea-facing in Bandra, Mumbai. The interiors blend regal and contemporary style with plush sofas, rich wood paneling, ornate chandeliers and intricate woodwork. Sea-facing glass walls offer stunning views over lush gardens." },
  { name: "Oberoi House — Ratan Tata", value: "₹150 crore", body: "Understated luxury in Colaba, Mumbai. Neutral tones, natural materials like wood and stone, classic furniture and large glass windows for natural light — a calm, welcoming oasis." },
  { name: "Jatia House — Ajay Piramal", value: "₹450 crore", body: "South Mumbai estate spanning multiple floors with classical and contemporary design elements. Large chandeliers, sleek modern furniture, marble and wood finishes, and an art collection that adds cultural richness." },
  { name: "Villa By The Sea — Vijay Mallya", value: "₹100 crore", body: "A coastal Goa retreat with open-concept spaces, natural wood accents, expansive sea-view windows, glass and marble finishes, large terraces and private pools." },
];

const ThoughtSpotPage = () => (
  <main className="min-h-screen bg-background text-foreground">
    <Header />
    <PageHero
      eyebrow="Thought Spot"
      title={<>Top 6 Most Expensive Homes Owned by <em className="text-accent">Billionaires</em> & Celebrities in India</>}
      intro="India's ultra-wealthy elite are known for magnificent homes that redefine luxury and style — lavish sanctuaries reflecting their owners' taste and unparalleled status."
    />
    <section className="py-16 md:py-24">
      <div className="container max-w-4xl space-y-12">
        {homes.map((h, idx) => (
          <article key={h.name} className="border-b border-border pb-10 last:border-0">
            <p className="eyebrow">{String(idx + 1).padStart(2, "0")} · {h.value}</p>
            <h2 className="font-serif text-3xl md:text-4xl mt-3">{h.name}</h2>
            <div className="w-8 h-px bg-accent my-6" />
            <p className="text-muted-foreground leading-relaxed">{h.body}</p>
          </article>
        ))}
      </div>
    </section>
    <Footer />
  </main>
);

export default ThoughtSpotPage;
