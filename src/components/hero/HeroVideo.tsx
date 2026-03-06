'use client';

import { useEffect, useRef, useState } from 'react';

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.addEventListener('canplaythrough', () => setIsLoaded(true));
    video.play().catch(() => {
      // Autoplay blocked — that's fine, canvas will show instead
    });

    return () => {
      video.removeEventListener('canplaythrough', () => setIsLoaded(true));
    };
  }, []);

  return (
    <div
      className={`absolute inset-0 transition-opacity duration-1000 ${
        isLoaded ? 'opacity-30' : 'opacity-0'
      }`}
    >
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero-video.mp4"
        muted
        loop
        playsInline
        preload="auto"
      />
      {/* Gradient overlay to keep text readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white" />
    </div>
  );
}
