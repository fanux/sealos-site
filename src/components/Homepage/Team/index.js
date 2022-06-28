import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const teamList = [
  {
    name: "labring",
    avatar: "https://avatars.githubusercontent.com/u/102226726?s=200&v=4",
    intro: <>wallfacer lab</>,
  },
];

function Member({ name, avatar, intro }) {
  return (
    <div className="avatar avatar--vertical">
      <img className="avatar__photo avatar__photo--xl" src={avatar} />
      <div className="avatar__intro">
        <div className="avatar__name">{name}</div>
        <small className="avatar__subtitle">{intro}</small>
      </div>
    </div>
  );
}

export default function HomepageTeam() {
  return (
    <section className={styles.teams}>
      <div className="container">
        <div className="row">
          <div className={clsx("col")}>
            <h3>Team Member</h3>
          </div>
          <div className={clsx("col col--12")}>
            {teamList.map((props, idx) => (
              <Member key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
