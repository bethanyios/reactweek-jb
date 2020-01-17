import React from "react";
import Avatar from "./avatar";
import "./board.css";

const Board = ({avatar}) => {
    const [ position, setPosition ] = React.useState(0);
    const [ key, setKey ] = React.useState(null);

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

    //
    // React.useEffect(() => {
    //     const storeKey = event => setKey(event.key);
    //     window.addEventListener("keydown", storeKey);
    //
    //     if (key === "ArrowLeft") {
    //         setPosition(position - 1)
    //         setKey(null)
    //     } else if (key === "ArrowRight"){
    //         setPosition(position + 1)
    //         setKey(null)
    //     }
    //     console.log(position);
    //     return () => window.removeEventListener("keydown", storeKey);
    //
    //
    //
    // }, [key, setKey, position, setPosition])

return (
Array.from ({length : 25}, (x,i) => {
    return (
    <div className ={i%2 ? "rest-square" : "square"}>
    {position === i ? <Avatar avatar = {avatar} /> : null}
    </div>
  )})

)
}

export default Board;
