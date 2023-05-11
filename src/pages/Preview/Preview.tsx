import React from "react";

import PreviewContainer from "./Components/PreviewContainer";

const Preview = () => {
  return (
    <div
      id="preview"
      className="flex flex-wrap justify-around items-center min-h-screen h-full max-h-fit py-20 bg-green-950 2xl:py-5 "
    >
      <PreviewContainer projectName="YenPin" />
      <PreviewContainer projectName="Portfolio" />
      <PreviewContainer projectName="Yentube" />
      <PreviewContainer projectName="Yenflix" />
    </div>
  );
};

export default Preview;
