import React from "react";

interface IUsed {
  projectName: string;
}

// pages > profile
// pages > portfolio > yentube
// pages > portfolio > yenflix
// pages > portfolio > yenpin

// 어떤 툴을 사용했는지 보여준다.
const Used = ({ projectName }: IUsed) => {
  //기본적으로 사용한 툴
  const basic = {
    Profile: ["React", "JavaScript", "TypeScript", "HTML", "CSS"],
    Yentube: ["React", "CSS Modules", "JavaScript"],
    Yenflix: ["React", "Styled Components", "TypeScript"],
    YenPin: ["React", "Styled Components", "TypeScript"],
    Portfolio: ["React", "Tailwindcss", "TypeScript"],
  };

  // 그 외 추가로 사용한 툴
  const extend = {
    Yentube: ["Axios", "React Query", "React Hook Form", "Recoil", "Netlify"],
    Yenflix: ["Axios", "React Router", "React Query", "React Hook Form"],
    YenPin: [
      "Axios",
      "React Router",
      "React Query",
      "React Hook Form",
      "Recoil",
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
  const profile = projectName === "Profile";
  const profileUsed =
    "px-2 py-1 mx-1 border-2 rounded-xl text-lg font-bold md:text-3xl";
  const projectUsed = `inline-block px-2 py-1 mx-1 mb-0.5 border-2 rounded-xl text-sm font-bold text-center md:text-base`;

  return (
    <div className={!profile ? "w-full pb-3  border-b-2 border-gray-400" : ""}>
      <div className="text-center w-full mb-1">
        {basicUsed.map((item, i) => (
          <span className={profile ? profileUsed : projectUsed} key={i}>
            {item}
          </span>
        ))}
      </div>
      <div className="mb-3">
        {extendUsed.map((item, i) => (
          <span className={projectUsed} key={i}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Used;
