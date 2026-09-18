"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { Cta } from "@/components/Cta";

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function smooth(value: number) {
  const t = clamp(value);
  return t * t * (3 - 2 * t);
}

function ScrollFlight({
  folder,
  total,
  heightClass,
  children,
  onProgress,
}: {
  folder: string;
  total: number;
  heightClass: string;
  children: React.ReactNode;
  onProgress: (progress: number, root: HTMLElement) => void;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cache = useRef(new Map<number, HTMLImageElement>());
  const lastFrame = useRef(-1);
  const progressRef = useRef(0);
  const totalRef = useRef(total);
  const onProgressRef = useRef(onProgress);
  onProgressRef.current = onProgress;
  totalRef.current = total;
  const [ready, setReady] = useState(false);

  const srcFor = useCallback(
    (frame: number) => `/scroll/frames/${folder}/frame_${String(frame).padStart(4, "0")}.webp`,
    [folder],
  );

  const load = useCallback(
    (frame: number) => {
      const n = Math.max(1, Math.min(totalRef.current, frame));
      const cached = cache.current.get(n);
      if (cached) return cached;
      const img = new Image();
      img.decoding = "async";
      img.src = srcFor(n);
      cache.current.set(n, img);
      return img;
    },
    [srcFor],
  );

  const paint = useCallback(
    (frame: number) => {
      if (frame === lastFrame.current) return;
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d", { alpha: false });
      if (!ctx) return;
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      const cssW = Math.max(1, window.innerWidth);
      const cssH = Math.max(1, window.innerHeight);
      const w = Math.floor(cssW * dpr);
      const h = Math.floor(cssH * dpr);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        canvas.style.width = `${cssW}px`;
        canvas.style.height = `${cssH}px`;
      }
      const img = load(frame);
      const draw = () => {
        if (!img.complete || !img.naturalWidth) return;
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.globalAlpha = 1;
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, w, h);
        const scale = Math.max(w / img.naturalWidth, h / img.naturalHeight);
        const dw = img.naturalWidth * scale;
        const dh = img.naturalHeight * scale;
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(img, (w - dw) / 2, (h - dh) / 2, dw, dh);
        lastFrame.current = frame;
        const section = canvas.closest("section");
        if (section) section.dataset.frame = String(frame);
        for (let i = 1; i <= 24; i += 1) {
          load(Math.min(totalRef.current, frame + i));
          load(Math.max(1, frame - i));
        }
      };
      if (img.complete && img.naturalWidth) draw();
      else img.onload = draw;
    },
    [load],
  );

  useEffect(() => {
    let cancelled = false;
    fetch("/scroll/frames/manifest.json")
      .then((res) => (res.ok ? res.json() : null))
      .then((json) => {
        if (cancelled || !json) return;
        const count = Number(json[folder]);
        if (count > 0) totalRef.current = count;
      })
      .catch(() => {});
    Promise.all(
      Array.from({ length: Math.min(36, total) }, (_, i) => {
        const img = load(i + 1);
        return new Promise<void>((resolve) => {
          const done = () => resolve();
          if (img.complete && img.naturalWidth) done();
          else {
            img.onload = done;
            img.onerror = done;
          }
        });
      }),
    ).then(() => {
      if (!cancelled) {
        paint(1);
        setReady(true);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [folder, load, paint, total]);

  useEffect(() => {
    if (!ready) return;
    let raf = 0;
    let live = true;
    const tick = () => {
      if (!live) return;
      const section = sectionRef.current;
      let progress = 0;
      if (section) {
        const box = section.getBoundingClientRect();
        const run = Math.max(1, box.height - window.innerHeight);
        progress = Math.max(0, Math.min(0.9999, -box.top / run));
      }
      progressRef.current = progress;
      const frames = totalRef.current;
      paint(Math.max(1, Math.min(frames, Math.floor(progress * (frames - 1)) + 1)));
      if (section) onProgressRef.current(progress, section);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      live = false;
      cancelAnimationFrame(raf);
    };
  }, [paint, ready]);

  return (
    <section ref={sectionRef} className={`relative bg-black ${heightClass}`}>
      <div className="sticky top-0 h-svh overflow-hidden bg-black">
        <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 z-[1] h-full w-full" aria-hidden />
        <div className="relative z-10 h-full">{children}</div>
      </div>
    </section>
  );
}

export function CinematicHero() {
  const onProgress = useCallback((progress: number, root: HTMLElement) => {
    const copy = root.querySelector<HTMLElement>("[data-copy]");
    const cue = root.querySelector<HTMLElement>("[data-cue]");
    const beam = root.querySelector<HTMLElement>("[data-beam]");
    const side = root.querySelector<HTMLElement>("[data-side]");
    if (copy) {
      copy.style.opacity = String(smooth(1 - progress / 0.48));
      copy.style.transform = `translate3d(0, ${(-(56 * progress)).toFixed(1)}px, 0)`;
    }
    if (cue) cue.style.opacity = String(smooth(1 - progress / 0.22));
    if (beam) beam.style.opacity = String(clamp(0.18 + 0.7 * progress));
    if (side) side.style.opacity = String(smooth(1 - progress / 0.65));
  }, []);

  return (
    <ScrollFlight folder="hero-flight" total={241} heightClass="h-[420vh] md:h-[800vh]" onProgress={onProgress}>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/50" />
      <div
        data-beam
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 h-full w-28 -translate-x-1/2 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,220,160,0.55)_45%,rgba(255,255,255,0.04))] blur-3xl"
        style={{ opacity: 0.25 }}
      />
      <div className="pointer-events-none relative z-10 flex h-full flex-col">
        <div
          data-copy
          className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col items-center px-5 pt-[calc(5.5rem+env(safe-area-inset-top))] text-center md:px-12 md:pt-28"
        >
          <h1 className="mt-2 max-w-[18ch] text-[14vw] leading-[0.86] font-extralight tracking-[-0.045em] text-white sm:text-[12vw] lg:text-[7.6rem]">
            Speed to Scale
          </h1>
          <p className="mt-6 max-w-[28rem] text-sm leading-relaxed font-light text-white/72 sm:text-base">
            A force multiplier for infrastructure founders already in motion.
          </p>
          <div className="pointer-events-auto mt-8">
            <Cta href="/apply" variant="secondary" className="border-white/25 text-white hover:border-white/60">
              Apply to Work With Us →
            </Cta>
          </div>
        </div>
        <p
          data-cue
          className="absolute inset-x-0 bottom-[max(1.5rem,env(safe-area-inset-bottom))] text-center text-[10px] tracking-[0.42em] text-white/45 uppercase"
        >
          Scroll
        </p>
        <ul
          data-side
          className="absolute top-1/2 right-6 hidden -translate-y-1/2 flex-col items-end gap-8 lg:flex xl:right-12"
          aria-label="Focus verticals"
        >
          {["AI", "Blockchain", "Quantum"].map((item) => (
            <li key={item} className="text-[11px] tracking-[0.28em] text-white/55 uppercase">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </ScrollFlight>
  );
}

export function CinematicEarth() {
  const onProgress = useCallback((progress: number, root: HTMLElement) => {
    const copy = root.querySelector<HTMLElement>("[data-copy]");
    if (copy) {
      copy.style.opacity = String(0.72 + 0.28 * smooth(progress));
      copy.style.transform = `translate3d(0, ${(20 - 20 * progress).toFixed(1)}px, 0)`;
    }
  }, []);

  return (
    <ScrollFlight folder="earth-flight" total={241} heightClass="h-[420vh] md:h-[800vh]" onProgress={onProgress}>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent" />
      <div
        data-copy
        className="pointer-events-none relative z-10 mx-auto flex h-full max-w-[1400px] items-end px-5 py-16 md:px-12 md:py-20"
      >
        <div className="grid w-full items-end gap-10 lg:grid-cols-[minmax(0,1fr)_200px]">
          <div className="max-w-[36rem]">
            <p className="text-[11px] tracking-[0.28em] text-white/55 uppercase">Why We Exist</p>
            <span className="mt-5 block h-px w-14 bg-white/45" />
            <h2 className="mt-5 text-[2rem] leading-[0.98] font-extralight tracking-[-0.035em] text-white sm:mt-8 sm:text-6xl lg:text-[4.4rem]">
              Backing the infrastructure layer of an abundant future.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed font-light text-white/68">
              DCRBN exists to be a force multiplier for founders building solutions that can help
              shape a future of abundance.
            </p>
            <Link
              href="/growth-cycle"
              className="pointer-events-auto mt-8 inline-flex text-[11px] tracking-[0.2em] text-white/80 uppercase no-underline hover:text-white"
            >
              See how it works →
            </Link>
          </div>
          <ul className="hidden flex-col items-end gap-5 pb-2 lg:flex" aria-label="Verticals">
            {["AI", "Blockchain", "Quantum", "And beyond"].map((item) => (
              <li key={item} className="text-right text-xl font-extralight tracking-[0.12em] text-white/55">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ScrollFlight>
  );
}

export function CinematicClose() {
  const onProgress = useCallback((progress: number, root: HTMLElement) => {
    const copy = root.querySelector<HTMLElement>("[data-copy]");
    if (copy) {
      const t = smooth(clamp((progress - 0.28) / 0.45));
      copy.style.opacity = String(t);
      copy.style.transform = `translate3d(0, ${(28 - 28 * t).toFixed(1)}px, 0)`;
    }
  }, []);

  return (
    <ScrollFlight folder="close-flight" total={241} heightClass="h-[420vh] md:h-[800vh]" onProgress={onProgress}>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/55" />
      <div
        data-copy
        className="pointer-events-none relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-5 text-center"
        style={{ opacity: 0 }}
      >
        <h2 className="max-w-[16ch] text-[2.15rem] leading-[0.94] font-extralight tracking-[-0.04em] text-white sm:text-6xl md:text-7xl">
          Building Infrastructure That Inspires Us?
        </h2>
        <div className="pointer-events-auto mt-10">
          <Cta href="/apply" variant="secondary" className="border-white/25 text-white hover:border-white/60">
            Apply for Speed to Scale →
          </Cta>
        </div>
      </div>
    </ScrollFlight>
  );
}
