import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Enginuity", href: "/enginuity" },
  { label: "Contact", href: "/contact" },
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
            <Link
              className={`transition ${
                isGreen ? "hover:text-emerald-800" : "hover:text-blue-700"
              }`}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
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
          Start a conversation
        </Link>
      </div>
    </nav>
  );
}
