interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeading({
  label,
  title,
  description,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center max-w-xl mx-auto" : "max-w-xl"}>
      {label && (
        <p className="text-xs font-semibold uppercase tracking-wider text-azure-600 mb-2">
          {label}
        </p>
      )}
      <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 leading-snug">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm text-slate-500 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
