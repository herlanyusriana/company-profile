'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import SiteHeader from './SiteHeader';

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

export default function BrandView({ brand }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () => setLightboxIndex((prev) => (prev + 1) % brand.images.length);
  const prevImage = () => setLightboxIndex((prev) => (prev - 1 + brand.images.length) % brand.images.length);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex !== null) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxIndex]);

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  return (
    <main className="bg-white text-zinc-950">
      {/* Hero */}
      <section className="relative flex min-h-[620px] items-end overflow-hidden bg-black px-6 pb-20 text-white sm:px-10 lg:px-20">
        <SiteHeader />
        <Image
          src={brand.thumbnail}
          alt={brand.name}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[60%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/35 to-black/10" />
        <div className="relative z-10 max-w-5xl">
          <Link
            href="/products"
            className="mb-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-white/60 transition hover:text-white"
          >
            <ChevronLeft className="size-4" />
            All products
          </Link>
          <p className="mb-5 text-xs uppercase tracking-[0.28em] text-white/60">Product portfolio</p>
          <h1 className="text-[clamp(3rem,7vw,7rem)] font-light leading-[0.88] tracking-[-0.06em]">{brand.name}</h1>
          <p className="mt-7 max-w-xl text-lg leading-7 text-white/70">{brand.description}</p>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.28em] text-zinc-400">Gallery</p>
              <h2 className="text-4xl font-medium tracking-[-0.045em] sm:text-6xl">Collection.</h2>
            </div>
            <p className="hidden text-sm text-zinc-500 sm:block">{brand.images.length} images</p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {brand.images.map((src, idx) => (
              <button
                key={src}
                type="button"
                onClick={() => setLightboxIndex(idx)}
                className="group relative aspect-[4/3] overflow-hidden rounded-[1rem] bg-zinc-200 cursor-pointer"
              >
                <Image
                  src={src}
                  alt={`${brand.name} ${idx + 1}`}
                  fill
                  sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.05]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
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

    </main>
  );
}
