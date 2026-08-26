'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';

const brandData = {
  harvia: {
    name: 'HARVIA Sauna',
    description: 'Premium sauna heaters, steam generators, and accessories for the ultimate wellness retreat.',
    thumbnail: '/images/brands/harvia/harvia-03.jpg',
    images: Array.from({ length: 22 }, (_, i) => {
      const n = String(i + 1).padStart(2, '0');
      if (n === '04') return null;
      if (n === '13') return `/images/brands/harvia/harvia-${n}.png`;
      if (n === '21' || n === '22') return `/images/brands/harvia/harvia-${n}.jfif`;
      return `/images/brands/harvia/harvia-${n}.jpg`;
    }).filter(Boolean),
  },
  jeeo: {
    name: 'JEE-O Showers',
    description: 'Minimalist, all-weather outdoor showers that blend design with nature.',
    thumbnail: '/images/brands/jeeo/jeeo-02.jpg',
    images: Array.from({ length: 13 }, (_, i) => {
      const n = String(i + 1).padStart(2, '0');
      if (['05', '08', '12'].includes(n)) return `/images/brands/jeeo/jeeo-${n}.jfif`;
      return `/images/brands/jeeo/jeeo-${n}.jpg`;
    }),
  },
  mrsteam: {
    name: 'MR. STEAM',
    description: 'State-of-the-art steam generators and systems that transform any space into a personal spa.',
    thumbnail: '/images/brands/mrsteam/mrsteam-02.jpg',
    images: Array.from({ length: 21 }, (_, i) => {
      const n = String(i + 1).padStart(2, '0');
      if (n === '12') return `/images/brands/mrsteam/mrsteam-${n}.jfif`;
      return `/images/brands/mrsteam/mrsteam-${n}.jpg`;
    }),
  },
  planika: {
    name: 'PLANIKA Fireplaces',
    description: 'Eco-friendly, ventless fireplaces that create warmth and ambiance in any space.',
    thumbnail: '/images/brands/planika/planika-03.jpg',
    images: Array.from({ length: 32 }, (_, i) => {
      const n = String(i + 1).padStart(2, '0');
      if (n === '02') return `/images/brands/planika/planika-${n}.png`;
      return `/images/brands/planika/planika-${n}.jpg`;
    }),
  },
  safyooz: {
    name: 'SAFYOOZ Bathware',
    description: 'Artisanal bathtubs, basins, and vanities made from natural stone composites.',
    thumbnail: '/images/brands/safyooz/safyooz-02.jpg',
    images: Array.from({ length: 17 }, (_, i) => {
      const n = String(i + 1).padStart(2, '0');
      if (i < 7) return `/images/brands/safyooz/safyooz-${n}.jpg`;
      return `/images/brands/safyooz/safyooz-${n}.png`;
    }),
  },
  takarabelmont: {
    name: 'TAKARA BELMONT',
    description: 'Professional salon furniture and spa equipment designed for comfort and style.',
    thumbnail: '/images/brands/takarabelmont/takarabelmont-02.jpg',
    images: Array.from({ length: 36 }, (_, i) => {
      const n = String(i + 1).padStart(2, '0');
      return `/images/brands/takarabelmont/takarabelmont-${n}.jpg`;
    }),
  },
  viega: {
    name: 'VIEGA Drainage',
    description: 'High-quality floor drains and shower channels for flawless wet room designs.',
    thumbnail: '/images/brands/viega/viega-03.jpg',
    images: Array.from({ length: 12 }, (_, i) => {
      const n = String(i + 1).padStart(2, '0');
      if (['02', '04', '05', '12'].includes(n)) return `/images/brands/viega/viega-${n}.png`;
      return `/images/brands/viega/viega-${n}.jpg`;
    }),
  },
  wellness: {
    name: 'Wellness Spaces',
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
  },
};

const cardOrder = ['harvia', 'jeeo', 'mrsteam', 'planika', 'safyooz', 'takarabelmont', 'viega', 'wellness'];

function ArrowIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronLeft({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRight({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ProductsPage() {
  const [galleryBrand, setGalleryBrand] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openGallery = useCallback((slug) => {
    setGalleryBrand(slug);
    setLightboxIndex(null);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeGallery = useCallback(() => {
    setGalleryBrand(null);
    setLightboxIndex(null);
    document.body.style.overflow = '';
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const nextImage = useCallback(() => {
    if (galleryBrand && lightboxIndex !== null) {
      const total = brandData[galleryBrand].images.length;
      setLightboxIndex((prev) => (prev + 1) % total);
    }
  }, [galleryBrand, lightboxIndex]);

  const prevImage = useCallback(() => {
    if (galleryBrand && lightboxIndex !== null) {
      const total = brandData[galleryBrand].images.length;
      setLightboxIndex((prev) => (prev - 1 + total) % total);
    }
  }, [galleryBrand, lightboxIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex !== null) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
      } else if (galleryBrand) {
        if (e.key === 'Escape') closeGallery();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [galleryBrand, lightboxIndex, closeGallery, closeLightbox, nextImage, prevImage]);

  const brand = galleryBrand ? brandData[galleryBrand] : null;

  return (
    <main className="bg-white text-zinc-950">
      <section className="relative flex min-h-[620px] items-end overflow-hidden bg-black px-6 pb-20 text-white sm:px-10 lg:px-20">
        <SiteHeader />
        <Image src="/images/brands/harvia/harvia-02.jpg" alt="CJ Trading product collections" fill priority sizes="100vw" className="object-cover object-[65%_center]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/30 to-transparent" />
        <div className="relative z-10">
          <p className="mb-5 text-xs uppercase tracking-[0.28em] text-white/60">Product portfolio</p>
          <h1 className="text-[clamp(4rem,9vw,8rem)] font-light leading-[0.86] tracking-[-0.065em]">Designed for<br />modern wellness.</h1>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-14 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-14 max-w-2xl">
            <h2 className="text-5xl font-medium tracking-[-0.05em] sm:text-7xl">Explore our collections.</h2>
            <p className="mt-6 text-lg leading-7 text-zinc-600">A curated portfolio of wellness, spa, and luxury living products for complete specifications.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cardOrder.map((slug) => {
              const item = brandData[slug];
              return (
                <article
                  key={slug}
                  onClick={() => openGallery(slug)}
                  className="group overflow-hidden rounded-[1.75rem] bg-[#f2f1ee] cursor-pointer transition duration-300 hover:shadow-lg"
                >
                  <div className="relative h-[460px] overflow-hidden">
                    <Image
                      src={item.thumbnail}
                      alt={item.name}
                      fill
                      sizes="(max-width:768px) 100vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-x-0 bottom-0 flex items-center justify-center p-7 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-2.5 text-sm font-medium text-black backdrop-blur">
                        View gallery ({item.images.length})
                        <ArrowIcon className="size-4" />
                      </span>
                    </div>
                  </div>
                  <div className="p-7">
                    <h2 className="text-2xl font-medium tracking-[-0.04em]">{item.name}</h2>
                    <p className="mt-3 text-sm leading-6 text-zinc-600">{item.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      {brand && (
        <div
          className={`fixed inset-0 z-50 transition-all duration-500 ${
            galleryBrand ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
        >
          <button
            type="button"
            aria-label="Close gallery"
            onClick={closeGallery}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
          />
          <div className={`absolute inset-y-0 right-0 w-full max-w-5xl bg-[#f5f5f2] transition-transform duration-500 ${
            galleryBrand ? 'translate-x-0' : 'translate-x-full'
          }`}>
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between border-b border-black/10 px-7 py-5">
                <div>
                  <h2 className="text-2xl font-medium tracking-[-0.04em]">{brand.name}</h2>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-zinc-500">{brand.images.length} images</p>
                </div>
                <button
                  type="button"
                  onClick={closeGallery}
                  className="grid size-11 place-items-center rounded-full border border-black/15 text-2xl transition hover:bg-black/5"
                  aria-label="Close gallery"
                >
                  ×
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-5">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                  {brand.images.map((src, idx) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => setLightboxIndex(idx)}
                      className="group relative aspect-[4/3] overflow-hidden rounded-[1rem] bg-zinc-200"
                    >
                      <Image
                        src={src}
                        alt={`${brand.name} ${idx + 1}`}
                        fill
                        sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
                        className="object-cover transition duration-500 group-hover:scale-[1.05]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox */}
      {lightboxIndex !== null && brand && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#050607]">
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-10 grid size-11 place-items-center rounded-full border border-white/20 text-white text-2xl transition hover:bg-white/10"
            aria-label="Close lightbox"
          >
            ×
          </button>

          <div className="absolute top-5 left-5 z-10 text-sm text-white/50">
            <span className="text-white font-medium">{lightboxIndex + 1}</span>
            {' / '}
            <span>{brand.images.length}</span>
          </div>

          <button
            type="button"
            onClick={prevImage}
            className="absolute left-4 top-1/2 z-10 grid size-12 -translate-y-1/2 place-items-center rounded-full border border-white/20 text-white transition hover:bg-white/10"
            aria-label="Previous image"
          >
            <ChevronLeft className="size-6" />
          </button>

          <div className="relative h-[80vh] w-[90vw] max-w-[1200px]">
            <Image
              src={brand.images[lightboxIndex]}
              alt={`${brand.name} ${lightboxIndex + 1}`}
              fill
              sizes="90vw"
              className="object-contain"
              key={lightboxIndex}
              priority
            />
          </div>

          <button
            type="button"
            onClick={nextImage}
            className="absolute right-4 top-1/2 z-10 grid size-12 -translate-y-1/2 place-items-center rounded-full border border-white/20 text-white transition hover:bg-white/10"
            aria-label="Next image"
          >
            <ChevronRight className="size-6" />
          </button>

          <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
            {brand.images.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setLightboxIndex(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === lightboxIndex ? 'w-5 bg-white' : 'w-1.5 bg-white/30'
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      <SiteFooter />
    </main>
  );
}