import React from "react";
import "./../../css/Header.css";

const Header = () => {
  return (
    <header className="main-header">
      <div className="d-flex">
        {/* <div className="p-2 flex-shrink-1">
        <img 
          src="./../images/NBPDCL_logo.png"
          style={{height:"40"}}
          className="logo"
          alt="Electricity logo"
        /></div> */}
        <div className="p-2 w-100">
          <h2>North Bihar Power Distribution Company Ltd.</h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
