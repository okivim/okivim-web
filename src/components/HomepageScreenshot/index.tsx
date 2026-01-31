import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.css";

export default function HomepageScreenshot() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <section className={styles.screenshotWrapper}>
      <div className={styles.screenshotWrapperNavbar}>
        <span className={`${styles.cBtn} ${styles.redBtn}`}></span>
        <span className={`${styles.cBtn} ${styles.yellowBtn}`}></span>
        <span className={`${styles.cBtn} ${styles.greenBtn}`}></span>
      </div>
      <img src="./img/screenshot.png" className={styles.screenshot} />
    </section>
  );
}
