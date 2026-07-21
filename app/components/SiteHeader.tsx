import Image from "next/image";
import Link from "next/link";

type NavItem = {
  children?: { label: string; href: string }[];
  href: string;
  label: string;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Axion Manufacturing", href: "/axion-manufacturing" },
      { label: "Axion Electrical", href: "/axion-electrical" },
      { label: "Axion AI", href: "/axion-ai" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Quote", href: "/contact" },
];

type SiteHeaderProps = {
  theme?: "light" | "green";
};

export function SiteHeader({ theme = "light" }: SiteHeaderProps) {
  const isGreen = theme === "green";

  return (
    <nav
      className={`sticky top-0 z-50 border-b backdrop-blur-xl ${
        isGreen
          ? "border-emerald-900/15 bg-white/80"
          : "border-slate-200/80 bg-white/90"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Axion Systems home"
        >
          <Image
            src="/logo-horizontal.png"
            alt="Axion Systems"
            width={120}
            height={60}
            priority
            className="h-9 w-auto"
          />
          <span className="text-sm font-semibold tracking-[0.18em] text-slate-950 sm:text-base">
            AXION SYSTEMS
          </span>
        </Link>

        <div className="hidden items-center gap-7 text-[0.82rem] font-medium text-slate-600 md:flex">
          {navItems.map((item) => (
            <div className="group relative" key={item.href}>
              <Link
                className={`transition ${
                  isGreen ? "hover:text-emerald-800" : "hover:text-blue-700"
                }`}
                href={item.href}
              >
                {item.label}
              </Link>
              {item.children ? (
                <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 pt-4 opacity-0 transition group-hover:visible group-hover:opacity-100">
                  <div className="grid gap-1 rounded-2xl border border-slate-200 bg-white p-2 text-slate-700 shadow-[0_20px_60px_rgba(15,23,42,0.15)]">
                    {item.children.map((child) => (
                      <Link
                        className="rounded-xl px-4 py-3 text-sm font-semibold transition hover:bg-blue-50 hover:text-blue-700"
                        href={child.href}
                        key={child.href}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <Link
          href="/contact"
          className={`hidden rounded-full px-4 py-2 text-[0.78rem] font-semibold shadow-sm transition sm:inline-flex ${
            isGreen
              ? "bg-emerald-950 text-white hover:bg-emerald-800"
              : "bg-slate-950 text-white hover:bg-blue-700"
          }`}
        >
          Request a quote
        </Link>
      </div>
    </nav>
  );
}
