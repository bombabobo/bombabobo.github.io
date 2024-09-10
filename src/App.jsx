import styles from "./App.module.css";
import React, { useState } from "react";
import useLocalStorage from "use-local-storage";

import { Hero } from "./components/Hero/Hero";
import { Toggle } from "./components/Toggle/Toggle";
import { Navbar } from './components/Navbar/Navbar';
import { About } from './components/About/About';
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";

function App() {
  const preference = window.matchMedia("prefers-color-scheme: dark)").matches;
  const [isDark, setisDark] = useLocalStorage("isDark", preference);

  return (
    <div className={styles.App} data-theme={isDark ? "dark" : "light"}>
      <Toggle isChecked={isDark} handleChange={() => setisDark(!isDark)} />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
    </div>
  )
}

export default App;
