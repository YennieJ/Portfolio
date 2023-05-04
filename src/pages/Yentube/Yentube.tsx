import React from "react";
import LinkContainer from "../../Components/LinkContainer";
import Used from "../../Components/Used";

const Yentube = () => {
  //for css
  const pointUsed =
    "inline-block px-2 py-1 mx-1 border rounded-xl bg-black text-white text-base font-bold text-center md:text-lg";

  return (
    <div
      id="Yentube"
      className="flex flex-col items-center h-full py-20 bg-rose-700 2xl:py-10"
    >
      <div className="w-full pt-10 px-3 text-neutral-800 text-center md:px-7">
        <div className="pt-2.5 border-b-2 border-gray-400 rounded-t-xl bg-rose-100">
          <h2 className="text-5xl leading-loose">Yentube</h2>
        </div>
        <div className="flex flex-col items-center w-full bg-white pb-10  rounded-b-xl ">
          <LinkContainer projectName="Yentube" CD />
          <div>사진</div>
          <Used projectName="Yentube" />
          <h3 className="text-2xl leading-loose">Youtube clone coding</h3>
          <ul className=" px-4 text-base font-medium md:text-lg">
            <li className="mb-1.5">
              <span className={pointUsed}>Google APIs</span>로 실시간 데이터를
              받아 인기 영상,관련 영상,채널 정보,썸네일,비디오 재생,검색 기능을
              구현했다.
            </li>
            <li className="mb-1">
              Youtube UI를 반영하여
              <span className={pointUsed}>반응형</span>과
              <span className={pointUsed}>무한 스크롤</span>기능을 구현했다.
            </li>
            <li>
              <span className={pointUsed}>Netlify</span>를 사용하며 배포 과정에
              대해 공부했다.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Yentube;
