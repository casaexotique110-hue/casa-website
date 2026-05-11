import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { PageHero } from "@/components/site/ContentPage";
import SplitSection from "@/components/site/SplitSection";
import Quote from "@/components/site/Quote";
import interior1 from "@/assets/interior-1.jpg";
import interior2 from "@/assets/interior-2.jpg";

const WhoWeAre = () => (
  <main className="min-h-screen bg-background text-foreground">
    <Header />
    <PageHero
      eyebrow="Who We Are"
      title={<>Discover the <em className="text-accent">Casa Journey</em></>}
      intro="Every space reflects its owner's vision and dreams. Founded by Bhawana Bhatnagar in 2019, Casa Exotique metamorphoses dreams into luxurious realities through an unparalleled end-to-end solution."
    />

    <SplitSection
      eyebrow="Bhawana Bhatnagar"
      title={<>Revolutionizing <em className="text-accent">Dream Spaces</em></>}
      body={
        <>
          <p>
            Bhawana Bhatnagar's journey from a musical and theatrical prodigy to
            the visionary founder of Casa Exotique highlights her revolutionary
            impact on interior design. With over 14 years of experience, she
            blends artistry with practical expertise to create luxurious and
            emotionally resonant spaces.
          </p>
          <p>
            Growing up in rural India, Bhawana's early life was immersed in
            music and theater. Her global travels introduced her to diverse
            cultures and architectural marvels, fueling her vision for Casa
            Exotique—a fusion of luxury, innovation, and emotion.
          </p>
        </>
      }
      image={interior1}
      imageAlt="Bhawana Bhatnagar, founder of Casa Exotique"
    />

    <section className="py-20 md:py-28 bg-secondary/60">
      <div className="container max-w-4xl">
        <p className="eyebrow">The Studio</p>
        <h2 className="font-serif text-3xl md:text-5xl mt-6">Design Partner for your exquisite space</h2>
        <div className="w-12 h-px bg-accent my-8" />
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            We meticulously manage every facet of the design process, liberating
            clients from procurement complexities and crafting bespoke designs
            tailored to their exacting specifications. From opulent penthouses to
            high-end offices and retail spaces, each project is a harmonious
            blend of elegance, functionality, and innovation.
          </p>
          <p>
            Under Ms. Bhatnagar's visionary leadership, our team employs
            avant-garde technology and exquisite attention to detail, ensuring
            every step exquisitely mirrors our clients' aspirations.
          </p>
          <p>
            The team brings decades of hands-on experience across residential,
            commercial, retail, and hospitality projects — staying abreast of
            the latest design trends and technologies, working closely with
            clients to ensure each project reflects unique visions and needs.
          </p>
        </div>
      </div>
    </section>

    <SplitSection
      eyebrow="Our Approach"
      title={<>Experience Casa Exotique for unparalleled <em className="text-accent">luxury in design</em></>}
      body={
        <>
          <p>
            Imagine stepping into spaces that embody your vision with unmatched
            sophistication. Casa Exotique excels with a holistic approach,
            managing every detail from concept to execution.
          </p>
          <p>
            Enjoy a seamless experience with a single point of contact. Our
            bespoke furniture studio creates unique pieces from sustainable,
            premium materials, enhancing your living spaces.
          </p>
        </>
      }
      image={interior2}
      imageAlt="Casa Exotique studio interior"
      reverse
    />

    <Quote />
    <Footer />
  </main>
);

export default WhoWeAre;
