"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Cta } from "@/components/Cta";
import { FOCUS_AREAS, GROWTH_LAYERS } from "@/lib/copy";

const FOCUS = [
  { ...FOCUS_AREAS[0], src: "/images/focus-ai.png", href: "/focus-areas#ai" },
  { ...FOCUS_AREAS[1], src: "/images/focus-blockchain.png", href: "/focus-areas#blockchain" },
  { ...FOCUS_AREAS[2], src: "/images/focus-quantum.png", href: "/focus-areas#quantum" },
  { ...FOCUS_AREAS[3], src: "/images/focus-adjacent.png", href: "/focus-areas#adjacent" },
] as const;

const PHASES = ["Diagnose", "Design", "Assemble", "Evolve"] as const;
const NETWORK = ["DCRBN", "Sixframe", "Lotus Trader", "Viral Growth OS", "Speed to Scale"] as const;

export default function HomeRest() {
  const [active, setActive] = useState(0);

  return (
    <div className="relative z-[1] bg-black text-[#f4f4f4]">
      <section className="border-y border-white/10 py-10 md:py-20">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-center gap-x-8 gap-y-5 px-5 md:gap-x-12 md:px-12">
          {GROWTH_LAYERS.map((item, index) => (
            <span key={item} className="flex items-center gap-8 md:gap-12">
              <span className="text-[11px] font-medium tracking-[0.28em] text-white/55 uppercase">{item}</span>
              {index < GROWTH_LAYERS.length - 1 ? <span className="hidden h-px w-8 bg-white/20 sm:block" /> : null}
            </span>
          ))}
        </div>
      </section>

      <section className="px-5 py-16 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-[1400px] items-end gap-10 lg:grid-cols-[auto_1fr] lg:gap-16">
          <dl className="flex gap-8 sm:gap-12">
            <div>
              <dt className="text-[10px] tracking-[0.22em] text-white/40 uppercase sm:text-[11px]">Stage Growth Cycle</dt>
              <dd className="mt-2 text-[4.2rem] leading-none font-extralight tracking-[-0.05em] sm:mt-3 sm:text-[5.5rem]">6</dd>
            </div>
            <div>
              <dt className="text-[10px] tracking-[0.22em] text-white/40 uppercase sm:text-[11px]">Core Verticals</dt>
              <dd className="mt-2 text-[4.2rem] leading-none font-extralight tracking-[-0.05em] sm:mt-3 sm:text-[5.5rem]">3</dd>
            </div>
          </dl>
          <div className="max-w-[42rem] border-l border-white/15 pl-6 md:pl-12">
            <h2 className="text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.05] font-extralight tracking-[-0.035em]">
              Great founders still hit growth constraints.
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed font-light text-white/62">
              Even strong founders stall when they lack the right visibility, strategy, infrastructure,
              partnerships, customers, paid pilots, capital readiness, or operator support.
            </p>
            <Link
              href="/growth-cycle"
              className="mt-8 inline-flex text-[11px] tracking-[0.2em] text-white/80 uppercase no-underline hover:text-white"
            >
              See how the Growth Cycle works →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-14 md:px-12 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex items-center justify-between gap-4">
            <p className="text-[11px] tracking-[0.28em] text-white/45 uppercase">Focus Areas</p>
            <Cta href="/focus-areas" variant="ghost" className="shrink-0 text-white/70 hover:text-white">
              All verticals →
            </Cta>
          </div>
          <h2 className="mt-4 max-w-[16ch] text-[clamp(1.85rem,8vw,3.4rem)] leading-[1.05] font-extralight tracking-[-0.035em] text-white">
            The infrastructure we partner on.
          </h2>
          <div className="relative mt-8 flex flex-col-reverse gap-6 md:mt-12 md:gap-8 lg:block">
            <ol className="border-b border-white/12 lg:w-[52%]">
              {FOCUS.map((item, index) => {
                const on = index === active;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onMouseEnter={() => setActive(index)}
                      onFocus={() => setActive(index)}
                      className={`group grid min-h-14 grid-cols-[2.5rem_1fr] gap-3 border-t border-white/12 py-4 no-underline transition duration-300 md:grid-cols-[4.5rem_1fr] md:gap-8 md:py-5 ${on ? "bg-white/[0.045]" : ""}`}
                    >
                      <span className={`font-mono text-[11px] tracking-[0.28em] transition duration-300 ${on ? "text-white" : "text-white/35"}`}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>
                        <span className={`block text-[clamp(1.2rem,2.2vw,1.85rem)] font-extralight tracking-[-0.03em] transition duration-300 ${on ? "text-white" : "text-white/55"}`}>
                          {item.title}
                        </span>
                        <span className={`mt-1.5 block max-w-[36rem] text-[13px] leading-snug font-light transition duration-300 md:text-[14px] ${on ? "text-white/62" : "text-white/38"}`}>
                          {item.body}
                        </span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ol>
            <div className="sticky top-[calc(64px+env(safe-area-inset-top))] z-[1] aspect-[16/10] overflow-hidden border border-white/10 bg-black lg:absolute lg:inset-y-0 lg:right-0 lg:top-auto lg:z-auto lg:aspect-auto lg:w-[44%]">
              {FOCUS.map((item, index) => (
                <div
                  key={item.src}
                  className="absolute inset-0 transition-opacity duration-700 ease-out"
                  style={{ opacity: index === active ? 1 : 0 }}
                  aria-hidden={index !== active}
                >
                  <Image src={item.src} alt="" fill className={`object-cover transition duration-[1.2s] ease-out ${index === active ? "scale-105 opacity-90" : "scale-100 opacity-70"}`} sizes="(max-width: 1024px) 100vw, 45vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                  <div className="inner-grain absolute inset-0" />
                </div>
              ))}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-end justify-between px-5 py-5">
                <p className="max-w-[18ch] text-[13px] font-extralight tracking-[-0.02em] text-white/85">{FOCUS[active].title}</p>
                <p className="font-mono text-[11px] tracking-[0.28em] text-white/45">
                  {String(active + 1).padStart(2, "0")} / 04
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image src="/images/concrete-corridor.png" alt="" fill className="object-cover object-center opacity-50" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/78 to-black/30" />
        </div>
        <div className="relative mx-auto grid min-h-[70svh] max-w-[1400px] items-end gap-10 px-5 py-16 md:px-12 md:py-24 lg:grid-cols-[1.15fr_.85fr] lg:gap-12">
          <div>
            <p className="text-[11px] tracking-[0.28em] text-white/55 uppercase">Built to be a force multiplier.</p>
            <h2 className="mt-5 max-w-[16ch] text-[clamp(2.1rem,4.8vw,4rem)] leading-[1.02] font-extralight tracking-[-0.035em]">
              Proof across companies, portfolio, and execution.
            </h2>
            <p className="mt-6 max-w-[46ch] text-[15px] leading-relaxed font-light text-white/68">
              DCRBN was founded by Majid Zafer and Cory Warfield around a simple operating idea: the
              golden rule, applied to company building. Treat people the way you want to be treated —
              and become a force multiplier for founders already building infrastructure that matters.
            </p>
            <Cta href="/proof" className="mt-8 border-white/20 text-white hover:border-white/50">
              See the proof structure →
            </Cta>
          </div>
          <ol className="flex flex-col gap-1 pb-2">
            {PHASES.map((item, index) => (
              <li
                key={item}
                className="flex items-baseline justify-between border-b border-white/12 py-4 text-[1.4rem] font-extralight tracking-[0.16em] text-white/70 uppercase"
              >
                <span>{item}</span>
                <span className="font-mono text-[11px] tracking-[0.2em] text-white/35">{String(index + 1).padStart(2, "0")}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-14 md:px-12 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-[11px] tracking-[0.28em] text-white/45 uppercase">Our Network</p>
          <ul className="mt-10 flex flex-wrap gap-x-12 gap-y-5">
            {NETWORK.map((item) => (
              <li key={item} className="text-[1.5rem] font-extralight tracking-[-0.02em] text-white/75 md:text-[2rem]">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-14">
            <Cta href="/strategic-alignment" variant="ghost" className="text-white/70 hover:text-white">
              Explore Strategic Alignment →
            </Cta>
          </div>
        </div>
      </section>
    </div>
  );
}
