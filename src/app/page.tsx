import { LinkGrid } from "@/components/link-grid";
import { ModeToggle } from "@/components/mode-toggle";
import { SocialLinks } from "@/components/social-links";
import { CosmicBackground } from "@/components/cosmic-background";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <CosmicBackground />
      <main className="relative min-h-screen p-4 md:p-8">
        <div className="max-w-xl mx-auto">
          {/* Mode Toggle */}
          <div className="flex justify-end mb-6 animate-fade-in-up">
            <ModeToggle />
          </div>

          {/* Profile Section */}
          <div className="text-center mb-10">
            {/* Profile Photo with Glow */}
            <div className="animate-fade-in-up animation-delay-100">
              <div className="relative w-36 h-36 mx-auto mb-6">
                <div className="profile-glow w-full h-full rounded-full overflow-hidden border-2 border-primary/30">
                  <Image
                    src="/22cc-Kabayun.jpg"
                    alt="Kabayun"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Name */}
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-3 tracking-tight animate-fade-in-up animation-delay-200">
              Kabayun
            </h1>

            {/* Tagline */}
            <p className="text-muted-foreground text-lg tracking-wide animate-fade-in-up animation-delay-300">
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
      </main>
    </>
  );
}
