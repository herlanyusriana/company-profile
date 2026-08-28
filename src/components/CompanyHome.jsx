'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { contactEmail, phoneDisplay, whatsappHref } from '@/lib/contact';

const heroVideos = [
  { src: '/videos/dornbracht.mp4', poster: '/hero-poster-dornbracht.jpg' },
  { src: '/videos/viega.mp4', poster: '/hero-poster-viega.jpg' },
  { src: '/videos/ciclotte.mp4', poster: '/hero-poster-ciclotte.jpg' },
];

const categories = [
  {
    title: 'HARVIA Sauna',
    eyebrow: 'Authentic Finnish sauna experience',
    description: 'Premium sauna heaters, steam generators, and accessories for the ultimate wellness retreat.',
    image: '/images/brands/harvia/harvia-02.jpg',
    position: 'object-center',
  },
  {
    title: 'JEE-O Showers',
    eyebrow: 'Outdoor luxury redefined',
    description: 'Minimalist, all-weather outdoor showers that blend design with nature.',
    image: '/images/brands/jeeo/jeeo-03.jpg',
    position: 'object-center',
  },
  {
    title: 'MR. STEAM',
    eyebrow: 'Steam therapy at home',
    description: 'State-of-the-art steam generators and systems that transform any space into a personal spa.',
    image: '/images/brands/mrsteam/mrsteam-03.jpg',
    position: 'object-center',
  },
  {
    title: 'PLANIKA Fireplaces',
    eyebrow: 'Bio-ethanol elegance',
    description: 'Eco-friendly, ventless fireplaces that create warmth and ambiance in any space.',
    image: '/images/brands/planika/planika-04.jpg',
    position: 'object-center',
  },
  {
    title: 'SAFYOOZ Bathware',
    eyebrow: 'Handcrafted stone composite',
    description: 'Artisanal bathtubs, basins, and vanities made from natural stone composites.',
    image: '/images/brands/safyooz/safyooz-03.jpg',
    position: 'object-center',
  },
  {
    title: 'TAKARA BELMONT',
    eyebrow: 'Salon & spa innovation',
    description: 'Professional salon furniture and spa equipment designed for comfort and style.',
    image: '/images/brands/takarabelmont/takarabelmont-04.jpg',
    position: 'object-center',
  },
  {
    title: 'VIEGA Drainage',
    eyebrow: 'Precision in every detail',
    description: 'High-quality floor drains and shower channels for flawless wet room designs.',
    image: '/images/brands/viega/viega-02.png',
    position: 'object-center',
  },
  {
    title: 'Wellness Spaces',
    eyebrow: 'Integrated wellness environments',
    description: 'Combining sauna, steam, and fireplace elements into a cohesive living experience.',
    image: '/images/brands/harvia/harvia-05.jpg',
    position: 'object-center',
  },
];

const highlights = [
  {
    title: 'Reimagine your wellness space.',
    image: '/images/brands/mrsteam/mrsteam-02.jpg',
    href: '#collections',
  },
  {
    title: 'Luxury, curated for you.',
    image: '/images/brands/jeeo/jeeo-02.jpg',
    href: '#about',
  },
  {
    title: 'Visit our showroom.',
    image: '/images/brands/takarabelmont/takarabelmont-02.jpg',
    href: '#contact',
  },
];

const discoveries = [
  {
    title: 'Our expertise',
    label: 'About PT CJ Trading',
    image: '/images/brands/harvia/harvia-03.jpg',
  },
  {
    title: 'Designed to perform',
    label: 'Project solutions',
    image: '/images/brands/planika/planika-03.jpg',
  },
  {
    title: 'Built together',
    label: 'Partner with us',
    image: '/images/brands/safyooz/safyooz-02.jpg',
  },
];

const partnerLogos = [
  ['/images/logos/harvia_logo_b&w_trpn.png', 'HARVIA'],
  ['/images/logos/logo_jee-o_trpn.png', 'JEE-O'],
  ['/images/logos/mr.steam_b&w.png', 'MR. STEAM'],
  ['/images/logos/planika_b&w.png', 'PLANIKA'],
  ['/images/logos/safyooz_logo_b&w.png', 'SAFYOOZ'],
  ['/images/logos/takara_belmont_logo_trpn.png', 'TAKARA BELMONT'],
  ['/images/logos/viega_logo_trpn.png', 'VIEGA', true],
  ['/images/logos/dornbracht_new-tprn.png', 'DORNBRACHT'],
  ['/images/logos/corian_logo_b&w.png', 'CORIAN'],
  ['/images/logos/aquatica_logo_htm_trpn.png', 'AQUATICA'],
  ['/images/logos/ciclotte_logo_trpn.png', 'CICLOTTE'],
  ['/images/logos/alape-logo-tranparant.png', 'ALAPE'],
];

function ArrowIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BrandMark({ light = false }) {
  return (
    <a href="#top" className={`inline-flex items-center gap-3 ${light ? 'text-white' : 'text-black'}`} aria-label="CJ Trading home">
      <span className="grid size-9 place-items-center rounded-full border border-current/40 text-sm font-semibold tracking-[-0.08em]">CJ</span>
      <span className="text-[0.78rem] font-semibold uppercase leading-[0.85] tracking-[0.26em]">
        Trading<br />
        <span className="text-[0.58rem] font-normal tracking-[0.19em] opacity-70">Luxury Living</span>
      </span>
    </a>
  );
}

function LinkButton({ href, children, dark = false }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-4 rounded-md px-6 py-4 text-sm font-medium transition duration-300 ${
        dark ? 'bg-zinc-900 text-white hover:bg-zinc-700' : 'bg-white text-zinc-950 hover:bg-zinc-200'
      }`}
    >
      {children}
      <ArrowIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}

export default function CompanyHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const nextVideo = () => setCurrentVideoIndex((prev) => (prev + 1) % heroVideos.length);
  const currentVideo = heroVideos[currentVideoIndex];

  useEffect(() => {
    const elements = document.querySelectorAll('[data-catalog-reveal], [data-scroll-reveal]');
    const catalogTheme = document.querySelector('[data-catalog-theme]');
    const hero = document.querySelector('[data-scroll-hero]');
    const heroMedia = document.querySelector('[data-scroll-hero-media]');
    const heroContent = document.querySelector('[data-scroll-hero-content]');
    const parallaxMedia = document.querySelectorAll('[data-parallax-media]');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      catalogTheme?.classList.add('is-dark');
      return undefined;
    }

    document.documentElement.classList.add('motion-ready');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    let themeFrame;
    const syncScrollEffects = () => {
      cancelAnimationFrame(themeFrame);
      themeFrame = requestAnimationFrame(() => {
        const viewportHeight = window.innerHeight;

        if (catalogTheme) {
          const { top, bottom } = catalogTheme.getBoundingClientRect();
          const triggerPoint = viewportHeight * 0.7;
          const catalogIsActive = top <= triggerPoint && bottom > triggerPoint;
          catalogTheme.classList.toggle('is-dark', catalogIsActive);
        }

        if (hero && heroMedia && heroContent) {
          const heroHeight = hero.offsetHeight || viewportHeight;
          const progress = Math.min(Math.max(window.scrollY / heroHeight, 0), 1);
          heroMedia.style.setProperty('--hero-shift', `${progress * 54}px`);
          heroMedia.style.setProperty('--hero-scale', `${1.025 + progress * 0.035}`);
          heroContent.style.setProperty('--hero-content-shift', `${progress * -28}px`);
          heroContent.style.setProperty('--hero-content-opacity', `${Math.max(1 - progress * 1.15, 0)}`);
        }

        parallaxMedia.forEach((media) => {
          const parent = media.parentElement;
          if (!parent) return;
          const rect = parent.getBoundingClientRect();
          if (rect.bottom < 0 || rect.top > viewportHeight) return;
          const distanceFromCenter = rect.top + rect.height / 2 - viewportHeight / 2;
          const normalized = Math.max(-1, Math.min(1, distanceFromCenter / viewportHeight));
          media.style.setProperty('--parallax-shift', `${normalized * -22}px`);
        });
      });
    };

    elements.forEach((element) => observer.observe(element));
    window.addEventListener('scroll', syncScrollEffects, { passive: true });
    window.addEventListener('resize', syncScrollEffects);
    syncScrollEffects();

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove('motion-ready');
      window.removeEventListener('scroll', syncScrollEffects);
      window.removeEventListener('resize', syncScrollEffects);
      cancelAnimationFrame(themeFrame);
    };
  }, []);

  return (
    <main id="top" className="overflow-hidden bg-white text-zinc-950">
      <section data-scroll-hero className="relative min-h-[760px] h-[100svh] overflow-hidden bg-zinc-950 text-white">
        <video
          key={currentVideo.src}
          src={currentVideo.src}
          poster={currentVideo.poster}
          autoPlay
          muted
          playsInline
          preload="none"
          onEnded={nextVideo}
          className="scroll-hero-media absolute inset-0 h-full w-full object-cover"
          data-scroll-hero-media
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/35 to-black/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/35" />

        <header className="absolute inset-x-0 top-0 z-30 flex h-24 items-center justify-between px-6 sm:px-10 lg:px-16">
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="group flex items-center gap-3 rounded-full py-2 text-sm font-medium"
            aria-label="Open navigation"
          >
            <span className="flex w-6 flex-col gap-[5px]">
              <span className="h-px w-full bg-white transition group-hover:w-4" />
              <span className="h-px w-4 bg-white transition group-hover:w-full" />
            </span>
            Menu
          </button>
          <div className="absolute left-1/2 -translate-x-1/2">
            <BrandMark light />
          </div>
          <Link href="/contact" className="hidden rounded-full border border-white/40 px-5 py-2.5 text-sm backdrop-blur transition hover:bg-white hover:text-black sm:block">
            Contact us
          </Link>
        </header>

        <div data-scroll-hero-content className="scroll-hero-content relative z-10 flex h-full max-w-[1720px] items-end px-6 pb-14 sm:px-10 sm:pb-20 lg:px-24 lg:pb-24">
          <div className="max-w-4xl">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">PT CJ Trading · Luxury Living & Spa Solutions</p>
            <h1 className="max-w-3xl text-[clamp(3.7rem,8vw,8.8rem)] font-light leading-[0.84] tracking-[-0.065em]">
              Living.<br />Elevated.
            </h1>
            <div className="mt-9 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <LinkButton href="#collections">Discover more</LinkButton>
              <p className="max-w-sm text-sm leading-6 text-white/70">Premium wellness, spa, and luxury living products, curated for modern Indonesian spaces.</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-20 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {heroVideos.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentVideoIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentVideoIndex ? 'w-6 bg-white' : 'w-2 bg-white/50'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="absolute bottom-8 right-8 z-20 hidden items-center gap-3 text-xs text-white/60 lg:flex">
          <span className="h-px w-12 bg-white/40" /> Scroll to explore
        </div>
      </section>

      <section aria-label="CJ Trading highlights" className="bg-white px-5 py-24 text-zinc-950 sm:px-8 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-[1120px] gap-5 md:grid-cols-3">
          {highlights.map((item, index) => (
            <a data-scroll-reveal style={{ '--reveal-delay': `${index * 90}ms` }} key={item.title} href={item.href} className="group relative h-[360px] overflow-hidden rounded-[1.6rem] bg-zinc-900 text-white sm:h-[400px] md:h-[330px] lg:h-[360px]">
              <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-[1.035]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-7">
                <h2 className="max-w-[15rem] text-xl font-medium leading-tight tracking-[-0.035em] lg:text-2xl">{item.title}</h2>
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white/15 backdrop-blur transition group-hover:bg-white group-hover:text-black">
                  <ArrowIcon className="size-5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="collections" data-catalog-theme className="catalog-theme px-5 py-24 sm:px-8 lg:px-14 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-14 flex flex-col justify-between gap-9 lg:mb-20 lg:flex-row lg:items-end">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] opacity-45">Explore our collections</p>
              <h2 data-catalog-reveal className="catalog-reveal max-w-5xl text-[clamp(3.5rem,7vw,7.5rem)] font-light leading-[0.9] tracking-[-0.06em]">Your luxury living journey starts here.</h2>
            </div>
            <div className="flex shrink-0 items-end justify-between gap-7 lg:flex-col lg:items-end">
              <p className="max-w-sm text-sm leading-6 opacity-55">Discover complete product families shaped around wellness, design, and modern living.</p>
            </div>
          </div>

          <div className="space-y-5">
            {Array.from({ length: Math.ceil(categories.length / 2) }, (_, rowIndex) => (
              <div data-scroll-reveal style={{ '--reveal-delay': `${Math.min(rowIndex * 70, 210)}ms` }} className="catalog-row" key={rowIndex}>
                {categories.slice(rowIndex * 2, rowIndex * 2 + 2).map((item) => (
                  <Link
                    key={item.title}
                    href="/contact"
                    className="catalog-card group relative h-[620px] overflow-hidden rounded-[1.75rem] bg-zinc-900 text-white sm:h-[700px] lg:h-[720px]"
                  >
                    <Image src={item.image} alt={item.title} fill sizes="(max-width: 1024px) 100vw, 60vw" className={`object-cover ${item.position}`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/5 to-black/35" />
                    <div className="absolute inset-x-0 top-0 flex justify-center p-8 sm:p-10">
                      <h3 className="text-center text-3xl font-semibold tracking-[-0.045em] drop-shadow-lg sm:text-4xl">{item.title}</h3>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10">
                      <span className="mb-5 inline-flex rounded-full bg-white/15 px-4 py-2 text-xs backdrop-blur-md">{item.eyebrow}</span>
                      <div className="flex items-end justify-between gap-6">
                        <p className="max-w-xl text-base leading-6 text-white/90 sm:text-lg sm:leading-7">{item.description}</p>
                        <span className="grid size-12 shrink-0 place-items-center rounded-full bg-white/15 backdrop-blur transition duration-300 group-hover:bg-white group-hover:text-black">
                          <ArrowIcon className="size-5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cj-spec-section border-t border-zinc-200 bg-white px-5 py-24 text-zinc-950 sm:px-8 lg:px-14 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">More than fixtures</p>
          <h2 className="mb-16 max-w-5xl text-[clamp(3.5rem,7vw,7.5rem)] font-light leading-[0.9] tracking-[-0.06em]">From selection to specification.</h2>

          <div className="grid gap-6 lg:grid-cols-2">
            <article data-scroll-reveal className="group relative min-h-[650px] overflow-hidden rounded-[2rem] bg-zinc-900 text-white">
              <Image src="/images/brands/planika/planika-01.jpg" alt="Signature wellness collection" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-[65%_center] transition duration-700 group-hover:scale-[1.025]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/25" />
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10">
                <span className="mb-5 inline-flex rounded-full bg-white/15 px-4 py-2 text-xs backdrop-blur">Signature collection</span>
                <div className="flex items-end justify-between gap-6">
                  <div>
                    <h3 className="text-3xl font-medium tracking-[-0.04em]">Quiet luxury, made tangible.</h3>
                    <p className="mt-3 max-w-lg text-sm leading-6 text-white/65">Statement pieces selected to bring calm, clarity, and lasting character into your living spaces.</p>
                  </div>
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-white/15 backdrop-blur"><ArrowIcon className="size-5" /></span>
                </div>
              </div>
            </article>

            <article data-scroll-reveal style={{ '--reveal-delay': '100ms' }} className="group relative min-h-[650px] overflow-hidden rounded-[2rem] bg-zinc-900 text-white">
              <Image src="/images/brands/jeeo/jeeo-04.jpg" alt="CJ Trading complete project service" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-[1.025]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/20" />
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10">
                <span className="mb-5 inline-flex rounded-full bg-white/15 px-4 py-2 text-xs backdrop-blur">Project partnership</span>
                <div className="flex items-end justify-between gap-6">
                  <div>
                    <h3 className="text-3xl font-medium tracking-[-0.04em]">From specification to delivery.</h3>
                    <p className="mt-3 max-w-lg text-sm leading-6 text-white/65">One dependable partner for developers, architects, designers, and hospitality projects.</p>
                  </div>
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-white/15 backdrop-blur"><ArrowIcon className="size-5" /></span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="cj-showroom-section px-5 py-24 sm:px-8 lg:px-14 lg:py-32">
        <div data-scroll-reveal className="mx-auto grid max-w-[1440px] overflow-hidden rounded-[2rem] bg-black text-white lg:grid-cols-[0.9fr_1.2fr]">
          <div className="flex flex-col justify-center p-9 sm:p-14 lg:p-20">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-white/50">Experience the difference</p>
            <h2 className="text-4xl font-medium leading-[1.05] tracking-[-0.05em] sm:text-6xl">See, feel, and specify with confidence.</h2>
            <p className="mt-7 max-w-lg text-base leading-7 text-white/65">Visit our showroom and explore finishes, proportions, and complete wellness combinations with our product specialists.</p>
            <div className="mt-9"><LinkButton href="/contact">Plan your visit</LinkButton></div>
          </div>
          <div className="relative min-h-[480px] lg:min-h-[650px]">
            <Image data-parallax-media src="/images/brands/takarabelmont/takarabelmont-01.jpg" alt="Showroom PT CJ Trading" fill sizes="(max-width: 1024px) 100vw, 60vw" className="parallax-media object-cover" />
          </div>
        </div>
      </section>

      <section className="px-5 pb-28 sm:px-8 lg:px-14 lg:pb-36">
        <div className="mx-auto max-w-[1180px]">
          <h2 className="mb-14 text-center text-5xl font-medium tracking-[-0.05em] sm:text-6xl">Discover CJ Trading</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {discoveries.map((item, index) => (
              <a data-scroll-reveal style={{ '--reveal-delay': `${index * 90}ms` }} key={item.title} href={index === 2 ? '#contact' : '#about'} className="group relative h-[470px] overflow-hidden rounded-[1.75rem] bg-zinc-900 text-white">
                <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-[1.04]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-7">
                  <div>
                    <p className="mb-2 text-xs uppercase tracking-[0.18em] text-white/60">{item.label}</p>
                    <h3 className="text-2xl font-medium tracking-[-0.035em]">{item.title}</h3>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white/15 backdrop-blur"><ArrowIcon className="size-5" /></span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] px-5 py-24 sm:px-8 lg:px-14 lg:py-28 overflow-hidden">
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track {
            display: flex;
            animation: marquee 40s linear infinite;
            width: max-content;
            user-select: none;
            -webkit-user-select: none;
          }
          .marquee-item {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            margin-right: 3rem;
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="mx-auto max-w-[1440px]">
          <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.25em] text-white/60">Our partners</p>
          <h2 className="mb-14 text-center text-4xl font-medium tracking-[-0.045em] sm:text-5xl text-white">Trusted brands we carry.</h2>
          <div className="relative overflow-hidden">
            <div className="marquee-track">
              {partnerLogos.concat(partnerLogos).map(([src, alt, plain], idx) => (
                <div key={`${alt}-${idx}`} className="marquee-item select-none">
                  <img src={src} alt={alt} draggable={false} className={`max-h-12 w-auto object-contain sm:max-h-16 ${plain ? '' : 'brightness-0 invert'}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-zinc-200 px-5 py-24 sm:px-8 lg:px-14 lg:py-32">
        <div data-scroll-reveal className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">PT CJ Trading</p>
            <h2 className="text-5xl font-medium leading-[0.98] tracking-[-0.055em] sm:text-7xl">Better spaces begin with better details.</h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="max-w-2xl text-xl leading-8 text-zinc-600">We connect thoughtful design with dependable products—helping homes, hotels, and commercial projects create living and wellness spaces that look considered and perform beautifully.</p>
            <div className="mt-12 grid grid-cols-3 gap-5 border-t border-zinc-200 pt-8">
              <div><strong className="block text-3xl font-medium tracking-[-0.04em]">End-to-end</strong><span className="mt-2 block text-xs text-zinc-500">Project support</span></div>
              <div><strong className="block text-3xl font-medium tracking-[-0.04em]">Curated</strong><span className="mt-2 block text-xs text-zinc-500">Product portfolio</span></div>
              <div><strong className="block text-3xl font-medium tracking-[-0.04em]">Indonesia</strong><span className="mt-2 block text-xs text-zinc-500">Market expertise</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#050607] px-5 py-24 text-white sm:px-8 lg:px-14 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <p className="mb-8 text-xs font-semibold uppercase tracking-[0.25em] text-white/45">Start a conversation</p>
          <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
            <h2 className="max-w-5xl text-[clamp(3.5rem,7vw,7.5rem)] font-light leading-[0.9] tracking-[-0.06em]">Let&apos;s shape your next living space.</h2>
            <a href={`mailto:${contactEmail}`} className="group inline-flex shrink-0 items-center gap-5 text-lg">
              {contactEmail}
              <span className="grid size-14 place-items-center rounded-full bg-white text-black transition group-hover:translate-x-1"><ArrowIcon className="size-5" /></span>
            </a>
          </div>

          <footer className="mt-28 border-t border-white/15 pt-10">
            <div className="grid gap-12 md:grid-cols-4">
              <div className="md:col-span-2"><BrandMark light /><p className="mt-6 max-w-sm text-sm leading-6 text-white/45">Premium wellness, spa, and luxury living products for considered spaces across Indonesia.</p></div>
              <div><p className="mb-4 text-xs uppercase tracking-[0.18em] text-white/40">Explore</p><div className="flex flex-col gap-3 text-sm"><Link href="/products">Collections</Link><Link href="/about">Company</Link><Link href="/project-references">Projects</Link></div></div>
              <div><p className="mb-4 text-xs uppercase tracking-[0.18em] text-white/40">Contact</p><div className="flex flex-col gap-3 text-sm text-white/75"><span>Jakarta, Indonesia</span><a href={whatsappHref} target="_blank" rel="noreferrer">{phoneDisplay}</a><a href={`mailto:${contactEmail}`}>{contactEmail}</a></div></div>
            </div>
            <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row"><span>© {new Date().getFullYear()} PT CJ Trading. All rights reserved.</span><a href="#top" className="text-white/70">Back to top ↑</a></div>
          </footer>
        </div>
      </section>

      <a href={whatsappHref} target="_blank" rel="noreferrer" className="fixed bottom-5 right-5 z-40 hidden items-center gap-3 rounded-full border border-black/10 bg-white px-4 py-3 text-sm font-medium text-black shadow-2xl transition hover:-translate-y-1 sm:flex">
        <span className="grid size-8 place-items-center rounded-full bg-black text-xs text-white">CJ</span>
        Talk to us
      </a>

      <div className={`fixed inset-0 z-50 transition ${menuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!menuOpen}>
        <button type="button" aria-label="Close navigation" onClick={() => setMenuOpen(false)} className={`absolute inset-0 bg-black/55 backdrop-blur-sm transition-opacity ${menuOpen ? 'opacity-100' : 'opacity-0'}`} />
        <nav className={`absolute inset-y-0 left-0 flex w-full max-w-xl flex-col bg-[#f5f5f2] p-7 transition-transform duration-500 sm:p-12 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex items-center justify-between"><BrandMark /><button type="button" onClick={() => setMenuOpen(false)} className="grid size-11 place-items-center rounded-full border border-black/15 text-2xl" aria-label="Close navigation">×</button></div>
          <div className="my-auto flex flex-col gap-2">
            {[['About Us', '/about'], ['Products', '/products'], ['Project References', '/project-references'], ['Contact Us', '/contact']].map(([label, href]) => (
              <Link key={label} href={href} onClick={() => setMenuOpen(false)} className="group flex items-center justify-between border-b border-black/10 py-5 text-3xl font-medium tracking-[-0.04em] sm:text-5xl">{label}<ArrowIcon className="size-6 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" /></Link>
            ))}
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">PT CJ Trading · Jakarta, Indonesia</p>
        </nav>
      </div>
    </main>
  );
}