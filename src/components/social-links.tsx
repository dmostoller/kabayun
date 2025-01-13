import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faYoutube,
  faPatreon,
  faWhatsapp,
  faBandcamp,
  faSpotify,
  faSoundcloud,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type Social = {
  icon: IconDefinition;
  href: string;
  label: string;
};

const socials: Social[] = [
  {
    icon: faInstagram,
    href: "https://instagram.com/kabayun",
    label: "Instagram",
  },
  {
    icon: faEnvelope,
    href: "mailto:contact@kabayun.com",
    label: "Email",
  },
  {
    icon: faFacebook,
    href: "https://facebook.com/kabayun",
    label: "Facebook",
  },
  {
    icon: faYoutube,
    href: "https://youtube.com/@kabayun",
    label: "YouTube",
  },
  {
    icon: faPatreon,
    href: "https://patreon.com/kabayun",
    label: "Patreon",
  },
  {
    icon: faWhatsapp,
    href: "https://wa.me/1234567890",
    label: "WhatsApp",
  },
  {
    icon: faBandcamp,
    href: "https://kabayun.bandcamp.com",
    label: "Bandcamp",
  },
  {
    icon: faSpotify,
    href: "https://open.spotify.com/artist/kabayun",
    label: "Spotify",
  },
  {
    icon: faSoundcloud,
    href: "https://soundcloud.com/kabayun",
    label: "Soundcloud",
  },
];

export function SocialLinks() {
  return (
    <div className="flex justify-center gap-4 mb-8 flex-wrap">
      {socials.map(({ icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-muted/50 transition-all duration-300 hover:scale-110 hover:text-primary"
          aria-label={label}
        >
          <FontAwesomeIcon icon={icon} className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
}
