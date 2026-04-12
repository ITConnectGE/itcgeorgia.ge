// Guide cover images — local files in /public/images/guides/

const images: Record<string, { src: string; alt: string }> = {
  "windows-licensing": {
    src: "/images/guides/windows-licensing.jpg",
    alt: "Windows ლიცენზირების მიმოხილვა",
  },
  "windows-desktop": {
    src: "/images/guides/windows-desktop.png",
    alt: "Windows 11 ლოგო",
  },
  "windows-server": {
    src: "/images/guides/windows-server.jpg",
    alt: "Windows Server Core ლიცენზირება",
  },
  "virtualization": {
    src: "/images/guides/virtualization.jpg",
    alt: "ვირტუალიზაციის ინფრასტრუქტურა",
  },
  "cal": {
    src: "/images/guides/cal.jpg",
    alt: "მომხმარებლების წვდომის მართვა",
  },
  "rds": {
    src: "/images/guides/rds.jpg",
    alt: "დისტანციური სამუშაო მაგიდა",
  },
  "sql-server": {
    src: "/images/guides/sql-server.jpg",
    alt: "SQL მონაცემთა ბაზა",
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
