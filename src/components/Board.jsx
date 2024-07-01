import React from "react";
import './Board.css'
function Board(){
    return(
        <div className="board">
        <div className="cell">X</div>
        <div className="cell">O</div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
    </div>
    )
}


export default Board