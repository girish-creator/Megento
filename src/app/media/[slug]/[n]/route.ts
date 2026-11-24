import { getSolution } from "@/lib/solutions";

// Placeholder sample screens; replace with real screenshots in /public when available.
export async function GET(_req: Request, { params }: { params: Promise<{ slug: string; n: string }> }) {
  const { slug, n } = await params;
  const s = getSolution(slug);
  const i = Number(n);
  if (!s || !Number.isInteger(i) || i < 1 || i > 4) return new Response("Not found", { status: 404 });

  const bars = [0, 1, 2, 3, 4, 5].map((k) => {
    const h = 40 + ((k * 37 + i * 53) % 110);
    return `<rect x="${60 + k * 46}" y="${300 - h}" width="30" height="${h}" rx="4" fill="#7dd3fc" opacity="${0.45 + k * 0.09}"/>`;
  });
  const lines = [0, 1, 2].map(
    (k) => `<rect x="400" y="${100 + k * 36}" width="${240 - k * 50}" height="12" rx="6" fill="#b4aad6" opacity="0.35"/>`,
  );

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 405" role="img" aria-label="Sample screen ${i} for ${s.name}">
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2a1760"/><stop offset="1" stop-color="#150b2e"/></linearGradient></defs>
<rect width="720" height="405" fill="url(#g)"/>
<rect x="30" y="30" width="660" height="345" rx="16" fill="#1f1244" stroke="#3b2a6e"/>
<text x="60" y="68" font-family="monospace" font-size="14" fill="#7dd3fc">${s.pillar.toUpperCase()} / SAMPLE ${i}</text>
<text x="60" y="92" font-family="sans-serif" font-size="18" fill="#eeeafb">${s.name}</text>
${bars.join("")}
${lines.join("")}
<circle cx="520" cy="270" r="50" fill="none" stroke="#7dd3fc" stroke-width="10" stroke-dasharray="${60 + i * 40} 400" transform="rotate(-90 520 270)"/>
</svg>`;

  return new Response(svg, { headers: { "Content-Type": "image/svg+xml", "Cache-Control": "public, max-age=3600" } });
}
