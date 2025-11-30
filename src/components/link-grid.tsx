import Link from "next/link";

const links = [
  {
    title: "Booking Request Form",
    href: "https://fm-booking.com/booking",
    description: "Book me for your next event",
  },
  {
    title: "FM Booking",
    href: "https://fm-booking.com/artists/kabayun",
    description: "Artist profile and booking information",
  },
  {
    title: "Sangoma Records",
    href: "https://www.sangomarecords.com/artists/kabayun/",
    description: "Latest releases and music",
  },
  {
    title: "Website",
    href: "https://superluminalpsy.com/",
    description: "Official website",
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
          className={`block animate-fade-in-up animation-delay-${(index + 6) * 100}`}
          style={{ animationDelay: `${(index + 6) * 100}ms` }}
        >
          <div className="glass-card gradient-border p-5 text-center rounded-xl group">
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
