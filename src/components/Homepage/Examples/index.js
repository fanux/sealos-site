import Translate from "@docusaurus/Translate";
import MDXContent from "@theme/MDXContent";
import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";
import ExamplesAppBlock from "./_examples_app_block.mdx";
import ExamplesBlock from "./_examples_block.mdx";

export default function HomepageExamples() {
  return (
    <section className={styles.examples}>
      <div className="container">
        <div className="row">
          <div className={clsx("col")}>
            <h3>
              <Translate description="homepage instant create examples">
                Instant Create Examples
              </Translate>
            </h3>
          </div>
          <div className={clsx("col col--12")}>
            <MDXContent>
              <ExamplesBlock />
            </MDXContent>
          </div>
        </div>
        <div className="row">
          <div className={clsx("col")}>
            <h3>
              <Translate description="homepage instant application examples">
                Instant Application Examples
              </Translate>
            </h3>
          </div>
          <div className={clsx("col col--12")}>
            <MDXContent>
              <ExamplesAppBlock />
            </MDXContent>
          </div>
        </div>
      </div>
    </section>
  );
}
