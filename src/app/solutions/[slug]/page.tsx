import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OfferDetail } from "@/components/OfferDetail";
import { getSolution, solutions } from "@/lib/solutions";

export const dynamicParams = false;

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = getSolution((await params).slug);
  return { title: s?.name, description: s?.tagline };
}

export default async function SolutionPage({ params }: Props) {
  const s = getSolution((await params).slug);
  if (!s) notFound();
  return <OfferDetail s={s} />;
}
