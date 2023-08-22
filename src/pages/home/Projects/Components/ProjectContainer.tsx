import React from "react";

import LinkContainer from "./LinkContainer";
import Used from "./Used";
import Slider from "./Slider";
import Explain from "./Explain";

interface IProjectContainer {
  projectName: string;
  children: React.ReactNode;
}

// pages > projects > yenpin
// pages > projects > portfolio

const ProjectContainer = ({ projectName }: IProjectContainer) => {
  return (
    <article
      id={projectName}
      className="w-full pt-24 px-3 text-neutral-800 text-center md:px-7 2xl:pt-10"
    >
      <header className="pt-2.5 border-b-2 border-gray-400 rounded-t-xl bg-stone-800 text-white">
        <h3 className="text-5xl leading-loose">{projectName}</h3>
      </header>
      <div className="flex flex-col w-full bg-white pb-10 rounded-b-xl ">
        <Slider projectName={projectName} />
        <Used projectName={projectName} />
        <Explain projectName={projectName} />
        <LinkContainer projectName={projectName} />
      </div>
    </article>
  );
};

export default ProjectContainer;
