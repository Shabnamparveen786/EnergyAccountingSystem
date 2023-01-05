import React from "react";
import "../../css/Dashboard.css";
import Header from "../components/Header";
import MiniHeader from "../components/MiniHeader";
import Sidebar from "../components/Sidebar";
import SubstationReport from "../pages/SubstationReport";

function SubstationReportPage() {
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
          <SubstationReport />
        </div>
      </div>
    </>
  );
}

export default SubstationReportPage;
