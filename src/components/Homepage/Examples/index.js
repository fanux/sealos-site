import React from "react";
import clsx from "clsx";
import ExamplesBlock from "./_examples_block.mdx";
import styles from "./styles.module.css";

export default function HomepageExamples() {
  return (
    <section className={styles.examples}>
      <div className="container">
        <div className="row">
          <div className={clsx("col")}>
            <h3>Instant Create Examples</h3>
          </div>
          <div className={clsx("col col--12")}>
            <ExamplesBlock />
          </div>
        </div>
      </div>
    </section>
  );
}
