import { useEffect, useState } from "react";
import { brand, images } from "@/data/site";

export function Hero() {
  const [offset, setOffset] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setOffset(Math.min(window.scrollY, 700) * 0.18));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="top" className="theme-ink relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={images.hero}
          alt="Інтер’єр Pantone Coffee: червоний диван і мурал PANTONE"
          width={1600}
          height={1200}
          fetchPriority="high"
          decoding="async"
          className="h-[112%] w-full object-cover transition-transform duration-[2200ms] ease-out"
          style={{
            transform: `translate3d(0, -${offset}px, 0) scale(${ready ? 1 : 1.08})`,
          }}
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-ink via-ink/70 to-transparent" />

      </div>

      <div className="shell relative flex min-h-[100svh] flex-col justify-end pt-28 pb-14 md:pb-20">
        <p
          className="kicker soft transition-all duration-1000"
          style={{ opacity: ready ? 1 : 0, transform: ready ? "none" : "translateY(14px)" }}
        >
          {brand.city}
        </p>

        <h1
          className="display-xl mt-5 transition-all duration-1000 delay-100"
          style={{ opacity: ready ? 1 : 0, transform: ready ? "none" : "translateY(24px)" }}
        >
          PANTONE°
        </h1>

        <p
          className="kicker mt-5 transition-all duration-1000 delay-200 md:mt-6"
          style={{ opacity: ready ? 1 : 0, transform: ready ? "none" : "translateY(18px)" }}
        >
          {brand.tagline}
        </p>

        <p
          className="mt-6 max-w-md text-lg leading-snug transition-all duration-1000 delay-300 md:mt-8 md:max-w-xl md:text-2xl"
          style={{ opacity: ready ? 1 : 0, transform: ready ? "none" : "translateY(18px)" }}
        >
          Кава, сезонні смаки та місце, куди хочеться повертатися.
        </p>

        <div
          className="mt-9 flex flex-col gap-3 transition-all duration-1000 delay-500 sm:flex-row md:mt-12"
          style={{ opacity: ready ? 1 : 0, transform: ready ? "none" : "translateY(18px)" }}
        >
          <a href="#menu" className="btn btn-solid">
            ПЕРЕГЛЯНУТИ МЕНЮ
          </a>
          <a href="#locations" className="btn btn-ghost">
            ЗНАЙТИ НАС
          </a>
        </div>

        <div className="mt-12 flex items-center gap-3 md:mt-16">
          <span className="scroll-hint block h-8 w-px bg-current" aria-hidden="true" />
          <span className="kicker soft">SCROLL</span>
        </div>
      </div>
    </section>
  );
}
