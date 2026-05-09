import Emblem from "./Emblem";

const Footer = () => (
  <footer className="bg-foreground text-background py-16">
    <div className="container">
      <div className="flex flex-col items-center text-center">
        <Emblem className="text-accent" size={48} />
        <p className="font-serif text-2xl tracking-[0.3em] uppercase mt-6">
          Maison Aurelia
        </p>
        <p className="text-xs uppercase tracking-[0.28em] text-background/60 mt-3">
          Iconic Architecture · Interior Design · Furniture
        </p>
        <div className="w-12 h-px bg-accent my-10" />
        <nav className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-[0.72rem] uppercase tracking-[0.28em] text-background/80">
          <a href="#story" className="hover:text-accent transition-colors">Brand Story</a>
          <a href="#about" className="hover:text-accent transition-colors">About</a>
          <a href="#services" className="hover:text-accent transition-colors">Services</a>
          <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
          <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
        </nav>
        <p className="text-xs text-background/40 mt-12">
          © {new Date().getFullYear()} Maison Aurelia Design Group. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
