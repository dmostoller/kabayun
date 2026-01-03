"use client";

import { DotPattern } from "@/components/ui/dot-pattern";

export function CosmicBackground() {
  return (
    <div className="cosmic-bg" aria-hidden="true">
      {/* Dark mode cosmic gradient */}
      <div className="cosmic-gradient dark-only" />
      <div className="cosmic-noise dark-only" />
      {/* Light mode gradient */}
      <div className="cosmic-gradient-light light-only" />
      {/* Dot pattern with glow effect - visible at edges, hidden in center */}
      <DotPattern
        glow
        cr={1.5}
        width={24}
        height={24}
        className="text-primary/40 dark-only [mask-image:radial-gradient(ellipse_at_center,transparent_30%,white_70%)]"
      />
      <DotPattern
        glow
        cr={1.5}
        width={24}
        height={24}
        className="text-primary/25 light-only [mask-image:radial-gradient(ellipse_at_center,transparent_30%,white_70%)]"
      />
    </div>
  );
}
