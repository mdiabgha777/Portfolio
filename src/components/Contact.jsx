import { Linkedin, Mail, MessageCircle } from "lucide-react";
import Button from "./ui/Button";

export default function Contact() {
  return (
    <section id="contact" className="bg-[var(--card)] py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
          Let’s Connect
        </h2>
        <p className="text-lg text-[var(--muted-foreground)] mb-12">
          Ready to get a fast, professional website for your business? Reach out through any of the platforms below and I’ll respond quickly.
        </p>

        {/* Social Links */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          {/* LinkedIn */}
          <Button
            as="a"
            href="https://www.linkedin.com/in/mdiabgha-08606b2a4"
            target="_blank"
            rel="noopener noreferrer"
            size="md"
            className="flex items-center gap-2 justify-center"
          >
            <Linkedin size={20} /> LinkedIn
          </Button>

          {/* WhatsApp */}
          <Button
            as="a"
            href="https://wa.me/2202618059"
            target="_blank"
            rel="noopener noreferrer"
            size="md"
            className="flex items-center gap-2 justify-center"
          >
            <MessageCircle size={20} /> WhatsApp
          </Button>

          {/* Email */}
          <Button
            as="a"
            href="mailto:mdiabgha@gmail.com"
            size="md"
            className="flex items-center gap-2 justify-center"
          >
            <Mail size={20} /> Email
          </Button>
        </div>

        {/* Optional trust line */}
        <p className="mt-8 text-sm text-[var(--muted-foreground)]">
          Fast responses · No long-term commitments · Free initial consultation
        </p>
      </div>
    </section>
  );
}