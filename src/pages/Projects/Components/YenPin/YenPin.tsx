import React from "react";
import ProjectContainer from "../ProjectContainer";

const YenPin = () => {
  //for css
  const pointUsed =
    "inline-block px-2 py-1 mx-8 border rounded-xl bg-black text-white text-lg font-bold md:text-xl";
  return (
    <ProjectContainer projectName="YenPin">
      <h3 className="text-2xl leading-loose mb-2">
        사용자들이 이미지를 타인과 공유할 수 있습니다.
      </h3>
      <ul className=" px-5 mb-5 text-base font-medium  md:text-lg">
        <li className="mb-1.5">
          주요 기능 : 이미지 등록, 수정, 삭제, 검색, 좋아요
        </li>
        <li className="mb-1.5">
          기존 문제점 : 기능들을 수행할 때 페이지를 새로고침 하기 전엔 업데이트
          되지 않았습니다.
        </li>
        <li>
          개선점 : 리액트 쿼리 기능중 하나 useMutation 사용하여 새로고침을 하지
          않아도 작동하도록 변경했습니다.
        </li>

        {/* <li className="mb-1.5">
          <span className={pointUsed}>Firebase</span>를 사용하여 인증
          서비스(Google Login,LogIn,SignUp),데이터 베이스(사진과 제목,사진에
          대한 설명을 CRUD와 검색), 스토리지(프로필 사진 업데이트), 호스팅등
          서버 구축을 사용했다.
        </li>
        <li className="mb-1.5">
          <span className={pointUsed}>React-query</span>로 데이터를 받아오고{" "}
          <span className={pointUsed}>좋아요</span>나 CRUD가 생길 때 Mutation을
          활용했다.
        </li>
        <li>
          Recoil(+Styled-Copmonents 의 Theme)을 사용해
          <span className={pointUsed}>Dark Mode</span>와
          <span className={pointUsed}>Pagination</span> 구현했다.
        </li> */}
      </ul>
      <div className={pointUsed}>
        기획, 개발, 배포까지 하나의 웹 애플리케이션이 완성되는 과정을 배웠으며
        사용자가 사이트 구조상 어디에 위치하고 있는지 버튼의 색깔을 다르게 주어
        접근성에 대하여 학습할 수 있었습니다.
      </div>
    </ProjectContainer>
  );
};

export default YenPin;
