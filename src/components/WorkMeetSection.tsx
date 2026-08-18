import { images } from "@/data/site";
import { Reveal } from "@/components/Reveal";

const features = ["WI-FI", "POWER", "WORK", "MEET", "PET FRIENDLY"];

export function WorkMeetSection() {
  return (
    <section className="theme-coffee relative py-24 md:py-36">
      <div className="shell">
        <Reveal>
          <p className="kicker soft">06 — STAY</p>
        </Reveal>

        <div className="mt-8 grid gap-10 md:grid-cols-12 md:items-end">
          <Reveal as="h2" className="label-xl md:col-span-7">
            STAY A WHILE.
          </Reveal>
          <Reveal delay={120} className="md:col-span-5">
            <p className="text-lg leading-relaxed md:text-xl">
              Приходь із ноутбуком, зустрічайся з друзями або просто залишайся ще на одну чашку.
            </p>
          </Reveal>
        </div>

        <Reveal delay={100} className="media-zoom mt-12 md:mt-16">
          <img
            src={images.interior}
            alt="Кава, ноутбук і нотатник на дерев’яному столі у м’якому денному світлі"
            width={1600}
            height={1008}
            loading="lazy"
            decoding="async"
            className="aspect-[3/2] w-full object-cover md:aspect-[21/9]"
          />
        </Reveal>

        <div className="rule-t mt-10 flex flex-wrap items-baseline gap-x-8 gap-y-4 pt-6 md:gap-x-16">
          {features.map((f, i) => (
            <Reveal key={f} delay={i * 60}>
              <span className="text-2xl font-medium tracking-tight md:text-4xl">{f}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
