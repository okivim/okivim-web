import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./styles.module.css";

export default function HomepageScreenshot() {
  const screenshotSceneRef = useRef<HTMLElement>(null);
  const screenshotWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!screenshotSceneRef.current || !screenshotWrapperRef.current) {
      return;
    }

    const scene = screenshotSceneRef.current;
    const wrapper = screenshotWrapperRef.current;

    gsap.set(wrapper, { transformPerspective: 800 });

    const rotateXTo = gsap.quickTo(wrapper, "rotationX", { ease: "power3" });
    const rotateYTo = gsap.quickTo(wrapper, "rotationY", { ease: "power3" });
    const xTo = gsap.quickTo(wrapper, "x", { ease: "power3" });
    const yTo = gsap.quickTo(wrapper, "y", { ease: "power3" });

    const handlePointerMove = (event: PointerEvent) => {
      const { left, top, width, height } = scene.getBoundingClientRect();
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

    scene.addEventListener("pointermove", handlePointerMove);
    scene.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      scene.removeEventListener("pointermove", handlePointerMove);
      scene.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <section className={styles.screenshotScene} ref={screenshotSceneRef}>
      <div className={styles.screenshotWrapper} ref={screenshotWrapperRef}>
        <div className={styles.screenshotWrapperNavbar}>
          <span className={`${styles.cBtn} ${styles.redBtn}`}></span>
          <span className={`${styles.cBtn} ${styles.yellowBtn}`}></span>
          <span className={`${styles.cBtn} ${styles.greenBtn}`}></span>
        </div>
        <img
          src="./img/screenshot.png"
          className={styles.screenshot}
          alt="okivim screenshot"
        />
      </div>
    </section>
  );
}
