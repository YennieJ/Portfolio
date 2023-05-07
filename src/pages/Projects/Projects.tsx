import React from "react";

import Yentube from "./Components/Yentube/Yentube";
import Yenflix from "./Components/Yenflix/Yenflix";
import YenPin from "./Components/YenPin/YenPin";
import Portfolio from "./Components/Portfolio/Portfolio";

// projects에 대한 코드 설명
const Projects = () => {
  return (
    <div className="flex flex-col items-center h-full pb-20 bg-rose-700">
      <Yentube />
      <Yenflix />
      <YenPin />
      <Portfolio />
    </div>
  );
};

export default Projects;
