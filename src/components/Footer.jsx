import { Linkedin, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--card)] border-t border-[var(--border)] py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Branding */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-[var(--foreground)]">
            Muhammed Diab Ghanim
          </h3>
          <p className="text-[var(--muted-foreground)] text-sm">
            Frontend Developer | Helping small businesses grow online
          </p>
        </div>

        {/* Social / Contact Links */}
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/mdiabgha-08606b2a4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent2)] hover:text-[var(--accent2)] transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://wa.me/2202618059"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent2)] hover:text-[var(--accent2)] transition-colors"
          >
            <MessageCircle size={20} />
          </a>
          <a
            href="mailto:mdiabgha@gmail.com"
            className="text-[var(--accent2)] hover:text-[var(--accent2)] transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-8 text-center text-[var(--muted-foreground)] text-sm">
        &copy; {new Date().getFullYear()} Muhammed Diab Ghanim. All rights reserved.
      </div>
    </footer>
  );
}