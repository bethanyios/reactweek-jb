import React from "react";
import Avatar from "./avatar";
import "./board.css";

const Board = ({avatar}) => {
    const [ position, setPosition ] = React.useState(0);
    const [ key, setKey ] = React.useState(null);



    React.useEffect(() => {
        const storeKey = event => setKey(event.key);
        window.addEventListener("keydown", storeKey);

        if (key === "ArrowLeft") {
            setPosition(position - 1)
            setKey(null)
        } else if (key === "ArrowRight"){
            setPosition(position + 1)
            setKey(null)
        }
        console.log(position);
        return () => window.removeEventListener("keydown", storeKey);



    }, [key, setKey, position, setPosition])

    // const arr = ["INFANCY", null, "DISGRACE"];


return (
Array.from ({length : 36}, (x,i) => {
    return (
    <section className = "board">
    <div className ={i%2 ? "rest-square" : "square"}>
    {position === i ? <Avatar avatar = {avatar} /> : null}
    </div>
     </section>
  )})

)
}

export default Board;







//                 <div className="row">
//                 <div className = "rest-square" id="36">
// <img alt="github avatar" src={avatar} className ="counter"/>
//                 </div>
//                 <div className = "square" id="35">
// <img alt="github avatar" src={avatar} className ="counter" />
//                 </div>
//                 <div className = "rest-square" id="34">
// <img alt="github avatar" src={avatar} className ="counter"/>
//                 </div>
//                 <div className = "square" id="33">
// <img alt="github avatar" src={avatar} className ="counter"/>
//                 </div>
//                 <div className = "rest-square" id="32">
// <img alt="github avatar" src={avatar} className ="counter"/>
//                 </div>
//                 <div className = "square" id="31">
// <img alt="github avatar" src={avatar} className ="counter" />
//                 </div>
//             </div>
//             <div className="row">
//                 <div className = "square" id="25">
// <img alt="github avatar" src={avatar} className ="counter"/>
//                 </div>
//                 <div className = "rest-square" id="26">
// <img alt="github avatar" src={avatar} className ="counter"/>
//                 </div>
//                 <div className = "square" id="27">
// <img alt="github avatar" src={avatar} className ="counter"/>
//                 </div>
//                 <div className = "rest-square" id="28">
// <img alt="github avatar" src={avatar} className ="counter"/>
//                 </div>
//                 <div className = "square" id="29">
// <img alt="github avatar" src={avatar} className ="counter"/>
//                 </div>
//                 <div className = "rest-square" id="30">
// <img alt="github avatar" src={avatar} className ="counter"/>
//                 </div>
//             </div>
//             <div className="row">
//                 <div className = "rest-square" id="24">
// <img alt="github avatar" src={avatar} className ="counter" />
//                 </div>
//                 <div className = "square" id="23">
// <img alt="github avatar" src={avatar} className ="counter"/>
//                 </div>
//                 <div className = "rest-square" id="22">
// <img alt="github avatar" src={avatar} className ="counter"/>
//                 </div>
//                 <div className = "square" id="21">
// <img alt="github avatar" src={avatar} className ="counter"/>
//                 </div>
//                 <div className = "rest-square" id="20">
// <img alt="github avatar" src={avatar} className ="counter"/>
//                 </div>
//                 <div className = "square" id="19">
// <img alt="github avatar" src={avatar} className ="counter"/>
//                 </div>
//             </div>
//             <div className="row">
//                 <div className = "square" id="13">
// <img alt="github avatar" src={avatar} className ="counter"/>
//                 </div>
//                 <div className = "rest-square" id="14">
// <img alt="github avatar" src={avatar} className ="counter"/>
//                 </div>
//                 <div className = "square" id="15">
// <img alt="github avatar" src={avatar} className ="counter"/>
//                 </div>
//                 <div className = "rest-square" id="16">
// <img alt="github avatar" src={avatar} className ="counter"/>
//                 </div>
//                 <div className = "square" id="17">
// <img alt="github avatar" src={avatar} className ="counter"/>
//                 </div>
//                 <div className = "rest-square" id="18">
// <img alt="github avatar" src={avatar} className ="counter"/>
//                 </div>
//             </div>
//             <div className="row">
//                 <div className = "rest-square" id="12">
// <img alt="github avatar" src={avatar} className ="counter"/>
//                 </div>
//                 <div className = "square" id="11">
// <img alt="github avatar" src={avatar} className ="counter"/>
//                 </div>
//                 <div className = "rest-square" id="10">
// <img alt="github avatar" src={avatar} className ="counter"/>
//                 </div>
//                 <div className = "square" id="9">
// <img alt="github avatar" src={avatar} className ="counter" />
//                 </div>
//                 <div className = "rest-square" id="8">
// <img alt="github avatar" src={avatar} className ="counter"/>
//                 </div>
//                 <div className = "square" id="7">
// <img alt="github avatar" src={avatar} className ="counter"/>
//                 </div>
//             </div>
//             <div className="row">
//                 <div className = "square" id="1">
//                 <p>INFANCY</p>
//                 <img alt="github avatar" src={avatar} className ="counter"/>
//                 </div>
//                 <div className = "rest-square" id="2">
// <img alt="github avatar" src={avatar} className ="counter"/>
//                 </div>
//                 <div className = "square" id="3">
// <img alt="github avatar" src={avatar} className ="counter"/>
//                 </div>
//                 <div className = "rest-square" id="4">
// <img alt="github avatar" src={avatar} className ="counter"/>
//                 </div>
//                 <div className = "square" id="5">
// <img alt="github avatar" src={avatar} className ="counter"/>
//                 </div>
//                 <div className = "rest-square" id="6">
// <img alt="github avatar" src={avatar} className ="counter"/>
//                 </div>
//             </div>
