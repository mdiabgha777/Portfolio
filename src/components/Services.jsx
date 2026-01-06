import { Layout, RefreshCw, Smartphone } from "lucide-react";
import Button from "./ui/Button";

const services = [
  {
    icon: Layout,
    title: "Custom Website Builds",
    description:
      "Full websites designed to look professional, load fast, and convert visitors into customers.",
  },
  {
    icon: RefreshCw,
    title: "Website Redesigns",
    description:
      "Modernize your existing website with a clean design and improved user experience.",
  },
  {
    icon: Smartphone,
    title: "Landing Pages & Funnels",
    description:
      "High-converting landing pages for promotions, products, or lead generation campaigns.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[var(--card)] py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
            Services I Offer
          </h2>
          <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
            I help small businesses get professional, fast, and reliable websites that generate real results. Here’s how I can help you grow your online presence:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[var(--background)] p-6 rounded-lg border border-[var(--border)] shadow-card flex flex-col"
            >
              <service.icon size={28} className="mb-4 text-[var(--accent2)]" />
              <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
                {service.title}
              </h3>
              <p className="text-[var(--muted-foreground)] flex-grow">
                {service.description}
              </p>
              <Button size="sm" href="#contact" className="mt-4 self-start">
                Work With Me
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}