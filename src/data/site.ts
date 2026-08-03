import heroLake from "@/assets/hero-lake.jpg";
import lakeLouise from "@/assets/lake-louise.jpg";
import badlands from "@/assets/badlands.jpg";
import icefields from "@/assets/icefields.jpg";
import guestsHiking from "@/assets/guests-hiking.jpg";
import wildlife from "@/assets/wildlife.jpg";
import banff from "@/assets/banff.jpg";
import peyto from "@/assets/peyto.jpg";
import jasper from "@/assets/jasper.jpg";
import canmore from "@/assets/canmore.jpg";
import drumheller from "@/assets/drumheller.jpg";
import privateTour from "@/assets/private-tour.jpg";
import photography from "@/assets/photography.jpg";
import ctaValley from "@/assets/cta-valley.jpg";

export const images = {
  heroLake,
  lakeLouise,
  badlands,
  icefields,
  guestsHiking,
  wildlife,
  banff,
  peyto,
  jasper,
  canmore,
  drumheller,
  privateTour,
  photography,
  ctaValley,
};

export const company = {
  name: "Rockies & Badland Explorers",
  short: "Rockies & Badland Explorers",
  phone: "+1 (403) 555-0182",
  emergency: "+1 (403) 555-0911",
  email: "hello@rockiesbadlandexplorers.ca",
  address: "812 Railway Avenue, Canmore, Alberta T1W 1P4",
  hours: [
    { day: "Monday – Friday", time: "7:00 AM – 8:00 PM MT" },
    { day: "Saturday", time: "7:00 AM – 6:00 PM MT" },
    { day: "Sunday", time: "8:00 AM – 5:00 PM MT" },
  ],
};

export type Tour = {
  slug: string;
  title: string;
  location: string;
  duration: string;
  difficulty: "Easy" | "Moderate" | "Active";
  season: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  blurb: string;
  highlights: string[];
  category: "Rockies" | "Badlands" | "Wildlife" | "Photography";
};

export const tours: Tour[] = [
  {
    slug: "moraine-lake-sunrise",
    title: "Moraine Lake Sunrise & Valley of the Ten Peaks",
    location: "Banff National Park, AB",
    duration: "8 hours",
    difficulty: "Easy",
    season: "June – October",
    price: 289,
    rating: 4.9,
    reviews: 412,
    image: heroLake,
    blurb:
      "Leave Canmore before first light and stand at the Rockpile as the Ten Peaks catch the first gold of the morning — long before the shuttle crowds arrive.",
    highlights: [
      "Pre-dawn departure with hot Canmore coffee",
      "Rockpile sunrise and lakeshore walk",
      "Lake Louise and Bow Valley Parkway stops",
    ],
    category: "Rockies",
  },
  {
    slug: "icefields-parkway-glaciers",
    title: "Icefields Parkway & Glacier Country",
    location: "Banff to Jasper, AB",
    duration: "11 hours",
    difficulty: "Moderate",
    season: "May – October",
    price: 349,
    rating: 4.9,
    reviews: 328,
    image: icefields,
    blurb:
      "232 kilometres of the most scenic highway on earth — Peyto Lake, Mistaya Canyon, the Columbia Icefield and waterfalls only locals stop for.",
    highlights: [
      "Peyto Lake and Bow Summit viewpoint",
      "Athabasca Glacier and Sunwapta Falls",
      "Hidden roadside viewpoints off the guidebook",
    ],
    category: "Rockies",
  },
  {
    slug: "drumheller-badlands-fossils",
    title: "Drumheller Badlands & Fossil Country",
    location: "Drumheller, AB",
    duration: "10 hours",
    difficulty: "Easy",
    season: "Year-round",
    price: 245,
    rating: 4.8,
    reviews: 276,
    image: badlands,
    blurb:
      "Trade the peaks for prehistory. Walk the hoodoos, cross the Star Mine suspension bridge and stand where the world's richest dinosaur beds were unearthed.",
    highlights: [
      "Royal Tyrrell Museum guided visit",
      "Hoodoo Trail and Horseshoe Canyon",
      "Prairie sunset over the coulees",
    ],
    category: "Badlands",
  },
  {
    slug: "wildlife-safari-bow-valley",
    title: "Bow Valley Wildlife Safari",
    location: "Banff & Kananaskis, AB",
    duration: "6 hours",
    difficulty: "Easy",
    season: "April – November",
    price: 219,
    rating: 4.8,
    reviews: 194,
    image: wildlife,
    blurb:
      "Golden-hour tracking with a guide who has spent fifteen seasons in this valley. Elk, bighorn sheep, black bears and — with patience — a grizzly on the slope.",
    highlights: [
      "Spotting scopes and binoculars provided",
      "Ethical, distance-respecting wildlife viewing",
      "Vermilion Lakes and Kananaskis backroads",
    ],
    category: "Wildlife",
  },
  {
    slug: "larch-valley-hike",
    title: "Larch Valley & Sentinel Pass Guided Hike",
    location: "Lake Louise, AB",
    duration: "9 hours",
    difficulty: "Active",
    season: "July – September",
    price: 319,
    rating: 5.0,
    reviews: 148,
    image: guestsHiking,
    blurb:
      "A proper alpine day: 725 metres of climbing through golden larch to a pass with one of the finest views in Canada. Small groups, real mountain guides.",
    highlights: [
      "Certified hiking guide, max 8 guests",
      "Trail lunch from a Canmore bakery",
      "Larch season golden-hour timing",
    ],
    category: "Rockies",
  },
  {
    slug: "photography-masterclass",
    title: "Rockies Photography Masterclass",
    location: "Banff & Yoho, AB / BC",
    duration: "12 hours",
    difficulty: "Moderate",
    season: "Year-round",
    price: 429,
    rating: 4.9,
    reviews: 96,
    image: photography,
    blurb:
      "Sunrise to blue hour with a working landscape photographer. Composition, filters, long exposure — and the locations that actually work in each season.",
    highlights: [
      "Max 4 guests, tripod space guaranteed",
      "Sunrise, golden hour and blue hour shoots",
      "In-field editing walkthrough",
    ],
    category: "Photography",
  },
];

export type Destination = {
  slug: string;
  name: string;
  tagline: string;
  image: string;
  description: string;
  tours: number;
  drive: string;
};

export const destinations: Destination[] = [
  {
    slug: "banff",
    name: "Banff",
    tagline: "Canada's first national park",
    image: banff,
    description:
      "A mountain town wrapped in 6,600 square kilometres of protected wilderness — hot springs, gondolas and elk on Banff Avenue at dusk.",
    tours: 9,
    drive: "1h 25m from Calgary",
  },
  {
    slug: "lake-louise",
    name: "Lake Louise",
    tagline: "The turquoise icon",
    image: lakeLouise,
    description:
      "Glacier flour turns this water an impossible blue. We arrive early, paddle when the surface is glass, and walk the Lakeshore Trail before the crowds.",
    tours: 7,
    drive: "2h from Calgary",
  },
  {
    slug: "jasper",
    name: "Jasper",
    tagline: "Dark skies and wide valleys",
    image: jasper,
    description:
      "The largest park in the Rockies and the second-largest dark sky preserve on the planet. Maligne Lake, Spirit Island, and space to breathe.",
    tours: 5,
    drive: "4h from Canmore",
  },
  {
    slug: "canmore",
    name: "Canmore",
    tagline: "Our home in the Bow Valley",
    image: canmore,
    description:
      "The Three Sisters, larch-gold hillsides and the best coffee in the valley. Every one of our tours begins here.",
    tours: 6,
    drive: "1h from Calgary",
  },
  {
    slug: "icefields-parkway",
    name: "Icefields Parkway",
    tagline: "The world's most scenic drive",
    image: icefields,
    description:
      "Peyto, Bow Lake, Mistaya Canyon and the Columbia Icefield — a glacial corridor between Lake Louise and Jasper.",
    tours: 4,
    drive: "Banff to Jasper",
  },
  {
    slug: "drumheller",
    name: "Drumheller & the Badlands",
    tagline: "75 million years of prairie",
    image: drumheller,
    description:
      "Hoodoos, coulees and the Royal Tyrrell Museum. A landscape carved by meltwater and utterly unlike the mountains two hours west.",
    tours: 4,
    drive: "1h 30m from Calgary",
  },
];

export const galleryItems = [
  { src: heroLake, alt: "Sunrise light on the Valley of the Ten Peaks above Moraine Lake", category: "Lakes", span: "tall" },
  { src: guestsHiking, alt: "A small guided group smiling on an alpine ridge in Banff", category: "Guests", span: "short" },
  { src: badlands, alt: "Golden hour over striped hoodoos in the Alberta Badlands", category: "Badlands", span: "tall" },
  { src: wildlife, alt: "A grizzly bear and bull elk in a sunlit Rockies meadow", category: "Wildlife", span: "short" },
  { src: peyto, alt: "Peyto Lake glowing turquoise below layered Rockies peaks", category: "Landscape", span: "short" },
  { src: icefields, alt: "Aerial view of the Icefields Parkway beside a glacial river", category: "Mountains", span: "tall" },
  { src: lakeLouise, alt: "Red canoes on the turquoise water of Lake Louise", category: "Lakes", span: "tall" },
  { src: canmore, alt: "Golden larch forest below the peaks near Canmore", category: "Landscape", span: "short" },
  { src: photography, alt: "A photographer shooting sunrise over an alpine lake", category: "Adventure", span: "short" },
  { src: drumheller, alt: "Visitors walking the hoodoo trail in Drumheller", category: "Badlands", span: "tall" },
  { src: banff, alt: "Banff Avenue with Cascade Mountain rising behind town", category: "Mountains", span: "short" },
  { src: privateTour, alt: "A private touring van at a Rockies mountain viewpoint", category: "Adventure", span: "short" },
];

export const galleryCategories = [
  "All",
  "Landscape",
  "Wildlife",
  "Adventure",
  "Guests",
  "Lakes",
  "Mountains",
  "Badlands",
];

export const reviews = [
  {
    name: "Marianne Delacroix",
    origin: "Lyon, France",
    source: "TripAdvisor",
    rating: 5,
    date: "September 2025",
    title: "The sunrise we'll talk about for years",
    body:
      "We were at Moraine Lake at 4:45am with hot coffee and nobody else on the Rockpile. Étienne knew exactly where to stand as the light hit. Twelve days in Canada and this was the morning we keep describing to people.",
  },
  {
    name: "David & Priya Raman",
    origin: "Toronto, Canada",
    source: "Google Reviews",
    rating: 5,
    date: "August 2025",
    title: "Worth every dollar for the small group",
    body:
      "Six of us in a comfortable van instead of fifty on a coach. Our guide rerouted around a road closure and found us a canyon we'd never have located ourselves. The kids are still talking about the bighorn sheep.",
  },
  {
    name: "Hannah Whitfield",
    origin: "Melbourne, Australia",
    source: "Viator",
    rating: 5,
    date: "July 2025",
    title: "Genuine local knowledge, not a script",
    body:
      "Sarah has guided this valley for fifteen years and it shows. She told us where the elk had been that week, not a memorised speech. The photography stops were perfectly timed.",
  },
  {
    name: "Klaus Bergmann",
    origin: "Munich, Germany",
    source: "TripAdvisor",
    rating: 5,
    date: "June 2025",
    title: "Badlands day exceeded the Rockies",
    body:
      "We booked Drumheller as a filler day and it became our favourite. The hoodoos at golden hour, the Tyrrell Museum with a guide who knew the specimens by name. Book it.",
  },
  {
    name: "Amara Osei",
    origin: "London, United Kingdom",
    source: "Google Reviews",
    rating: 5,
    date: "October 2025",
    title: "Flexible when the weather turned",
    body:
      "Snow closed the pass and they rebuilt the itinerary overnight — larch valley instead, no fuss and no extra charge. That's the difference between a tour company and a real operator.",
  },
  {
    name: "The Nakamura Family",
    origin: "Osaka, Japan",
    source: "Viator",
    rating: 5,
    date: "August 2025",
    title: "Perfect for three generations",
    body:
      "My mother is 78 and my son is 9. The guide paced the whole day around both of them and nobody felt rushed or bored. Comfortable vehicle, excellent lunch stop.",
  },
];

export const faqs = [
  {
    q: "How large are your groups?",
    a: "Our standard small-group departures are capped at eight guests, and our hiking and photography programs at four to six. Private departures are available for any tour in our collection.",
  },
  {
    q: "Do you offer hotel pickup?",
    a: "Yes. We collect guests from any hotel in Canmore, Banff and Lake Louise at no additional charge, and from Calgary hotels or YYC airport for a CAD $45 per-vehicle supplement.",
  },
  {
    q: "What happens if the weather is poor?",
    a: "We run in almost all conditions — mountain weather changes hourly and some of our best mornings begin under cloud. If conditions are genuinely unsafe, we reroute to an alternative or offer a full refund or free rebooking.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Free cancellation up to 48 hours before departure with a full refund. Inside 48 hours we offer a credit valid for 18 months. No deposit is charged until 7 days before your tour.",
  },
  {
    q: "How fit do I need to be?",
    a: "Easy tours involve short, flat walks of under 2 km. Moderate tours include up to 5 km on maintained trails. Active tours involve 10–14 km with significant elevation gain — we will talk you through it before you book.",
  },
  {
    q: "Are meals included?",
    a: "All tours include water, hot drinks and Alberta-made snacks. Full-day and hiking tours include a packed lunch from a Canmore bakery, with dietary requirements accommodated when noted at booking.",
  },
  {
    q: "Is park admission included?",
    a: "Yes. National park entry fees for Banff, Jasper and Yoho are included in every quoted price, along with all listed attraction admissions.",
  },
  {
    q: "What should I bring?",
    a: "Layers, a windproof shell, sunglasses, sunscreen and broken-in walking shoes. We supply binoculars, spotting scopes, trekking poles and bear spray at no charge.",
  },
];

export const blogPosts = [
  {
    slug: "moraine-lake-shuttle-guide",
    title: "How to actually see Moraine Lake in 2026",
    excerpt:
      "Private vehicles have been banned since 2023. Here is exactly how the shuttle, the roving lottery and guided access work — and the hour that still belongs to almost nobody.",
    category: "Canadian Travel",
    date: "March 12, 2026",
    read: "8 min read",
    image: heroLake,
    featured: true,
  },
  {
    slug: "wildlife-photography-ethics",
    title: "The 100-metre rule: photographing bears without harming them",
    excerpt:
      "A working wildlife photographer on lens choice, habituation, and why the best grizzly frame you'll ever take is one shot from a respectful distance.",
    category: "Wildlife",
    date: "February 28, 2026",
    read: "6 min read",
    image: wildlife,
    featured: false,
  },
  {
    slug: "larch-season-timing",
    title: "Larch season, decoded: when the Rockies turn gold",
    excerpt:
      "A two-week window, wildly variable by elevation. Our fifteen-year record of peak colour dates, and the four valleys we rotate between.",
    category: "Travel Tips",
    date: "February 9, 2026",
    read: "5 min read",
    image: canmore,
    featured: false,
  },
  {
    slug: "badlands-day-trip",
    title: "Why the Badlands deserve more than an afternoon",
    excerpt:
      "Ninety minutes from Calgary the prairie splits open into 75 million years of geology. A full-day itinerary that isn't just the museum.",
    category: "Canadian Travel",
    date: "January 22, 2026",
    read: "7 min read",
    image: badlands,
    featured: false,
  },
  {
    slug: "packing-list-rockies",
    title: "The honest Rockies packing list",
    excerpt:
      "What experienced guides actually carry in each season — and the six items visitors buy in Banff that they never needed.",
    category: "Packing Lists",
    date: "January 8, 2026",
    read: "9 min read",
    image: guestsHiking,
    featured: false,
  },
  {
    slug: "sunrise-photography-locations",
    title: "Five sunrise locations that aren't Moraine Lake",
    excerpt:
      "Vermilion Lakes, Two Jack, Bow Lake, Mount Rundle from Canmore, and one prairie viewpoint nobody photographs. With shooting angles.",
    category: "Photography",
    date: "December 14, 2025",
    read: "6 min read",
    image: photography,
    featured: false,
  },
];

export const team = [
  {
    name: "Sarah Whitecalf",
    role: "Founder & Lead Guide",
    bio: "Born in Morley, guiding the Bow Valley since 2009. Interpretive guide certification and a working knowledge of every backroad between Canmore and Jasper.",
    initials: "SW",
  },
  {
    name: "Étienne Marchand",
    role: "Head of Photography Programs",
    bio: "Landscape photographer published in Canadian Geographic. Leads our sunrise and masterclass departures across Banff and Yoho.",
    initials: "EM",
  },
  {
    name: "Dr. Nadia Prakash",
    role: "Badlands & Palaeontology Specialist",
    bio: "Fifteen field seasons in the Dinosaur Provincial Park beds. She can read the Drumheller coulees like a page.",
    initials: "NP",
  },
  {
    name: "Tom Kealey",
    role: "Operations & Safety Director",
    bio: "Certified Wilderness First Responder and avalanche technician. Builds every itinerary around the day's real conditions.",
    initials: "TK",
  },
];

export const pickupPoints = [
  "Canmore — hotel or residence",
  "Banff — hotel or residence",
  "Lake Louise — hotel",
  "Calgary — downtown hotel (+$45)",
  "Calgary International Airport (+$45)",
  "Custom pickup (we'll confirm by email)",
];

export const stats = [
  { value: 14, suffix: "", label: "Years in the valley" },
  { value: 11840, suffix: "+", label: "Guests hosted" },
  { value: 2600, suffix: "+", label: "Tours completed" },
  { value: 42, suffix: "", label: "Countries represented" },
];
