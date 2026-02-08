import styles from "./styles.module.css";

export default function HomepagePlugin({ title, description, image, reverse }) {
  return (
    <section className={styles.pluginWrapper}>
      <div
        className={`${styles.pluginContent} ${reverse ? styles.reverse : ""}`}
      >
        <div className={styles.pluginInfo}>
          <h2>{title}</h2>
          <div>{description}</div>
        </div>
        <img src={image} className={styles.screenshot} />
      </div>
    </section>
  );
}
