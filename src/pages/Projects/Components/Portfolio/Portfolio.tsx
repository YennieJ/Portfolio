import React from "react";
import ProjectContainer from "../ProjectContainer";

const Portfolio = () => {
  //for css
  const pointUsed =
    "inline-block px-2 py-1 mx-1 border rounded-xl bg-black text-white text-base font-bold text-center md:text-lg";

  return (
    <ProjectContainer projectName="Portfolio">
      <h3 className="text-2xl leading-loose">Portfolio(현 페이지)</h3>
      <ul className=" px-4 text-base font-medium md:text-lg">
        <li className="mb-1.5">
          <span className={pointUsed}>Tailwindcss</span>를 사용해 클래스명에
          대한 고민, 컨텍스트 전환이 적음, 손쉬운 반응형 등의 장점과 재사용이
          어렵고 중복이 많은 단점에 대해 경험하였다.
        </li>
        <li className="mb-1">
          <span className={pointUsed}>무한 슬라이드</span>구현.
        </li>
        <li className="mb-1">
          컴포넌트,코드 <span className={pointUsed}>재사용</span>에 대해
          생각하며 만들었다.
        </li>
      </ul>
    </ProjectContainer>
  );
};

export default Portfolio;
