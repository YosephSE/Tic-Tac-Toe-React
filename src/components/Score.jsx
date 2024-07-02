import React, { useState } from "react";

function Score(){
    const [wins, setWins] = useState({X: 0, O: 0, D: 0})
    return(
        <>
        <h3>Wins</h3>
        <div className="total-container">
            <div className="turn-box align">X: {wins.X}</div>
            <div className="turn-box align">O: {wins.O}</div>
            <div className="turn-box align">Draw: {wins.D}</div>
            
        </div>
        </>
    )
}

export default Score