import React from "react";
import ProjectContainer from "../ProjectContainer";

const YenPin = () => {
  //for css
  const pointUsed =
    "inline-block px-2 py-1 mx-1 border rounded-xl bg-black text-white text-base font-bold text-center md:text-lg";
  return (
    <ProjectContainer projectName="YenPin">
      <h3 className="text-2xl leading-loose">
        사진을 보관, 삭제, 검색할 수 있습니다.
      </h3>
      <ul className=" px-4 text-base font-medium md:text-lg">
        <li className="mb-1.5">
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
        </li>
      </ul>
    </ProjectContainer>
  );
};

export default YenPin;
