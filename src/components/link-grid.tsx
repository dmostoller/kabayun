import Link from "next/link";
import { Card } from "@/components/ui/card";

const links = [
  {
    title: "Booking Request Form",
    href: "https://fm-booking.com/booking",
    description: "Book me for your next event",
  },
  {
    title: "FM Booking",
    href: "https://fm-booking.com/artists/kabayun",
    description: "Professional booking services",
  },
  {
    title: "Sangoma Records",
    href: "https://www.sangomarecords.com/artists/kabayun/",
    description: "Latest releases and music",
  },
  {
    title: "Website",
    href: "https://superluminalpsy.com/",
    description: "Official website and portfolio",
  },
];

export function LinkGrid() {
  return (
    <div className="grid gap-4">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          target="_blank"
          referrerPolicy="no-referrer"
        >
          <Card className="p-4 hover:bg-muted transition-colors text-center">
            <h2 className="font-semibold">{link.title}</h2>
            <p className="text-sm text-muted-foreground">{link.description}</p>
          </Card>
        </Link>
      ))}
    </div>
  );
}
