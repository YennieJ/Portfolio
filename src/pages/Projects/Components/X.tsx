import React from "react";

interface IExplainContainer {
  title: string;
}

// 반복되는 UI 코드 설명 component

const ExplainContainer = ({ title }: IExplainContainer) => {
  const project = title === "ProjectContainer";
  const used = title === "Used";
  const link = title === "LinkContainer";

  const content =
    (project &&
      "projectName으로 썸네일과 제목을 정하고 JSX를 사용할 수 있게 children 사용") ||
    (used && "projectName과 동일한 이름의 배열을 찾아 map 사용") ||
    (link &&
      "projectName에 따라 깃허브 주소를 변경하고 props로 CD의 유무를 파악해서 UI");

  return (
    <div className="flex justify-between">
      <div className="px-3">
        <div className="text-2xl">{title}</div>
        <div className="mb-3 border-b border-slate-700 text-base font-semibold">
          {content}
        </div>
        <img src={require(`../Images/${title}Code.png`)} alt="" />
      </div>
      <img
        src={require(`../Images/${title}.png`)}
        alt={title}
        className="w-1/3 "
      />
    </div>
  );
};

export default ExplainContainer;
