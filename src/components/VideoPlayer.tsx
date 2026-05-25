"use client";

import { useState, useRef } from "react";
import { Volume2, VolumeX, Play } from "lucide-react";

interface VideoPlayerProps {
  src: string;
  className?: string;
  overlay?: boolean;
}

export default function VideoPlayer({
  src,
  className = "",
  overlay = true,
}: VideoPlayerProps) {
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
      )}
      <button
        onClick={toggleMute}
        className="absolute bottom-4 right-4 w-10 h-10 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-colors z-10"
        aria-label={muted ? "Ativar som" : "Desativar som"}
      >
        {muted ? (
          <VolumeX className="w-4 h-4" />
        ) : (
          <Volume2 className="w-4 h-4" />
        )}
      </button>
    </div>
  );
}
