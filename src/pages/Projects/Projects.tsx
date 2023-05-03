import React from "react";

import ProjectContainer from "./Components/ProjectContainer";
import Point from "./Components/Point";
import Used from "../../Components/Used";
import LinkContainer from "../../Components/LinkContainer";

const Projects = () => {
  const containerClassName = "flex flex-col justify-between h-2/5 mb-3";
  return (
    <div
      id="projects"
      className="flex flex-wrap justify-around items-center min-h-screen h-full max-h-fit py-20 bg-green-950 2xl:py-5 "
    >
      <ProjectContainer projectName="Yentube">
        <div className={containerClassName}>
          <Used projectName="Yentube" />
          <Point projectName="Yentube" />
        </div>
        <LinkContainer projectName="Yentube" CD />
      </ProjectContainer>

      <ProjectContainer projectName="Netflix">
        <div className={containerClassName}>
          <Used projectName="Netflix" />
          <Point projectName="Netflix" />
        </div>
        <LinkContainer projectName="Netflix" />
      </ProjectContainer>
      <ProjectContainer projectName="YenPin">
        <div className={containerClassName}>
          <Used projectName="YenPin" />
          <Point projectName="YenPin" />
        </div>
        <LinkContainer projectName="YenPin" />
      </ProjectContainer>
    </div>
  );
};

export default Projects;
