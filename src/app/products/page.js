import Image from 'next/image';
import Link from 'next/link';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import { brandData, cardOrder } from '@/lib/brands';

export const metadata = { title: 'Products | PT CJ Trading' };

function ArrowIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ProductsPage() {
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
                <Link
                  key={slug}
                  href={`/products/${slug}`}
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
                        View collection ({item.images.length})
                        <ArrowIcon className="size-4" />
                      </span>
                    </div>
                  </div>
                  <div className="p-7">
                    <h2 className="text-2xl font-medium tracking-[-0.04em]">{item.name}</h2>
                    <p className="mt-3 text-sm leading-6 text-zinc-600">{item.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
