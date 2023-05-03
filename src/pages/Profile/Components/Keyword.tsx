import React from "react";

// about me

const Keyword = () => {
  return (
    <div className="lg:w-3/5">
      <div className="text-4xl leading-relaxed">About me</div>
      <ul className="ml-4 text-base font-normal list-disc list-inside">
        <li>
          <span className="-ml-2">
            목표가 정해지면 계획을 세우고 효율적으로 빠르게 달성 하는 것을
            좋아합니다.
          </span>
        </li>
        <li>
          <span className="-ml-2">
            새로운 것을 배워서 알맞게 사용해 목표에 달성했을 때 큰
            <b className=" text-lg"> 성취감</b>을 느낍니다.
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Keyword;
