import React from "react";

interface IUsed {
  projectName: string;
}

// pages > profile
// pages > projects
// pages > portfolio

// 어떤 툴을 사용했는지 보여준다.
const Used = ({ projectName }: IUsed) => {
  //for css
  const others = projectName === "Portfolio" || projectName === "Profile";

  //기본적으로 사용한 툴
  const basic = {
    Profile: ["React", "Styled Components", "JavaScript", "TypeScript"],
    Yentube: ["React", "CSS Modules", "JavaScript"],
    Netflix: ["React", "Styled Components", "TypeScript"],
    YenPin: ["React", "Styled Components", "TypeScript"],
    Portfolio: ["React", "Tailwindcss", "TypeScript", "Github CI/CD"],
  };

  // 그 외 추가로 사용한 툴
  const extend = {
    Yentube: ["Axios", "React Query", "React Hook Form", "Recoil", "Netlify"],
    Netflix: ["Axios", "React Router", "React Query", "React Hook Form"],
    YenPin: [
      "Axios",
      "React Router",
      "React Query",
      "React Hook Form",
      "Recoil",
    ],
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

  // for css
  const projectUsed = `inline-block px-1.5 py-0.5 mr-1 border rounded-lg text-xs font-normal`;
  const othersUsed =
    "flex items-center px-2 py-1 mx-1 mb-4 border-2 rounded-xl text-lg font-bold md:text-3xl";

  return (
    <div className={`${others && "flex justify-center mb-4"}   `}>
      {basicUsed.map((item, i) => (
        <span className={others ? othersUsed : projectUsed} key={i}>
          {item}
        </span>
      ))}
      {!others && (
        <>
          <br />
          {extendUsed.map((item, i) => (
            <span className={projectUsed} key={i}>
              {item}
            </span>
          ))}
        </>
      )}
    </div>
  );
};

export default Used;
