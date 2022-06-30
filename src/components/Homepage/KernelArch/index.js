import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

export default function HomepageKernelArch() {
  return (
    <section className={styles.kernelArch}>
      <div className="container">
        <div className="row">
          <div className={clsx("col col--12")}>
            <h3>Kernel Arch</h3>
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
                    <h3>Cloud Driver</h3>
                    <p>
                      Using CRI CNI CSI as Cloud OS Drivers, <br />
                      with compute/storage/network like
                      containerd/calico/openebs to pooling every resource
                      everywhere
                    </p>
                    <h3>Cloud Kernel</h3>
                    <p>
                      Using kubernetes as Cloud OS Core, <br />
                      abstracting underlying resources / defining resource
                      interfaces / standardizing application management
                    </p>
                    <h3>Distributed Applications</h3>
                    <p>
                      Anything else as Cloud OS Applications,
                      <br />
                      each combination to meet various requirements and
                      scenarios
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
