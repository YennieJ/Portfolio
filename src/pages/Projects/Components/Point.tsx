import React from "react";

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
          className="inline-block px-2 py-0.5 mr-1 border rounded-lg bg-white text-black text-sm font-normal"
          key={i}
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default Point;
