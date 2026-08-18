import { useState } from "react";
import { coffeeMenu, images } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export function CoffeeSection() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="menu" className="theme-red py-24 md:py-36">
      <div className="shell">
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="kicker soft">02 — MENU</p>
            <h2 className="label-xl mt-6">COFFEE</h2>
            <p className="mt-8 max-w-sm text-lg leading-relaxed md:text-xl">
              Від класики на еспресо до фільтру, cold brew та сезонних експериментів.
            </p>
          </Reveal>

          <Reveal delay={120} className="media-zoom relative md:col-span-7">
            <img
              src={images.coffee}
              alt="Лате в червоній чашці Pantone Coffee на столику тераси"
              width={1200}
              height={1504}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover md:aspect-[5/4]"
            />
          </Reveal>
        </div>

        <div className="mt-16 md:mt-24">
          {coffeeMenu.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 60}>
              <div
                onMouseEnter={() => setActive(cat.id)}
                onMouseLeave={() => setActive(null)}
                className="rule-b group relative grid grid-cols-1 items-baseline gap-2 py-6 md:grid-cols-12 md:gap-6 md:py-8"
              >
                <span className="kicker soft md:col-span-1">0{i + 1}</span>
                <h3
                  className={cn(
                    "label-xl text-[2.1rem] transition-transform duration-500 md:col-span-5 md:text-[3.2rem]",
                    active === cat.id && "md:translate-x-3",
                  )}
                >
                  {cat.title}
                </h3>
                <p className="soft md:col-span-6 md:pt-2 md:text-right">{cat.note}</p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={120}>
            <p className="kicker soft mt-8">
              АКТУАЛЬНІ ЦІНИ ТА ПОВНЕ МЕНЮ — НА МІСЦІ Й В INSTAGRAM
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
