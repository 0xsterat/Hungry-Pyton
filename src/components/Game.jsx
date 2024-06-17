import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Board from "./Board";
function Game() {
  function handleUp() {
    console.log("up clicked");
  }
  function handleDown() {
    console.log("Down clicked");
  }

  function handleLeft() {
    console.log("Left clicked");
  }

  function handleRight() {
    console.log("Right clicked");
  }

  return (
    <div>
      <div>
        <Link to="/" className=" text-white  rounded-xl px-4">
          home
        </Link>
      </div>

      <Navbar />
            <Board/>
    </div>
  );
}

export default Game;

