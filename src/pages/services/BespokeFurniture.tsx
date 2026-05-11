import { Link } from "react-router-dom";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { PageHero } from "@/components/site/ContentPage";

const items = [
  { href: "/services/bespoke-furniture/media-units", title: "Media Units", desc: "Cutting-edge units that integrate smart home technology and sleek design." },
  { href: "/services/bespoke-furniture/walk-in-wardrobes", title: "Walk-in Wardrobes", desc: "Bespoke walk-in wardrobes with premium finishes and intuitive storage." },
  { href: "/services/bespoke-furniture/fitted-cupboards", title: "Fitted Cupboards", desc: "Precision-designed cupboards harmonizing form and function." },
  { href: "/services/bespoke-furniture/home-office", title: "Home Office Furniture", desc: "Personalized spaces that foster focus, creativity, and productivity." },
  { href: "/services/bespoke-furniture/kitchen", title: "Kitchen Furniture", desc: "Bespoke modular kitchens crafted around the way you live and entertain." },
  { href: "/services/bespoke-furniture/bathroom", title: "Bathroom Furniture", desc: "Refined vanities and storage for spa-like sanctuaries at home." },
  { href: "/services/bespoke-furniture/outdoor", title: "Outdoor Furniture", desc: "All-weather outdoor pieces designed for year-round elegance." },
  { href: "/services/bespoke-furniture/understairs-loft", title: "Understairs & Loft Storage", desc: "Maximising every corner with concealed, smart storage solutions." },
];

const BespokeFurniture = () => (
  <main className="min-h-screen bg-background text-foreground">
    <Header />
    <PageHero
      eyebrow="Bespoke Furniture"
      title={<>Furniture, <em className="text-accent">tailored</em> to you</>}
      intro="From media units to walk-in wardrobes, our in-house studio crafts furniture that elevates everyday living with premium materials and meticulous detail."
    />
    <section className="py-20">
      <div className="container grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
        {items.map((i) => (
          <Link key={i.href} to={i.href} className="group bg-background p-8 hover:bg-foreground hover:text-background transition-colors duration-500">
            <h3 className="font-serif text-2xl">{i.title}</h3>
            <div className="w-8 h-px bg-accent my-4 group-hover:w-16 transition-all duration-500" />
            <p className="text-sm opacity-80 leading-relaxed">{i.desc}</p>
            <p className="mt-6 text-[0.65rem] uppercase tracking-[0.28em] text-accent">Explore →</p>
          </Link>
        ))}
      </div>
    </section>
    <Footer />
  </main>
);

export default BespokeFurniture;
