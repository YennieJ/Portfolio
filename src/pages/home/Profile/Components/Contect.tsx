import React from "react";

import { CgMail } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";

interface IContect {
  setEmailOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// email, github

const Contect = ({ setEmailOpen }: IContect) => {
  const openEmailForm = () => {
    document.body.style.overflow = "hidden";
    setEmailOpen(true);
  };

  return (
    <section className="flex justify-center items-center mb-8 ">
      <h3 className="sr-only">연락 가능 목록</h3>
      <span className="mr-4 font-bold">이예진</span>
      <ul className="pl-4 border-l-4 ">
        <li>
          <AiOutlinePhone className="inline-block mr-2" />
          <span className="font-normal">010-4712-1293</span>
        </li>
        <li>
          <CgMail className="inline-block mr-2" />
          <span
            className="font-normal cursor-pointer hover:underline underline-offset-8  "
            onClick={openEmailForm}
          >
            l.yennie.j@gmail.com
          </span>
        </li>
        <li>
          <BsGithub className="inline-block mr-2" />
          <a
            href="https://github.com/YennieJ"
            target="blank"
            className="font-normal leading-10 cursor-pointer hover:underline underline-offset-8 "
          >
            github.com/YennieJ
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contect;
