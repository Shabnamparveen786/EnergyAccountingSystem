import React from "react";
import "../../css/Dashboard.css";
import Header from "../components/AE_Header";
import MiniHeader from "../components/AE_MiniHeader";
import Sidebar from "../components/AE_Sidebar";
import AE_MonthlyReport from "../AE_Pages/AE_MonthlyReport";;

const AE_MonthlyReportScreen = () => {
    return(
        <>
    <div className='container'>
        <div className='header'><Header /></div>
        <div className='mini-header'><MiniHeader /></div>
        <div className='sidebar'><Sidebar /></div>
        <div className='chart'><AE_MonthlyReport /></div>
    </div>
     </>
    );
}

export default AE_MonthlyReportScreen;