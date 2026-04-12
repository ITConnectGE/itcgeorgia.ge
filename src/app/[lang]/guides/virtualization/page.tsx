import type { Metadata } from "next";
import Link from "next/link";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { RelatedPosts, getAllGuides } from "@/components/RelatedPosts";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  const isKa = lang === "ka";
  return {
    title: isKa
      ? "Windows Server ვირტუალიზაციის უფლებები — VM ლიცენზირება | ITC Georgia"
      : "Windows Server Virtualization Rights — VM Licensing | ITC Georgia",
    description: isKa
      ? "Standard vs Datacenter VM უფლებები. ლიცენზიების დასტაფვა, break-even ანალიზი, Hyper-V, VMware და KVM ლიცენზირების წესები."
      : "Standard vs Datacenter VM rights. License stacking, break-even analysis, Hyper-V, VMware, and KVM licensing rules.",
  };
}

/* ─── tiny helper for check-mark lists ─── */
function Check() {
  return (
    <svg
      className="w-4 h-4 text-azure-600 mt-0.5 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

export default async function VirtualizationPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const ka = lang === "ka";

  const relatedSlugs = ["windows-server", "rds", "cal"];
  const relatedPosts = getAllGuides(lang).filter((g) =>
    relatedSlugs.includes(g.slug)
  );

  return (
    <>
      {/* ── Hero ── */}
      <section className="py-16 sm:py-20 border-b border-slate-100 bg-gradient-to-b from-navy-50/40 to-white">
        <div className="mx-auto max-w-5xl px-5">
          <div className="max-w-3xl">
            <Link
              href={`/${lang}/guides/windows-licensing`}
              className="inline-flex items-center gap-1 text-xs font-medium text-azure-600 hover:text-azure-700 transition-colors mb-4"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              {ka ? "ლიცენზირების გზამკვლევი" : "Licensing Guide"}
            </Link>
            <p className="text-xs font-semibold uppercase tracking-wider text-azure-600 mb-2">
              {ka ? "ვირტუალიზაცია" : "Virtualization"}
            </p>
            <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">
              {ka
                ? "Windows Server — ვირტუალიზაციის უფლებები"
                : "Windows Server — Virtualization Rights"}
            </h1>
            <p className="mt-4 text-sm text-slate-500 leading-relaxed max-w-2xl">
              {ka
                ? "Windows Server ლიცენზია განსაზღვრავს რამდენი ვირტუალური მანქანის (VM) გაშვება შეგიძლიათ. Standard ედიშენი იძლევა 2 VM-ს, Datacenter — შეუზღუდავს. გაიგეთ როგორ მუშაობს დასტაფვა (stacking) და როდის ჯობია Datacenter-ზე გადასვლა."
                : "Your Windows Server license determines how many virtual machines (VMs) you can run. Standard edition allows 2 VMs, Datacenter allows unlimited. Learn how stacking works and when to switch to Datacenter."}
            </p>
          </div>
        </div>
      </section>

      {/* ── VM Rights by Edition ── */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            {ka ? "VM უფლებები ედიშენების მიხედვით" : "VM Rights by Edition"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="text-sm font-semibold text-slate-900 mb-2">
                Standard
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed mb-3">
                {ka
                  ? "თითოეული Standard ლიცენზია იძლევა 2 ვირტუალური მანქანის (OSE) გაშვების უფლებას. ფიზიკურ ჰოსტზე უნდა გაშვებული იყოს მხოლოდ Hyper-V როლი — სხვა სამუშაო დატვირთვები დაუშვებელია ჰოსტზე."
                  : "Each Standard license permits running 2 virtual machines (OSEs). The physical host must run only the Hyper-V role — no other workloads are allowed on the host itself."}
              </p>
              <ul className="space-y-2">
                {(ka
                  ? [
                      "2 VM თითო ლიცენზიაზე",
                      "ფიზიკური ჰოსტი — მხოლოდ Hyper-V როლი",
                      "მეტი VM-ისთვის — ლიცენზიების დასტაფვა",
                    ]
                  : [
                      "2 VMs per license",
                      "Physical host — Hyper-V role only",
                      "For more VMs — license stacking",
                    ]
                ).map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                    <Check />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="text-sm font-semibold text-slate-900 mb-2">
                Datacenter
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed mb-3">
                {ka
                  ? "Datacenter ედიშენი იძლევა შეუზღუდავი რაოდენობის ვირტუალური მანქანების გაშვების უფლებას ერთ ფიზიკურ სერვერზე. იდეალურია მაღალი სიმკვრივის ვირტუალიზაციისთვის."
                  : "Datacenter edition permits running an unlimited number of virtual machines on a single physical server. Ideal for high-density virtualization scenarios."}
              </p>
              <ul className="space-y-2">
                {(ka
                  ? [
                      "შეუზღუდავი VM-ები",
                      "ყველა Datacenter ფუნქცია (Shielded VMs, SDN, S2D)",
                      "ყველაზე ეფექტური 13+ VM სცენარებისთვის",
                    ]
                  : [
                      "Unlimited VMs",
                      "All Datacenter features (Shielded VMs, SDN, S2D)",
                      "Most cost-effective for 13+ VM scenarios",
                    ]
                ).map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                    <Check />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stacking */}
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            {ka ? "Standard ლიცენზიების დასტაფვა (Stacking)" : "Standard License Stacking"}
          </h3>
          <div className="bg-white border border-slate-200 rounded-xl p-6 mb-10">
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              {ka
                ? "თუ Standard ედიშენით 2-ზე მეტი VM გჭირდებათ, შეგიძლიათ დამატებითი Standard ლიცენზიების შეძენა იმავე ფიზიკურ სერვერზე. ყოველი დამატებითი ლიცენზია ამატებს 2 VM-ს."
                : "If you need more than 2 VMs with Standard edition, you can purchase additional Standard licenses for the same physical server. Each additional license adds 2 more VMs."}
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[450px] text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-3 px-4 font-medium text-slate-400">
                      {ka ? "Standard ლიცენზიები" : "Standard Licenses"}
                    </th>
                    <th className="text-center py-3 px-4 font-medium text-slate-400">
                      {ka ? "ნებადართული VM-ები" : "Permitted VMs"}
                    </th>
                    <th className="text-center py-3 px-4 font-medium text-slate-400">
                      {ka ? "სავარაუდო ღირებულება" : "Approx. Cost"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { lic: "1x Standard", vms: "2 VMs", cost: "~$1,070" },
                    { lic: "2x Standard", vms: "4 VMs", cost: "~$2,140" },
                    { lic: "3x Standard", vms: "6 VMs", cost: "~$3,210" },
                    { lic: "4x Standard", vms: "8 VMs", cost: "~$4,280" },
                    { lic: "6x Standard", vms: "12 VMs", cost: "~$6,420" },
                    { lic: "7x Standard", vms: "14 VMs", cost: "~$7,490" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-slate-100">
                      <td className="py-3 px-4 font-medium text-slate-700">{row.lic}</td>
                      <td className="py-3 px-4 text-center text-slate-500">{row.vms}</td>
                      <td className="py-3 px-4 text-center text-slate-500">{row.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-4 bg-slate-50 rounded-lg">
              <p className="text-sm font-medium text-slate-900">
                {ka ? "მაგალითი: 6 VM საჭიროებს 3x Standard ლიცენზიას" : "Example: 6 VMs require 3x Standard licenses"}
              </p>
              <p className="text-sm text-slate-600 mt-1">
                {ka
                  ? "3 ლიცენზია × 2 VM = 6 VM. ყოველი ლიცენზია უნდა მოიცავდეს სერვერის ყველა ფიზიკურ ბირთვს."
                  : "3 licenses × 2 VMs = 6 VMs. Each license must cover all physical cores of the server."}
              </p>
            </div>
          </div>

          {/* Break-even analysis */}
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            {ka ? "Break-Even ანალიზი: Standard vs Datacenter" : "Break-Even Analysis: Standard vs Datacenter"}
          </h3>
          <div className="bg-white border border-slate-200 rounded-xl p-6 mb-10">
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              {ka
                ? "Datacenter ლიცენზია ღირს დაახლოებით ~$6,200 (16-core). Standard ლიცენზია ღირს ~$1,070. რადგან ყოველი Standard იძლევა 2 VM-ს, break-even წერტილი არის დაახლოებით 13 VM — ამ რაოდენობის შემდეგ Datacenter უფრო ეფექტურია."
                : "A Datacenter license costs approximately ~$6,200 (16-core). A Standard license costs ~$1,070. Since each Standard allows 2 VMs, the break-even point is approximately 13 VMs — beyond that count, Datacenter becomes more cost-effective."}
            </p>
            <div className="flex items-start gap-3">
              <span className="bg-navy-100 text-navy-700 text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">$</span>
              <p className="text-sm text-slate-600">
                {ka
                  ? "13 VM × Standard = 7x ლიცენზია = ~$7,490 > Datacenter ~$6,200. ამიტომ 13+ VM-ით Datacenter ედიშენი ჯობია."
                  : "13 VMs × Standard = 7x licenses = ~$7,490 > Datacenter ~$6,200. Therefore, at 13+ VMs, Datacenter edition is the better choice."}
              </p>
            </div>
          </div>

          {/* Hypervisor rules */}
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            {ka ? "ჰიპერვიზორის წესები" : "Hypervisor Rules"}
          </h3>
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              {ka
                ? "Windows Server ვირტუალიზაციის ლიცენზირების წესები ვრცელდება ყველა ჰიპერვიზორზე — არა მხოლოდ Hyper-V-ზე. VMware ESXi, KVM, Xen და სხვა ჰიპერვიზორების გამოყენებისას იგივე VM ლიმიტები მოქმედებს."
                : "Windows Server virtualization licensing rules apply to ALL hypervisors — not just Hyper-V. When using VMware ESXi, KVM, Xen, or other hypervisors, the same VM limits apply."}
            </p>
            <ul className="space-y-2">
              {(ka
                ? [
                    "Hyper-V, VMware ESXi, KVM — ყველაზე ვრცელდება ერთნაირი VM ლიმიტები",
                    "VMware-ს გამოყენებისას Hyper-V ჰოსტის უფასო უფლება არ მოქმედებს",
                    "ფიზიკური ჰოსტის Hyper-V-only შეზღუდვა ეხება მხოლოდ Hyper-V გარემოს",
                    "VM-ების რაოდენობა განისაზღვრება ლიცენზიით, არა ჰიპერვიზორით",
                  ]
                : [
                    "Hyper-V, VMware ESXi, KVM — same VM limits apply to all",
                    "When using VMware, the free Hyper-V host right does not apply",
                    "The Hyper-V-only host restriction applies only to Hyper-V environments",
                    "VM count is determined by the license, not the hypervisor",
                  ]
              ).map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                  <Check />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Related Posts ── */}
      <RelatedPosts posts={relatedPosts} lang={lang} />
    </>
  );
}
