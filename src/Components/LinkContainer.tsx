import React from "react";

import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

interface ILinkContainer {
  projectName: string;
  CD?: boolean;
}
// pages > project
// pages > portfolio

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

  // for css
  const gitHubClassName =
    "float-right text-4xl cursor-pointer hover:fill-green-800 ";
  const portfolioClassName = "mb-5 text-6xl cursor-pointer hover:fill-black";

  return (
    <div>
      <AiFillGithub
        className={
          projectName === "Portfolio" ? portfolioClassName : gitHubClassName
        }
        onClick={() => onClick("git")}
      />
      {CD && (
        <AiOutlineLink
          className={`${gitHubClassName} mr-3`}
          onClick={() => onClick("site")}
        />
      )}
    </div>
  );
};

export default LinkContainer;
