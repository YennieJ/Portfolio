import React from "react";

import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

interface ILinkContainer {
  projectName: string;
  CD?: boolean;
}

// pages > yentube

// 프로젝트 이름에 따라 외부 링크 연결

const LinkContainer = ({ CD, projectName }: ILinkContainer) => {
  const onClick = (urlName: string) => {
    const yentube = projectName === "Yentube";
    const netflix = projectName === "Netflix";
    const yenpin = projectName === "YenPin";
    const portfolio = projectName === "Portfolio";

    const url: any =
      (yentube &&
        (urlName === "git"
          ? "https://github.com/YennieJ/Yentube"
          : "https://yentube.store/")) ||
      (netflix && urlName === "git" && "https://github.com/YennieJ/Yenflix") ||
      (yenpin && urlName === "git" && "https://github.com/YennieJ/YenPin") ||
      (portfolio &&
        urlName === "git" &&
        "https://github.com/YennieJ/portfolio");

    window.open(url);
  };

  return (
    <div className="flex items-cneter my-4">
      {CD && (
        <div
          className="mr-2 cursor-pointer hover:text-rose-700  "
          onClick={() => onClick("site")}
        >
          <span>Site</span>
          <AiOutlineLink className="inline-block text-6xl" />
        </div>
      )}
      <div
        className="cursor-pointer hover:text-rose-700  "
        onClick={() => onClick("git")}
      >
        <AiFillGithub className="inline-block mr-2 text-6xl " />
        <span>README</span>
      </div>
    </div>
  );
};

export default LinkContainer;
