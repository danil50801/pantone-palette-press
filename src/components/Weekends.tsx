import { upcomingEvents, weekendBlocks } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function Weekends() {
  return (
    <section className="theme-ink py-24 md:py-36">
      <div className="shell">
        <Reveal>
          <p className="kicker soft">09 — WEEKENDS</p>
        </Reveal>
        <Reveal as="h2" delay={80} className="display-lg mt-6 max-w-4xl">
          PANTONE WEEKENDS
        </Reveal>
        <Reveal delay={140}>
          <p className="kicker soft mt-6">POP-UPS · COLLABORATIONS · SPECIALS</p>
        </Reveal>

        <div className="mt-14 grid gap-px md:mt-20 md:grid-cols-3">
          {weekendBlocks.map((b, i) => (
            <Reveal key={b.label} delay={i * 100} className="rule-t pt-6 md:pr-8">
              <p className="kicker soft">{b.label}</p>
              <h3 className="display-md mt-6">{b.title}</h3>
              <p className="soft mt-4 max-w-xs leading-relaxed">{b.copy}</p>
            </Reveal>
          ))}
        </div>

        {upcomingEvents.length > 0 ? (
          <ul className="mt-16 space-y-4">
            {upcomingEvents.map((e) => (
              <li key={e.title} className="rule-b flex justify-between gap-6 py-4">
                <span className="kicker soft">{e.date}</span>
                <span className="text-xl">{e.title}</span>
              </li>
            ))}
          </ul>
        ) : (
          <Reveal delay={120}>
            <p className="kicker soft mt-14">
              АНОНСИ НАЙБЛИЖЧИХ ПОДІЙ — В INSTAGRAM
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
