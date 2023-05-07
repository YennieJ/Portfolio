import React, { useState, useRef, useEffect } from "react";

import yentube1 from "./Yentube/imgs/yentube1.png";
import yentube2 from "./Yentube/imgs/yentube2.png";
import yentube3 from "./Yentube/imgs/yentube3.png";
import yentube4 from "./Yentube/imgs/yentube4.png";
import yentube5 from "./Yentube/imgs/yentube5.png";

import yenflix1 from "./Yenflix/imgs/yenflix1.png";
import yenflix2 from "./Yenflix/imgs/yenflix2.png";
import yenflix3 from "./Yenflix/imgs/yenflix3.png";
import yenflix4 from "./Yenflix/imgs/yenflix4.png";
import yenflix5 from "./Yenflix/imgs/yenflix5.png";
import yenflix6 from "./Yenflix/imgs/yenflix6.png";

import yenpin1 from "./YenPin/imgs/yenpin1.png";
import yenpin2 from "./YenPin/imgs/yenpin2.png";
import yenpin3 from "./YenPin/imgs/yenpin3.png";
import yenpin4 from "./YenPin/imgs/yenpin4.png";
import yenpin5 from "./YenPin/imgs/yenpin5.png";
import yenpin6 from "./YenPin/imgs/yenpin6.png";

interface ISlider {
  projectName: string;
}

const Slider = ({ projectName }: ISlider) => {
  const [slideIndex, setSlideIndex] = useState(1);

  const slideRef = useRef<HTMLDivElement>(null);

  let slideArr: string[] = [];

  if (projectName === "Yentube") {
    slideArr.push(yentube1, yentube2, yentube3, yentube4, yentube5);
  } else if (projectName === "Yenflix") {
    slideArr.push(yenflix1, yenflix2, yenflix3, yenflix4, yenflix5, yenflix6);
  } else if (projectName === "YenPin") {
    slideArr.push(yenpin1, yenpin2, yenpin3, yenpin4, yenpin5, yenpin6);
  }

  const SLIDE_NUM = slideArr.length;

  //기본 배열의 마지막
  const beforeSlide = slideArr[SLIDE_NUM - 1];

  //기본 배열의 처음
  const afterSlide = slideArr[0];

  //무한 슬라이드를 구현하기 위해 새로운 배열
  const copiedArr = [beforeSlide, ...slideArr, afterSlide];

  //무한 슬라이드 사이즈
  const COPIED_NUM = copiedArr.length;

  useEffect(() => {
    if (slideIndex === slideArr.length + 1) {
      setTimeout(() => {
        setSlideIndex(1);
        if (slideRef.current) {
          slideRef.current.style.transition = "";
        }
      }, 1000);

      setTimeout(() => {
        if (slideRef.current) {
          slideRef.current.style.transition = "all 500ms ease-in-out";
        }
      }, 1500);
    }

    if (slideIndex === 0) {
      setTimeout(() => {
        setSlideIndex(slideArr.length);
        if (slideRef.current) {
          slideRef.current.style.transition = "";
        }
      }, 1000);

      setTimeout(() => {
        if (slideRef.current) {
          slideRef.current.style.transition = "all 500ms ease-in-out";
        }
      }, 1500);
    }
  }, [slideArr.length, slideIndex]);

  const slideHandler = (direction: number) => {
    setSlideIndex((slideIndex) => slideIndex + direction);
  };

  return (
    <div className="overflow-hidden text-black">
      <div
        className={`flex border-y-4`}
        ref={slideRef}
        style={{
          width: `${100 * COPIED_NUM}%`,

          transition: "all 500ms ease-in-out",
          transform: `translateX(${
            -1 * ((100 / copiedArr.length) * slideIndex)
          }%)`,
        }}
      >
        {copiedArr.map((item, i) => (
          <div key={i} className="relative w-full text-center ">
            <img src={item} alt={projectName} />
          </div>
        ))}
      </div>

      <button onClick={() => slideHandler(-1)}>뒤로</button>
      <button onClick={() => slideHandler(1)}>앞으로</button>
    </div>
  );
};

export default Slider;
