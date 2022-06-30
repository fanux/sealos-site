import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageExamples from "@site/src/components/Homepage/Examples";
import HomepageFeatures from "@site/src/components/Homepage/Features";
import HomepageKernelArch from "@site/src/components/Homepage/KernelArch";
import HomepageUsedBy from "@site/src/components/Homepage/UsedBy";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
// import HomepageTeam from "@site/src/components/Homepage/Team";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <img src="img/sealos-left.png" />
        {/* <h1 className="hero__title">{siteConfig.title}</h1> */}
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/category/getting-started"
          >
            Getting Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description={`${siteConfig.tagline}`}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageExamples />
        <HomepageKernelArch />
        <HomepageUsedBy />
      </main>
    </Layout>
  );
}
