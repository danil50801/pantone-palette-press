import { Reveal } from "@/components/Reveal";

export function Intro() {
  return (
    <section id="about" className="theme-ivory py-24 md:py-40">
      <div className="shell grid gap-12 md:grid-cols-12 md:gap-8">
        <Reveal className="md:col-span-3">
          <p className="kicker soft">01 — ABOUT</p>
        </Reveal>
        <div className="md:col-span-9">
          <Reveal as="h2" className="display-lg max-w-4xl">
            Місце для кави, розмов і моментів без поспіху.
          </Reveal>
          <Reveal delay={120} className="mt-10 max-w-xl md:mt-14">
            <p className="text-lg leading-relaxed md:text-xl">
              Pantone Coffee — це кав’ярня, крафтшоп і комфортний простір для роботи, зустрічей
              та відпочинку.
            </p>
          </Reveal>
          <Reveal delay={200} className="rule-t mt-12 flex flex-wrap gap-x-10 gap-y-3 pt-6">
            {["SPECIALTY COFFEE", "CRAFT SHOP", "SEASONAL", "PET FRIENDLY"].map((t) => (
              <span key={t} className="kicker soft">
                {t}
              </span>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
