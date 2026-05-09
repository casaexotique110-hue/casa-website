import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Contact from "@/components/site/Contact";

const ContactPage = () => (
  <main className="min-h-screen bg-background text-foreground">
    <Header />
    <div className="pt-32">
      <Contact />
    </div>
    <Footer />
  </main>
);

export default ContactPage;
