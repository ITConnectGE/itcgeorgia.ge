// Guide cover images — real photos from Unsplash (free, no attribution required for hotlinking)
// Each image is a relevant, premium tech/business photo

const images: Record<string, { src: string; alt: string }> = {
  "windows-licensing": {
    src: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=800&h=400&fit=crop&q=80",
    alt: "Windows ლიცენზირების დოკუმენტაცია",
  },
  "windows-desktop": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Windows_11_logo.svg/800px-Windows_11_logo.svg.png",
    alt: "Windows 11 ლოგო",
  },
  "windows-server": {
    src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop&q=80",
    alt: "სერვერ რუმი",
  },
  "virtualization": {
    src: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop&q=80",
    alt: "ვირტუალიზაციის ინფრასტრუქტურა",
  },
  "cal": {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=400&fit=crop&q=80",
    alt: "მომხმარებლების წვდომის მართვა",
  },
  "rds": {
    src: "https://images.unsplash.com/photo-1616587894289-86480e533129?w=800&h=400&fit=crop&q=80",
    alt: "დისტანციური სამუშაო მაგიდა",
  },
  "sql-server": {
    src: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&h=400&fit=crop&q=80",
    alt: "SQL მონაცემთა ბაზის კოდი",
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
