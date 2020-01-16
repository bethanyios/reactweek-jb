import React from "react";
import "./board.css";

const Board = ({avatar}) => {
    const [ position, setPosition ] = React.useState(1); 
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

    

     // const movePieceLeft = event  => {
    //     event.preventDefault();
       
    // }
    // const movePieceRight = event => {
    //     event.preventDefault();
    // }
    
    
    
   return (
       <section className="board">
            <div className="row">
                <div className = "square"> 
                    <img alt="github avatar" src={avatar} />
                </div>
                <div className = "square"> 
                
                </div>
                <div className = "square"> 
                
                </div>
                <div className = "square"> 
                
                </div>
                <div className = "square"> 
                
                </div>
                <div className = "square"> 

                </div>
            </div>
       </section>
   )
   
    
} 

export default Board;