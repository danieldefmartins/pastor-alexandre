interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  light?: boolean;
  center?: boolean;
}

export default function SectionHeading({
  label,
  title,
  description,
  light = false,
  center = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 sm:mb-14 ${center ? "text-center" : ""}`}>
      {label && (
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 text-accent">
          {label}
        </p>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-display ${
          light ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base sm:text-lg max-w-2xl leading-relaxed ${
            center ? "mx-auto" : ""
          } ${light ? "text-white/70" : "text-stone-500"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
