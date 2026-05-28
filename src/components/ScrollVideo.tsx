"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Volume2, VolumeX, RotateCcw } from "lucide-react";

interface ScrollVideoProps {
  src: string;
  className?: string;
  children?: React.ReactNode;
  startMuted?: boolean;
}

export default function ScrollVideo({
  src,
  className = "",
  children,
  startMuted = true,
}: ScrollVideoProps) {
  const [muted, setMuted] = useState(startMuted);
  const [ended, setEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play().catch(() => {
              if (videoRef.current) {
                videoRef.current.muted = true;
                setMuted(true);
                videoRef.current.play();
              }
            });
          } else {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      const newMuted = !muted;
      videoRef.current.muted = newMuted;
      setMuted(newMuted);
    }
  };

  const replay = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setEnded(false);
    }
  }, []);

  const handleEnded = () => {
    setEnded(true);
  };

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        muted={muted}
        loop={false}
        playsInline
        preload="metadata"
        onEnded={handleEnded}
        className="w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Overlay content */}
      {children && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {children}
        </div>
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

      {/* Ended overlay with replay */}
      {ended && (
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-10">
          <button
            onClick={replay}
            className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            aria-label="Assistir novamente"
          >
            <RotateCcw className="w-7 h-7" />
          </button>
        </div>
      )}

      {/* Volume toggle */}
      <button
        onClick={toggleMute}
        className="absolute bottom-4 right-4 w-11 h-11 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white/70 hover:bg-black/70 hover:text-white transition-all z-20"
        aria-label={muted ? "Ativar som" : "Desativar som"}
      >
        {muted ? (
          <VolumeX className="w-5 h-5" />
        ) : (
          <Volume2 className="w-5 h-5" />
        )}
      </button>
    </div>
  );
}
