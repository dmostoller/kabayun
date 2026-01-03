import Link from "next/link";
import { ShineBorder } from "@/components/ui/shine-border";

const links = [
  {
    title: "Booking Request Form",
    href: "https://fm-booking.com/booking",
    description: "Book me for your next event",
  },
  {
    title: "Kabayun Academy",
    href: "https://www.kabayun-academy.com",
    description: "Learn psytrance production",
  },
  {
    title: "Artist Website",
    href: "https://superluminalpsy.com/",
    description: "Stream music, browse photos, and find upcoming shows",
  },
  {
    title: "Sangoma Records",
    href: "https://www.sangomarecords.com/artists/kabayun/",
    description: "Official label page with releases and catalog",
  },
  {
    title: "FM Booking",
    href: "https://fm-booking.com/artists/kabayun",
    description: "Artist profile and booking information",
  },
];

export function LinkGrid() {
  return (
    <div className="grid gap-4">
      {links.map((link, index) => (
        <Link
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group block animate-fade-in-up animation-delay-${(index + 6) * 100} rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background`}
          style={{ animationDelay: `${(index + 6) * 100}ms` }}
          aria-label={`${link.title} - ${link.description} (opens in new tab)`}
        >
          <div className="relative glass-card gradient-border p-5 text-center rounded-xl overflow-hidden">
            <ShineBorder
              shineColor={["hsl(270, 80%, 65%)", "hsl(195, 85%, 55%)"]}
              duration={8}
              borderWidth={2}
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <h2 className="font-display font-semibold text-lg group-hover:text-primary transition-colors">
              {link.title}
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              {link.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
