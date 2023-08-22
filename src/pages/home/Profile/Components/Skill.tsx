import React, { useState } from "react";

const Skill = () => {
  const skill = [
    {
      id: 1,
      title: "React",
      content: [
        "함수형 컴포넌트를 선호합니다.",
        "Virtual DOM에 대해 이해하고 있습니다.",
        "Props 단방향 데이터 흐름 유지를 인지하고 있습니다.",
        "재사용 컴포넌트를 구현하고 사용할 수 있습니다.",
        "React Router를 통한 페이지 전환 관리를 할 수 있습니다",
        "Recoil을 이용한 전역 상태 관리를 할 수 있습니다.",
        "React-query를 활용한 비동기 호출 최적화를 생각합니다.",
      ],
    },
    {
      id: 2,
      title: "JavaScript",
      content: [
        "ECMAScript 6(ES6)를 선호합니다.",
        "배열과 여러 배열 메소드를 활용할 수 있습니다.",
        "함수과 스코프에 대해 이해하고 사용할 수 있습니다.",
        "단일 스레드 기반으로 비동기 작업을 처리과정을 이해하고 있습니다.",
        "객체 지향 프로그래밍은 코드의 재사용성과 유지보수성을 향상시키는데 주요한 목표를 가지고 있다는 것을 숙지하고 있습니다.",
      ],
    },
    {
      id: 3,
      title: "HTML",
      content: [
        "웹 페이지 구조를 구상할 수 있습니다.",
        "검색 엔진 최적화를 위한 마크업을 생각합니다.",
        "웹 접근성을 위한 시맨틱 태그를 활용합니다.",
      ],
    },
    {
      id: 4,
      title: "CSS",
      content: [
        "반응형 웹 디자인을 고려합니다.",
        "유지보수성을 생각합니다.",
        "재사용성을 위해 고민합니다.",
      ],
    },
  ];

  const [selectedSkill, setSelectedSkill] = useState(skill[0].id);

  const handleTabClick = (tabId: number) => {
    setSelectedSkill(tabId);
  };

  return (
    <section className="px-10 lg:px-14 xl:px-20 ">
      <h3 className="pb-8 text-4xl leading-relaxed">Skill</h3>

      {skill.map((tab) => (
        <button
          key={tab.id}
          className={`px-2 py-1 mx-1 border-2 rounded-xl text-lg font-bold mb-8 ${
            selectedSkill === tab.id
              ? "text-stone-800 bg-white"
              : "text-white bg-stone-800"
          }`}
          onClick={() => handleTabClick(tab.id)}
        >
          {tab.title}
        </button>
      ))}

      <ul className="text-lg pl-8 font-normal list-disc">
        {skill.map(
          (tab) =>
            selectedSkill === tab.id &&
            tab.content.map((list) => <li>{list}</li>)
        )}
      </ul>
    </section>
  );
};

export default Skill;
