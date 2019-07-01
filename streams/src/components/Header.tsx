import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="ui secondary menu">
      <Link to="/" className="active item">
        Streamer
      </Link>
      <div className="right menu">
        <Link to="/" className=" item">
          Streamer
        </Link>
        <Link to="/login" className="item">
          Login
        </Link>
      </div>
    </div>
  );
};
export default Header;
