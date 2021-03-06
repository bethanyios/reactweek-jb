import React from "react";
import Avatar from "./Avatar";
import "./Board.css";
import squaresInfo from "../utils/data";

const Board = ({avatar}) => {
    const [ position, setPosition ] = React.useState(0);

    React.useEffect(() => {
       const movePosition = event => {
         if (event.key === "ArrowLeft") {
           setPosition(position - 1)
         } else if (event.key === "ArrowRight") {
           setPosition(position + 1)
         }
       };
       window.addEventListener("keydown", movePosition);
       return () => window.removeEventListener("keydown", movePosition);
     }, [position, setPosition]);

return (
  Array.from (squaresInfo, (x,i) => {
    return (
    <div className ={i%2 ? "rest-square" : "square"}>
    {position === i ? <Avatar avatar = {avatar} /> : null}
    {<p className="square-text">{squaresInfo[i]}</p>}
    </div>
  )})
)
}

export default Board;
