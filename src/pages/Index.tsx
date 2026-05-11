import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import SplitSection from "@/components/site/SplitSection";
import Services from "@/components/site/Services";
import Projects from "@/components/site/Projects";
import Quote from "@/components/site/Quote";
import Stats from "@/components/site/Stats";
import Testimonials from "@/components/site/Testimonials";
import Press from "@/components/site/Press";
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
        id="philosophy"
        eyebrow="The Casa Exotique Signature"
        title={<>A Philosophy Rooted in <em className="text-accent">Excellence</em></>}
        body={
          <>
            <p>
              Our approach is built on the foundation of artistry, craftsmanship,
              and innovation. Luxury is an experience that must be felt in every
              texture, every material, and every detail.
            </p>
            <p>
              Casa Exotique embodies the essence of refined luxury. As a leading
              luxury interior design company in Delhi NCR, we create spaces that
              are immersive, elegant, and deeply personal.
            </p>
          </>
        }
        cta={{ label: "Who We Are —", href: "/who-we-are" }}
        image={interior1}
        imageAlt="Luxury interior by Casa Exotique"
      />

      <Services />

      <SplitSection
        id="metamorphosis"
        eyebrow="Metamorphosis"
        title={<>From Bare Shell to <em className="text-accent">Dream Space</em></>}
        body={
          <>
            <p>
              Bespoke solutions ensure your space reflects your style and needs
              perfectly. Efficient oversight of milestones ensures smooth progress
              and adherence to timelines.
            </p>
            <p>
              Expert procurement enhances your space with top-quality global
              products. Meticulous quality assurance ensures every detail meets
              high standards of design.
            </p>
          </>
        }
        cta={{ label: "Our Process —", href: "/services/turnkey-execution" }}
        image={interior2}
        imageAlt="Bespoke luxury interior detail"
        reverse
      />

      <SplitSection
        id="founder"
        eyebrow="Bhawana Bhatnagar"
        title={<>Revolutionizing <em className="text-accent">Dream Spaces</em></>}
        body={
          <>
            <p>
              Bhawana Bhatnagar's journey from a musical and theatrical prodigy to
              the visionary founder of Casa Exotique highlights her revolutionary
              impact on interior design.
            </p>
            <p>
              With over 14 years of experience, Bhawana blends artistry with
              practical expertise to create luxurious and emotionally resonant
              spaces inspired by global travels and diverse cultures.
            </p>
          </>
        }
        cta={{ label: "Read More —", href: "/who-we-are" }}
        image={interior1}
        imageAlt="Bhawana Bhatnagar, founder of Casa Exotique"
      />

      <Stats />
      <Testimonials />
      <Quote />
      <Projects />
      <Press />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
