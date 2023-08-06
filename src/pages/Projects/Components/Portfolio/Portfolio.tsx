import React from "react";
import ProjectContainer from "../ProjectContainer";

const Portfolio = () => {
  //for css
  const pointUsed =
    "inline-block px-2 py-1 mx-8 border rounded-xl bg-black text-white text-lg font-bold md:text-xl";

  return (
    <ProjectContainer projectName="Portfolio">
      <h3 className="text-2xl leading-loose mb-2">Portfolio(현 페이지)</h3>
      <ul className=" px-5 mb-5 text-base font-medium  md:text-lg">
        <li className="mb-1.5">
          주요 기능 : 주니어 프론트엔드 개발자 이예진을 소개합니다.
        </li>
        <li className="mb-1.5">
          기존 문제점 : 검색 엔진 최적화와 웹 접근성을 생각하지 않았습니다.
        </li>
        <li>개선점 : 시맨틱 태그를 사용하여 접근성을 보완하였습니다.</li>
      </ul>
      <div className={pointUsed}>
        tailwind를 사용해 클래스명에 대한 고민, 컨텍스트 전환이 적음, 손쉬운
        반응형 등의 장점과 재사용이 어렵고 중복이 많은 단점에 대해 경험했습니다.
      </div>
      {/* <ul className=" px-4 text-base font-medium md:text-lg">
        <li className="mb-1">
          컴포넌트,코드 <span className={pointUsed}>재사용</span>에 대해
          생각하며 만들었다.
        </li>
        <li className="mb-1">
          <span className={pointUsed}>Tailwindcss</span>를 사용해 클래스명에
          대한 고민, 컨텍스트 전환이 적음, 손쉬운 반응형 등의 장점과 재사용이
          어렵고 중복이 많은 단점에 대해 경험하였다.
        </li>
        <li className="mb-1">
          setTimeout을 이용해<span className={pointUsed}>무한 슬라이드</span>를
          구현하였다.
        </li>
        <li className="mb-1">
          <span className={pointUsed}>EmailJS</span>라이브러리를 이용하여 이메일
          전송 기능을 구현하였다.
        </li>
      </ul> */}
    </ProjectContainer>
  );
};

export default Portfolio;
