import React from "react";
import Dice from "./dice";
import Board from "./board";


const Game = ({userData, setConnectPage}) => {

return (
    <section>
       <fieldset>
        <legend>THE GAME OF LIFE</legend>
            <h2>{userData.name}</h2>
            <Board
            avatar={userData.avatarUrl}
            />
            <Dice />
        <button onClick={event => {event.preventDefault(); setConnectPage("form")}}>
            Quit Game
        </button>
      </fieldset>
    </section>

  )
  };


  export default Game;
