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
    <div className={centered ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      {label && (
        <p className="text-[12px] font-semibold uppercase tracking-wider text-navy-600 mb-2">
          {label}
        </p>
      )}
      <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-[15px] text-slate-500 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
