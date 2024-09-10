import React from 'react'

import styles from "./About.module.css";
import useLocalStorage from "use-local-storage";
import { getImageUrl } from "../../utils";

export const About = () => {
  const [isDark] = useLocalStorage('isDark', false);

  const cursorImage = isDark ? 'cursorIcon.png' : 'cursorIcon_.png';
  const serverImage = isDark ? 'serverIcon.png' : 'serverIcon_.png';
  const UIImage = isDark ? 'UIIcon.png' : 'UIIcon_.png';

  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="poor baby enderman"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl(`about/${cursorImage}`)} alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a beginer frontend developper
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl(`about/${serverImage}`)} alt="server icon" />
            <div className={styles.aboutItemText}>
              <h3>backend Developer</h3>
              <p>
                I'm a beginer backend developper
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl(`about/${UIImage}`)} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I'm a beginer UI Designer
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
