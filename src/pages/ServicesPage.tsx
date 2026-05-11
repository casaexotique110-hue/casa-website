import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Services from "@/components/site/Services";
import { PageHero } from "@/components/site/ContentPage";

const ServicesPage = () => (
  <main className="min-h-screen bg-background text-foreground">
    <Header />
    <PageHero
      eyebrow="Our Services"
      title={<>A Distinctive <em className="text-accent">Design Process</em></>}
      intro="The journey of design begins with an idea, a concept that takes form through meticulous planning and curation. Each stage is an orchestration of creativity and precision."
    />
    <Services />
    <Footer />
  </main>
);

export default ServicesPage;
