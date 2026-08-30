import Image from 'next/image';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';

export const metadata = { title: 'Project References | PT CJ Trading' };

const projects = [
  { title: 'Anandamaya Residence', type: 'Premium Residential', image: '/images/project-references/Anandamaya Residence.jpg' },
  { title: 'De Toya - Seminyak, Bali', type: 'Hotels & Resorts', image: '/images/project-references/De Toya - Seminyak, Bali.jpg' },
  { title: 'Dharmawangsa Apartement - Jakarta', type: 'Premium Residential', image: '/images/project-references/Dharmawangsa Apartement - Jakarta.jpg' },
  { title: 'Four Season Jimbaran - Bali', type: 'Hotels & Resorts', image: '/images/project-references/Four Season Jimbaran - Bali.jpg' },
  { title: 'Four Season Residence - Jakarta', type: 'Premium Residential', image: '/images/project-references/Four Season Residence - Jakarta.jpg' },
  { title: 'Four Season Sayan - Ubud Bali', type: 'Hotels & Resorts', image: '/images/project-references/Four Season Sayan - Ubud Bali.jpg' },
  { title: 'Grand Hyatt - Jakarta', type: 'Hotels & Resorts', image: '/images/project-references/Grand Hyatt - Jakarta.jpg' },
  { title: 'Hotel Bumi Sergah - Kalimantan', type: 'Hotels & Resorts', image: '/images/project-references/Hotel Bumi Sergah - Kalimantan.jpg' },
  { title: 'Jumeirah Resort - Bali', type: 'Hotels & Resorts', image: '/images/project-references/Jumeirah Resort - Bali.jpeg' },
  { title: 'Keraton Private Residence', type: 'Premium Residential', image: '/images/project-references/Keraton Private Residence.jpg' },
  { title: 'Luna 2 - Bali', type: 'Hotels & Resorts', image: '/images/project-references/Luna 2 - Bali.jpg' },
  { title: 'Mangkuluhur City', type: 'Commercial', image: '/images/project-references/Mangkuluhur City.jpg' },
  { title: 'Menara Astra - Jakarta', type: 'Commercial', image: '/images/project-references/Menara Astra - Jakarta.jpg' },
  { title: 'New World Grand - Bali', type: 'Hotels & Resorts', image: '/images/project-references/New World Grand - Bali.jpg' },
  { title: 'One Cassablanca Residence - Jakarta', type: 'Premium Residential', image: '/images/project-references/One Cassablanca Residence - Jakarta.jpg' },
  { title: 'Park Hyatt - Jakarta', type: 'Hotels & Resorts', image: '/images/project-references/Park Hyatt - Jakarta.jpg' },
  { title: 'Providence Park - Jakarta', type: 'Premium Residential', image: '/images/project-references/Providence Park - Jakarta.jpg' },
  { title: 'Pullman Mandalika - Lombok', type: 'Hotels & Resorts', image: '/images/project-references/Pullman Mandalika - Lombok.jpg' },
  { title: 'Rosewood - Tanah Lot', type: 'Hotels & Resorts', image: '/images/project-references/Rosewood - Tanah Lot.jpg' },
  { title: 'Shangri La Nusa Dua - Bali', type: 'Hotels & Resorts', image: '/images/project-references/Shangri La Nusa Dua - Bali.jpg' },
  { title: 'Sheraton Senggigi Beach Resort-Bali', type: 'Hotels & Resorts', image: '/images/project-references/Sheraton Senggigi Beach Resort-Bali.jpg' },
  { title: 'St. Regis - Bali', type: 'Hotels & Resorts', image: '/images/project-references/St. Regis - Bali.jpg' },
  { title: 'St. Regis - Jakarta', type: 'Hotels & Resorts', image: '/images/project-references/St. Regis - Jakarta.jpg' },
  { title: 'Svarga Villa - Bali', type: 'Premium Residential', image: '/images/project-references/Svarga Villa - Bali.jpg' },
  { title: 'The Kerobokan Villa - Bali', type: 'Premium Residential', image: '/images/project-references/The Kerobokan Villa - Bali.jpg' },
  { title: 'The Langham - Jakarta', type: 'Hotels & Resorts', image: '/images/project-references/The Langham - Jakarta.jpeg' },
  { title: 'Verde 2 Apartment - Jakarta', type: 'Premium Residential', image: '/images/project-references/Verde 2 Apartment - Jakarta.jpg' },
  { title: 'Verde Apartment', type: 'Premium Residential', image: '/images/project-references/Verde Apartment.jpg' },
  { title: 'Villa Mimpi - Bali', type: 'Premium Residential', image: '/images/project-references/Villa Mimpi - Bali.jpg' },
  { title: 'Waldorf Astoria Nusa Dua - Bali', type: 'Hotels & Resorts', image: '/images/project-references/Waldorf Astoria Nusa Dua - Bali.jpg' },
  { title: 'Ziva Villa - Bali', type: 'Premium Residential', image: '/images/project-references/Ziva Villa - Bali.jpg' },
  { title: 'SR JDC', type: 'Project Reference', image: '/images/project-references/SR JDC.jpeg' },
];

export default function ProjectsPage() {
  return (
    <main className="bg-[#050607] text-white">
      <section className="relative flex min-h-[680px] items-end overflow-hidden px-6 pb-20 sm:px-10 lg:px-20">
        <SiteHeader />
        <Image
          src="/images/brands/planika/planika-02.png"
          alt="Luxury living and wellness reference"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/35 to-black/10" />
        <div className="relative z-10 max-w-5xl">
          <p className="mb-5 text-xs uppercase tracking-[0.28em] text-white/60">Project references</p>
          <h1 className="text-[clamp(4rem,9vw,8rem)] font-light leading-[0.86] tracking-[-0.065em]">
            Spaces brought<br />to life.
          </h1>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-14 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map(({ title, type, image }) => (
              <article
                key={title}
                className="group relative min-h-[650px] overflow-hidden rounded-[2rem]"
              >
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.025]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/10" />
                <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
                  <p className="mb-3 text-xs uppercase tracking-[0.2em] text-white/55">{type}</p>
                  <h2 className="text-3xl font-medium tracking-[-0.045em] sm:text-4xl">{title}</h2>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
