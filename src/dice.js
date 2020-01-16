import React from "react"
import "./dice.css";

const Dice = () => {
    const [roll, setRoll] = React.useState(null);

    const rollDice = (event, max, min) => {
        event.preventDefault();
        min = 1;
        max = 7;
        setRoll(Math.floor(Math.random() * (max - min)) + min)
    }
    

    return (
        <div className="dice-box">
            <p className="dice-value">
                {roll}
            </p>
            🎲<button onClick={rollDice}>
                Roll Dice
            </button>
        </div>
    )
}

export default Dice;