import Button from "./ui/Button";
import Project1 from "../assets/portfolio1.png";
import Project2 from "../assets/portfolio2.png";
import Project3 from "../assets/portfolio3.png";

const projects = [
  {
    title: "Local Fashion Website",
    description:
      "Redesigned the website for a restaurant, improving mobile usability and speeding up load times. Resulted in a 25% increase in reservations.",
    image: Project1,
    link: "#contact", // sales CTA
    liveLink: "https://jummah-fits.vercel.app/", // Vercel live demo
  },
  {
    title: "Local Plumbing Services Website",
    description:
      "Built a conversion-focused landing page for a fitness studio. Simplified booking process increased sign-ups by 40%.",
    image: Project2,
    link: "#contact",
    liveLink: "https://manneh-sons-plumbing.vercel.app/",
  },
  {
    title: "Local Business Website",
    description:
      "Developed a fast, modern website for a dental clinic. Optimized SEO and mobile design to attract new patients.",
    image: Project3,
    link: "#contact",
    liveLink: "https://lightzone-co-ltd.vercel.app",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-[var(--background)] py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
            My Work
          </h2>
          <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
            I help small businesses grow online. Here are a few examples of websites
            I’ve built that are fast, mobile-friendly, and designed to convert visitors into customers.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[var(--card)] rounded-lg border border-[var(--border)] shadow-card overflow-hidden flex flex-col"
            >
              {/* Image links to live site */}
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-200"
                />
              </a>

              {/* Project Details */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
                  {project.title}
                </h3>
                <p className="text-[var(--muted-foreground)] flex-grow">
                  {project.description}
                </p>

                {/* CTA Buttons */}
                <div className="mt-4 flex flex-col sm:flex-row gap-2">
                  <Button size="sm" href={project.link} className="flex-grow">
                    Work With Me
                  </Button>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--accent2)] hover:underline self-center"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}