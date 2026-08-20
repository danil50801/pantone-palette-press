/**
 * PANTONE COFFEE — content layer.
 *
 * All editable copy, menu structure, locations, seasonal campaigns and gallery
 * entries live here so the site can be updated without touching components.
 *
 * NOTE ON ACCURACY: nothing here is invented. Prices, events, reviews and
 * staff are intentionally absent. Placeholders are marked explicitly.
 */

// Real Pantone Coffee photographs — served from /public with root-relative URLs
// so they resolve identically in preview and in production deployments.
const aestheticCupImg = "/Aestetic%20cup.png";
const coffeeImg = "/Coffee.png";
const sweetsImg = "/Sweets.png";
const iceCreamImg = "/Ice%20cream.png";
const lemonadeImg = "/" + encodeURIComponent("Лимонадimages.jpg");
const insideImg = "/Inside.png";
const hubImg = "/Hub.png";
const osokorkyImg = "/Osokorky.png";
const arsenalnaImg = "/Arsenalna.png";

// Complementary editorial imagery (generated to match the brand palette —
// not photographs of the actual Pantone Coffee locations).
import genCraftImg from "@/assets/gen-craft.jpg";
import genPastryImg from "@/assets/gen-pastry.jpg";

export const images = {
  hero: insideImg,
  coffee: aestheticCupImg,
  iceCream: iceCreamImg,
  craftShop: coffeeImg,
  pastry: sweetsImg,
  interior: osokorkyImg,
  matcha: lemonadeImg,
  packaging: genCraftImg,
  osokorky: osokorkyImg,
  arsenalna: arsenalnaImg,
};




export const brand = {
  name: "PANTONE°",
  tagline: "COFFEE · CRAFT · COMMUNITY",
  city: "KYIV · UKRAINE",
  instagram: "https://www.instagram.com/pantone.coffee/",
  instagramHandle: "@pantone.coffee",
};

export const nav = [
  { label: "MENU", href: "#menu" },
  { label: "ABOUT", href: "#about" },
  { label: "LOCATIONS", href: "#locations" },
  { label: "CRAFT SHOP", href: "#craft-shop" },
] as const;

/* ---------------- Coffee menu (categories only — prices unverified) ------- */

export type MenuCategory = {
  id: string;
  title: string;
  note: string;
};

export const coffeeMenu: MenuCategory[] = [
  { id: "espresso", title: "ESPRESSO", note: "Еспресо, американо, капучино, лате, флет вайт" },
  { id: "filter", title: "FILTER", note: "Альтернатива на день — м’яко, чисто, ароматно" },
  { id: "cold-brew", title: "COLD BREW", note: "Холодне заварювання, тонік-версії" },
  { id: "matcha", title: "MATCHA", note: "Гарячий і крижаний матча-лате" },
  { id: "seasonal", title: "SEASONAL", note: "Смаки, які змінюються разом із сезоном" },
];

export const foodMenu = {
  sweet: {
    title: "SWEET",
    items: ["круасани", "торти", "тарти", "макарони"],
  },
  savoury: {
    title: "SAVOURY",
    items: ["сендвічі", "киш", "випічка"],
  },
};

/* ---------------- Seasonal campaign system -------------------------------- */

export type Season = "summer" | "autumn" | "winter" | "spring";

export type SeasonalCampaign = {
  key: Season;
  label: string; // editorial English label
  heading: string;
  copy: string;
  highlights: string[];
  image: string;
  imageAlt: string;
  /** switches the section palette */
  theme: "theme-blush" | "theme-red" | "theme-ink" | "theme-moss";
};

export const seasonalCampaigns: Record<Season, SeasonalCampaign> = {
  summer: {
    key: "summer",
    label: "SUMMER",
    heading: "SUMMER AT PANTONE",
    copy: "Літо смакує краще холодним.",
    highlights: ["ICE CREAM", "COLD BREW", "MATCHA", "LEMONADES"],
    image: iceCreamImg,
    imageAlt: "Морозиво Pantone Coffee — літня сезонна пропозиція",

    theme: "theme-blush",
  },
  autumn: {
    key: "autumn",
    label: "AUTUMN",
    heading: "AUTUMN AT PANTONE",
    copy: "Тепліші смаки для коротших днів.",
    highlights: ["SEASONAL DRINKS", "DESSERTS"],
    image: sweetsImg,
    imageAlt: "Торт із свіжими ягодами Pantone Coffee",
    theme: "theme-red",
  },
  winter: {
    key: "winter",
    label: "WINTER",
    heading: "WINTER AT PANTONE",
    copy: "Гаряче, повільно, затишно.",
    highlights: ["HOT DRINKS", "FESTIVE SPECIALS"],
    image: coffeeImg,
    imageAlt: "Лате в червоній чашці на літній терасі",
    theme: "theme-ink",
  },
  spring: {
    key: "spring",
    label: "SPRING",
    heading: "SPRING AT PANTONE",
    copy: "Свіжий старт у чашці.",
    highlights: ["FRESH SEASONAL DRINKS"],
    image: coffeeImg,
    imageAlt: "Лате в червоній чашці з латте-артом",
    theme: "theme-moss",
  },
};

/** Change this single value to switch the public seasonal campaign. */
export const activeSeason: Season = "summer";

/* ---------------- Locations (verified data only) -------------------------- */

export type Location = {
  id: string;
  name: string;
  address: string;
  phone?: string;
  hours: { days: string; time: string }[];
  mapUrl: string;
  image: string;
  imageAlt: string;
  theme: "theme-ink" | "theme-cream";
};

export const locations: Location[] = [
  {
    id: "osokorky",
    name: "OSOKORKY",
    address: "Княжий Затон, 14-В, Київ",
    phone: "+380 93 636 59 67",
    hours: [
      { days: "Пн–Пт", time: "08:30–21:00" },
      { days: "Сб–Нд", time: "09:00–21:00" },
    ],
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent("Pantone Coffee, Княжий Затон 14-В, Київ"),
    image: osokorkyImg,
    imageAlt: "Барна стійка та зал кав’ярні Pantone Coffee на Осокорках",
    theme: "theme-ink",
  },
  {
    id: "arsenalna",
    name: "ARSENALNA",
    address: "Микільський провулок, 1/25, Київ",
    hours: [
      { days: "Пн–Пт", time: "08:30–21:00" },
      { days: "Сб–Нд", time: "09:00–21:00" },
    ],
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent("Pantone Coffee, Микільський провулок 1/25, Київ"),
    image: arsenalnaImg,
    imageAlt: "Вхід до кав’ярні Pantone Coffee біля Арсенальної",
    theme: "theme-cream",
  },
];

/* ---------------- Weekends (brand concept — no invented events) ----------- */

export type WeekendBlock = {
  label: string;
  title: string;
  copy: string;
};

export const weekendBlocks: WeekendBlock[] = [
  {
    label: "POP-UP",
    title: "Гості на вихідні",
    copy: "Локальні бренди та маркети, що з’являються у просторі на кілька днів.",
  },
  {
    label: "COLLABORATION",
    title: "Спільні смаки",
    copy: "Колаборації з українськими виробниками, обсмажувачами та кондитерами.",
  },
  {
    label: "SPECIAL MENU",
    title: "Тільки цими днями",
    copy: "Обмежені позиції, які існують лише один вікенд.",
  },
];

/** Verified upcoming events only. Empty by design. */
export const upcomingEvents: { date: string; title: string }[] = [];

/* ---------------- Craft shop ---------------------------------------------- */

export const craftShopCategories = [
  "чай і кава додому",
  "кераміка та посуд",
  "смаколики",
  "подарунки",
  "речі українських майстрів",
];

/* ---------------- Gallery (editorial masonry) ----------------------------- */

export type GalleryItem = {
  src: string;
  alt: string;
  /** layout hint for the masonry grid */
  size: "tall" | "wide" | "square" | "large" | "small";
};

export const gallery: GalleryItem[] = [
  { src: coffeeImg, alt: "Кава Pantone Coffee у фірмовій чашці", size: "tall" },
  { src: hubImg, alt: "Простір Pantone Coffee: столики, рослини та світло", size: "wide" },
  { src: aestheticCupImg, alt: "Стакан Pantone Coffee — естетичний кадр", size: "small" },
  { src: insideImg, alt: "Інтер’єр кав’ярні Pantone Coffee", size: "large" },
  { src: sweetsImg, alt: "Десерти та випічка Pantone Coffee", size: "square" },
  { src: arsenalnaImg, alt: "Кав’ярня Pantone Coffee біля Арсенальної", size: "wide" },
  { src: lemonadeImg, alt: "Лимонад Pantone Coffee", size: "square" },
  { src: genPastryImg, alt: "Круасани й ягідний тарт на керамічній тарілці", size: "tall" },
  { src: iceCreamImg, alt: "Морозиво Pantone Coffee", size: "small" },
  { src: osokorkyImg, alt: "Кав’ярня Pantone Coffee на Осокорках", size: "wide" },
];
