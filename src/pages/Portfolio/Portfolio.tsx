import React from "react";

import entire from "./Images/entire.png";
import entireCode from "./Images/entireCode.png";

import LinkContainer from "../../Components/LinkContainer";
import Used from "../../Components/Used";
import Table from "./Components/Table";
import ExplainContainer from "./Components/ExplainContainer";

// portfolio에 대한 코드 설명
const Portfolio = () => {
  return (
    <div
      id="Portfolio"
      className="flex flex-col items-center h-full py-20 bg-rose-700 2xl:py-10"
    >
      <LinkContainer projectName="Portfolio" />
      <Used projectName="Portfolio" />
      <Table />
      <div className="w-full pt-10 px-3 text-neutral-800 md:px-7">
        <div className="px-3 py-4 rounded-t-xl bg-rose-100">
          <h2 className="text-3xl leading-loose">재사용 Components</h2>
          <p className="text-base font-semibold underline decoration-double decoration underline-offset-2">
            진행했던 프로젝트를 바탕으로 최소한의 중복을 생각하며 코드 짜는데
            집중했다.
          </p>
        </div>
        <div className="bg-white pb-10 rounded-b-xl">
          <img src={entire} alt="entire" className="mb-4" />
          <div className="px-3">
            <div className="mb-3 border-b border-slate-700 text-lg font-semibold">
              props로 projectName을 넘겨주어 썸네일, 제목, 사용한 툴, 링크를
              결정한다.
            </div>
            <img src={entireCode} alt="entireCode" />
          </div>
          <div className="px-3">
            <ExplainContainer title="ProjectContainer" />
            <ExplainContainer title="Used" />
            <ExplainContainer title="LinkContainer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
