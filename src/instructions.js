import React from "react"
import "./instructions.css";

const Instructions = () => {
    return (
        <fieldset className="instructions-fieldset">
            <legend>INSTRUCTIONS</legend>
        <div className="instruction-box">
            <p className="instructions">
                1. Click the button to roll the dice.<br />
                2. Move your counter with the left and right buttons.<br />
                3. Red squares are neutral. Roll again.<br />
                4. If you land on a named square, move forwards or backwards for the number stated.<br />
                5. Reach happy old age to win!<br />
                6. Click the quit button to change character.<br />
            </p>
            
        </div>
        </fieldset>
    )
}

export default Instructions;