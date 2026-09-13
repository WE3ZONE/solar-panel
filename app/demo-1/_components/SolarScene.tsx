const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

type Variant = {
  skyTop: string;
  skyBottom: string;
  sunColor: string;
  sunGlow: string;
  panelTop: string;
  panelBottom: string;
  groundFog: string;
  sunCx: number;
  sunCy: number;
};

const VARIANTS: Variant[] = [
  {
    skyTop: "#0a1120",
    skyBottom: "#2a2013",
    sunColor: "#ffcf7a",
    sunGlow: "#ff8a3d",
    panelTop: "#1c3a5e",
    panelBottom: "#0a1526",
    groundFog: "#3a2410",
    sunCx: 620,
    sunCy: 150,
  },
  {
    skyTop: "#0c1730",
    skyBottom: "#3a2440",
    sunColor: "#ffb98a",
    sunGlow: "#ff6f91",
    panelTop: "#20304f",
    panelBottom: "#0a1220",
    groundFog: "#2a1c30",
    sunCx: 190,
    sunCy: 130,
  },
  {
    skyTop: "#081426",
    skyBottom: "#1c2f22",
    sunColor: "#ffe29a",
    sunGlow: "#f2a93b",
    panelTop: "#173a34",
    panelBottom: "#08181a",
    groundFog: "#16281a",
    sunCx: 400,
    sunCy: 110,
  },
];

function buildRows() {
  const rows = 5;
  const cols = 7;
  const horizon = 232;
  const near = { yTop: 300, yBottom: 470, xLeft: -80, xRight: 880 };
  const far = { yTop: horizon, yBottom: 250, xLeft: 300, xRight: 500 };

  const quads: { points: string; shade: number }[] = [];

  for (let r = 0; r < rows; r++) {
    const t0 = r / rows;
    const t1 = (r + 1) / rows;
    const ease = (t: number) => t * t;
    const et0 = ease(t0);
    const et1 = ease(t1);

    const yTop0 = lerp(near.yTop, far.yTop, et0);
    const yTop1 = lerp(near.yTop, far.yTop, et1);
    const xL0 = lerp(near.xLeft, far.xLeft, et0);
    const xR0 = lerp(near.xRight, far.xRight, et0);
    const xL1 = lerp(near.xLeft, far.xLeft, et1);
    const xR1 = lerp(near.xRight, far.xRight, et1);

    for (let c = 0; c < cols; c++) {
      const cg = 0.018;
      const c0 = c / cols + cg;
      const c1 = (c + 1) / cols - cg;

      const p1x = lerp(xL0, xR0, c0);
      const p2x = lerp(xL0, xR0, c1);
      const p3x = lerp(xL1, xR1, c1);
      const p4x = lerp(xL1, xR1, c0);

      const points = `${p1x.toFixed(1)},${yTop0.toFixed(1)} ${p2x.toFixed(1)},${yTop0.toFixed(1)} ${p3x.toFixed(1)},${yTop1.toFixed(1)} ${p4x.toFixed(1)},${yTop1.toFixed(1)}`;
      quads.push({ points, shade: r / rows });
    }
  }
  return quads;
}

const quads = buildRows();

export default function SolarScene({ variant = 0 }: { variant?: 0 | 1 | 2 }) {
  const v = VARIANTS[variant];
  const gid = `solar-scene-${variant}`;

  return (
    <svg
      viewBox="0 0 800 500"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${gid}-sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={v.skyTop} />
          <stop offset="100%" stopColor={v.skyBottom} />
        </linearGradient>
        <radialGradient id={`${gid}-sun`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={v.sunColor} />
          <stop offset="45%" stopColor={v.sunGlow} stopOpacity="0.9" />
          <stop offset="100%" stopColor={v.sunGlow} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${gid}-panel`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={v.panelTop} />
          <stop offset="100%" stopColor={v.panelBottom} />
        </linearGradient>
        <linearGradient id={`${gid}-fog`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={v.groundFog} stopOpacity="0" />
          <stop offset="100%" stopColor={v.groundFog} stopOpacity="0.55" />
        </linearGradient>
      </defs>

      <rect width="800" height="500" fill={`url(#${gid}-sky)`} />
      <circle cx={v.sunCx} cy={v.sunCy} r="220" fill={`url(#${gid}-sun)`} />
      <circle cx={v.sunCx} cy={v.sunCy} r="34" fill={v.sunColor} />

      <g>
        {quads.map((q, i) => (
          <polygon
            key={i}
            points={q.points}
            fill={`url(#${gid}-panel)`}
            opacity={0.92 - q.shade * 0.25}
            stroke={v.sunColor}
            strokeOpacity={0.14}
            strokeWidth={0.6}
          />
        ))}
      </g>

      <rect y="230" width="800" height="270" fill={`url(#${gid}-fog)`} />
      <rect y="228" width="800" height="2" fill={v.sunColor} opacity="0.25" />
    </svg>
  );
}
