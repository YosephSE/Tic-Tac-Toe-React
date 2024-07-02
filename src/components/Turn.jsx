import React from "react";

function Turn() {
  return (
    <div className="turn-container">
      <h3>Turn For:</h3>
      <div className="turn-box align" id="turnX">
        X
      </div>
      <div className="turn-box align" id="turnO">
        O
      </div>
    </div>
  );
}

export default Turn;
