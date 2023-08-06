import React from "react";

import YenPin from "./Components/YenPin/YenPin";
import Portfolio from "./Components/Portfolio/Portfolio";
// import Yentube from "./Components/Yentube/Yentube";
// import Yenflix from "./Components/Yenflix/Yenflix";

// projects에 대한 코드 설명
const Projects = () => {
  return (
    <div className="flex flex-col items-center h-full pb-20 bg-stone-900">
      <YenPin />
      <Portfolio />
      {/* <Yentube />
      <Yenflix /> */}
    </div>
  );
};

export default Projects;
