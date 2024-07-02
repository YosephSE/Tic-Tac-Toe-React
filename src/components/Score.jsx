import React, { useState } from "react";

function Score(){
    const [wins, setWins] = useState({X: 0, O: 0, D: 0})
    return(
        <div className="turn-container">
            <h3>Total</h3>
            <div className="turn-box align">X</div>
            <div className="turn-box align">X</div>
            <div className="turn-box align">X</div>
            
        </div>
    )
}

export default Score