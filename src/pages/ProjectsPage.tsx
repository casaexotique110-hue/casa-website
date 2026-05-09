import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Projects from "@/components/site/Projects";

const ProjectsPage = () => (
  <main className="min-h-screen bg-background text-foreground">
    <Header />
    <div className="pt-32">
      <Projects />
    </div>
    <Footer />
  </main>
);

export default ProjectsPage;
