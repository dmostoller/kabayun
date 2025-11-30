"use client";

export function CosmicBackground() {
  return (
    <div className="cosmic-bg" aria-hidden="true">
      {/* Dark mode cosmic gradient */}
      <div className="cosmic-gradient dark-only" />
      <div className="cosmic-noise dark-only" />
      {/* Light mode gradient */}
      <div className="cosmic-gradient-light light-only" />
    </div>
  );
}
