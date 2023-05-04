import React from "react";
import ProjectContainer from "../ProjectContainer";

const Yenflix = () => {
  //for css
  const pointUsed =
    "inline-block px-2 py-1 mx-1 border rounded-xl bg-black text-white text-base font-bold text-center md:text-lg";
  return (
    <ProjectContainer projectName="Yenflix">
      <h3 className="text-2xl leading-loose">Netflix clone coding</h3>
      <ul className=" px-4 text-base font-medium md:text-lg">
        <li className="mb-1.5">
          <span className={pointUsed}>Movie Api</span>로 실시간 데이터를 받아
          인기 영상,검색 기능을 구현했다.
        </li>

        <li className="mb-1.5">
          Netflix UI를 반영하여 react-slick 라이브러리를 사용해
          <span className={pointUsed}>무한 슬라이드</span>
          기능을 구현했다.
        </li>
        <li>
          @react-oauth/google 라이브러리로
          <span className={pointUsed}>Google Login</span>이 가능하고
        </li>
        <li>
          React-hook-form으로
          <span className={pointUsed}>Signup</span>기능을 구현해 렌더링 과정을
          최소화 하는 장점에 대해 배웠다.
        </li>
      </ul>
    </ProjectContainer>
  );
};

export default Yenflix;
