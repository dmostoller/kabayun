import { LinkGrid } from "@/components/link-grid";
import { ModeToggle } from "@/components/mode-toggle";
import { SocialLinks } from "@/components/social-links";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 bg-background">
      <div className="max-w-xl mx-auto">
        <div className="flex justify-end mb-4">
          <ModeToggle />
        </div>
        <div className="text-center mb-8">
          <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
            <Image
              src="/22cc-Kabayun.jpg"
              alt="Profile"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold mb-2">Kabayun</h1>
          <p className="text-muted-foreground">Drop into the momentary</p>
        </div>
        <SocialLinks />
        <LinkGrid />
      </div>
    </main>
  );
}
