import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MiniHeader from "./MiniHeader";
import Chart from "./Chart";

import "./../../css/Dashboard.css";

// import {BrowserRouter as Router} from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
      <div className="container">
        <div className="header">
          <Header />
        </div>
        <div className="mini-header">
          <MiniHeader />
        </div>
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="chart">
          <Chart />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
