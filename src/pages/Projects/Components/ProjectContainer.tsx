import React from "react";

import LinkContainer from "./LinkContainer";
import Used from "../../../Components/Used";
import Slider from "./Slider";

interface IProjectContainer {
  projectName: string;
  children: React.ReactNode;
}

// pages > projects > yentube
// pages > projects > yenflix
// pages > projects > yenpin

const ProjectContainer = ({ projectName, children }: IProjectContainer) => {
  return (
    <div
      id={projectName}
      className="w-full pt-24 px-3 text-neutral-800 text-center md:px-7"
    >
      <div className="pt-2.5 border-b-2 border-gray-400 rounded-t-xl bg-rose-100">
        <h2 className="text-5xl leading-loose">{projectName}</h2>
      </div>
      <div className="flex flex-col w-full bg-white pb-10 rounded-b-xl ">
        <Slider projectName={projectName} />
        <Used projectName={projectName} />
        {children}
        <LinkContainer projectName={projectName} />
      </div>
    </div>
  );
};

export default ProjectContainer;
