import Translate from '@docusaurus/Translate';
import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: <Translate description="homepage simple">Simple</Translate>,
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <Translate description="homepage simple">
        Any highly available distributed application on kubernetes can be
        installed with one click.
      </Translate>
    ),
  },
  {
    title: <Translate description="homepage flexible">Flexible</Translate>,
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <Translate description="homepage flexible intro">
        Freely combine various distributed applications and easily customize the
        cloud you need.
      </Translate>
    ),
  },
  {
    title: <Translate description="homepage powerful">Powerful</Translate>,
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <Translate description="homepage flexible intro">
        Cloud services can be found and obtained in the application market,
        simple but powerful.
      </Translate>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
