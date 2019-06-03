import React, { useState } from "react";
import UserCreate from "./UserCreate";
import Context from "../context";

export default () => {
  const [lang, setLang] = useState("english");
  return (
    <div className="ui container">
      <Context.Provider value={lang}>
        <div>
          Select Language
          <i className="flag us" onClick={() => setLang("english")} />
          <i className="flag nl" onClick={() => setLang("dutch")} />
        </div>
        <UserCreate />
      </Context.Provider>
    </div>
  );
};
