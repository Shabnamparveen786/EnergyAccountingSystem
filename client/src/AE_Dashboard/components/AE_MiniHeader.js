import React, { useEffect } from "react";
import "../../css/MiniHeader.css";
import "../../css/Sidebar.css";
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';

import { AuthContext } from "../../context/routerContext";
import { useContext } from "react";

const MiniHeader = () => {
  const { currentUser, logout } = useContext(AuthContext);
  console.log(currentUser);

  return (
    <div className="mini-header">
      <div className="header-mini">
        <h4>
          Welcome user:<span>{currentUser?.name}</span>
        </h4>
      </div>
      <div className="user">
        <h4>You are logged in as:{currentUser?.role}</h4>
      </div>
    </div>
  );
};

export default MiniHeader;
