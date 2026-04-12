import Link from "next/link";

type Post = {
  href: string;
  title: string;
  description: string;
  tag: string;
  slug?: string;
};

export function RelatedPosts({
  posts,
  lang,
  title,
}: {
  posts: Post[];
  lang: string;
  title?: string;
}) {
  return (
    <section className="py-12 sm:py-16 border-t border-slate-100 bg-slate-50">
      <div className="mx-auto max-w-5xl px-5">
        <h2 className="text-sm font-semibold text-slate-900 mb-4">
          {title || (lang === "ka" ? "დაკავშირებული სტატიები" : "Related Articles")}
        </h2>
        <div className="border border-slate-200 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <tbody>
              {posts.map((post, i) => (
                <tr key={post.href} className={`hover:bg-white transition-colors ${i < posts.length - 1 ? "border-b border-slate-100" : ""}`}>
                  <td className="py-3 px-4 w-28">
                    <span className="inline-block text-[10px] font-medium text-azure-600 bg-azure-50 px-2 py-0.5 rounded-full">
                      {post.tag}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <Link href={post.href} className="text-sm font-medium text-slate-900 hover:text-azure-600 transition-colors">
                      {post.title}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function getAllGuides(lang: string) {
  const ka = lang === "ka";
  const p = `/${lang}/guides`;
  return [
    {
      slug: "windows-licensing",
      href: `${p}/windows-licensing`,
      title: ka ? "Windows ლიცენზირების მიმოხილვა" : "Windows Licensing Overview",
      description: ka ? "Windows Desktop, Server, CAL, RDS და SQL Server ლიცენზირების სრული გზამკვლევი." : "Complete guide to Windows Desktop, Server, CAL, RDS and SQL Server licensing.",
      tag: "Windows",
    },
    {
      slug: "windows-desktop",
      href: `${p}/windows-desktop`,
      title: ka ? "Windows Desktop ლიცენზირება" : "Windows Desktop Licensing",
      description: ka ? "Pro vs Enterprise vs Education, OEM vs Retail vs Volume Licensing." : "Pro vs Enterprise vs Education, OEM vs Retail vs Volume Licensing.",
      tag: "Windows",
    },
    {
      slug: "windows-server",
      href: `${p}/windows-server`,
      title: ka ? "Windows Server Core ლიცენზირება" : "Windows Server Core Licensing",
      description: ka ? "Core-based მოდელი, Standard vs Datacenter, გამოთვლის მაგალითები." : "Core-based model, Standard vs Datacenter, calculation examples.",
      tag: "Windows Server",
    },
    {
      slug: "virtualization",
      href: `${p}/virtualization`,
      title: ka ? "ვირტუალიზაციის უფლებები" : "Virtualization Rights",
      description: ka ? "Standard vs Datacenter VM უფლებები, Hyper-V, VMware, break-even ანალიზი." : "Standard vs Datacenter VM rights, Hyper-V, VMware, break-even analysis.",
      tag: "Windows Server",
    },
    {
      slug: "cal",
      href: `${p}/cal`,
      title: ka ? "CAL — Client Access License" : "CAL — Client Access License",
      description: ka ? "User CAL vs Device CAL, როდის რომელი გამოვიყენოთ." : "User CAL vs Device CAL, when to use which.",
      tag: "Licensing",
    },
    {
      slug: "rds",
      href: `${p}/rds`,
      title: ka ? "RDS — Remote Desktop Services ლიცენზირება" : "RDS — Remote Desktop Services Licensing",
      description: ka ? "RDS CAL ტიპები, Farm ლიცენზირება, External Connector, გამოთვლის მაგალითები." : "RDS CAL types, Farm licensing, External Connector, calculation examples.",
      tag: "RDS",
    },
    {
      slug: "sql-server",
      href: `${p}/sql-server`,
      title: ka ? "SQL Server ლიცენზირება" : "SQL Server Licensing",
      description: ka ? "Core-based vs Server+CAL მოდელები, Standard vs Enterprise." : "Core-based vs Server+CAL models, Standard vs Enterprise.",
      tag: "SQL Server",
    },
  ];
}
