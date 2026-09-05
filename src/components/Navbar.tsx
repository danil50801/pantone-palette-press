import { useEffect, useState } from "react";
import { brand, nav } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled || open ? "bg-cream/95 text-ink backdrop-blur-sm" : "text-cream",
      )}
    >

      <div className="shell flex h-16 items-center justify-between md:h-20">
        <a
          href="#top"
          className="font-display text-xl leading-none tracking-tight md:text-2xl"
          onClick={() => setOpen(false)}
        >
          {brand.name}
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="kicker relative py-1 transition-opacity hover:opacity-60"
            >
              {item.label}
            </a>
          ))}
          <a
            href={brand.instagram}
            target="_blank"
            rel="noreferrer noopener"
            className="kicker py-1 transition-opacity hover:opacity-60"
          >
            INSTAGRAM
          </a>
          <a href="#locations" className="btn btn-ghost min-h-10 px-5 py-2 text-[0.65rem]">
            ЗНАЙТИ НАС
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Закрити меню" : "Відкрити меню"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 flex h-11 w-11 flex-col items-center justify-center gap-[6px] lg:hidden"
        >
          <span
            className={cn(
              "block h-px w-6 bg-current transition-transform duration-300",
              open && "translate-y-[3.5px] rotate-45",
            )}
          />
          <span
            className={cn(
              "block h-px w-6 bg-current transition-transform duration-300",
              open && "-translate-y-[3.5px] -rotate-45",
            )}
          />
        </button>
      </div>
    </header>

      <div
        className={cn(
          "theme-cream fixed inset-x-0 top-16 bottom-0 z-40 overflow-hidden transition-[opacity,transform] duration-500 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none -translate-y-2 opacity-0",
        )}
      >
        <div className="shell flex h-full flex-col justify-between py-10">
          <nav className="flex flex-col gap-1">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="label-xl rule-b py-3 text-[2.5rem]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={brand.instagram}
              target="_blank"
              rel="noreferrer noopener"
              onClick={() => setOpen(false)}
              className="label-xl rule-b py-3 text-[2.5rem]"
            >
              INSTAGRAM
            </a>
          </nav>
          <div>
            <a
              href="#locations"
              onClick={() => setOpen(false)}
              className="btn btn-ghost w-full"
            >
              ЗНАЙТИ НАС
            </a>
            <p className="kicker soft mt-6">{brand.city}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
