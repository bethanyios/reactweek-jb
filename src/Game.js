import React from "react";
import Dice from "./dice";
import Board from "./board";
import Instructions from "./instructions"
import "./Game.css";

const Game = ({userData, setConnectPage}) => {

return (
    <section class="game-container">
       <fieldset>
        <legend>THE GAME OF LIFE</legend>
            <h2>{userData.name}</h2>


            <div className="game-items">
            <div className="left-column">
            <Dice />
            <Instructions />
            <button className="quit-button" onClick={event => {setConnectPage("form")}}>
            Quit Game
        </button>
            </div>
        <div className="board">
        <Board avatar={userData.avatarUrl} />
        </div>

        </div>

      </fieldset>
    </section>

  )
  };

  export default Game;
