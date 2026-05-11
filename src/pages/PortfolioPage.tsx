import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { PageHero } from "@/components/site/ContentPage";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import i1 from "@/assets/interior-1.jpg";
import i2 from "@/assets/interior-2.jpg";

const projects = [
  { img: p1, title: "Penthouse Residence", place: "DLF Camellias, Gurgaon", year: "2024" },
  { img: p2, title: "Designer Villa", place: "Golf Course Road, Gurgaon", year: "2023" },
  { img: p3, title: "Corporate Office", place: "Cyber City, Gurgaon", year: "2023" },
  { img: i1, title: "Luxury Apartment", place: "South Delhi", year: "2023" },
  { img: i2, title: "Heritage Bungalow", place: "Lutyens Delhi", year: "2022" },
  { img: p1, title: "Hospitality Suite", place: "Goa", year: "2022" },
];

const PortfolioPage = () => (
  <main className="min-h-screen bg-background text-foreground">
    <Header />
    <PageHero
      eyebrow="Portfolio"
      title={<>A portfolio of <em className="text-accent">considered</em> spaces</>}
      intro="Residential, commercial, retail and hospitality projects united by an unwavering commitment to craft."
    />
    <section className="py-16 md:py-24">
      <div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((p, i) => (
          <article key={i} className="group">
            <div className="hover-zoom aspect-[4/5] mb-6">
              <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="flex items-baseline justify-between">
              <h3 className="font-serif text-2xl group-hover:text-accent transition-colors">{p.title}</h3>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{p.year}</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">{p.place}</p>
          </article>
        ))}
      </div>
    </section>
    <Footer />
  </main>
);

export default PortfolioPage;
