import React from "react";

import YenPin from "./YenPin/YenPin";
import Portfolio from "./Portfolio/Portfolio";

// projects에 대한 코드 설명
const Projects = () => {
  return (
    <article className="flex flex-col items-center h-full pb-20 bg-stone-900">
      <h2 className="sr-only">이예진의 프로젝트</h2>
      <YenPin />
      <Portfolio />
    </article>
  );
};

export default Projects;
