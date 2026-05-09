import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import SplitSection from "@/components/site/SplitSection";
import interior1 from "@/assets/interior-1.jpg";

const BrandStory = () => (
  <main className="min-h-screen bg-background text-foreground">
    <Header />
    <div className="pt-32">
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
        cta={{ label: "Meet the Principal —", href: "/about" }}
        image={interior1}
        imageAlt="Grand classical living room interior"
      />
    </div>
    <Footer />
  </main>
);

export default BrandStory;
