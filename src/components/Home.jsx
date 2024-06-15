import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center font-[700] p-4 text-3xl sm:text-4xl mt-8 ">
   <div className="flex">
   <div className="">MY</div>
   <div className="">SNAKE</div>
   </div>
    <div className=" bg-white text-blue-300 rounded-xl px-4  ">
        <Link to="/game" >START</Link>
    </div>
  </div>
  );
}

export default Home;
