import React, { useState } from "react";
import './Score.css'


function Score(){
    const [wins, setWins] = useState({X: 0, O: 0, D: 0})
    return(
        <div className="scoreboard">
            <div>X: {wins.X}</div>
            <div>O: {wins.O}</div>
            <div>Draw: {wins.D}</div>
        </div>
        // <div className="scoreboard">
        //     <div>X: 1</div>
        //     <div>Y: 2</div>
        //     <div>Draw: 2</div>
        // </div>
    )
}

export default Score