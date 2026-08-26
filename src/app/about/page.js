import Image from 'next/image';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';

export const metadata = { title: 'About Us | PT CJ Trading' };

export default function AboutPage() {
  return (
    <main className="bg-white text-zinc-950">
      <section className="relative flex min-h-[760px] items-end overflow-hidden bg-black px-6 pb-20 text-white sm:px-10 lg:px-20 lg:pb-24">
        <SiteHeader />
        <Image src="/images/brands/harvia/harvia-01.jpg" alt="CJ Trading luxury living showroom" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/35 to-black/10" />
        <div className="relative z-10 max-w-5xl"><p className="mb-6 text-xs uppercase tracking-[0.28em] text-white/60">About PT CJ Trading</p><h1 className="text-[clamp(4rem,9vw,9rem)] font-light leading-[0.85] tracking-[-0.065em]">Built around<br />better living.</h1></div>
      </section>
      <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32"><div className="mx-auto grid max-w-[1320px] gap-14 lg:grid-cols-2 lg:gap-24"><h2 className="text-5xl font-medium leading-[0.98] tracking-[-0.055em] sm:text-7xl">The details define the experience.</h2><div><p className="text-xl leading-8 text-zinc-600">PT CJ Trading delivers curated wellness, spa, and luxury living products for residential, hospitality, and commercial spaces across Indonesia.</p><p className="mt-6 leading-7 text-zinc-500">We work alongside architects, designers, developers, and homeowners—from product selection and technical coordination through delivery.</p></div></div></section>
      <section className="grid bg-[#f1f0ed] lg:grid-cols-2"><div className="relative min-h-[560px]"><Image src="/images/brands/mrsteam/mrsteam-01.jpg" alt="Premium spa and wellness experience" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" /></div><div className="flex flex-col justify-center p-10 sm:p-16 lg:p-24"><p className="mb-5 text-xs uppercase tracking-[0.24em] text-zinc-500">Our approach</p><h2 className="text-4xl font-medium tracking-[-0.05em] sm:text-6xl">Curated. Coordinated. Dependable.</h2><p className="mt-7 max-w-xl leading-7 text-zinc-600">Every collection is considered for aesthetics, compatibility, performance, and long-term service—so beautiful ideas can become reliable living and wellness spaces.</p></div></section>
      <SiteFooter />
    </main>
  );
}