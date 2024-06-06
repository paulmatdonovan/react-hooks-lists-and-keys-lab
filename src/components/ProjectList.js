import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const projectItems = ProjectItem.map((project) => {
    return project;
  }

  )
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{ProjectList}</div>
    </div>
  );
}

export default ProjectList;
