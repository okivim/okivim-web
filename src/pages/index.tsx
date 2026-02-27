import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import HomepageScreenshot from "@site/src/components/HomepageScreenshot";
import HomepageCarousel from "@site/src/components/HomepageCarousel";
import Heading from "@theme/Heading";
import { gsap } from "gsap";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const ctaWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctaLink = ctaWrapRef.current?.querySelector("a");
    if (!ctaLink) {
      return;
    }

    const colors = ["#ffffff", "#cffafe", "#a5f3fc", "#99f6e4"];
    let lastMove = 0;

    const spawnSparkle = (x: number, y: number, burst = false) => {
      const sparkle = document.createElement("span");
      sparkle.className = styles.sparkleParticle;
      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;
      const color = colors[Math.floor(Math.random() * colors.length)];
      sparkle.style.backgroundColor = color;
      sparkle.style.color = color;
      ctaLink.appendChild(sparkle);

      const distance = burst ? gsap.utils.random(20, 48) : gsap.utils.random(10, 26);
      const angle = gsap.utils.random(0, Math.PI * 2);
      const dx = Math.cos(angle) * distance;
      const dy = Math.sin(angle) * distance;

      gsap.fromTo(
        sparkle,
        { x: 0, y: 0, opacity: 0, scale: 0.2 },
        {
          x: dx,
          y: dy,
          opacity: 1,
          scale: gsap.utils.random(0.8, 1.6),
          duration: 0.15,
          ease: "power1.out",
          yoyo: true,
          repeat: 1,
          onComplete: () => sparkle.remove(),
        },
      );
    };

    const spawnBurst = (x: number, y: number) => {
      for (let i = 0; i < 12; i += 1) {
        spawnSparkle(x, y, true);
      }
    };

    const onPointerEnter = () => {
      const rect = ctaLink.getBoundingClientRect();
      spawnBurst(rect.width * 0.5, rect.height * 0.5);
    };

    const onPointerMove = (event: PointerEvent) => {
      const now = performance.now();
      if (now - lastMove < 60) {
        return;
      }

      lastMove = now;
      const rect = ctaLink.getBoundingClientRect();
      spawnSparkle(event.clientX - rect.left, event.clientY - rect.top);
    };

    const onClick = (event: MouseEvent) => {
      const rect = ctaLink.getBoundingClientRect();
      spawnBurst(event.clientX - rect.left, event.clientY - rect.top);
    };

    ctaLink.addEventListener("pointerenter", onPointerEnter);
    ctaLink.addEventListener("pointermove", onPointerMove);
    ctaLink.addEventListener("click", onClick);

    return () => {
      ctaLink.removeEventListener("pointerenter", onPointerEnter);
      ctaLink.removeEventListener("pointermove", onPointerMove);
      ctaLink.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          okivim
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons} ref={ctaWrapRef}>
          <Link
            className={clsx(
              "button button--secondary button--lg",
              styles.sparkleButton,
            )}
            to="/docs/getting-started"
          >
            <span className={styles.sparkleLabel}>Getting started</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={clsx(
                "lucide lucide-arrow-right-icon lucide-arrow-right",
                styles.sparkleIcon,
              )}
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Minimal, elegant and efficient Neovim configuration."
    >
      <div className={styles.homeBackground}>
        <HomepageHeader />
        <main>
          <HomepageScreenshot />
          <HomepageFeatures />
          <h2 className={styles.h2Home}>Designed for your workflow</h2>
          <HomepageCarousel />
        </main>
      </div>
    </Layout>
  );
}
