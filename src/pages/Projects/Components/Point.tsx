import React from "react";

//pages > yentube

interface IPoint {
  projectName: string;
}

// 주요 기능을 보여준다.
const Point = ({ projectName }: IPoint) => {
  const basic = {
    Yentube: ["Google APIs", "반응형", "무한 스크롤"],
    Netflix: ["Movie Api", "무한 슬라이드", "Login", "Signup"],
    YenPin: ["Firebase", "좋아요", "Dark Mode", "Pagination"],
  };

  let basicUsed: string[] = [];

  for (const [keys, values] of Object.entries(basic)) {
    keys === projectName && values.map((value) => basicUsed.push(value));
  }

  return (
    <div>
      {basicUsed.map((item, i) => (
        <span
          className="px-2 py-1.5 mx-1 mb-4 border rounded-xl bg-black text-white text-base font-bold text-center md:text-xl"
          key={i}
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default Point;
