// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Gayathrey</h1>
        <p className={styles.description}>
          I am a frontend Developer and knowledge with UI/UX design with React
          and NodeJS. Reach out if you would like to learn more!
        </p>
        <a href="mailto:gayathrey@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage1.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
