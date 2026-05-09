import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Services from "@/components/site/Services";

const ServicesPage = () => (
  <main className="min-h-screen bg-background text-foreground">
    <Header />
    <div className="pt-32">
      <Services />
    </div>
    <Footer />
  </main>
);

export default ServicesPage;
