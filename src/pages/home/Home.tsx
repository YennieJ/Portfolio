import React from "react";
import Nav from "./Nav/Nav";
import Profile from "./Profile/Profile";
import Projects from "./Projects/Projects";

const Home = () => {
  return (
    <div className="text-white text-2xl font-bold h-full">
      <Nav />
      <main className="w-full h-full 2xl:w-4/5">
        <h1 className="sr-only"> 이예진의 포트폴리오 </h1>
        <Profile />
        <Projects />
      </main>
    </div>
  );
};

export default Home;
