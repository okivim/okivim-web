import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Fast & Optimized",
    Svg: require("@site/static/img/zap.svg").default,
    description: (
      <>
        Designed with performance in mind to deliver a fast, responsive, and
        smooth Neovim experience.
      </>
    ),
  },
  {
    title: "Handpicked Plugins",
    Svg: require("@site/static/img/puzzle.svg").default,
    description: (
      <>
        Each plugin is thoughtfully selected to provide real value without
        bloating or slowing down your setup.
      </>
    ),
  },
  {
    title: "Zen-Inspired UI",
    Svg: require("@site/static/img/brain.svg").default,
    description: (
      <>
        A clean, distraction-free interface that helps you stay focused and
        maintain a smooth workflow.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className={styles.homeCard}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h4">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.featuresWrapper}>
      <div className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
