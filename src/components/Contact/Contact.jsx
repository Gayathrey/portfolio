// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
          <a href="mailto:gayathrey@gmail.com">gayathrey@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn Icon"
          />
          <a href="https://www.linkedin.com/in/gayathreyp/">
            linkedIn.com/gayathrey
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="github Icon" />
          <a href="https://github.com/Gayathrey?tab=repositories">
            github.com/gayathrey
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/behance.png")} alt="github Icon" />
          <a href="https://www.behance.net/gallery/175815713/Smart-watch-UI-Design">
            behance.com/gayathrey
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
