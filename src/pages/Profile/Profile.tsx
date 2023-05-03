import React, { useState } from "react";

import Contect from "./Components/Contect";
import Keyword from "./Components/Keyword";
import Used from "../../Components/Used";
import EmailForm from "./Components/EmailForm";

const Profile = () => {
  const [emailOpen, setEmailOpen] = useState(false);

  return (
    <div
      id="profile"
      className="flex items-center min-h-screen h-full px-3 py-20 bg-stone-800 "
    >
      <div className="w-full">
        <div className="flex justify-center items-baseline mb-7 lg:mb-20">
          <h1 className="inline-block text-7xl mr-5 underline underline-offset-8">
            Yennie
          </h1>
          <span className="font-normal">FE Developer</span>
        </div>
        <div className="flex flex-col mb-10 lg:flex-row-reverse lg:justify-around ">
          <Contect setEmailOpen={setEmailOpen} />
          <Keyword />
        </div>

        <Used projectName="Profile" />
      </div>
      <EmailForm emailOpen={emailOpen} setEmailOpen={setEmailOpen} />
    </div>
  );
};

export default Profile;
