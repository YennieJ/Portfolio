import React from "react";

interface IUsed {
  projectName: string;
}

// pages > Projects > yenpin
// pages > Projects > portfolio

// 어떤 툴을 사용했는지 보여준다.
const Used = ({ projectName }: IUsed) => {
  //기본적으로 사용한 툴
  const basic = {
    YenPin: ["React", "Styled Components", "TypeScript"],
    Portfolio: ["React", "Tailwindcss", "TypeScript"],
  };

  // 그 외 추가로 사용한 툴
  const extend = {
    YenPin: [
      "Axios",
      "React Router",
      "React Query",
      "React Hook Form",
      "Recoil",
      "Firebase Deploy",
    ],
    Portfolio: ["무한 슬라이드", "React-scroll", "EmailJS", "Github Deploy"],
  };

  //props 이름과 프로젝트 이름이 같은 배열을 찾아 사용한 툴을 맵핑하여 보여준다.
  let basicUsed: string[] = [];
  let extendUsed: string[] = [];

  for (const [keys, values] of Object.entries(basic)) {
    keys === projectName && values.map((value) => basicUsed.push(value));
  }
  for (const [keys, values] of Object.entries(extend)) {
    keys === projectName && values.map((value) => extendUsed.push(value));
  }

  //for css
  const projectUsed = `inline-block px-2 py-1 mx-1 mb-0.5 border-2 rounded-xl text-sm font-bold text-center md:text-base`;

  return (
    <section className="w-full pb-3  border-b-2 border-gray-400">
      <h4 className="sr-only">{projectName}의 사용 툴</h4>
      <ul className="text-center w-full mb-1">
        {basicUsed.map((item, i) => (
          <li className={projectUsed} key={i}>
            {item}
          </li>
        ))}
      </ul>

      <ul className="mb-3">
        {extendUsed.map((item, i) => (
          <li className={projectUsed} key={i}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Used;
