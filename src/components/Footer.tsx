import { brand } from "@/data/site";

const links = [
  { label: "MENU", href: "#menu" },
  { label: "LOCATIONS", href: "#locations" },
  { label: "CRAFT SHOP", href: "#craft-shop" },
  { label: "INSTAGRAM", href: brand.instagram, external: true },
  { label: "CONTACT", href: "tel:+380936365967" },
];

export function Footer() {
  return (
    <footer className="theme-ink py-16 md:py-24">
      <div className="shell">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="display-lg">{brand.name}</p>
            <p className="kicker soft mt-4">{brand.tagline}</p>
          </div>
          <nav className="md:col-span-6 md:justify-self-end">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-3 md:text-right">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    {...(l.external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
                    className="kicker transition-opacity hover:opacity-60"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="rule-t mt-14 flex flex-wrap items-center justify-between gap-3 pt-6">
          <p className="kicker soft">{brand.city}</p>
          <p className="kicker soft">© PANTONE COFFEE</p>
        </div>
      </div>
    </footer>
  );
}
