import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Contact from "@/components/site/Contact";
import { PageHero } from "@/components/site/ContentPage";

const ContactPage = () => (
  <main className="min-h-screen bg-background text-foreground">
    <Header />
    <PageHero
      eyebrow="Contact"
      title={<>Let the creative <em className="text-accent">journey begin</em></>}
      intro="Share a few words about your project and our studio will be in touch."
    />
    <Contact />
    <Footer />
  </main>
);

export default ContactPage;
