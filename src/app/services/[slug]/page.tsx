import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OfferDetail } from "@/components/OfferDetail";
import { getService, services } from "@/lib/services";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = getService((await params).slug);
  return { title: s?.name, description: s?.tagline };
}

export default async function ServicePage({ params }: Props) {
  const s = getService((await params).slug);
  if (!s) notFound();
  return <OfferDetail s={s} />;
}
