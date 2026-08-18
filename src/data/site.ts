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
import iceCreamSeasonalAsset from "@/assets/ice-cream-seasonal.jpg.asset.json";
// Complementary editorial imagery (generated to match the brand palette —
// not photographs of the actual Pantone Coffee locations).
import genMatchaImg from "@/assets/gen-matcha.jpg";
import genCraftImg from "@/assets/gen-craft.jpg";
import genIceCreamImg from "@/assets/gen-icecream.jpg";
import genWorkImg from "@/assets/gen-work.jpg";
import genPastryImg from "@/assets/gen-pastry.jpg";

const interiorRedImg = interiorRedAsset.url;
const counterImg = counterAsset.url;
const storefrontImg = storefrontAsset.url;
const latteRedImg = latteRedAsset.url;
const cakeBerryImg = cakeBerryAsset.url;
const cupGreenImg = cupGreenAsset.url;
const iceCreamSeasonalImg = iceCreamSeasonalAsset.url;

export const images = {
  hero: interiorRedImg,
  coffee: latteRedImg,
  iceCream: genIceCreamImg,
  craftShop: cupGreenImg,
  pastry: cakeBerryImg,
  interior: counterImg,
  matcha: genMatchaImg,
  packaging: genCraftImg,
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
    imageAlt: "Зелений стакан Pantone Coffee на тлі рослин — сезонна кампанія",
    theme: "theme-blush",
  },
  autumn: {
    key: "autumn",
    label: "AUTUMN",
    heading: "AUTUMN AT PANTONE",
    copy: "Тепліші смаки для коротших днів.",
    highlights: ["SEASONAL DRINKS", "DESSERTS"],
    image: cakeBerryImg,
    imageAlt: "Торт із свіжими ягодами Pantone Coffee",
    theme: "theme-red",
  },
  winter: {
    key: "winter",
    label: "WINTER",
    heading: "WINTER AT PANTONE",
    copy: "Гаряче, повільно, затишно.",
    highlights: ["HOT DRINKS", "FESTIVE SPECIALS"],
    image: latteRedImg,
    imageAlt: "Лате в червоній чашці на літній терасі",
    theme: "theme-ink",
  },
  spring: {
    key: "spring",
    label: "SPRING",
    heading: "SPRING AT PANTONE",
    copy: "Свіжий старт у чашці.",
    highlights: ["FRESH SEASONAL DRINKS"],
    image: latteRedImg,
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
  { src: latteRedImg, alt: "Лате в червоній чашці з фінікою на терасі Pantone Coffee", size: "tall" },
  { src: counterImg, alt: "Вітрина з десертами та зелені рослини в залі Pantone Coffee", size: "wide" },
  { src: cupGreenImg, alt: "Зелений стакан Pantone Coffee серед рослин", size: "small" },
  { src: interiorRedImg, alt: "Червоний диван і мурал PANTONE у залі кав’ярні", size: "large" },
  { src: cakeBerryImg, alt: "Торт зі свіжими ягодами", size: "square" },
  { src: storefrontImg, alt: "Засніжений вхід до кав’ярні Pantone Coffee", size: "wide" },
  { src: genMatchaImg, alt: "Крижаний матча-лате у склянці — редакційний кадр", size: "square" },
  { src: genPastryImg, alt: "Круасани й ягідний тарт на керамічній тарілці", size: "tall" },
  { src: genIceCreamImg, alt: "Ріжки з морозивом у літньому світлі", size: "small" },
  { src: genWorkImg, alt: "Робота з ноутбуком за столиком у кав’ярні", size: "wide" },
];
