// One point at the centre grows outward layer by layer, holds, then closes in reverse. Static look is in globals.css.
type P = [number, number];

const LAYERS = 9;
const CYCLE = 28; // seconds

const layerRing = (layer: number): P[] => {
  const n = 2 + layer * 2;
  const r = 120 + (layer - 1) * 156;
  const offset = -90 + layer * 13;
  return Array.from({ length: n }, (_, i) => {
    const a = ((offset + (360 / n) * i) * Math.PI) / 180;
    return [Number((r * Math.cos(a)).toFixed(1)), Number((r * Math.sin(a)).toFixed(1))] as P;
  });
};

const source: P = [0, 0];
const rings = Array.from({ length: LAYERS }, (_, i) => layerRing(i + 1));

const nearest = (p: P, pool: P[]) =>
  pool.reduce((best, q) => (Math.hypot(q[0] - p[0], q[1] - p[1]) < Math.hypot(best[0] - p[0], best[1] - p[1]) ? q : best));

type Edge = { a: P; b: P; l: number };
const edges: Edge[] = rings.flatMap((ring, i) =>
  ring.map((b): Edge => ({ a: i === 0 ? source : nearest(b, rings[i - 1]), b, l: i + 1 })),
);
const links: Edge[] = rings.flatMap((ring, i) =>
  ring.map((a, j): Edge => ({ a, b: ring[(j + 1) % ring.length], l: i + 1 })),
);

const line = ({ a, b }: Edge) => `M${a[0]},${a[1]} L${b[0]},${b[1]}`;
const f = (n: number) => `${n.toFixed(1)}%`;

// Layer L grows from `a`, and closes from `c` (outer layers close first).
const timing = (l: number) => ({ a: 2 + (l - 1) * 6.5, c: 70 + (LAYERS - l) * 3 });

function css() {
  let out = `.rg .flow{opacity:.9;animation:rg-flow 1.6s linear infinite}.rg .flowg{animation:rg-flowvis ${CYCLE}s ease-in-out infinite}.rg .glow{animation:rg-glow ${CYCLE}s ease-in-out infinite}.rg .nodeg.l0{animation:rg-pop0 ${CYCLE}s ease-in-out infinite}`;
  out += `@keyframes rg-flow{to{stroke-dashoffset:-.098}}`;
  out += `@keyframes rg-flowvis{0%,60%{opacity:0}64%,68%{opacity:1}71%,100%{opacity:0}}`;
  out += `@keyframes rg-glow{0%{opacity:0}3%,96%{opacity:.18}100%{opacity:0}}`;
  out += `@keyframes rg-pop0{0%{opacity:0;transform:scale(0)}1.5%{opacity:1;transform:scale(1.4)}3%,96%{opacity:1;transform:scale(1)}99%,100%{opacity:0;transform:scale(0)}}`;
  for (let l = 1; l <= LAYERS; l++) {
    const { a, c } = timing(l);
    out += `.rg .nodeg.l${l}{animation:rg-pop${l} ${CYCLE}s ease-in-out infinite}`;
    out += `.rg .edge.l${l}{animation:rg-draw${l} ${CYCLE}s ease-in-out infinite}`;
    out += `.rg .link.l${l}{animation:rg-fade${l} ${CYCLE}s ease-in-out infinite}`;
    out += `@keyframes rg-pop${l}{0%,${f(a + 4)}{opacity:0;transform:scale(0)}${f(a + 6.5)}{opacity:1;transform:scale(1.4)}${f(a + 8)},${f(c)}{opacity:1;transform:scale(1)}${f(c + 2.5)},100%{opacity:0;transform:scale(0)}}`;
    out += `@keyframes rg-draw${l}{0%,${f(a)}{stroke-dashoffset:1}${f(a + 5)},${f(c + 1)}{stroke-dashoffset:0}${f(c + 3.5)},100%{stroke-dashoffset:1}}`;
    out += `@keyframes rg-fade${l}{0%,${f(a + 3)}{opacity:0}${f(a + 7)},${f(c)}{opacity:.25}${f(c + 2)},100%{opacity:0}}`;
  }
  return `@media (prefers-reduced-motion: no-preference){${out}}`;
}

const Node = ({ p, l, r }: { p: P; l: number; r: number }) => (
  <g className={`nodeg l${l}`}>
    <circle className="node" cx={p[0]} cy={p[1]} r={r} />
    <circle className="core" cx={p[0]} cy={p[1]} r={r * 0.4} />
  </g>
);

export function RadialGraph() {
  return (
    <svg
      aria-hidden
      className="rg pointer-events-none absolute left-1/2 top-1/2 h-[660%] w-[660%] -translate-x-1/2 -translate-y-1/2 opacity-50"
      viewBox="-1500 -1500 3000 3000"
    >
      <style>{css()}</style>
      <circle className="glow" cx={0} cy={0} r={140} />
      {links.map((e, i) => (
        <path key={`l${i}`} className={`link l${e.l}`} d={line(e)} />
      ))}
      {edges.map((e, i) => (
        <path key={`e${i}`} className={`edge l${e.l}`} pathLength={1} d={line(e)} />
      ))}
      <g className="flowg">
        {edges.map((e, i) => (
          <path key={`f${i}`} className="flow" pathLength={1} d={line(e)} style={{ animationDelay: `${(i * 0.37) % 1.6}s` }} />
        ))}
      </g>
      <Node p={source} l={0} r={16} />
      {rings.flatMap((ring, i) => ring.map((p, j) => <Node key={`n${i}-${j}`} p={p} l={i + 1} r={11 - (i + 1) * 0.5} />))}
    </svg>
  );
}
