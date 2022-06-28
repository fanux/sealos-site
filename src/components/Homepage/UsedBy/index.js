import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const companyList = [
  {
    title: "SealOS",
    Svg: require("@site/static/img/logo.svg").default,
    description: (
      <>
        Any highly available distributed application on kubernetes can be
        installed with one click.
      </>
    ),
  },
  {
    title: "SealOS",
    Svg: require("@site/static/img/logo.svg").default,
    description: (
      <>
        Any highly available distributed application on kubernetes can be
        installed with one click.
      </>
    ),
  },
  {
    title: "SealOS",
    Svg: require("@site/static/img/logo.svg").default,
    description: (
      <>
        Any highly available distributed application on kubernetes can be
        installed with one click.
      </>
    ),
  },
  {
    title: "SealOS",
    Svg: require("@site/static/img/logo.svg").default,
    description: (
      <>
        Any highly available distributed application on kubernetes can be
        installed with one click.
      </>
    ),
  },
];

function Company({ Svg, title, description }) {
  return (
    <div className={clsx("col col--3")}>
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

export default function HomepageUsedBy() {
  return (
    <section className={styles.usedBy}>
      <div className="container">
        <div className="row">
          <div className={clsx("col")}>
            <h3>Used By</h3>
          </div>
          <div className={clsx("col col--12")}>
            <div className="container">
              <div className="row">
                {companyList.map((props, idx) => (
                  <Company key={idx} {...props} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
