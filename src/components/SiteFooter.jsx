import Link from 'next/link';
import { SiteBrand } from './SiteHeader';
import { contactEmail, phoneDisplay, whatsappHref } from '@/lib/contact';

export default function SiteFooter() {
  return (
    <footer className="bg-[#050607] px-6 py-16 text-white sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2"><SiteBrand light /><p className="mt-6 max-w-sm text-sm leading-6 text-white/45">Premium bathroom products and project solutions for considered spaces across Indonesia.</p></div>
          <div><p className="mb-4 text-xs uppercase tracking-[0.18em] text-white/40">Pages</p><div className="flex flex-col gap-3 text-sm"><Link href="/about">About Us</Link><Link href="/products">Products</Link><Link href="/project-references">Project References</Link></div></div>
          <div><p className="mb-4 text-xs uppercase tracking-[0.18em] text-white/40">Contact</p><div className="flex flex-col gap-3 text-sm text-white/70"><span>Jakarta, Indonesia</span><a href={whatsappHref} target="_blank" rel="noreferrer">{phoneDisplay}</a><a href={`mailto:${contactEmail}`}>{contactEmail}</a></div></div>
        </div>
        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row"><span>© {new Date().getFullYear()} PT CJ Trading. All rights reserved.</span><Link href="/contact" className="text-white/70">Start a conversation →</Link></div>
      </div>
      <a href={whatsappHref} target="_blank" rel="noreferrer" className="fixed bottom-5 right-5 z-40 hidden items-center gap-3 rounded-full border border-black/10 bg-white px-4 py-3 text-sm font-medium text-black shadow-2xl transition hover:-translate-y-1 sm:flex"><span className="grid size-8 place-items-center rounded-full bg-black text-xs text-white">CJ</span>WhatsApp us</a>
    </footer>
  );
}
