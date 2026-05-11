import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  image?: string;
}

export const PageHero = ({ eyebrow, title, intro, image }: PageHeroProps) => (
  <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
    {image && (
      <>
        <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/60" />
      </>
    )}
    <div className={`container relative ${image ? "text-primary-foreground" : ""}`}>
      {eyebrow && (
        <p className="eyebrow" style={image ? { color: "hsl(var(--gold-soft))" } : undefined}>
          {eyebrow}
        </p>
      )}
      <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mt-6 max-w-4xl leading-[1.05]">
        {title}
      </h1>
      {intro && (
        <p className={`mt-8 max-w-2xl text-base md:text-lg ${image ? "text-primary-foreground/85" : "text-muted-foreground"}`}>
          {intro}
        </p>
      )}
      <div className="w-12 h-px bg-accent mt-10" />
    </div>
  </section>
);

interface ContentPageProps {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  heroImage?: string;
  children: ReactNode;
}

const ContentPage = ({ eyebrow, title, intro, heroImage, children }: ContentPageProps) => (
  <main className="min-h-screen bg-background text-foreground">
    <Header />
    <PageHero eyebrow={eyebrow} title={title} intro={intro} image={heroImage} />
    <section className="py-16 md:py-24">
      <div className="container max-w-4xl prose-content space-y-6 text-[0.98rem] leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
    <Footer />
  </main>
);

export default ContentPage;
