import { craftShopCategories, images } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function CraftShopSection() {
  return (
    <section id="craft-shop" className="theme-moss py-24 md:py-36">
      <div className="shell grid gap-12 md:grid-cols-12 md:gap-10">
        <Reveal className="md:col-span-5">
          <p className="kicker soft">05 — CRAFT SHOP</p>
          <h2 className="label-xl mt-6">CRAFT SHOP</h2>
          <p className="display-md mt-8">Більше, ніж кава.</p>
          <p className="mt-6 max-w-md text-lg leading-relaxed">
            Добірка продуктів українських виробників, чаю, смаколиків, подарунків та речей, які
            хочеться забрати із собою.
          </p>
          <ul className="mt-10">
            {craftShopCategories.map((c) => (
              <li key={c} className="rule-b py-3 text-lg">
                {c}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="grid gap-6 md:col-span-7 md:grid-cols-2">
          <Reveal delay={100} className="media-zoom md:col-span-2">
            <img
              src={images.craftShop}
              alt="Чай, кераміка та сухоцвіти на зеленій поверхні"
              width={1408}
              height={1408}
              loading="lazy"
              decoding="async"
              className="aspect-square w-full object-cover md:aspect-[16/11]"
            />
          </Reveal>
          <Reveal delay={160} className="media-zoom">
            <img
              src={images.packaging}
              alt="Крафтова упаковка кави поруч із сухоцвітами"
              width={1200}
              height={1200}
              loading="lazy"
              decoding="async"
              className="aspect-square w-full object-cover"
            />
          </Reveal>
          <Reveal delay={220} className="media-zoom">
            <img
              src={images.matcha}
              alt="Крижаний матча-лате у високій склянці"
              width={1008}
              height={1312}
              loading="lazy"
              decoding="async"
              className="aspect-square w-full object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
