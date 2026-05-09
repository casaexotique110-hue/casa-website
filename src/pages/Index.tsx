import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import SplitSection from "@/components/site/SplitSection";
import Services from "@/components/site/Services";
import Projects from "@/components/site/Projects";
import Quote from "@/components/site/Quote";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import interior1 from "@/assets/interior-1.jpg";
import interior2 from "@/assets/interior-2.jpg";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />

      <SplitSection
        id="story"
        eyebrow="Know Us Better"
        title={<>Brand <em className="text-accent">Story</em></>}
        body={
          <>
            <p>
              Maison Aurelia is the fingerprint of a discerning visionary. The
              architect and Founding Principal manifests an academically informed
              canon of work that blends European classicism with modernist
              tropical architecture.
            </p>
            <p>
              Each commission is shaped by light, line and lineage — homes that
              feel inevitable, as if they had always belonged to the land.
            </p>
          </>
        }
        cta={{ label: "Read More —", href: "#about" }}
        image={interior1}
        imageAlt="Grand classical living room interior with chandelier and arched windows"
      />

      <SplitSection
        id="about"
        eyebrow="Principal Architect"
        title={<>“My designs are sincere, <em className="text-accent">natural</em> and unforced.”</>}
        body={
          <>
            <p>
              For me, design is everything. Clarity of purpose and simplicity of
              line; purity of form and obsessive attention to detail.
            </p>
            <p>
              Aurelia is one of the leading designers and builders of ultra-luxury
              estate homes — at every scale, and for every way of living.
            </p>
          </>
        }
        cta={{ label: "About the Studio —", href: "#services" }}
        image={interior2}
        imageAlt="Sweeping marble staircase with crystal chandelier in luxury foyer"
        reverse
      />

      <Services />
      <Quote />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
