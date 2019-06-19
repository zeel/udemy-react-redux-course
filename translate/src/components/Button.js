import React, { useContext } from "react";
import Context from "../context";
export default () => {
  const val = useContext(Context);
  return (
    <button className="ui button primary">
      {val === "english" ? "Submit" : "voorleggen"}
    </button>
  );
};
