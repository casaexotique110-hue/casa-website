import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import SplitSection from "@/components/site/SplitSection";
import Quote from "@/components/site/Quote";
import interior2 from "@/assets/interior-2.jpg";

const About = () => (
  <main className="min-h-screen bg-background text-foreground">
    <Header />
    <div className="pt-32">
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
        cta={{ label: "Our Services —", href: "/services" }}
        image={interior2}
        imageAlt="Sweeping marble staircase"
        reverse
      />
    </div>
    <Quote />
    <Footer />
  </main>
);

export default About;
