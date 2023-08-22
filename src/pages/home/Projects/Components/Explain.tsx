import React from "react";

import "./ExplainStyle.css";

interface IExplain {
  projectName: string;
}

const Explain = ({ projectName }: IExplain) => {
  const explainData = {
    YenPin: [
      " 사용자들이 이미지를 타인과 공유할 수 있습니다.",
      "이미지 등록, 수정, 삭제, 검색, 좋아요",
      "기능들을 수행할 때 페이지를 새로고침 하기 전엔 업데이트 되지 않았습니다.",
      "리액트 쿼리 기능중 하나 useMutation 사용하여 새로고침을 하지 않아도 작동하도록 변경했습니다.",
      "기획, 개발, 배포까지 하나의 웹 애플리케이션이 완성되는 과정을 배웠으며 사용자가 사이트 구조상 어디에 위치하고 있는지 버튼의 색깔을 다르게 주어 접근성에 대하여 학습할 수 있었습니다.",
    ],
    Portfolio: [
      "Portfolio(현 페이지)",
      "주니어 프론트엔드 개발자 이예진을 소개합니다.",
      "검색 엔진 최적화와 웹 접근성을 생각하지 않았습니다.",
      "시맨틱 태그를 사용하여 접근성을 보완하였습니다.",
      "tailwind를 사용해 클래스명에 대한 고민, 컨텍스트 전환이 적음, 손쉬운 반응형 등의 장점과 재사용이 어렵고 중복이 많은 단점에 대해 경험했습니다.",
    ],
  };

  let explain: string[] = [];

  for (const [keys, values] of Object.entries(explainData)) {
    keys === projectName && values.map((value) => explain.push(value));
  }

  return (
    <section>
      <h4 className="sr-only">{projectName}에 대한 설명서</h4>
      <ul className="explain px-7 text-base font-medium  md:text-lg md:px-20 lg:px-36">
        {explain.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default Explain;
