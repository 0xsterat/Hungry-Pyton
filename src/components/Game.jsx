import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
function Game() {

  function handleUp() {
    console.log("up clicked")
  }

  function handleDown() {
    console.log("Down clicked")
  }

  function handleLeft() {
    console.log("Left clicked")
  }

  function handleRight() {
    console.log("Right clicked")
  }


  return (
    <div>
      <div>
        <Link to="/" className=" text-white  rounded-xl px-4">
          home
        </Link>
      </div>
     
      <Navbar/>

      <div className="bg-[#0C0909] text-green-500 mt-[60px] mx-[10px] flex justify-center w-[380px] h-[380px] border-spacing-2 border-black ">

      <div className="bg-[#D9D9D9] text-green-500 m-auto flex justify-center w-[360px] h-[360px] border-spacing-2 border-black ">
      
      </div>
      </div>

{/* Snake controls button  */}
      <div className="flex flex-col items-center justify-center mt-[50px] ">
        <div className="w-[50px] h-[50px]" onClick={ () => handleUp()}>
          <img src="../../public/images/up.png" alt="" />
        </div>

        <div className="flex justify-center my-[5px]">
          <div className="w-[50px] h-[50px] mx-[30px]" onClick={ () => handleLeft()}>
            <img src="../../public/images/left.png" alt="<" />
          </div>
          <div className="w-[50px] h-[50px] mx-[30px]" onClick={ () => handleRight()}>
            <img src="../../public/images/right.png" alt=">" />
          </div>
        </div>

        <div className="w-[50px] h-[50px] " onClick={ () => handleDown()}>
          <img src="../../public/images/down.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Game;
