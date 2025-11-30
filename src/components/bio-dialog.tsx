"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";

const bioContent = [
  "Kabayun is the project of David Mostoller, a psytrance producer from the United States. After spending many years honing his sound, performing around the USA, and organizing parties in New York City, David has spent the last 8 years focused solely on his Kabayun project. He now splits his time between his home in Philadelphia and touring the globe, performing in many European cities, in North, South and Central America, Asia, India and Australia, and at many of the top summer festivals in Europe, including Boom, Ozora, MoDem, Lost Theory, Antaris, Hadra, Sonica, and many more....",
  "After releasing his debut album on 2to6 Records in 2011, in 2012 David joined the team at Looney Moon Records, based in Italy. In 2015 he left Looney Moon and joined Sangoma Records, a label based in Germany that promotes psytrance without genre boundaries, which is a perfect fit for his music, which floats in the border zone between night full on, twilight, forest, and dark, pulling elements from each, for a full power, psychedelic and very danceable vibe.",
  "His tracks have been featured on many compilations and releases from top psytrance labels over the years. Currently David is working on a ton of new music, as well as many collaborations with some of his favorite artists and friends in the scene. In 2018 he released his second full length album, Noctis Labyrinthus, on Sangoma Records.",
  "Kabayun's music intends to create an environment that stimulates the listener to release themselves from the trials of everyday life and confront their challenges through the trance dance experience. Channeling the spirit of the west, Kabayun pulls together many elements to create an intensely psychedelic experience that lifts the body and the mind to undiscovered plateaus...",
];

export function BioDialog({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bio-dialog w-[90vw] md:w-[85vw] lg:w-[80vw] max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl max-h-[85vh] overflow-y-auto">
        <DialogTitle className="sr-only">About Kabayun</DialogTitle>

        {/* Profile photo at top */}
        <div className="flex justify-center -mt-2 mb-6">
          <div className="relative w-24 h-24">
            <div className="profile-glow w-full h-full rounded-full overflow-hidden border-2 border-primary/30">
              <Image
                src="/22cc-Kabayun.jpg"
                alt="Kabayun"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Name */}
        <h2 aria-hidden="true" className="font-display text-2xl font-bold text-center mb-6 tracking-tight">
          About Kabayun
        </h2>

        {/* Bio paragraphs with staggered animation */}
        <div className="space-y-4 bio-text">
          {bioContent.map((paragraph, index) => (
            <p
              key={index}
              className="text-muted-foreground leading-relaxed text-sm md:text-base animate-fade-in-up"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
