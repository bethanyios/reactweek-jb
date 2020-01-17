import React from "react"
import "./dice.css";

const Dice = () => {
    const [roll, setRoll] = React.useState("☟");

    const rollDice = (event, max, min) => {
        event.preventDefault();
        min = 1;
        max = 7;
        setRoll(Math.floor(Math.random() * (max - min)) + min)
    }
    
    return (
        <fieldset className="dice-fieldset">
            <legend>ROLL THE DICE</legend>  
            <p className="dice-value">
                {roll}
            </p>
            🎲 <button className="roll-button" onClick={rollDice}>
                Roll Dice
            </button>    
        </fieldset>
    )
}

export default Dice;
