import { activeSeason, seasonalCampaigns } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

/** Season is driven entirely by data — swap `activeSeason` in src/data/site.ts. */
export function SeasonalSection() {
  const campaign = seasonalCampaigns[activeSeason];

  return (
    <section id="seasonal" className={cn(campaign.theme, "overflow-hidden py-24 md:py-36")}>
      <div className="shell">
        <Reveal className="flex flex-wrap items-baseline justify-between gap-4">
          <p className="kicker soft">04 — {campaign.label}</p>
          <span className="kicker border border-current px-3 py-1">SEASONAL MENU</span>
        </Reveal>

        <Reveal as="h2" delay={80} className="label-xl mt-8 max-w-5xl">
          {campaign.heading}
        </Reveal>

        <div className="mt-10 grid gap-10 md:mt-16 md:grid-cols-12 md:items-end">
          <Reveal delay={120} className="media-zoom md:col-span-8">
            <img
              src={campaign.image}
              alt={campaign.imageAlt}
              width={1600}
              height={1104}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover md:aspect-[16/10]"
            />
          </Reveal>

          <Reveal delay={200} className="md:col-span-4">
            <p className="display-md">{campaign.copy}</p>
            <ul className="mt-8">
              {campaign.highlights.map((h) => (
                <li key={h} className="rule-b py-3 text-2xl font-medium tracking-tight md:text-3xl">
                  {h}
                </li>
              ))}
            </ul>
            <p className="kicker soft mt-6">
              СЕЗОННА ПРОПОЗИЦІЯ · ДОСТУПНІСТЬ ПОЗИЦІЙ МОЖЕ ЗМІНЮВАТИСЬ
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
