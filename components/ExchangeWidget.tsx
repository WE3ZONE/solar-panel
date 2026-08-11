"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import type { Dictionary } from "@/lib/i18n/types";

const points = [40, 44, 42, 48, 52, 50, 58, 55, 62, 68, 64, 72];

function sparklinePath(vals: number[], w: number, h: number) {
  const max = Math.max(...vals);
  const min = Math.min(...vals);
  const step = w / (vals.length - 1);
  return vals
    .map((v, i) => {
      const x = i * step;
      const y = h - ((v - min) / (max - min || 1)) * h;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
}

export default function ExchangeWidget({ dict }: { dict: Dictionary }) {
  const w = 480;
  const h = 140;
  const path = sparklinePath(points, w, h);
  const areaPath = `${path} L${w},${h} L0,${h} Z`;
  const pathLength = 1;

  return (
    <section className="relative overflow-hidden bg-ink text-paper section-y grain">
      <div
        className="mesh-glow -top-20 end-0 h-80 w-80 opacity-25 animate-pulse-glow"
        style={{ background: "radial-gradient(circle, #2FD4B0, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="mesh-glow bottom-0 start-1/3 h-72 w-72 opacity-20 animate-drift"
        style={{ background: "radial-gradient(circle, #F2A93B, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container-x relative grid gap-12 lg:grid-cols-[1fr_1.1fr] items-center">
        <div>
          <p className="eyebrow">{dict.exchange.eyebrow}</p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold leading-[1.3]">
            {dict.exchange.title}
          </h2>
          <p className="mt-4 text-paper/60 leading-8 max-w-lg">
            {dict.exchange.description}
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-y-5 gap-x-6 max-w-md">
            {dict.exchange.board.map((b) => (
              <div key={b.label} className="border-t border-line pt-3">
                <dt className="text-xs text-paper/45">{b.label}</dt>
                <dd className="mt-1 text-sm font-semibold">{b.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <Reveal delay={0.1}>
          <div className="rounded-2xl card-glass p-6 md:p-8">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-paper/45">{dict.exchange.priceLabel}</p>
                <p className="tnum mt-2 font-display text-4xl md:text-5xl font-extrabold">
                  {dict.exchange.price}
                  <span className="text-base font-medium text-paper/50 mx-2">
                    {dict.exchange.currency}
                  </span>
                </p>
              </div>
              <span className="tnum inline-flex items-center gap-1 rounded-full bg-up/15 px-3 py-1.5 text-sm font-bold text-up">
                ▲ {dict.exchange.change}
              </span>
            </div>

            <div className="mt-6 -mx-2">
              <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-32" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="spark-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#F2A93B" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#F2A93B" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d={areaPath} fill="url(#spark-fill)" />
                <motion.path
                  d={path}
                  fill="none"
                  stroke="#F2A93B"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, ease: "easeInOut" }}
                />
              </svg>
            </div>

            <div className="mt-4 flex justify-between text-xs text-paper/40 tnum">
              <span>{dict.exchange.rangeLabel}</span>
              <span>{dict.exchange.todayLabel}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
