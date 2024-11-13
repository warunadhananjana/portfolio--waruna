import React from "react";
import "./ProjectsStyle.css";
import med from "../../assets/medExplore.png";
import Toure from "./../../assets/TourGlow.jpg";
import HospitalWeb from "../../assets/Mental Health.png";
import PostUploadeWeb from "../../assets/PostUploade.png";
import ProjectCard from "../../common/projectCard";
function Projects() {
  return (
    <section id="projects" className="container">
      <h1 className="sectionTitle">projects</h1>
      <div className="projectsContainer">
        <ProjectCard
          src={med}
          link="https://github.com/Rdilshan/MedExplorer"
          h3="MedExplorer"
          p="Medicine App"
        />
      </div>
      <div className="projectsContainer">
        <ProjectCard
          src={Toure}
          link="https://github.com/amcishara/TourGlow/tree/main"
          h3="TourGlow"
          p="Tourism web"
        />
      </div>
      <div className="projectsContainer">
        <ProjectCard
          src={HospitalWeb}
          link="https://github.com/Rdilshan/HAMMH"
          h3="Medical web"
          p="Mental Health Unit Hambantota"
        />
      </div>
      <div className="projectsContainer">
        <ProjectCard
          src={PostUploadeWeb}
          link="https://github.com/warunadhananjana/Mern-blog-"
          h3="Mern-blog-"
          p="Post uploaded web"
        />
      </div>
    </section>
  );
}

export default Projects;
