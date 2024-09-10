import React from 'react'

import styles from "./Projects.module.css";
import { getImageUrl } from "../../utils";

export const Projects = () => {
  return (
    <section className={styles.container} id='projects'>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.content}>
        <ul>
          <div className={styles.project}></div>
          <div className={styles.project}></div>
          <div className={styles.project}></div>
          <div className={styles.project}></div>
        </ul>
      </div>
    </section>
  );
};
