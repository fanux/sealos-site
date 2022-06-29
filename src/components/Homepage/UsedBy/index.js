import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const companyList = [
  {
    img: require("@site/static/img/usedby/alibaba.png").default,
  },
  {
    img: require("@site/static/img/usedby/huawei_logo.png").default,
  },
  {
    img: require("@site/static/img/usedby/iflytek.png").default,
  },
  {
    img: require("@site/static/img/usedby/51talk.jpeg").default,
  },
];

function Company({ img, title, description }) {
  return (
    <div className={clsx("col col--3")}>
      <div className="text--center">
          <img src={img} />
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
