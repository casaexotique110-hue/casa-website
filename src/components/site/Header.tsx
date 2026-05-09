import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Emblem from "./Emblem";

const links = [
  { href: "/story", label: "Brand Story" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md text-foreground border-b border-border/60 py-4"
          : "bg-transparent text-primary-foreground py-6"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <Emblem size={scrolled ? 30 : 36} />
          <span className="font-serif text-lg tracking-[0.25em] uppercase">
            Maison Aurelia
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-10 text-[0.72rem] uppercase tracking-[0.28em]">
          {links.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="relative py-1 transition-colors hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center text-[0.7rem] uppercase tracking-[0.28em] border border-current px-5 py-2 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all"
        >
          Enquire
        </Link>
      </div>
    </header>
  );
};

export default Header;
