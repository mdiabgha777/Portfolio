import { Lightbulb, Code2, Target } from "lucide-react";


const techStack = [
  "React.js",
  "Tailwind CSS",
  "WordPress",
  "HTML5",
  "CSS3",
  "JavaScript",
];

const qualities = [
  {
    icon: Target,
    title: "Business-Focused",
    description: "I understand that your website is a business tool, not just a digital brochure.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Every project starts with understanding your unique challenges and goals.",
  },
  {
    icon: Code2,
    title: "Clean Code",
    description: "I write maintainable, scalable code that grows with your business.",
  },
];

export default function About() {
    return (
        <section id="about" className="bg-[var(--card)] py-24">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">About Me</h2>
                    <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
                        I'm a web developer with a passion for helping small businesses establish a strong online presence. 
            With years of experience building business websites and landing pages, I understand what it takes 
            to create a website that not only looks great but also drives real results for your business.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {qualities.map((quality, index) => (
                        <div key={index} className="bg-[var(--background)] p-6 rounded-lg shadow-card border border-[var(--border)]">
                            <quality.icon size={24} className="mb-4 text-[var(--accent2)]" />
                            <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">{quality.title}</h3>
                            <p className="text-[var(--muted-foreground)]">{quality.description}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">My Tech Stack</h3>
                    <div className="flex flex-wrap justify-center gap-2">
                        {techStack.map((tech, index) => (
                            <span key={index} className="px-4 py-2 bg-[var(--accent2)] text-white rounded-full text-sm font-medium">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}