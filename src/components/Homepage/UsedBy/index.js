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

function Company({ img }) {
  return (
    <div className={clsx("col col--3")}>
      <div className="text--center">
        <img src={img} />
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
              <div className={clsx("row", "alignItemsCenter")}>
                {companyList.map((props, idx) => (
                  <Company key={idx} {...props} />
                ))}
              </div>
              <div className="text--center">
                <h3>More than 4k enterprise users use sealos in production!</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
