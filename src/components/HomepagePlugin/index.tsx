import styles from "./styles.module.css";

export default function HomepagePlugin({ title, description, image }) {
  return (
    <section className={styles.pluginWrapper}>
      <div className={styles.pluginContent}>
        <div className={styles.pluginItem}>
          <div className={styles.pluginInfo}>
            <h3>{title}</h3>
            <div>{description}</div>
          </div>
          <img src={image} className={styles.screenshot} />
        </div>
      </div>
    </section>
  );
}
