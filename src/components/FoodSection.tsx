import { foodMenu, images } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function FoodSection() {
  return (
    <section className="theme-cream py-24 md:py-36">
      <div className="shell">
        <Reveal>
          <p className="kicker soft">03 — FOOD</p>
        </Reveal>

        <div className="mt-10 grid gap-12 md:grid-cols-12 md:gap-10">
          <Reveal className="md:col-span-3">
            <h3 className="display-md">{foodMenu.sweet.title}</h3>
            <ul className="mt-6 space-y-2 text-lg">
              {foodMenu.sweet.items.map((item) => (
                <li key={item} className="rule-b py-2">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100} className="media-zoom md:col-span-6 md:-mt-16">
            <img
              src={images.pastry}
              alt="Торт зі свіжими ягодами Pantone Coffee"
              width={1408}
              height={1008}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover md:aspect-[4/5]"
            />
          </Reveal>

          <Reveal delay={180} className="md:col-span-3 md:pt-40">
            <h3 className="display-md">{foodMenu.savoury.title}</h3>
            <ul className="mt-6 space-y-2 text-lg">
              {foodMenu.savoury.items.map((item) => (
                <li key={item} className="rule-b py-2">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
