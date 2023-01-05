import React from "react";
import "../../css/Dashboard.css";
import Header from "../components/Header";
import MiniHeader from "../components/MiniHeader";
import Sidebar from "../components/Sidebar";
import MonthlyReport from "../pages/MonthlyReport";

const AE_MonthlyReportScreen = () => {
    return(
        <>
    <div className='container'>
        <div className='header'><Header /></div>
        <div className='mini-header'><MiniHeader /></div>
        <div className='sidebar'><Sidebar /></div>
        <div className='chart'><MonthlyReport /></div>
    </div>
     </>
    );
}

export default AE_MonthlyReportScreen;