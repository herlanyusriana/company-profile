import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import ContactForm from '@/components/ContactForm';
import { contactEmail, phoneDisplay, whatsappHref } from '@/lib/contact';

export const metadata = { title: 'Contact Us | PT CJ Trading' };

export default function ContactPage() {
  return (
    <main className="bg-white text-zinc-950">
      <section className="relative flex min-h-[560px] items-end bg-[#050607] px-6 pb-20 text-white sm:px-10 lg:px-20"><SiteHeader /><div><p className="mb-5 text-xs uppercase tracking-[0.28em] text-white/50">Contact us</p><h1 className="text-[clamp(4rem,9vw,8rem)] font-light leading-[0.86] tracking-[-0.065em]">Let&apos;s create<br />something considered.</h1></div></section>
      <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32"><div className="mx-auto grid max-w-[1320px] gap-16 lg:grid-cols-[0.8fr_1.2fr]"><div><h2 className="text-4xl font-medium tracking-[-0.05em]">Talk to our team.</h2><div className="mt-10 space-y-7 text-zinc-600"><div><p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Email</p><a href={`mailto:${contactEmail}`} className="mt-2 block text-xl text-black">{contactEmail}</a></div><div><p className="text-xs uppercase tracking-[0.2em] text-zinc-400">WhatsApp</p><a href={whatsappHref} target="_blank" rel="noreferrer" className="mt-2 block text-xl text-black">{phoneDisplay}</a></div><div><p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Location</p><p className="mt-2 text-xl text-black">Jakarta, Indonesia</p></div></div></div><ContactForm /></div></section>
      <SiteFooter />
    </main>
  );
}
