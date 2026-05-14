import { Lightbulb, Target, Zap, Code2 } from "lucide-react";

const qualities = [
  {
    icon: Target,
    title: "Focused on Results",
    description:
      "Your website has one job: help your business get more customers. Everything I build is designed with that goal in mind.",
  },
  {
    icon: Zap,
    title: "Fast & Reliable",
    description:
      "I build lightweight, mobile-first websites that load quickly and work smoothly on all devices.",
  },
  {
    icon: Lightbulb,
    title: "Simple & Stress-Free",
    description:
      "No technical jargon. No overcomplication. Just a clear process and a website you can rely on.",
  },
];

const techStack = [
  "React.js",
  "Tailwind CSS",
  "Node js",
  "HTML5",
  "CSS3",
  "JavaScript",
];

export default function About() {
  return (
    <section id="about" className="bg-[var(--card)] py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Intro */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
            Built for Service Businesses
          </h2>

          <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
            Most service businesses lose customers online before they ever make contact — because their website looks outdated, loads slowly, or simply doesn't exist.
            <br />
            I build clean, fast, mobile-first websites for service businesses. Sites that look professional, communicate your value clearly, and make it effortless for customers to reach you.
            <br />
            Every site I build uses modern React and Tailwind — fully responsive on every device, fast loading, and built to represent your business the way it deserves to be represented online.
            <br />
            If your business deserves to look as professional online as you are in person — let's work together.
          </p>
        </div>

        {/* Qualities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {qualities.map((quality, index) => (
            <div
              key={index}
              className="bg-[var(--background)] p-6 rounded-lg border border-[var(--border)] shadow-card"
            >
              <quality.icon
                size={24}
                className="mb-4 text-[var(--accent2)]"
              />
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                {quality.title}
              </h3>
              <p className="text-[var(--muted-foreground)]">
                {quality.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">
            Technologies I Use
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-[var(--accent2)] text-white rounded-full text-sm font-medium flex items-center gap-1"
              >
                <Code2 size={14} />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}