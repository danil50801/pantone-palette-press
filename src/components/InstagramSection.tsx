import { brand, gallery } from "@/data/site";
import { Reveal } from "@/components/Reveal";

const strip = gallery.slice(0, 6);

export function InstagramSection() {
  return (
    <section id="instagram" className="theme-blush py-24 md:py-36">
      <div className="shell">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-8">
            <p className="kicker soft">10 — INSTAGRAM</p>
            <h2 className="display-lg mt-6">FOLLOW THE COLOUR.</h2>
          </Reveal>
          <Reveal delay={100} className="md:col-span-4 md:text-right">
            <p className="text-2xl tracking-tight md:text-3xl">{brand.instagramHandle}</p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 md:mt-16 md:grid-cols-6 md:gap-4">
          {strip.map((item, i) => (
            <Reveal key={`${item.src}-${i}`} delay={(i % 3) * 70} className="media-zoom">
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="aspect-square w-full object-cover"
              />
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-12">
          <a
            href={brand.instagram}
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn-ghost w-full sm:w-auto"
          >
            ВІДКРИТИ INSTAGRAM →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
