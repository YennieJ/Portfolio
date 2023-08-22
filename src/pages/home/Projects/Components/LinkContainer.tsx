import React from "react";

import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

interface ILinkContainer {
  projectName: string;
}

// pages > projects > yenpin
// pages > projects > portfolio

// 프로젝트 이름에 따라 외부 링크 연결
const LinkContainer = ({ projectName }: ILinkContainer) => {
  const onClick = (urlName: string) => {
    const yenpin = projectName === "YenPin";
    const portfolio = projectName === "Portfolio";

    const url: any =
      (yenpin &&
        (urlName === "git"
          ? "https://github.com/YennieJ/YenPin"
          : "https://cardhome-84e77.web.app//")) ||
      (portfolio && "https://github.com/YennieJ/portfolio");
    window.open(url);
  };

  return (
    <section className="my-10">
      <h4 className="sr-only">{projectName} 싸이트 링크</h4>
      <span>더 자세히 보기</span>

      <ul className="flex justify-center">
        {projectName === "YenPin" && (
          <li
            className="mr-2 cursor-pointer hover:text-rose-700  "
            onClick={() => onClick("site")}
          >
            Site
            <AiOutlineLink className="inline-block text-6xl" />
          </li>
        )}
        <li
          className="cursor-pointer hover:text-rose-700  "
          onClick={() => onClick("git")}
        >
          <AiFillGithub className="inline-block mr-2 text-6xl " />
          README
        </li>
      </ul>
    </section>
  );
};

export default LinkContainer;
