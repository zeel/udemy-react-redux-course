import React, { useContext } from "react";
import Context from "../context";
export default () => {
  const val = useContext(Context);
  return (
    <div>
      <label className="label">{val === "english" ? "Name" : "Naam"}</label>
      <input type="text" />
    </div>
  );
};
