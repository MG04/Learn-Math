import React from "react";

function Points(props) {
  return (
    <div>
      <div className="scoreSign shadow">{props.score}</div>
    </div>
  );
}

export default Points;
