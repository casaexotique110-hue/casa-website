import { Link } from "react-router-dom";
import Emblem from "./Emblem";

const Footer = () => (
  <footer className="bg-foreground text-background py-16">
    <div className="container grid md:grid-cols-3 gap-12">
      <div>
        <div className="flex items-center gap-3">
          <Emblem className="text-accent" size={36} />
          <p className="font-serif text-xl tracking-[0.28em] uppercase">Casa Exotique</p>
        </div>
        <p className="text-sm text-background/70 mt-6 leading-relaxed max-w-xs">
          A leading luxury interior design company in Delhi NCR — crafting immersive,
          elegant and deeply personal spaces.
        </p>
      </div>

      <div>
        <p className="eyebrow" style={{ color: "hsl(var(--gold-soft))" }}>Quick Links</p>
        <ul className="mt-6 space-y-2 text-sm text-background/80">
          {[
            { to: "/media/news", l: "News" },
            { to: "/media/awards", l: "Awards" },
            { to: "/media/thought-spot", l: "Thought Spot" },
            { to: "/contact", l: "Contact Us" },
            { to: "/who-we-are", l: "Who We Are" },
          ].map((i) => (
            <li key={i.to}>
              <Link to={i.to} className="hover:text-accent transition-colors">{i.l}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="eyebrow" style={{ color: "hsl(var(--gold-soft))" }}>India Address</p>
        <address className="mt-6 not-italic text-sm text-background/80 leading-relaxed">
          Design and Experience Center<br />
          Plot No. 110, Pace City 1, Sector 37,<br />
          Gurgaon
        </address>
        <p className="mt-4 text-sm text-background/80">sales@casaexotique.com</p>
        <p className="text-sm text-background/80">+91 9667733382</p>
      </div>
    </div>

    <div className="container mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-background/50">
      <p>© {new Date().getFullYear()} Casa Exotique. All rights reserved.</p>
      <div className="flex gap-6">
        <Link to="/privacy" className="hover:text-accent">Privacy Policy</Link>
        <Link to="/disclaimer" className="hover:text-accent">Disclaimer</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
