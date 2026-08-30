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
  alape: {
    name: 'ALAPE',
    slug: 'alape',
    description: 'Glazed steel washplaces and basins with character — crafted in Germany since 1896.',
    thumbnail: '/images/brands/alape/alape-01.jpg',
    images: [
      '/images/brands/alape/alape-01.jpg','/images/brands/alape/alape-02.jpg','/images/brands/alape/alape-03.jpg',
      '/images/brands/alape/alape-04.jpg','/images/brands/alape/alape-05.jpg','/images/brands/alape/alape-06.jpg',
      '/images/brands/alape/alape-07.jpg','/images/brands/alape/alape-08.jpg','/images/brands/alape/alape-09.jpg',
      '/images/brands/alape/alape-10.jpg','/images/brands/alape/alape-11.jpg','/images/brands/alape/alape-12.jpg',
      '/images/brands/alape/alape-13.jpg','/images/brands/alape/alape-14.jpg','/images/brands/alape/alape-15.jpg',
      '/images/brands/alape/alape-16.jpg','/images/brands/alape/alape-17.jpg','/images/brands/alape/alape-18.jpg',
      '/images/brands/alape/alape-19.jpg','/images/brands/alape/alape-20.jpg','/images/brands/alape/alape-21.jpg',
      '/images/brands/alape/alape-22.jpg','/images/brands/alape/alape-23.jpg','/images/brands/alape/alape-24.jpg',
      '/images/brands/alape/alape-25.jpg','/images/brands/alape/alape-26.jpeg','/images/brands/alape/alape-27.jpg',
      '/images/brands/alape/alape-28.jpg','/images/brands/alape/alape-29.jpg','/images/brands/alape/alape-30.jpg',
      '/images/brands/alape/alape-31.jpg','/images/brands/alape/alape-32.jpg','/images/brands/alape/alape-33.jpg',
      '/images/brands/alape/alape-34.jpg',
    ],
    lines: [
      l('Arkta Series', 'Glazed steel washplaces with a soft, rounded character.', '/images/brands/alape/alape-01.jpg'),
      l('BICOLOR Washstand', 'A two-tone washstand that brings colour to the bathroom.', '/images/brands/alape/alape-09.jpg'),
      l('TERRA', 'A matt, powdery surface that evokes natural stone.', '/images/brands/alape/alape-13.jpg'),
      l('Steel19', 'The classic bucket sink, reimagined for private bathrooms.', '/images/brands/alape/alape-15.jpg'),
    ],
  },
  aquatica: {
    name: 'AQUATICA',
    slug: 'aquatica',
    description: 'Sculptural freestanding bathtubs and spas crafted for the art of deep relaxation.',
    thumbnail: '/images/brands/aquatica/aquatica-01.jpg',
    images: [
      '/images/brands/aquatica/aquatica-01.jpg','/images/brands/aquatica/aquatica-02.jpg','/images/brands/aquatica/aquatica-03.jpg',
      '/images/brands/aquatica/aquatica-04.jpg','/images/brands/aquatica/aquatica-05.jpg','/images/brands/aquatica/aquatica-06.jpg',
      '/images/brands/aquatica/aquatica-07.jpg','/images/brands/aquatica/aquatica-08.jpg','/images/brands/aquatica/aquatica-09.jpg',
      '/images/brands/aquatica/aquatica-10.jpg','/images/brands/aquatica/aquatica-11.jpg','/images/brands/aquatica/aquatica-12.jpg',
      '/images/brands/aquatica/aquatica-13.jpg','/images/brands/aquatica/aquatica-14.jpg','/images/brands/aquatica/aquatica-15.jpg',
      '/images/brands/aquatica/aquatica-16.jpg','/images/brands/aquatica/aquatica-17.jpg','/images/brands/aquatica/aquatica-18.jpg',
      '/images/brands/aquatica/aquatica-19.jpg','/images/brands/aquatica/aquatica-20.jpg','/images/brands/aquatica/aquatica-21.jpg',
      '/images/brands/aquatica/aquatica-22.jpg','/images/brands/aquatica/aquatica-23.jpg',
    ],
    lines: [
      l('Downtown Spas', 'Inground and freestanding spas finished in Maridur wood-look siding.', '/images/brands/aquatica/aquatica-02.jpg'),
      l('Monolith Bathtubs', 'Black solid-surface freestanding tubs with a bold sculptural presence.', '/images/brands/aquatica/aquatica-08.jpg'),
      l('True Ofuro', 'A standalone soaking tub inspired by the Japanese ofuro.', '/images/brands/aquatica/aquatica-15.jpg'),
      l('Vibe Spas', 'Freestanding spas with Maridur composite panels and infinity jets.', '/images/brands/aquatica/aquatica-17.jpg'),
    ],
  },
  ciclotte: {
    name: 'CICLOTTE',
    slug: 'ciclotte',
    description: 'The iconic Italian design exercise bike and modular dumbbells that turn fitness into art.',
    thumbnail: '/images/brands/ciclotte/ciclotte-01.jpg',
    images: [
      '/images/brands/ciclotte/ciclotte-01.jpg','/images/brands/ciclotte/ciclotte-02.jfif','/images/brands/ciclotte/ciclotte-03.png',
      '/images/brands/ciclotte/ciclotte-04.png','/images/brands/ciclotte/ciclotte-05.jpg','/images/brands/ciclotte/ciclotte-06.jpg',
      '/images/brands/ciclotte/ciclotte-07.jpg','/images/brands/ciclotte/ciclotte-08.jpg','/images/brands/ciclotte/ciclotte-09.jpg',
      '/images/brands/ciclotte/ciclotte-10.jpg','/images/brands/ciclotte/ciclotte-11.jpg','/images/brands/ciclotte/ciclotte-12.jpg',
      '/images/brands/ciclotte/ciclotte-13.jpg','/images/brands/ciclotte/ciclotte-14.jpg','/images/brands/ciclotte/ciclotte-15.jpg',
      '/images/brands/ciclotte/ciclotte-16.png','/images/brands/ciclotte/ciclotte-17.png','/images/brands/ciclotte/ciclotte-18.png',
      '/images/brands/ciclotte/ciclotte-19.png','/images/brands/ciclotte/ciclotte-20.png',
    ],
    lines: [
      l('Marble Bike', 'A luxury stationary bike finished in natural marble.', '/images/brands/ciclotte/ciclotte-02.jfif'),
      l('NOHRD Bike', 'An exercise bike combining Italian taste and German craftsmanship.', '/images/brands/ciclotte/ciclotte-03.png'),
      l('Ciclotte One', 'Nordic-inspired simplicity in a single clean line.', '/images/brands/ciclotte/ciclotte-04.png'),
      l('Dumbbells', 'Modular design weights made for training in true Ciclotte style.', '/images/brands/ciclotte/ciclotte-05.jpg'),
    ],
  },
  corian: {
    name: 'CORIAN',
    slug: 'corian',
    description: 'Corian® solid surface — a seamless, durable material for architecture, washbasins, and expressive design.',
    thumbnail: '/images/brands/corian/corian-01.jpg',
    images: [
      '/images/brands/corian/corian-01.jpg','/images/brands/corian/corian-02.jpg','/images/brands/corian/corian-03.jpg',
      '/images/brands/corian/corian-04.jpg','/images/brands/corian/corian-05.jpg','/images/brands/corian/corian-06.jpg',
      '/images/brands/corian/corian-07.jpg','/images/brands/corian/corian-08.jpg','/images/brands/corian/corian-09.jpg',
      '/images/brands/corian/corian-10.jpg','/images/brands/corian/corian-11.jpg','/images/brands/corian/corian-12.jpg',
      '/images/brands/corian/corian-13.jpg','/images/brands/corian/corian-14.jpg','/images/brands/corian/corian-15.jpg',
      '/images/brands/corian/corian-16.jpg','/images/brands/corian/corian-18.jpg',
    ],
    lines: [
      l('Solid Surface', 'Seamless, durable and beautiful Corian® solid surface.', '/images/brands/corian/corian-01.jpg'),
      l('Washbasins', 'Designer basin forms carved from Corian®.', '/images/brands/corian/corian-13.jpg'),
      l('Architecture', 'Exterior cladding and facade innovation in Corian®.', '/images/brands/corian/corian-02.jpg'),
      l('Design Objects', 'Sculptural pieces that push the boundaries of the material.', '/images/brands/corian/corian-15.jpg'),
    ],
  },
  dornbracht: {
    name: 'DORNBRACHT',
    slug: 'dornbracht',
    description: 'Dornbracht — German-engineered fittings and showers for the luxury bathroom.',
    thumbnail: '/images/brands/dornbracht/dornbracht-01.jpg',
    images: [
      '/images/brands/dornbracht/dornbracht-01.jpg','/images/brands/dornbracht/dornbracht-02.jpg','/images/brands/dornbracht/dornbracht-03.jpg',
      '/images/brands/dornbracht/dornbracht-04.jpg','/images/brands/dornbracht/dornbracht-05.jpg','/images/brands/dornbracht/dornbracht-06.jpg',
      '/images/brands/dornbracht/dornbracht-07.jpg','/images/brands/dornbracht/dornbracht-08.jpg','/images/brands/dornbracht/dornbracht-09.jpg',
      '/images/brands/dornbracht/dornbracht-10.jpg','/images/brands/dornbracht/dornbracht-11.jpg','/images/brands/dornbracht/dornbracht-12.jpg',
      '/images/brands/dornbracht/dornbracht-13.jpg','/images/brands/dornbracht/dornbracht-14.jpg','/images/brands/dornbracht/dornbracht-15.jpg',
      '/images/brands/dornbracht/dornbracht-16.jpg','/images/brands/dornbracht/dornbracht-17.jpg','/images/brands/dornbracht/dornbracht-18.jpg',
      '/images/brands/dornbracht/dornbracht-19.jpg','/images/brands/dornbracht/dornbracht-20.jpg','/images/brands/dornbracht/dornbracht-21.jpg',
      '/images/brands/dornbracht/dornbracht-22.jpg','/images/brands/dornbracht/dornbracht-23.jpg','/images/brands/dornbracht/dornbracht-24.jpg',
      '/images/brands/dornbracht/dornbracht-25.jpg','/images/brands/dornbracht/dornbracht-26.jpg','/images/brands/dornbracht/dornbracht-27.jpg',
      '/images/brands/dornbracht/dornbracht-28.jpg','/images/brands/dornbracht/dornbracht-29.jpeg','/images/brands/dornbracht/dornbracht-30.jpg',
      '/images/brands/dornbracht/dornbracht-31.jpeg','/images/brands/dornbracht/dornbracht-32.jpg','/images/brands/dornbracht/dornbracht-33.jpg',
      '/images/brands/dornbracht/dornbracht-34.jpg','/images/brands/dornbracht/dornbracht-35.jpg','/images/brands/dornbracht/dornbracht-36.jpg',
      '/images/brands/dornbracht/dornbracht-37.jpg','/images/brands/dornbracht/dornbracht-38.jpg','/images/brands/dornbracht/dornbracht-39.jpg',
      '/images/brands/dornbracht/dornbracht-40.jpeg',
    ],
    lines: [
      l('Aquahalo', 'A sculptural shower that places water at the centre of the experience.', '/images/brands/dornbracht/dornbracht-01.jpg'),
      l('Atelier Surfaces', 'Fittings with exquisite, tactile atelier finishes.', '/images/brands/dornbracht/dornbracht-09.jpg'),
      l('Showers', 'Rain and sky shower programmes that redefine the daily ritual.', '/images/brands/dornbracht/dornbracht-20.jpg'),
      l('Design Philosophy', 'Why Dornbracht design is different.', '/images/brands/dornbracht/dornbracht-15.jpg'),
    ],
  },
};

export const cardOrder = ['harvia', 'jeeo', 'mrsteam', 'planika', 'safyooz', 'takarabelmont', 'viega', 'wellness', 'alape', 'aquatica', 'ciclotte', 'corian', 'dornbracht'];

export function getBrand(slug) {
  return brandData[slug] ?? null;
}

export function getAllBrandSlugs() {
  return cardOrder;
}
