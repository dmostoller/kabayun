import { LinkGrid } from "@/components/link-grid";
import { ModeToggle } from "@/components/mode-toggle";
import { SocialLinks } from "@/components/social-links";
import { CosmicBackground } from "@/components/cosmic-background";
import { BioDialog } from "@/components/bio-dialog";
import { Code2 } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <CosmicBackground />
      <main
        id="main-content"
        className="relative min-h-screen p-4 md:p-8 flex items-center justify-center"
      >
        <div className="w-full max-w-xl mx-auto">
          {/* Mode Toggle */}
          <div className="flex justify-end mb-0 animate-fade-in-up">
            <ModeToggle />
          </div>

          {/* Profile Section */}
          <div className="text-center mb-8">
            {/* Profile Photo with Glow - Click to open bio */}
            <div className="animate-fade-in-up animation-delay-100">
              <BioDialog>
                <button
                  className="relative w-36 h-36 mx-auto mb-6 block cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-full"
                  aria-label="View biography of Kabayun"
                >
                  <div className="profile-glow w-full h-full rounded-full overflow-hidden border-2 border-primary/30 transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src="/22cc-Kabayun.jpg"
                      alt="Kabayun"
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                  <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 rounded-full text-xs text-white/90 font-medium">
                    About
                  </span>
                </button>
              </BioDialog>
            </div>

            {/* Name */}
            <h1 className="animate-fade-in-up animation-delay-200">
              <Image
                src="/kabayun-logo-text-only-black.png"
                alt="Kabayun"
                width={280}
                height={80}
                className="light-only mx-auto -my-3 animate-pulse-glow"
                priority
              />
              <Image
                src="/kabayun-logo-text-only-white.png"
                alt="Kabayun"
                width={280}
                height={80}
                className="dark-only mx-auto -my-3 animate-pulse-glow"
                priority
              />
            </h1>

            {/* Tagline */}
            <p className="text-muted-foreground text-lg tracking-wide animate-fade-in-up animation-delay-300 -mb-2 pt-4">
              Drop into the momentary
            </p>
          </div>

          {/* Social Links */}
          <div className="animate-fade-in-up animation-delay-400">
            <SocialLinks />
          </div>

          {/* Link Cards */}
          <div className="animate-fade-in-up animation-delay-500">
            <LinkGrid />
          </div>
        </div>

        {/* Developer Credit - subtle corner badge */}
        <a
          href="https://davidmostoller.com"
          target="_blank"
          rel="noopener noreferrer"
          className="dev-credit"
          aria-label="Built by David Mostoller"
        >
          <Code2 className="w-4 h-4" />
          <span className="dev-credit-text">Built by David Mostoller</span>
        </a>
      </main>
    </>
  );
}
