import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.css";

export default function HomepageScreenshot() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={styles.screenshotWrapper}>
      <img src="./img/screenshot.png" className={styles.screenshot} />
    </div>
  );
}
