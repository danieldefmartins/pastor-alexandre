"use client";

import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: string;
  label?: string;
  light?: boolean;
  size?: "sm" | "md" | "lg";
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(targetDate: string): TimeLeft {
  const difference = new Date(targetDate).getTime() - new Date().getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function CountdownTimer({
  targetDate,
  label,
  light = false,
  size = "md",
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(
    calculateTimeLeft(targetDate)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { value: timeLeft.days, label: "Dias" },
    { value: timeLeft.hours, label: "Horas" },
    { value: timeLeft.minutes, label: "Min" },
    { value: timeLeft.seconds, label: "Seg" },
  ];

  const sizeClasses = {
    sm: { box: "px-3 py-2 rounded-lg", num: "text-xl sm:text-2xl", label: "text-[9px]" },
    md: { box: "px-4 sm:px-6 py-3 sm:py-5 rounded-xl", num: "text-3xl sm:text-5xl", label: "text-[10px] sm:text-xs" },
    lg: { box: "px-5 sm:px-8 py-4 sm:py-6 rounded-2xl", num: "text-4xl sm:text-6xl", label: "text-xs sm:text-sm" },
  };

  const s = sizeClasses[size];

  return (
    <div>
      {label && (
        <p
          className={`text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 ${
            light ? "text-accent" : "text-accent"
          }`}
        >
          {label}
        </p>
      )}
      <div className="flex gap-2 sm:gap-4">
        {units.map((unit) => (
          <div
            key={unit.label}
            className={`text-center ${s.box} ${
              light
                ? "bg-white/10 backdrop-blur-sm border border-white/10"
                : "bg-primary/5 border border-primary/10"
            }`}
          >
            <p
              className={`${s.num} font-bold tabular-nums ${
                light ? "text-white" : "text-primary"
              }`}
            >
              {String(unit.value).padStart(2, "0")}
            </p>
            <p
              className={`${s.label} uppercase tracking-wider mt-1 ${
                light ? "text-white/50" : "text-stone-500"
              }`}
            >
              {unit.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
