// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/heroImage1.png")}
          alt="I am wiht my laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I am a frontend developer knowledge with building optimised
                sites.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>I have some knowledge in APIs and PHP server.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt=" cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Design</h3>
              <p>I have knowledge with UI/UX and Graphic Design</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
