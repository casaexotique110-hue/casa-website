import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import Emblem from "./Emblem";

type NavChild = { href: string; label: string; children?: NavChild[] };

const links: NavChild[] = [
  {
    href: "/",
    label: "Home",
    children: [
      {
        href: "#",
        label: "Media",
        children: [
          { href: "/media/news", label: "News" },
          { href: "/media/awards", label: "Awards" },
          { href: "/media/thought-spot", label: "Thought Spot" },
        ],
      },
      {
        href: "#",
        label: "Our Initiatives",
        children: [
          { href: "/initiatives/green-leap", label: "Green Leap" },
          { href: "/initiatives/shakti-nirmaan", label: "Shakti Nirmaan" },
        ],
      },
    ],
  },
  { href: "/who-we-are", label: "Who We Are" },
  {
    href: "/services",
    label: "Services",
    children: [
      {
        href: "/services/bespoke-furniture",
        label: "Bespoke Furniture",
        children: [
          { href: "/services/bespoke-furniture/media-units", label: "Media Units" },
          { href: "/services/bespoke-furniture/walk-in-wardrobes", label: "Walk-in Wardrobes" },
          { href: "/services/bespoke-furniture/fitted-cupboards", label: "Fitted Cupboards" },
          { href: "/services/bespoke-furniture/home-office", label: "Home Office Furniture" },
          { href: "/services/bespoke-furniture/kitchen", label: "Kitchen Furniture" },
          { href: "/services/bespoke-furniture/bathroom", label: "Bathroom Furniture" },
          { href: "/services/bespoke-furniture/outdoor", label: "Outdoor Furniture" },
          { href: "/services/bespoke-furniture/understairs-loft", label: "Understairs & Loft Storage" },
        ],
      },
      { href: "/services/turnkey-execution", label: "Turnkey Execution" },
      { href: "/services/custom-fit-outs", label: "Custom Fit-Outs" },
      { href: "/services/in-house-customization", label: "In-House Customization" },
      { href: "/services/seamless-procurement", label: "Seamless Procurement" },
    ],
  },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

const DesktopItem = ({ link }: { link: NavChild }) => {
  const hasChildren = !!link.children?.length;
  return (
    <div className="relative group">
      <Link
        to={link.href}
        className="relative py-1 inline-flex items-center gap-1 transition-colors hover:text-accent"
      >
        {link.label}
        {hasChildren && <ChevronDown className="w-3 h-3" />}
      </Link>
      {hasChildren && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
          <ul className="bg-background text-foreground border border-border shadow-[var(--shadow-soft)] min-w-[240px] py-3">
            {link.children!.map((c) => (
              <li key={c.label} className="relative group/sub">
                <Link
                  to={c.href}
                  className="flex items-center justify-between px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.2em] hover:text-accent hover:bg-secondary/50 transition-colors"
                >
                  {c.label}
                  {c.children?.length && <ChevronDown className="w-3 h-3 -rotate-90" />}
                </Link>
                {c.children?.length && (
                  <ul className="absolute left-full top-0 bg-background border border-border shadow-[var(--shadow-soft)] min-w-[260px] py-3 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all">
                    {c.children.map((g) => (
                      <li key={g.label}>
                        <Link
                          to={g.href}
                          className="block px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.2em] hover:text-accent hover:bg-secondary/50 transition-colors"
                        >
                          {g.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled || open
          ? "bg-background/95 backdrop-blur-md text-foreground border-b border-border/60 py-4"
          : "bg-transparent text-primary-foreground py-6"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <Emblem size={scrolled ? 30 : 36} />
          <span className="font-serif text-lg tracking-[0.25em] uppercase">
            Casa Exotique
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-[0.7rem] uppercase tracking-[0.24em]">
          {links.map((l) => (
            <DesktopItem key={l.label} link={l} />
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center text-[0.7rem] uppercase tracking-[0.28em] border border-current px-5 py-2 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all"
        >
          Enquire
        </Link>

        <button
          aria-label="Toggle menu"
          className="lg:hidden p-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background text-foreground border-t border-border max-h-[80vh] overflow-y-auto">
          <ul className="container py-6 space-y-1">
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-[0.78rem] uppercase tracking-[0.24em] font-medium"
                >
                  {l.label}
                </Link>
                {l.children?.map((c) => (
                  <div key={c.label} className="pl-4">
                    <Link
                      to={c.href}
                      onClick={() => setOpen(false)}
                      className="block py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground"
                    >
                      › {c.label}
                    </Link>
                    {c.children?.map((g) => (
                      <Link
                        key={g.label}
                        to={g.href}
                        onClick={() => setOpen(false)}
                        className="block pl-6 py-1 text-xs text-muted-foreground/80"
                      >
                        — {g.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
