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
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
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
                <div className="invisible absolute left-1/2 top-full w-80 -translate-x-1/2 translate-y-2 pt-4 opacity-0 transition duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 p-2 text-white shadow-[0_24px_70px_rgba(15,23,42,0.22)]">
                    <div className="absolute inset-x-6 top-4 h-px bg-gradient-to-r from-transparent via-blue-300/60 to-transparent" />
                    {item.children.map((child) => (
                      <Link
                        className="group/item grid rounded-xl px-4 py-3 text-sm font-semibold transition hover:bg-white/10"
                        href={child.href}
                        key={child.href}
                      >
                        <span>{child.label}</span>
                        <span className="mt-1 text-xs font-medium text-slate-400 transition group-hover/item:text-blue-200">
                          View capabilities and projects
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="hidden items-center gap-4 sm:flex">
          <Link
            href="/contact"
            className={`inline-flex items-center gap-3 rounded-lg px-5 py-3 text-sm font-semibold shadow-sm transition ${
              isGreen
                ? "bg-emerald-950 text-white hover:bg-emerald-800"
                : "bg-slate-950 text-white hover:bg-blue-700"
            }`}
          >
            Innovate with us
            <span aria-hidden>›</span>
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-slate-500 underline decoration-slate-300 underline-offset-4 transition hover:text-slate-950"
          >
            Contact us
          </Link>
        </div>
      </div>
    </nav>
  );
}
