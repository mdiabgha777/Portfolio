import { Menu, X } from "lucide-react";
import { useState } from "react";
import Button from "./ui/Button";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/80 backdrop-blur-md shadow-sm font-sans">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-semibold text-[var(--foreground)] font-sans"
        >
          Muhammed Diab Ghanim
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors duration-200"
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
        <div className="md:hidden absolute top-16 left-0 right-0 bg-[var(--background)] border-b border-[var(--border)] font-sans">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <Button size="sm" href="#contact" onClick={() => setIsOpen(false)}>
              Get in Touch
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}