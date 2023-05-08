import React from "react";
import { Link } from "react-scroll";

interface IProjectButton {
  projectName: string;
}
const ProjectButton = ({ projectName }: IProjectButton) => {
  return (
    <li className="group flex relative leading-loose">
      <Link
        to={projectName}
        spy={true}
        smooth={true}
        duration={100}
        className="flex items-center w-12 h-full px-3 cursor-pointer transition ease-in delay-150 duration-300 group-hover:bg-rose-700 md:w-full md:justify-center"
        activeClass="bg-rose-700 cursor-default pointer-events-none [&_div]:bg-white md:[&_div]:opacity-0 [&_span]:opacity-100"
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-rose-700 rounded-full transition ease-in delay-150 duration-300 group-hover:bg-white md:group-hover:opacity-0  2xl:w-6 2xl:h-6" />
        <span className="hidden md:inline opacity-0 transition ease-in delay-150 duration-300 group-hover:opacity-100">
          {projectName}
        </span>
      </Link>
    </li>
  );
};

export default ProjectButton;
