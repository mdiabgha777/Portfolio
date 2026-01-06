import { Menu, X } from "lucide-react";
import { useState } from "react";
import Button from "./ui/Button";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Work" },
  { href: "#services", label: "Services" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/90 backdrop-blur-md border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Brand */}
        <a
          href="#home"
          className="flex flex-col leading-tight"
        >
          <span className="text-lg font-semibold text-[var(--foreground)]">
            Fast Business Websites
          </span>
          <span className="text-xs text-[var(--muted-foreground)]">
            Built by Muhammed Diab Ghanim
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
            >
              {link.label}
            </a>
          ))}

          <Button size="sm" href="#contact">
            Get in Touch
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-[var(--foreground)]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-[var(--background)] border-b border-[var(--border)]">
          <div className="px-6 py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-center text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition"
              >
                {link.label}
              </a>
            ))}

            <Button
              size="sm"
              href="#contact"
              onClick={() => setIsOpen(false)}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}