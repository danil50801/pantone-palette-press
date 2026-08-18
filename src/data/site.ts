/**
 * PANTONE COFFEE — content layer.
 *
 * All editable copy, menu structure, locations, seasonal campaigns and gallery
 * entries live here so the site can be updated without touching components.
 *
 * NOTE ON ACCURACY: nothing here is invented. Prices, events, reviews and
 * staff are intentionally absent. Placeholders are marked explicitly.
 */

import interiorRedAsset from "@/assets/interior-red.jpg.asset.json";
import counterAsset from "@/assets/counter.jpg.asset.json";
import storefrontAsset from "@/assets/storefront.jpg.asset.json";
import latteRedAsset from "@/assets/latte-red.jpg.asset.json";
import cakeBerryAsset from "@/assets/cake-berry.jpg.asset.json";
import cupGreenAsset from "@/assets/cup-green.png.asset.json";

const interiorRedImg = interiorRedAsset.url;
const counterImg = counterAsset.url;
const storefrontImg = storefrontAsset.url;
const latteRedImg = latteRedAsset.url;
const cakeBerryImg = cakeBerryAsset.url;
const cupGreenImg = cupGreenAsset.url;

export const images = {
  hero: interiorRedImg,
  coffee: latteRedImg,
  iceCream: cupGreenImg,
  craftShop: cupGreenImg,
  pastry: cakeBerryImg,
  interior: counterImg,
  matcha: latteRedImg,
  packaging: cakeBerryImg,
  osokorky: counterImg,
  arsenalna: storefrontImg,
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
    image: cupGreenImg,
    imageAlt: "Морозиво в ріжках на рожевій стіні — сезонна кампанія Pantone Coffee",
    theme: "theme-blush",
  },
  autumn: {
    key: "autumn",
    label: "AUTUMN",
    heading: "AUTUMN AT PANTONE",
    copy: "Тепліші смаки для коротших днів.",
    highlights: ["SEASONAL DRINKS", "DESSERTS"],
    image: cakeBerryImg,
    imageAlt: "Осіння сезонна композиція",
    theme: "theme-red",
  },
  winter: {
    key: "winter",
    label: "WINTER",
    heading: "WINTER AT PANTONE",
    copy: "Гаряче, повільно, затишно.",
    highlights: ["HOT DRINKS", "FESTIVE SPECIALS"],
    image: latteRedImg,
    imageAlt: "Зимова сезонна композиція",
    theme: "theme-ink",
  },
  spring: {
    key: "spring",
    label: "SPRING",
    heading: "SPRING AT PANTONE",
    copy: "Свіжий старт у чашці.",
    highlights: ["FRESH SEASONAL DRINKS"],
    image: latteRedImg,
    imageAlt: "Весняна сезонна композиція",
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
    image: counterImg,
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
    image: storefrontImg,
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
  { src: latteRedImg, alt: "Еспресо наливається в керамічну чашку", size: "tall" },
  { src: cakeBerryImg, alt: "Круасани та грушевий тарт", size: "wide" },
  { src: latteRedImg, alt: "Крижаний матча-лате", size: "small" },
  { src: interiorRedImg, alt: "Айс-лате поруч із кольоровими картками", size: "large" },
  { src: cupGreenImg, alt: "Чай, кераміка та сухоцвіти", size: "square" },
  { src: cupGreenImg, alt: "Два ріжки морозива на рожевому тлі", size: "wide" },
  { src: cakeBerryImg, alt: "Крафтова упаковка кави та сухоцвіти", size: "square" },
  { src: counterImg, alt: "Зелений диван і столики в залі кав’ярні", size: "wide" },
  { src: storefrontImg, alt: "Фасад кав’ярні Pantone Coffee у центрі Києва", size: "small" },
];
