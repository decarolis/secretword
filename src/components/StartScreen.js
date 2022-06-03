import React from "react";
import "./StartScreen.css";

const StartScreen = ({ startGame }) => {
  return (
    <div className="start">
      <h1>Secret<br/><span>Word</span></h1>
      <div className="card">R</div>
      <button onClick={startGame}>play</button>
    </div>
  );
};

export default StartScreen;
