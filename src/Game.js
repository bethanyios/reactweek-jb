import React from "react";

const Game = ({userData, setConnectPage}) => {



return (
    <section>
       <fieldset>
        <legend>THE GAME OF LIFE</legend>
        <img alt="github avatar" src={userData.avatarUrl} />
            <h2>{userData.name}</h2> 
        <button onClick={event => {event.preventDefault(); setConnectPage("form")}}>
            Quit Game
        </button>
      </fieldset>
    </section>
  
  )
  };
  
  
  export default Game;