"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "@/components/SiteChrome";

const INTRO_KEY = "dcrbn-home-intro-v2";
const TARGET_SECONDS = 4;
const PHONE_QUERY = "(max-width: 600px)";

const BOOTSTRAP = `
  (function () {
    try {
      var seen = sessionStorage.getItem("${INTRO_KEY}") === "seen";
      var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      document.documentElement.dataset.ianIntroSeen = seen || reduced ? "true" : "false";
    } catch (_) {
      document.documentElement.dataset.ianIntroSeen = "false";
    }
  })();
`;

export default function HomeHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [needsTap, setNeedsTap] = useState(false);
  const [introDone, setIntroDone] = useState(false);

  const markSeen = () => {
    try {
      sessionStorage.setItem(INTRO_KEY, "seen");
    } catch {}
    document.documentElement.dataset.ianIntroSeen = "true";
    setNeedsTap(false);
    setIntroDone(true);
  };

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let already = false;
    try {
      already = sessionStorage.getItem(INTRO_KEY) === "seen";
    } catch {}
    if (already || reduced) {
      videoRef.current?.pause();
      markSeen();
      return;
    }

    document.documentElement.dataset.ianIntroSeen = "false";
    const video = videoRef.current;
    if (!video) return;

    const phone = window.matchMedia(PHONE_QUERY).matches;
    const src = phone
      ? "/scroll-world/vid/intro-portrait.mp4"
      : "/scroll-world/vid/intro-1080.mp4";
    const poster = phone
      ? "/scroll-world/stills/poster-01-portrait.jpg"
      : "/scroll-world/stills/poster-01.jpg";

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute("playsinline", "true");
    video.setAttribute("webkit-playsinline", "true");
    video.setAttribute("muted", "");
    video.poster = poster;
    if (video.getAttribute("src") !== src) {
      video.setAttribute("src", src);
      video.load();
    }

    const setRate = () => {
      const duration = video.duration;
      if (Number.isFinite(duration) && duration > 0) {
        video.playbackRate = duration / TARGET_SECONDS;
      }
    };
    if (video.readyState >= 1) setRate();
    else video.addEventListener("loadedmetadata", setRate);

    const tryPlay = () => {
      const play = video.play();
      if (play) {
        play.then(() => setNeedsTap(false)).catch(() => setNeedsTap(true));
      }
    };
    tryPlay();

    const onGesture = () => tryPlay();
    window.addEventListener("pointerdown", onGesture, { passive: true });
    window.addEventListener("touchstart", onGesture, { passive: true });

    return () => {
      video.removeEventListener("loadedmetadata", setRate);
      window.removeEventListener("pointerdown", onGesture);
      window.removeEventListener("touchstart", onGesture);
      video.pause();
    };
  }, []);

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: BOOTSTRAP }} />
      <div className="ian-home__intro" aria-hidden="true">
        <video
          ref={videoRef}
          className="ian-home__intro-video"
          autoPlay
          muted
          playsInline
          preload="auto"
          poster="/scroll-world/stills/poster-01.jpg"
          onEnded={markSeen}
        />
        {needsTap ? (
          <button
            type="button"
            className="ian-home__intro-play"
            onClick={() => {
              const video = videoRef.current;
              if (!video) return;
              video.play().then(() => setNeedsTap(false)).catch(() => setNeedsTap(true));
            }}
          >
            <span>Tap to play</span>
          </button>
        ) : null}
        <button type="button" className="ian-home__intro-skip" onClick={markSeen}>
          Skip
        </button>
      </div>

      <section className="ian-home__hero">
        <SiteHeader />
        <div className="ian-home__final-media" aria-hidden="true">
          <picture>
            <source
              media="(max-width: 600px)"
              srcSet="/scroll-world/stills/final-home-portrait.jpg"
            />
            <img src="/scroll-world/stills/final-home.jpg" alt="" />
          </picture>
        </div>
        <div className="ian-home__site">
          <section className="ian-home__content">
            <span className="ian-home__eyebrow">Speed to Scale</span>
            <h1>For AI, blockchain, and quantum founders.</h1>
            <p>A force multiplier for infrastructure founders already in motion.</p>
            <div className="ian-home__actions">
              <Link
                href="/apply"
                className="ian-home__button ian-home__button--primary"
              >
                Apply
              </Link>
              <a
                href="#mission"
                className="ian-home__button ian-home__button--secondary"
              >
                See how it works
              </a>
            </div>
          </section>
        </div>
        {introDone ? (
          <a href="#mission" className="ian-home__scroll-cue">
            Scroll
          </a>
        ) : null}
      </section>
    </>
  );
}
