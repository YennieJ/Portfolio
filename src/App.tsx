import React from "react";

import Nav from "./Components/Nav";
import Profile from "./pages/Profile/Profile";
import Projects from "./pages/Projects/Projects";
import Portfolio from "./pages/Portfolio/Portfolio";

function App() {
  return (
    <div className="text-white text-2xl font-bold h-full">
      <Nav />
      <article className="w-full h-full 2xl:w-4/5">
        <Profile />
        <Projects />
        <Portfolio />
      </article>
    </div>
  );
}

export default App;
