import Translate from "@docusaurus/Translate";
import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";

export default function HomepageKernelArch() {
  return (
    <section className={styles.kernelArch}>
      <div className="container">
        <div className="row">
          <div className={clsx("col col--12")}>
            <h3>
              <Translate description="homepage kernel arch">
                Kernel Arch
              </Translate>
            </h3>
          </div>
          <div className={clsx("col col--12")}>
            <div className="container">
              <div className={clsx("row", "alignItemsCenter")}>
                <div className={clsx("col col--4", styles.kernelArchImg)}>
                  <img
                    src="img/cloud-kernel-arch.png"
                    alt="cloud-kernel-arch"
                  />
                </div>
                <div className={clsx("col col--8")}>
                  <div className={clsx("text--center padding-horiz--md")}>
                    <h3>
                      <Translate description="homepage kernel arch cloud driver">
                        Cloud Driver
                      </Translate>
                    </h3>
                    <p>
                      <Translate description="homepage kernel arch cloud driver title">
                        Using CRI CNI CSI as Cloud OS Drivers
                      </Translate>
                      <br />
                      <Translate description="homepage kernel arch cloud driver intro">
                        with compute/storage/network like
                        containerd/calico/openebs to pooling every resource
                        everywhere
                      </Translate>
                    </p>
                    <h3>
                      <Translate description="homepage kernel arch cloud kernel">
                        Cloud Kernel
                      </Translate>
                    </h3>
                    <p>
                      <Translate description="homepage kernel arch cloud kernel title">
                        Using kubernetes as Cloud OS Core
                      </Translate>
                      <br />
                      <Translate description="homepage kernel arch cloud driver intro">
                        abstracting underlying resources / defining resource
                        interfaces / standardizing application management
                      </Translate>
                    </p>
                    <h3>
                      <Translate description="homepage kernel arch dist apps">
                        Distributed Applications
                      </Translate>
                    </h3>
                    <p>
                      <Translate description="homepage kernel arch dis apps title">
                        Anything else as Cloud OS Applications
                      </Translate>
                      <br />
                      <Translate description="homepage kernel arch cloud driver intro">
                        each combination to meet various requirements and
                        scenarios
                      </Translate>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
