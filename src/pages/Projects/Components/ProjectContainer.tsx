import React from "react";

interface IProjectContainer {
  projectName: string;
}

// 기본 틀, 썸네일, 프로젝트 이름
const ProjectContainer = ({ projectName }: IProjectContainer) => {
  return (
    <div className="flex flex-col w-96  my-3.5 py-7 px-5 bg-black rounded-xl">
      <img
        className="mb-5"
        src={require(`../Images/${projectName}.png`)}
        alt=""
      />
      <div className="text-3xl text-center">{projectName}</div>
    </div>
  );
};

export default ProjectContainer;
