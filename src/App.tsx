import React from "react";

import Nav from "./Components/Nav";
import Profile from "./pages/Profile/Profile";
import Projects from "./pages/Projects/Projects";

import Yentube from "./pages/Yentube/Yentube";

function App() {
  return (
    <div className="text-white text-2xl font-bold h-full">
      <Nav />
      <article className="w-full h-full 2xl:w-4/5">
        <Profile />
        <Projects />
        <Yentube />
      </article>
    </div>
  );
}

export default App;
