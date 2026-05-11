import { Link } from "react-router-dom";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

const projects = [
  { img: p1, title: "Penthouse Residence", place: "DLF Camellias, Gurgaon", year: "2024" },
  { img: p2, title: "Designer Villa", place: "Golf Course Road, Gurgaon", year: "2023" },
  { img: p3, title: "Corporate Office", place: "Cyber City, Gurgaon", year: "2023" },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-36">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <p className="eyebrow">Selected Works</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-6">
              A portfolio of <em className="text-accent">considered</em> spaces
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="text-[0.72rem] uppercase tracking-[0.32em] border-b border-foreground pb-1 self-start hover:text-accent hover:border-accent transition-colors"
          >
            All Projects —
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <Link
              to="/portfolio"
              key={p.title}
              className={`group block ${i === 1 ? "md:translate-y-12" : ""}`}
            >
              <div className="hover-zoom aspect-[4/5] mb-6">
                <img src={p.img} alt={`${p.title} — ${p.place}`} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="flex items-baseline justify-between">
                <h3 className="font-serif text-2xl md:text-3xl group-hover:text-accent transition-colors">{p.title}</h3>
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{p.year}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">{p.place}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
