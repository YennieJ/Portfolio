import React, { ReactNode } from "react";

interface IProjectContainer {
  projectName: string;
  children: ReactNode;
}

// 기본 틀, 썸네일, 프로젝트 이름
const ProjectContainer = ({ projectName, children }: IProjectContainer) => {
  return (
    <div className="flex flex-col w-96 h-[500px] my-3.5 px-5 py-7 bg-black">
      <img src={require(`../Images/${projectName}.png`)} alt="" />
      <div className="text-3xl my-3">{projectName}</div>
      {children}
    </div>
  );
};

export default ProjectContainer;
