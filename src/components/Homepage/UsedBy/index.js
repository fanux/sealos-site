import Translate from '@docusaurus/Translate';
import clsx from "clsx";
import React from "react";
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
    img: require("@site/static/img/usedby/haikang.png").default,
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
            <h3>
              <Translate description="homepage used by">Used By</Translate>
            </h3>
          </div>
          <div className={clsx("col col--12")}>
            <div className="container">
              <div className={clsx("row", "alignItemsCenter")}>
                {companyList.map((props, idx) => (
                  <Company key={idx} {...props} />
                ))}
              </div>
              <div className="text--center">
                <h3>
                  <Translate description="homepage used by more comanies">
                    More than 4k enterprise users use sealos in production!
                  </Translate>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
