import React from "react";

// A static forward-looking-sonar fan: range rings, bearing lines, a scatter of
// returns, and one detected object boxed in Ember Coral. Decorative only.
// Points come from a seeded generator so server and client render the same.

function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const W = 480;
const H = 440;
const APEX = { x: W / 2, y: H - 20 };
const MAX_R = 400;
const HALF_FAN = (60 * Math.PI) / 180;

const polar = (r: number, a: number) => ({
  x: APEX.x + r * Math.sin(a),
  y: APEX.y - r * Math.cos(a),
});

type Pt = { x: number; y: number; o: number; s: number };

function buildField() {
  const rand = mulberry32(238);
  const noise: Pt[] = [];
  for (let i = 0; i < 170; i++) {
    const r = 40 + Math.sqrt(rand()) * (MAX_R - 40);
    const a = (rand() * 2 - 1) * HALF_FAN;
    const p = polar(r, a);
    noise.push({ ...p, o: 0.12 + rand() * 0.25, s: 0.8 + rand() * 0.9 });
  }

  // Echo returns: short arcs where a surface reflects the ping.
  const echo = (r0: number, a0: number, span: number, n: number) => {
    const pts: Pt[] = [];
    for (let i = 0; i < n; i++) {
      const a = a0 + (rand() - 0.5) * span;
      const r = r0 + (rand() - 0.5) * 14 + Math.abs(a - a0) * 30;
      const p = polar(r, a);
      pts.push({ ...p, o: 0.45 + rand() * 0.4, s: 1.1 + rand() * 1.1 });
    }
    return pts;
  };

  const returns = [...echo(300, -0.55, 0.22, 26), ...echo(190, 0.62, 0.16, 18)];
  const target = echo(245, 0.08, 0.2, 30);

  const xs = target.map((p) => p.x);
  const ys = target.map((p) => p.y);
  const pad = 10;
  const box = {
    x: Math.min(...xs) - pad,
    y: Math.min(...ys) - pad,
    w: Math.max(...xs) - Math.min(...xs) + pad * 2,
    h: Math.max(...ys) - Math.min(...ys) + pad * 2,
  };

  return { noise, returns, target, box };
}

const field = buildField();
const round = (n: number) => Math.round(n * 10) / 10;

const arcPath = (r: number) => {
  const a = polar(r, -HALF_FAN);
  const b = polar(r, HALF_FAN);
  return `M ${round(a.x)} ${round(a.y)} A ${r} ${r} 0 0 1 ${round(b.x)} ${round(b.y)}`;
};

const SonarField: React.FC<{ className?: string }> = ({ className }) => {
  const rings = [100, 200, 300, MAX_R];
  const bearings = [-HALF_FAN, -HALF_FAN / 2, 0, HALF_FAN / 2, HALF_FAN];
  const { box } = field;
  const tick = 10;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <g stroke="#9AA4AE" strokeOpacity="0.14" fill="none" strokeWidth="1">
        {rings.map((r) => (
          <path key={r} d={arcPath(r)} />
        ))}
        {bearings.map((a, i) => {
          const end = polar(MAX_R, a);
          return (
            <line
              key={i}
              x1={APEX.x}
              y1={APEX.y}
              x2={round(end.x)}
              y2={round(end.y)}
            />
          );
        })}
      </g>

      <g fill="#EDEDED">
        {field.noise.map((p, i) => (
          <circle key={i} cx={round(p.x)} cy={round(p.y)} r={round(p.s)} opacity={round(p.o * 100) / 100} />
        ))}
        {field.returns.map((p, i) => (
          <circle key={i} cx={round(p.x)} cy={round(p.y)} r={round(p.s)} opacity={round(p.o * 100) / 100} />
        ))}
      </g>

      <g fill="#FF7043">
        {field.target.map((p, i) => (
          <circle key={i} cx={round(p.x)} cy={round(p.y)} r={round(p.s)} opacity={round(p.o * 100) / 100} />
        ))}
      </g>

      {/* Detection brackets: corners only, like a bounding box overlay */}
      <g stroke="#FF7043" strokeWidth="1.5" fill="none" strokeLinecap="square">
        <path d={`M ${round(box.x)} ${round(box.y + tick)} V ${round(box.y)} H ${round(box.x + tick)}`} />
        <path d={`M ${round(box.x + box.w - tick)} ${round(box.y)} H ${round(box.x + box.w)} V ${round(box.y + tick)}`} />
        <path d={`M ${round(box.x + box.w)} ${round(box.y + box.h - tick)} V ${round(box.y + box.h)} H ${round(box.x + box.w - tick)}`} />
        <path d={`M ${round(box.x + tick)} ${round(box.y + box.h)} H ${round(box.x)} V ${round(box.y + box.h - tick)}`} />
      </g>

      <circle cx={APEX.x} cy={APEX.y} r="3" fill="#9AA4AE" fillOpacity="0.5" />
    </svg>
  );
};

export default SonarField;
