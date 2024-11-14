import React from "react";
import cheakMarkIcon from "../../assets/checkmark-dark.svg";
import SkillList from "../../common/SkillList";
import styles from "./SkillsStyles.module.css";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.SkillList}>
        <SkillList src={cheakMarkIcon} skill="HTML" />
        <SkillList src={cheakMarkIcon} skill="CSS" />
        <SkillList src={cheakMarkIcon} skill="JavaScript" />
        <SkillList src={cheakMarkIcon} skill="Node" />
      </div>
      <hr />
      <div className={styles.SkillList}>
        <SkillList src={cheakMarkIcon} skill="React" />
        <SkillList src={cheakMarkIcon} skill="Tailwind CSS" />
        <SkillList src={cheakMarkIcon} skill="MySQL" />
        <SkillList src={cheakMarkIcon} skill="MongoDB" />
      </div>
      <hr />
      <div className={styles.SkillList}>
        <SkillList src={cheakMarkIcon} skill="Git" />
        <SkillList src={cheakMarkIcon} skill="Figma" />
        <SkillList src={cheakMarkIcon} skill="Next js" />
      </div>
      <hr />
      <div className={styles.SkillList}>
        <SkillList src={cheakMarkIcon} skill="Express js" />
        <SkillList src={cheakMarkIcon} skill="Bootstap" />
      </div>
    </section>
  );
}

export default Skills;
