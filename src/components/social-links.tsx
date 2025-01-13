import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faYoutube,
  faPatreon,
  faWhatsapp,
  faThreads,
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
    href: "https://www.instagram.com/dave_kabayun",
    label: "Instagram",
  },
  {
    icon: faEnvelope,
    href: "mailto:kabayun@gmail.com",
    label: "Email",
  },
  {
    icon: faFacebook,
    href: "https://www.facebook.com/Kabayun/",
    label: "Facebook",
  },
  {
    icon: faThreads,
    href: "https://www.threads.net/@dave_kabayun",
    label: "Threads",
  },
  {
    icon: faYoutube,
    href: "https://www.youtube.com/channel/UCGePscP8I_b2ta5Vuj1j-bQ",
    label: "YouTube",
  },
  {
    icon: faPatreon,
    href: "https://www.patreon.com/c/superluminal_kabayun_yasmin",
    label: "Patreon",
  },
  {
    icon: faWhatsapp,
    href: "https://api.whatsapp.com/send?phone=16093562011",
    label: "WhatsApp",
  },
  {
    icon: faBandcamp,
    href: "https://kabayun.bandcamp.com/",
    label: "Bandcamp",
  },
  {
    icon: faSpotify,
    href: "https://open.spotify.com/artist/4GCJrvLvJrkNkvgrYJTYMW",
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
