import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
} from "./ui/Card";

const testimonials = [
  {
    id: 1,
    quote:
      "Muhammed built a landing page for Jummah Fits that showcases our collections exactly the way I envisioned. It looks clean, professional, and represents our brand perfectly online. Working with him was smooth and stress-free from start to finish.",
    name: "Fatoumatta Jaiteh",
    meta: "Owner — Jummah Fits, Fashion Brand",
    initials: "FJ",
  },
  {
    id: 2,
    quote:
      "Mr Diab did a great job displaying our menu and location in a clean, easy to navigate way. Our online presence went from nothing to something we're genuinely proud to show customers. Professional work delivered without any hassle.",
    name: "Ahmed Nassim",
    meta: "Owner — Big Bite Fast Food, Restaurant",
    initials: "AN",
  },
  {
    id: 3,
    quote:
      "I have always wanted a simple website to boost our visibility and reach more customers across the country. The site looks great, beautiful, and has already helped us get noticed beyond our immediate area. Exactly what we needed.",
    name: "Adama Sillah",
    meta: "Owner — Minaz Tasty Food, Restaurant",
    initials: "AS",
  },
  {
    id: 4,
    quote:
      "As a service provider, it is important to have an online presence. Muhammed built a full website that gave our business the credibility and online presence we were missing. It has help us target international customers that invest and build businesses in our country. The website looks professional, and easy to navigate.",
    name: "Musa Manneh",
    meta: "Owner — Manneh & Sons Plumbing, Plumbing Services",
    initials: "MM",
  },
  {
    id: 5,
    quote:
      "Muhammed built our landing page to raise awareness about the effects of climate change on health. He understood our mission and translated it into a clean, impactful site that communicates our message clearly to visitors. We're proud to share it.",
    name: "Awa Jassey",
    meta: "Director — Climate Health Champions, Non-Profit",
    initials: "AJ",
  },
  {
    id: 6,
    quote:
      "Muhammed has provided our business with a professionally designed website that showcases all our products, replacing our old and outdated website from years ago. The site is modern, easy on the eyes, and professionally represents everything our business offers. Exactly what we were looking for.",
    name: "Hussein Diab Ghanim",
    meta: "Owner — Lightzone Co. Ltd, Import & Export",
    initials: "HD",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 px-4 bg-[var(--background)]">
      <h1 className="text-4xl font-bold text-[var(--foreground)] text-center mb-10">
        What my clients say
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <Card
            key={t.id}
            className="flex flex-col justify-between bg-[var(--card)] border-[var(--border)]"
          >
            <CardContent className="pt-6">
              <svg
                className="w-8 h-8 text-[var(--accent)] mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M7.17 17c.51 0 .98-.29 1.2-.74l1.42-2.84c.14-.28.21-.58.21-.89V8c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h2l-1.03 2.06c-.45.89.2 1.94 1.2 1.94zm10 0c.51 0 .98-.29 1.2-.74l1.42-2.84c.14-.28.21-.58.21-.89V8c0-.55-.45-1-1-1H15c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h2l-1.03 2.06c-.45.89.2 1.94 1.2 1.94z" />
              </svg>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                {t.quote}
              </p>
            </CardContent>
            <CardFooter className="border-t border-[var(--border)] pt-4 gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium shrink-0 bg-[var(--primary)] text-[var(--primary-foreground)]"
              >
                {t.initials}
              </div>
              <div>
                <p className="text-sm font-medium text-[var(--card-foreground)] leading-none mb-1">
                  {t.name}
                </p>
                <p className="text-xs text-[var(--muted-foreground)]">{t.meta}</p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}