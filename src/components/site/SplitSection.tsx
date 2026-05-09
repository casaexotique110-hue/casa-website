import { ReactNode } from "react";

interface SplitSectionProps {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  body: ReactNode;
  cta?: { label: string; href: string };
  image: string;
  imageAlt: string;
  reverse?: boolean;
}

const SplitSection = ({
  id,
  eyebrow,
  title,
  body,
  cta,
  image,
  imageAlt,
  reverse,
}: SplitSectionProps) => {
  return (
    <section id={id} className="py-24 md:py-36">
      <div className="container grid gap-14 md:grid-cols-2 md:gap-20 items-center">
        <div className={`${reverse ? "md:order-2" : ""}`}>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-6 leading-[1.1]">
            {title}
          </h2>
          <div className="w-12 h-px bg-accent my-8" />
          <div className="space-y-5 text-muted-foreground text-[0.95rem] leading-relaxed max-w-md">
            {body}
          </div>
          {cta && (
            <a
              href={cta.href}
              className="inline-block mt-10 text-[0.72rem] uppercase tracking-[0.32em] border-b border-accent pb-1 hover:text-accent transition-colors"
            >
              {cta.label}
            </a>
          )}
        </div>
        <div className={`hover-zoom shadow-[var(--shadow-soft)] ${reverse ? "md:order-1" : ""}`}>
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            className="w-full h-[520px] md:h-[640px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default SplitSection;
