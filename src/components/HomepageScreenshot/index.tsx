import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./styles.module.css";

export default function HomepageScreenshot() {
  const screenshotWrapperRef = useRef<HTMLElement>(null);
  const screenshotRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!screenshotWrapperRef.current || !screenshotRef.current) {
      return;
    }

    const wrapper = screenshotWrapperRef.current;
    const screenshot = screenshotRef.current;

    const rotateXTo = gsap.quickTo(screenshot, "rotationX", { ease: "power3" });
    const rotateYTo = gsap.quickTo(screenshot, "rotationY", { ease: "power3" });
    const xTo = gsap.quickTo(screenshot, "x", { ease: "power3" });
    const yTo = gsap.quickTo(screenshot, "y", { ease: "power3" });

    const handlePointerMove = (event: PointerEvent) => {
      const { left, top, width, height } = wrapper.getBoundingClientRect();
      const normalizedX = (event.clientX - left) / width;
      const normalizedY = (event.clientY - top) / height;

      rotateXTo(gsap.utils.interpolate(15, -15, normalizedY));
      rotateYTo(gsap.utils.interpolate(-15, 15, normalizedX));
      xTo(gsap.utils.interpolate(-20, 20, normalizedX));
      yTo(gsap.utils.interpolate(-20, 20, normalizedY));
    };

    const handlePointerLeave = () => {
      rotateXTo(0);
      rotateYTo(0);
      xTo(0);
      yTo(0);
    };

    wrapper.addEventListener("pointermove", handlePointerMove);
    wrapper.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      wrapper.removeEventListener("pointermove", handlePointerMove);
      wrapper.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <section className={styles.screenshotWrapper} ref={screenshotWrapperRef}>
      <div className={styles.screenshotWrapperNavbar}>
        <span className={`${styles.cBtn} ${styles.redBtn}`}></span>
        <span className={`${styles.cBtn} ${styles.yellowBtn}`}></span>
        <span className={`${styles.cBtn} ${styles.greenBtn}`}></span>
      </div>
      <img
        src="./img/screenshot.png"
        className={styles.screenshot}
        ref={screenshotRef}
        alt="okivim screenshot"
      />
    </section>
  );
}
