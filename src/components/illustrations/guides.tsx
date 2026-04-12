// Guide cover images — real photos from Unsplash (free, no attribution required for hotlinking)
// Each image is a relevant, premium tech/business photo

const images: Record<string, { src: string; alt: string }> = {
  "windows-licensing": {
    src: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=800&h=400&fit=crop&q=80",
    alt: "Windows licensing documentation",
  },
  "windows-desktop": {
    src: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=800&h=400&fit=crop&q=80",
    alt: "Windows desktop computer setup",
  },
  "windows-server": {
    src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop&q=80",
    alt: "Server room with rack servers",
  },
  "virtualization": {
    src: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop&q=80",
    alt: "Cloud virtualization infrastructure",
  },
  "cal": {
    src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=400&fit=crop&q=80",
    alt: "Business team accessing server resources",
  },
  "rds": {
    src: "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=800&h=400&fit=crop&q=80",
    alt: "Remote desktop connection setup",
  },
  "sql-server": {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&q=80",
    alt: "Database analytics dashboard",
  },
};

export function GuideImage({
  slug,
  className = "",
  size = "card",
}: {
  slug: string;
  className?: string;
  size?: "card" | "hero";
}) {
  const img = images[slug];
  if (!img) return null;

  return (
    <div className={`overflow-hidden bg-slate-100 ${className}`}>
      <img
        src={img.src}
        alt={img.alt}
        className={`w-full h-full object-cover ${size === "card" ? "group-hover:scale-105" : ""} transition-transform duration-500`}
        loading="lazy"
      />
    </div>
  );
}

// Legacy exports for backwards compatibility — now just renders GuideImage
function makeComponent(slug: string) {
  return function IllustrationComponent({ className = "" }: { className?: string }) {
    return <GuideImage slug={slug} className={className} size="hero" />;
  };
}

export const WindowsLicensingIllustration = makeComponent("windows-licensing");
export const WindowsDesktopIllustration = makeComponent("windows-desktop");
export const WindowsServerIllustration = makeComponent("windows-server");
export const VirtualizationIllustration = makeComponent("virtualization");
export const CALIllustration = makeComponent("cal");
export const RDSIllustration = makeComponent("rds");
export const SQLServerIllustration = makeComponent("sql-server");

export const guideIllustrations: Record<string, React.FC<{ className?: string }>> = {
  "windows-licensing": WindowsLicensingIllustration,
  "windows-desktop": WindowsDesktopIllustration,
  "windows-server": WindowsServerIllustration,
  "virtualization": VirtualizationIllustration,
  "cal": CALIllustration,
  "rds": RDSIllustration,
  "sql-server": SQLServerIllustration,
};
