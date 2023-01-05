import React from "react";
import "../../css/Dashboard.css";
import SubstationMonthylChartReport from "../AE_Pages/SubstationMonthylChartReport";
import Header from "../components/AE_Header";
import MiniHeader from "../components/AE_MiniHeader";
import Sidebar from "../components/AE_Sidebar";


const SubstationMonthlyChartScreen = () => {
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
          <SubstationMonthylChartReport />
        </div>
      </div>
    </>
  );
};

export default SubstationMonthlyChartScreen;
