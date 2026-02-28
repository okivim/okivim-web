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
  const ctaButtonRef = useRef<HTMLAnchorElement>(null);
  const ctaGlowRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ctaButtonRef.current || !ctaGlowRef.current) {
      return;
    }

    const button = ctaButtonRef.current;
    const glow = ctaGlowRef.current;

    const onPointerEnter = () => {
      gsap.to(glow, { opacity: 1, duration: 0.2, ease: "power2.out" });
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = button.getBoundingClientRect();
      const localX = event.clientX - rect.left;
      const localY = event.clientY - rect.top;
      const nx = localX / rect.width;
      const ny = localY / rect.height;

      gsap.to(glow, {
        x: localX - 90,
        y: localY - 90,
        duration: 0.18,
        ease: "power3.out",
      });
    };

    const onPointerLeave = () => {
      gsap.to(glow, { opacity: 0, duration: 0.24, ease: "power2.out" });
    };

    const onClick = () => {
      gsap.fromTo(
        button,
        { boxShadow: "0 0 0 rgba(185, 255, 245, 0)" },
        {
          boxShadow: "0 0 0 8px rgba(185, 255, 245, 0.35)",
          duration: 0.12,
          ease: "power1.out",
          yoyo: true,
          repeat: 1,
        },
      );
    };

    button.addEventListener("pointerenter", onPointerEnter);
    button.addEventListener("pointermove", onPointerMove);
    button.addEventListener("pointerleave", onPointerLeave);
    button.addEventListener("click", onClick);

    return () => {
      button.removeEventListener("pointerenter", onPointerEnter);
      button.removeEventListener("pointermove", onPointerMove);
      button.removeEventListener("pointerleave", onPointerLeave);
      button.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          okivim
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx("button button--secondary button--lg", styles.ctaButton)}
            to="/docs/getting-started"
            ref={ctaButtonRef}
          >
            <span className={styles.ctaGlow} ref={ctaGlowRef} aria-hidden="true" />
            <span className={styles.ctaText}>Getting started</span>
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
                styles.ctaIcon,
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
