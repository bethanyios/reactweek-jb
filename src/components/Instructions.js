import React from "react"
import "./Instructions.css";

const Instructions = () => {
    return (
        <fieldset className="instructions-fieldset">
            <legend>INSTRUCTIONS</legend>
        <div className="instructions-box">
            <ol className="instructions">
              <li>  Click the button to roll the dice.</li>
              <li>  Move your counter with the left and right buttons.</li>
              <li>  Red squares are neutral. Roll again.</li>
              <li>  If you land on a named square, move forwards or backwards for the number stated.</li>
              <li>  Reach happy old age to win!</li>
              <li>  Click the quit button to change character.</li>
            </ol>
        </div>
        </fieldset>
    )
}

export default Instructions;
