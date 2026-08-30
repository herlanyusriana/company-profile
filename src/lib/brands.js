function l(name, description, src) {
  return { name, description, src };
}

export const brandData = {
  harvia: {
    name: 'HARVIA Sauna',
    slug: 'harvia',
    description: 'Premium sauna heaters, steam generators, and accessories for the ultimate wellness retreat.',
    thumbnail: '/images/brands/harvia/harvia-03.jpg',
    images: Array.from({ length: 22 }, (_, i) => {
      const n = String(i + 1).padStart(2, '0');
      if (n === '04') return null;
      if (n === '13') return `/images/brands/harvia/harvia-${n}.png`;
      if (n === '21' || n === '22') return `/images/brands/harvia/harvia-${n}.jfif`;
      return `/images/brands/harvia/harvia-${n}.jpg`;
    }).filter(Boolean),
    lines: [
      l('Sauna Heaters', 'Precision electric and wood-burning heaters engineered for the authentic Finnish sauna.', '/images/brands/harvia/harvia-10.jpg'),
      l('SmartFold Series', 'A compact, collapsible sauna that brings the wellness experience to any space.', '/images/brands/harvia/harvia-07.jpg'),
      l('Steam & Infrared', 'Infrared cabins and steam generators that support deep relaxation and recovery.', '/images/brands/harvia/harvia-14.jpg'),
      l('Sauna Accessories', 'Complete your retreat with premium heaters, controls, and finishing touches.', '/images/brands/harvia/harvia-17.jpg'),
    ],
  },
  jeeo: {
    name: 'JEE-O Showers',
    slug: 'jeeo',
    description: 'Minimalist, all-weather outdoor showers that blend design with nature.',
    thumbnail: '/images/brands/jeeo/jeeo-02.jpg',
    images: Array.from({ length: 13 }, (_, i) => {
      const n = String(i + 1).padStart(2, '0');
      if (['05', '08', '12'].includes(n)) return `/images/brands/jeeo/jeeo-${n}.jfif`;
      return `/images/brands/jeeo/jeeo-${n}.jpg`;
    }),
    lines: [
      l('Outdoor Showers', 'All-weather, frost-free showers that transform outdoor living.', '/images/brands/jeeo/jeeo-03.jpg'),
      l('Original Series', 'Minimalist shower columns with clean, refined lines.', '/images/brands/jeeo/jeeo-06.jpg'),
      l('Fatline Series', 'Bold, sculptural forms that make a statement in any setting.', '/images/brands/jeeo/jeeo-05.jfif'),
      l('Wellness Collection', 'Designed to heighten the everyday ritual of showering.', '/images/brands/jeeo/jeeo-13.jpg'),
    ],
  },
  mrsteam: {
    name: 'MR. STEAM',
    slug: 'mrsteam',
    description: 'State-of-the-art steam generators and systems that transform any space into a personal spa.',
    thumbnail: '/images/brands/mrsteam/mrsteam-02.jpg',
    images: Array.from({ length: 21 }, (_, i) => {
      const n = String(i + 1).padStart(2, '0');
      if (n === '12') return `/images/brands/mrsteam/mrsteam-${n}.jfif`;
      return `/images/brands/mrsteam/mrsteam-${n}.jpg`;
    }),
    lines: [
      l('Steam Generators', 'The heart of a personal spa — powerful, quiet, and precise.', '/images/brands/mrsteam/mrsteam-12.jfif'),
      l('Shower Packages', 'Complete steam shower systems for a full-sensory escape.', '/images/brands/mrsteam/mrsteam-18.jpg'),
      l('Controls & Accessories', 'AirTempo®, towel warmers, and seating that complete the experience.', '/images/brands/mrsteam/mrsteam-01.jpg'),
      l('Bathroom Wellness', 'Turn any bathroom into an at-home wellness sanctuary.', '/images/brands/mrsteam/mrsteam-06.jpg'),
    ],
  },
  planika: {
    name: 'PLANIKA Fireplaces',
    slug: 'planika',
    description: 'Eco-friendly, ventless fireplaces that create warmth and ambiance in any space.',
    thumbnail: '/images/brands/planika/planika-03.jpg',
    images: Array.from({ length: 32 }, (_, i) => {
      const n = String(i + 1).padStart(2, '0');
      if (n === '02') return `/images/brands/planika/planika-${n}.png`;
      return `/images/brands/planika/planika-${n}.jpg`;
    }),
    lines: [
      l('Insert Fireplaces', 'Ventless fire inserts that bring fire into any interior.', '/images/brands/planika/planika-08.jpg'),
      l('Free-Standing Fires', 'Sculptural fireplaces that anchor a room.', '/images/brands/planika/planika-23.jpg'),
      l('Outdoor Fires', 'Fire pits and outdoor flames for al fresco living.', '/images/brands/planika/planika-12.jpg'),
      l('Commercial Series', 'Statement fireplaces for hotels, restaurants, and spaces.', '/images/brands/planika/planika-21.jpg'),
    ],
  },
  safyooz: {
    name: 'SAFYOOZ Bathware',
    slug: 'safyooz',
    description: 'Artisanal bathtubs, basins, and vanities made from natural stone composites.',
    thumbnail: '/images/brands/safyooz/safyooz-02.jpg',
    images: Array.from({ length: 17 }, (_, i) => {
      const n = String(i + 1).padStart(2, '0');
      if (i < 7) return `/images/brands/safyooz/safyooz-${n}.jpg`;
      return `/images/brands/safyooz/safyooz-${n}.png`;
    }),
    lines: [
      l('Bathtubs', 'Sculptural freestanding baths carved from natural stone composite.', '/images/brands/safyooz/safyooz-01.jpg'),
      l('Basins', 'Hand-finished basins in a range of organic forms and finishes.', '/images/brands/safyooz/safyooz-09.png'),
      l('Vanities', 'Complete stone vanities that anchor the modern bathroom.', '/images/brands/safyooz/safyooz-16.png'),
    ],
  },
  takarabelmont: {
    name: 'TAKARA BELMONT',
    slug: 'takarabelmont',
    description: 'Professional salon furniture and spa equipment designed for comfort and style.',
    thumbnail: '/images/brands/takarabelmont/takarabelmont-02.jpg',
    images: Array.from({ length: 36 }, (_, i) => {
      const n = String(i + 1).padStart(2, '0');
      return `/images/brands/takarabelmont/takarabelmont-${n}.jpg`;
    }),
    lines: [
      l('Styling Chairs', 'Ergonomic salon styling chairs engineered for comfort and precision.', '/images/brands/takarabelmont/takarabelmont-23.jpg'),
      l('Head Spa', 'Headbath and head-spa stations for restorative treatments.', '/images/brands/takarabelmont/takarabelmont-09.jpg'),
      l('Spa Mist & Care', 'Integrated treatments that elevate the service experience.', '/images/brands/takarabelmont/takarabelmont-05.jpg'),
      l('Barber Chairs', 'Timeless chairs for the modern barbershop.', '/images/brands/takarabelmont/takarabelmont-22.jpg'),
    ],
  },
  viega: {
    name: 'VIEGA Drainage',
    slug: 'viega',
    description: 'High-quality floor drains and shower channels for flawless wet room designs.',
    thumbnail: '/images/brands/viega/viega-03.jpg',
    images: Array.from({ length: 12 }, (_, i) => {
      const n = String(i + 1).padStart(2, '0');
      if (['02', '04', '05', '12'].includes(n)) return `/images/brands/viega/viega-${n}.png`;
      return `/images/brands/viega/viega-${n}.jpg`;
    }),
    lines: [
      l('Shower Channels', 'Precision drainage for seamless wet-room design.', '/images/brands/viega/viega-03.jpg'),
      l('Advantix Vario', 'Individually configurable drainage for flawless finishes.', '/images/brands/viega/viega-02.png'),
      l('Drainage Systems', 'High-quality floor drains engineered for demanding spaces.', '/images/brands/viega/viega-04.png'),
    ],
  },
  wellness: {
    name: 'Wellness Spaces',
    slug: 'wellness',
    description: 'Integrated wellness environments combining sauna, steam, and fireplace elements.',
    thumbnail: '/images/brands/harvia/harvia-05.jpg',
    images: [
      '/images/brands/harvia/harvia-05.jpg',
      '/images/brands/harvia/harvia-06.jpg',
      '/images/brands/harvia/harvia-07.jpg',
      '/images/brands/harvia/harvia-08.jpg',
      '/images/brands/mrsteam/mrsteam-01.jpg',
      '/images/brands/mrsteam/mrsteam-05.jpg',
      '/images/brands/planika/planika-01.jpg',
      '/images/brands/planika/planika-04.jpg',
    ],
    lines: [
      l('Sauna & Steam', 'Integrated sauna and steam environments for the ultimate retreat.', '/images/brands/harvia/harvia-05.jpg'),
      l('Fire & Ambience', 'Fireplace elements that create warmth and atmosphere.', '/images/brands/planika/planika-01.jpg'),
      l('Complete Spaces', 'A full wellness journey, beautifully composed.', '/images/brands/harvia/harvia-07.jpg'),
    ],
  },
};

export const cardOrder = ['harvia', 'jeeo', 'mrsteam', 'planika', 'safyooz', 'takarabelmont', 'viega', 'wellness'];

export function getBrand(slug) {
  return brandData[slug] ?? null;
}

export function getAllBrandSlugs() {
  return cardOrder;
}
