import React, { useState } from "react";

import Contect from "./Components/Contect";
import Introduce from "./Components/Introduce";
import Skill from "./Components/Skill";
import EmailForm from "./Components/EmailForm";

const Profile = () => {
  const [emailOpen, setEmailOpen] = useState(false);

  return (
    <article
      id="profile"
      className="flex flex-col px-3 py-20 bg-stone-900 w-full "
    >
      <h2 className="sr-only">이예진의 프로필</h2>
      <header className="text-center items-baseline mb-7 lg:mb-20">
        <span className="text-7xl mr-5 underline underline-offset-8">
          Yennie
        </span>
        <span className="font-normal">FE Developer</span>
      </header>
      <div className="flex flex-col mb-10 lg:flex-row-reverse lg:justify-around ">
        <Contect setEmailOpen={setEmailOpen} />
        <Introduce />
      </div>
      <Skill />
      <EmailForm emailOpen={emailOpen} setEmailOpen={setEmailOpen} />
    </article>
  );
};

export default Profile;
