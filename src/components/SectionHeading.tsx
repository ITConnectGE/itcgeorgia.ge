interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeading({
  label,
  title,
  description,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
      {label && (
        <span
          className={`inline-block text-xs font-semibold uppercase tracking-widest mb-3 ${
            light ? "text-brand-300" : "text-brand-600"
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight tracking-tight ${
          light ? "text-white" : "text-graphite-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-graphite-300" : "text-graphite-500"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
