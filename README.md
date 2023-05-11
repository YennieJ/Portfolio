# [Portfolio](https://yenniej.github.io/)

![react](https://img.shields.io/badge/-React-000000?logo=react&logoColor=61DAFB&style=for-the-badge)
![tailwindcss](https://img.shields.io/badge/-tailwindcss-000000?logo=tailwindcss&logoColor=06B6D4&style=for-the-badge)
![typescript](https://img.shields.io/badge/-typescript-000000?logo=typescript&logoColor=3178C6&style=for-the-badge)

![component](https://img.shields.io/badge/-재사용컴포넌트-ffffff?&style=for-the-badge)
![slider](https://img.shields.io/badge/-무한슬라이더-ffffff?&style=for-the-badge)
![scroll](https://img.shields.io/badge/-ReactScroll-ffffff?&style=for-the-badge)
![emailJS](https://img.shields.io/badge/emailjs-ffffff?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGFyaWEtaGlkZGVuPSJ0cnVlIiByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCA1MTAuODggNTEyIiBmaWxsPSIjRkNBMjUzIiBhbHQ9IkVtYWlsSlMiIGNsYXNzPSJsb2dvIG5hdmJhci1sb2dvIj48cmVjdCB4PSIyNzAuNTciIHdpZHRoPSIyNDAuMzEiIGhlaWdodD0iMjQwLjMxIiByeD0iMjQiIGZpbGw9ImluaGVyaXQiPjwvcmVjdD4gPHBhdGggZD0iTTIxNS4xMiAyNTQuNzNWNjguNWEyOS4xNiAyOS4xNiAwIDAgMC04LjU1LTIwLjY0IDI5LjE5IDI5LjE5IDAgMCAwLTQxLjI4IDBMMTYuMTggMTk3YTU1LjI3IDU1LjI3IDAgMCAwIDAgNzguMTRsMjIwLjcxIDIyMC42OGE1NS4yNyA1NS4yNyAwIDAgMCA3OC4xNCAwbDE0OS4xMS0xNDkuMTFhMjkuMTkgMjkuMTkgMCAwIDAgMC00MS4yOGwtMS4xNC0xLjEyYTI5LjE2IDI5LjE2IDAgMCAwLTIwLjY0LTguNTVIMjU2LjE1YTQxIDQxIDAgMCAxLTQxLjAzLTQxLjAzeiIgZmlsbD0iaW5oZXJpdCI+PC9wYXRoPjwvc3ZnPg==)
![github](https://img.shields.io/badge/-githubdeploy-ffffff?logo=github&logoColor=000000&style=for-the-badge)

---

## 재사용 컴포넌트

> 진행했던 프로젝트를 바탕으로 최소한의 중복을 생각하며 코드 짜는데 집중했다.

<img width="1680" alt="ProjectButton" src="https://github.com/YennieJ/YennieJ.github.io/assets/108519185/8c7ea994-6fa3-4b0c-83f7-beb74c04b344">

### src > Components > Nav > Nav.tsx

```ts
import React from "react";

import ProjectButton from "./ProjectButton";

// 현재 보고있는 페이지를 알려줌. 반응형

const Nav = () => {
  return (
    <div>
      <ul>
        <ProjectButton projectName="YenPin" />
        <ProjectButton projectName="Portfolio" />
        <ProjectButton projectName="Yentube" />
        <ProjectButton projectName="Yenflix" />
      </ul>
    </div>
  );
};

export default Nav;
```

### src > Components > Nav > ProjectButton.tsx

```ts
import React from "react";
import { Link } from "react-scroll";

// react-scroll: Link태그의 to 이름과 태그에 id 가 동일하면 클릭 시 이동

interface IProjectButton {
  projectName: string;
}

const ProjectButton = ({ projectName }: IProjectButton) => {
  return (
    <li>
      <Link
        to={projectName}
        spy={true}
        smooth={true}
        duration={100}
        className="flex items-center w-12 h-full px-3 cursor-pointer transition ease-in delay-150 duration-300 group-hover:bg-rose-700 md:w-full md:justify-center"
        activeClass="bg-rose-700 cursor-default pointer-events-none [&_div]:bg-white md:[&_div]:opacity-0 [&_span]:opacity-100"
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-rose-700 rounded-full transition ease-in delay-150 duration-300 group-hover:bg-white md:group-hover:opacity-0  2xl:w-6 2xl:h-6" />
        <span className="hidden md:inline opacity-0 transition ease-in delay-150 duration-300 group-hover:opacity-100">
          {projectName}
        </span>
      </Link>
    </li>
  );
};

export default ProjectButton;
```

<img width="1680" alt="Preview" src="https://github.com/YennieJ/YennieJ.github.io/assets/108519185/285e6bf3-f70f-433d-81c4-ad5b5a4b4caa">

### src > pages > Preview > Preview.tsx

```ts
import React from "react";

import PreviewContainer from "./Components/PreviewContainer";

const Preview = () => {
  return (
    <div id="preview">
      <PreviewContainer projectName="YenPin" />
      <PreviewContainer projectName="Portfolio" />
      <PreviewContainer projectName="Yentube" />
      <PreviewContainer projectName="Yenflix" />
    </div>
  );
};

export default Preview;
```

### src > pages > Preview > Components > PreviewContainer

```ts
import React from "react";
import { Link } from "react-scroll";

// react-scroll: Link태그의 to 이름과 태그에 id 가 동일하면 클릭 시 이동

interface IPreviewContainer {
  projectName: string;
}

// 썸네일, 프로젝트 이름
const PreviewContainer = ({ projectName }: IPreviewContainer) => {
  return (
    <Link to={projectName} spy={true} smooth={true} duration={300}>
      <img src={require(`../Images/${projectName}.png`)} alt={projectName} />
      <div>{projectName}</div>
    </Link>
  );
};

export default PreviewContainer;
```

### [src > pages > Projects > Compoenets > LinkContainer.tsx](https://github.com/YennieJ/YennieJ.github.io/blob/main/src/pages/Projects/Components/LinkContainer.tsx)

<img width="1680" alt="Link" src="https://github.com/YennieJ/YennieJ.github.io/assets/108519185/69bc8b59-c45a-4be7-b6ab-3d1e9f2ff2d0">

### [src > pages > Projects > Compoenets > ProjectContainer.tsx](https://github.com/YennieJ/YennieJ.github.io/blob/main/src/pages/Projects/Components/ProjectContainer.tsx)

<img width="1680" alt="Project UI" src="https://github.com/YennieJ/YennieJ.github.io/assets/108519185/a5dae21c-8d89-4580-a44f-18b06c39c416">

## 무한 슬라이더

https://github.com/YennieJ/YennieJ.github.io/assets/108519185/d3f6c3ec-926a-4d0c-9218-0eb8f6a9d52d

### src > pages > Projects > Components > Slider.tsx

```ts
import React, { useState, useRef, useEffect } from "react";

import PortfolioImg from "./Portfolio/PortfolioImg";
import YenPinImg from "./YenPin/YenPinImg";
import YentubeImg from "./Yentube/YentubeImg";
import YenflixImg from "./Yenflix/YenflixImg";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

interface ISlider {
  projectName: string;
}

const Slider = ({ projectName }: ISlider) => {
  const [slideIndex, setSlideIndex] = useState(1);

  const slideRef = useRef<HTMLDivElement>(null);

  let slideArr: string[] = [];

  if (projectName === "Yentube") {
    slideArr = [...YentubeImg];
  } else if (projectName === "Yenflix") {
    slideArr = [...YenflixImg];
  } else if (projectName === "YenPin") {
    slideArr = [...YenPinImg];
  } else if (projectName === "Portfolio") {
    slideArr = [...PortfolioImg];
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
      }, 200);

      setTimeout(() => {
        if (slideRef.current) {
          slideRef.current.style.transition = "all 300ms ease-in-out";
        }
      }, 300);
    }

    if (slideIndex === 0) {
      setTimeout(() => {
        setSlideIndex(slideArr.length);
        if (slideRef.current) {
          slideRef.current.style.transition = "";
        }
      }, 200);

      setTimeout(() => {
        if (slideRef.current) {
          slideRef.current.style.transition = "all 300ms ease-in-out";
        }
      }, 300);
    }
  }, [slideArr.length, slideIndex]);

  const slideHandler = (direction: number) => {
    setSlideIndex((slideIndex) => slideIndex + direction);
  };

  // 몇개의 사진이 있는지, 몇번째 사진을 보고있는지
  const dotArray = new Array(SLIDE_NUM).fill(0);

  return (
    <div>
      <div
        ref={slideRef}
        style={{
          width: `${100 * COPIED_NUM}%`,
          transition: "all 300ms ease-in-out",
          transform: `translateX(${
            -1 * ((100 / copiedArr.length) * slideIndex)
          }%)`,
        }}
      >
        {copiedArr.map((img, i) => (
          <div key={i}>
            <img src={img} alt={projectName} />
          </div>
        ))}
      </div>
      <div>
        <button onClick={() => slideHandler(-1)} />

        {dotArray.map((v, i) => (
          <div
            key={i}
            className={
              i + 1 === slideIndex
                ? "w-6 h-6 mx-[2px] border-2 rounded-full bg-stone-700"
                : " w-5 h-5 mx-[1px] border-2 rounded-full"
            }
          />
        ))}
        <button onClick={() => slideHandler(1)} />
      </div>
    </div>
  );
};

export default Slider;
```

## EmailJS

<img width="1680" alt="EmailForm" src="https://github.com/YennieJ/YennieJ.github.io/assets/108519185/e4aa1978-ed4f-49ba-8cb5-b47bf53f76f8">

### src > pages > Profile > Profile.tsx

```ts
import React, { useState } from "react";

import Contect from "./Components/Contect";
import EmailForm from "./Components/EmailForm";

const Profile = () => {
  const [emailOpen, setEmailOpen] = useState(false);

  return (
    <div>
      <Contect setEmailOpen={setEmailOpen} />
      <EmailForm emailOpen={emailOpen} setEmailOpen={setEmailOpen} />
    </div>
  );
};

export default Profile;
```

### src > pages > Profile > Context.tsx

```ts
import React from "react";

interface IContect {
  setEmailOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// email

const Contect = ({ setEmailOpen }: IContect) => {
  const openEmailForm = () => {
    document.body.style.overflow = "hidden";
    setEmailOpen(true);
  };

  return (
    <div>
      <span
        className="font-normal cursor-pointer hover:underline underline-offset-8  "
        onClick={openEmailForm}
      >
        l.yennie.j@gmail.com
      </span>
    </div>
  );
};

export default Contect;
```

### src > pages > Profile > EmailForm.tsx

```ts
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

interface IEmailForm {
  emailOpen: boolean;
  setEmailOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// emailjs를 통해서 이메일 받기

const EmailForm = ({ emailOpen, setEmailOpen }: IEmailForm) => {
  const form = useRef<any>(null);

  const closeEmailForm = () => {
    if (window.confirm("이 창을 나가시겠습니까?") === true) {
      return (
        form.current.reset(),
        setEmailOpen(false),
        (document.body.style.overflow = "auto")
      );
    }
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (window.confirm("이메일을 보내겠습니까?") === true) {
      return emailjs
        .sendForm(
          process.env.REACT_APP_EMAIL_SERVICE_ID as string,
          process.env.REACT_APP_EMAIL_TEMPLATE_ID as string,
          form.current,
          process.env.REACT_APP_EMAIL_PUBLIC_KEY
        )
        .then(
          () => {
            window.alert("이메일이 성공적으로 보내졌습니다.");
            form.current.reset();
            setEmailOpen(false);
          },
          () => {
            window.alert("이메일 보내기에 실패했습니다.");
            form.current.reset();
            setEmailOpen(false);
          }
        );
    } else {
      return;
    }
  };

  const inputCss =
    "min-w-full px-3 mb-3 border rounded-lg bg-white text-neutral-800 font-normal";

  return (
    <div onClick={closeEmailForm}>
      <form
        ref={form}
        onSubmit={sendEmail}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <div>To Yennie</div>
          <input
            name="subject"
            placeholder="제목"
            className={"h-10 " + inputCss}
          />
        </div>
        <textarea
          name="message"
          placeholder="메세지"
          className={"h-40 pt-2 " + inputCss}
        />
        <div>
          <input
            name="contect"
            placeholder="연락처 혹은 이메일"
            className={"h-10 " + inputCss}
          />
          <input
            name="from_name"
            placeholder="보내는 이"
            className={"h-10 " + inputCss}
          />
        </div>
        <button className="py-2 bg-black text-2xl">send</button>
      </form>
    </div>
  );
};

export default EmailForm;
```
