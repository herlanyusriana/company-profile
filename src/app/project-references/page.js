import Image from 'next/image';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';

export const metadata = { title: 'Project References | PT CJ Trading' };

const projects = [
  ['Luxury Wellness Retreat', 'Hotels & Resorts', '/images/brands/planika/planika-04.jpg'],
  ['Private Spa Sanctuary', 'Premium Residential', '/images/brands/mrsteam/mrsteam-04.jpg'],
  ['Contemporary Living Space', 'Residential Development', '/images/brands/jeeo/jeeo-04.jpg'],
  ['Curated Showroom Experience', 'Showroom & Retail', '/images/brands/takarabelmont/takarabelmont-03.jpg'],
];

export default function ProjectsPage() {
  return (
    <main className="bg-[#050607] text-white">
      <section className="relative flex min-h-[680px] items-end overflow-hidden px-6 pb-20 sm:px-10 lg:px-20"><SiteHeader /><Image src="/images/brands/planika/planika-02.png" alt="Luxury living and wellness reference" fill priority sizes="100vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/35 to-black/10" /><div className="relative z-10 max-w-5xl"><p className="mb-5 text-xs uppercase tracking-[0.28em] text-white/60">Project references</p><h1 className="text-[clamp(4rem,9vw,8rem)] font-light leading-[0.86] tracking-[-0.065em]">Spaces brought<br />to life.</h1></div></section>
      <section className="px-5 py-24 sm:px-8 lg:px-14 lg:py-32"><div className="mx-auto max-w-[1400px]"><div className="grid gap-6 lg:grid-cols-2">{projects.map(([title,type,image])=><article key={title} className="group relative min-h-[650px] overflow-hidden rounded-[2rem]"><Image src={image} alt={title} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-[1.025]" /><div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/10" /><div className="absolute inset-x-0 bottom-0 p-8 sm:p-10"><p className="mb-3 text-xs uppercase tracking-[0.2em] text-white/55">{type}</p><h2 className="text-3xl font-medium tracking-[-0.045em] sm:text-4xl">{title}</h2></div></article>)}</div></div></section>
      <SiteFooter />
    </main>
  );
}