import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { CoffeeSection } from "@/components/CoffeeSection";
import { FoodSection } from "@/components/FoodSection";
import { SeasonalSection } from "@/components/SeasonalSection";
import { CraftShopSection } from "@/components/CraftShopSection";
import { WorkMeetSection } from "@/components/WorkMeetSection";
import { Gallery } from "@/components/Gallery";
import { Locations } from "@/components/Locations";
import { Weekends } from "@/components/Weekends";
import { InstagramSection } from "@/components/InstagramSection";
import { Footer } from "@/components/Footer";

const TITLE = "Pantone Coffee — Coffee · Craft · Community | Kyiv";
const DESCRIPTION =
  "Pantone Coffee — кав’ярня, крафтшоп та простір для роботи, зустрічей і сезонних смаків у Києві.";

const openingHours = [
  { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:30", closes: "21:00" },
  { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday", "Sunday"], opens: "09:00", closes: "21:00" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "uk_UA" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": ["CafeOrCoffeeShop", "LocalBusiness"],
              "@id": "#pantone-osokorky",
              name: "Pantone Coffee — Osokorky",
              description: DESCRIPTION,
              telephone: "+380936365967",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Княжий Затон, 14-В",
                addressLocality: "Київ",
                addressCountry: "UA",
              },
              openingHoursSpecification: openingHours,
              sameAs: ["https://www.instagram.com/pantone.coffee/"],
            },
            {
              "@type": ["CafeOrCoffeeShop", "LocalBusiness"],
              "@id": "#pantone-arsenalna",
              name: "Pantone Coffee — Arsenalna",
              description: DESCRIPTION,
              address: {
                "@type": "PostalAddress",
                streetAddress: "Микільський провулок, 1/25",
                addressLocality: "Київ",
                addressCountry: "UA",
              },
              openingHoursSpecification: openingHours,
              sameAs: ["https://www.instagram.com/pantone.coffee/"],
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="theme-ivory min-h-screen">
      <Navbar />
      <Hero />
      <Intro />
      <CoffeeSection />
      <FoodSection />
      <SeasonalSection />
      <CraftShopSection />
      <WorkMeetSection />
      <Gallery />
      <Locations />
      <Weekends />
      <InstagramSection />
      <Footer />
    </main>
  );
}
