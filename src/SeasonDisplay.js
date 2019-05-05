import React from "react";

export default ({ isWinter }) => {
  return (
    <div className="season-text">
      <div>{isWinter ? "Burr, It's Chilly!" : "Let's hit the beach!"}</div>
    </div>
  );
};
