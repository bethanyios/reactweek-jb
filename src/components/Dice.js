import React from "react"
import "./Dice.css";

const Dice = () => {
    const [roll, setRoll] = React.useState("0");

    const rollDice = (event, max, min) => {
        min = 1;
        max = 7;
        setRoll(Math.floor(Math.random() * (max - min)) + min)
    }

    return (
        <fieldset className="dice-fieldset">
            <legend>ROLL THE DICE</legend>
            <p className="dice-value">
                {roll > 0 ? roll : "☟"}
            </p>
            🎲 <button className="roll-button" onClick={rollDice}>
                Roll Dice
            </button>
        </fieldset>
    )
}

export default Dice;
