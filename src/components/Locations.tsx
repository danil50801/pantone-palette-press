import { locations } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export function Locations() {
  return (
    <section id="locations" className="theme-ink">
      <div className="shell py-24 md:py-32">
        <Reveal>
          <p className="kicker soft">08 — LOCATIONS</p>
        </Reveal>
        <Reveal delay={80} as="h2" className="display-lg mt-6">
          TWO PLACES.
          <br />
          ONE PANTONE.
        </Reveal>
      </div>

      <div className="grid md:grid-cols-2">
        {locations.map((loc, i) => (
          <Reveal
            key={loc.id}
            delay={i * 120}
            className={cn(loc.theme, "flex flex-col")}
          >
            <div className="media-zoom">
              <img
                src={loc.image}
                alt={loc.imageAlt}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover md:aspect-[5/4]"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between px-5 py-10 md:px-10 md:py-14">
              <div>
                <h3 className="label-xl text-[2.4rem] md:text-[3.4rem]">{loc.name}</h3>
                <p className="mt-4 text-lg md:text-xl">{loc.address}</p>

                <dl className="rule-t mt-8 space-y-2 pt-6">
                  {loc.hours.map((h) => (
                    <div key={h.days} className="flex items-baseline justify-between gap-6">
                      <dt className="kicker soft">{h.days}</dt>
                      <dd className="text-lg tracking-tight">{h.time}</dd>
                    </div>
                  ))}
                  {loc.phone ? (
                    <div className="flex items-baseline justify-between gap-6 pt-2">
                      <dt className="kicker soft">PHONE</dt>
                      <dd>
                        <a
                          href={`tel:${loc.phone.replace(/\s/g, "")}`}
                          className="text-lg tracking-tight underline-offset-4 hover:underline"
                        >
                          {loc.phone}
                        </a>
                      </dd>
                    </div>
                  ) : null}
                </dl>
              </div>

              <a
                href={loc.mapUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn-ghost mt-10 w-full md:w-auto md:self-start"
              >
                ВІДКРИТИ В GOOGLE MAPS
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
