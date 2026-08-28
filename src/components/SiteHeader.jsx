'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const navigation = [
  ['About Us', '/about'],
  ['Products', '/products'],
  ['Project References', '/project-references'],
  ['Contact Us', '/contact'],
];

function ArrowIcon() {
  return (
    <svg className="size-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SiteBrand({ light = false }) {
  return (
    <Link href="/" className="inline-flex items-center" aria-label="CJ Trading home">
      <Image
        src="/LOGO_CJ.png"
        alt="CJ Trading"
        width={594}
        height={420}
        priority
        className={`h-10 w-auto object-contain sm:h-12 ${light ? 'brightness-0 invert' : ''}`}
      />
    </Link>
  );
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-40 flex h-24 items-center justify-between px-6 text-white sm:px-10 lg:px-16">
        <button type="button" onClick={() => setOpen(true)} className="group flex items-center gap-3 py-2 text-sm font-medium" aria-label="Open navigation">
          <span className="flex w-6 flex-col gap-[5px]"><span className="h-px w-full bg-white" /><span className="h-px w-4 bg-white transition group-hover:w-full" /></span>
          Menu
        </button>
        <div className="absolute left-1/2 -translate-x-1/2"><SiteBrand light /></div>
        <Link href="/contact" className="hidden rounded-full border border-white/35 px-5 py-2.5 text-sm backdrop-blur transition hover:bg-white hover:text-black sm:block">Contact us</Link>
      </header>

      <div className={`fixed inset-0 z-50 transition ${open ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!open}>
        <button type="button" aria-label="Close navigation" onClick={() => setOpen(false)} className={`absolute inset-0 bg-black/55 backdrop-blur-sm transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`} />
        <nav className={`absolute inset-y-0 left-0 flex w-full max-w-xl flex-col bg-[#f5f5f2] p-7 text-black transition-transform duration-500 sm:p-12 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex items-center justify-between"><SiteBrand /><button type="button" onClick={() => setOpen(false)} className="grid size-11 place-items-center rounded-full border border-black/15 text-2xl" aria-label="Close navigation">×</button></div>
          <div className="my-auto flex flex-col gap-2">
            {navigation.map(([label, href]) => (
              <Link key={label} href={href} onClick={() => setOpen(false)} className="group flex items-center justify-between border-b border-black/10 py-5 text-3xl font-medium tracking-[-0.04em] sm:text-5xl">
                {label}<span className="opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100"><ArrowIcon /></span>
              </Link>
            ))}
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">PT CJ Trading · Jakarta, Indonesia</p>
        </nav>
      </div>
    </>
  );
}
