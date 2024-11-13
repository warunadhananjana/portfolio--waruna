import React from "react";
import style from "./HeroStyle.module.css";
import heroImg from "../../assets/pict01.jpg";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/CV.pdf";
import { useTheme } from "../../common/ThemeContext";

const Hero = () => {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={style.container}>
      <div className={style.colorModeContainer}>
        <img
          className={style.hero}
          src={heroImg}
          alt="Waruna's profile picture"
        />
        <img
          className={style.colorMode}
          src={themeIcon}
          alt="Toggle color mode"
          onClick={toggleTheme}
        />
      </div>
      <div className={style.info}>
        <h1>
          Waruna
          <br /> Dhananjana
        </h1>
        <h2>Full Stack Developer</h2>
        <span>
          <a
            href="https://github.com/warunadhananjana"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <img src={githubIcon} alt="GitHub icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/waruna-dhananjana-08137b228/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <img src={linkedinIcon} alt="LinkedIn icon" />
          </a>
        </span>
        <p className={style.description}>
          Passionate about creating clean, efficient code and delivering
          seamless user experiences.
        </p>
        <a href={CV} download>
          <button className={style.hover}> Resume</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
