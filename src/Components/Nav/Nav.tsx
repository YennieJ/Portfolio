import React from "react";
import { Link } from "react-scroll";

import ProjectButton from "./ProjectButton";

// react-scroll: Link태그의 to 이름과 태그에 id 가 동일하면 클릭 시 이동
// 현재 보고있는 페이지를 알려줌. 반응형

const Nav = () => {
  return (
    <div className="fixed top-0 w-full bg-stone-800 z-10 text-slate-600 2xl:flex 2xl:items-center 2xl:right-0 2xl:w-1/5 2xl:h-screen">
      <ul className="flex w-full text-3xl 2xl:text-6xl 2xl:flex-col">
        <li className="flex flex-row items-center leading-loose">
          <Link
            to="profile"
            spy={true}
            smooth={true}
            duration={300}
            className="w-full px-6 cursor-pointer hover:text-white "
            activeClass="bg-stone-900 cursor-default pointer-events-none text-white "
          >
            Profile
          </Link>
        </li>
        <li className="flex flex-row items-center leading-loose 2xl:flex-col">
          {/* <Link
            to="preview"
            spy={true}
            smooth={true}
            duration={100}
            className="w-full px-4 cursor-pointer hover:bg-green-950"
            activeClass="bg-green-950 cursor-default pointer-events-none"
          >
            Projects
          </Link> */}

          <ul className="flex h-full text-2xl 2xl:flex-col 2xl:w-full 2xl:text-4xl">
            <ProjectButton projectName="YenPin" />
            <ProjectButton projectName="Portfolio" />
            {/* <ProjectButton projectName="Yentube" />
            <ProjectButton projectName="Yenflix" /> */}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
