import React from 'react';
import styles from "./Hero.module.css";
import '../../vars.css';
import { getImageUrl } from "../../utils";

export const Hero = () => {
  // Function to toggle theme
  const toggleTheme = () => {
    document.documentElement.classList.toggle('inverted-theme');
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>HI, I'm Raphaël</h1>
        <p className={styles.description}>
          I'm a low-level developer in C.
        </p>
        <a href="mailto:raphael.ostier@laposte.net" className={styles.contactBtn}>
          Contact me
        </a>
      </div>
      <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};