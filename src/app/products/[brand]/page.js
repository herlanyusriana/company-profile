import { notFound } from 'next/navigation';
import BrandView from '@/components/BrandView';
import SiteFooter from '@/components/SiteFooter';
import { getAllBrandSlugs, getBrand } from '@/lib/brands';

export function generateStaticParams() {
  return getAllBrandSlugs().map((slug) => ({ brand: slug }));
}

export async function generateMetadata({ params }) {
  const { brand: slug } = await params;
  const brand = getBrand(slug);
  if (!brand) return {};
  return {
    title: `${brand.name} | PT CJ Trading`,
    description: brand.description,
  };
}

export default async function BrandPage({ params }) {
  const { brand: slug } = await params;
  const brand = getBrand(slug);
  if (!brand) return notFound();

  return (
    <>
      <BrandView brand={brand} />
      <SiteFooter />
    </>
  );
}
