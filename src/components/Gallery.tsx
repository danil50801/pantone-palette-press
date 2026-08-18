import { gallery } from "@/data/site";
import { Reveal } from "@/components/Reveal";

const spanBySize: Record<string, string> = {
  tall: "md:col-span-4 md:row-span-2 aspect-[3/4]",
  wide: "md:col-span-8 aspect-[16/10]",
  square: "md:col-span-4 aspect-square",
  large: "md:col-span-7 md:row-span-2 aspect-[4/5]",
  small: "md:col-span-5 aspect-[5/4]",
};

export function Gallery() {
  return (
    <section className="theme-ivory py-24 md:py-36">
      <div className="shell">
        <Reveal className="flex flex-wrap items-baseline justify-between gap-4">
          <p className="kicker soft">07 — GALLERY</p>
          <p className="kicker soft">PANTONE IN COLOUR</p>
        </Reveal>

        <div className="mt-10 grid auto-rows-auto grid-cols-1 gap-4 md:mt-14 md:grid-cols-12 md:gap-6">
          {gallery.map((item, i) => (
            <Reveal
              key={`${item.src}-${i}`}
              delay={(i % 3) * 80}
              className={`media-zoom ${spanBySize[item.size]}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
