import React from "react";
import { Link } from "react-scroll";

interface IPreviewContainer {
  projectName: string;
}

// 썸네일, 프로젝트 이름
const PreviewContainer = ({ projectName }: IPreviewContainer) => {
  return (
    <Link
      to={projectName}
      spy={true}
      smooth={true}
      duration={300}
      className="flex flex-col w-96  my-3.5 py-7 px-5 bg-black rounded-xl cursor-pointer"
    >
      <img
        className="mb-5"
        src={require(`../Images/${projectName}.png`)}
        alt=""
      />
      <div className="text-3xl text-center">{projectName}</div>
    </Link>
  );
};

export default PreviewContainer;
