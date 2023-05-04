import React from "react";

import ProjectContainer from "./Components/ProjectContainer";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-wrap justify-around items-center min-h-screen h-full max-h-fit py-20 bg-green-950 2xl:py-5 "
    >
      <ProjectContainer projectName="Yentube"></ProjectContainer>
      <ProjectContainer projectName="Yenflix"></ProjectContainer>
      <ProjectContainer projectName="YenPin"></ProjectContainer>
    </div>
  );
};

export default Projects;
