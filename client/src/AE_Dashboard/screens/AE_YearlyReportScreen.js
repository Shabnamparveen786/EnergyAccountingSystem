import React from "react";
import "../../css/Dashboard.css";
import Header from "../components/AE_Header";
import MiniHeader from "../components/AE_MiniHeader";
import Sidebar from "../components/AE_Sidebar";
import AE_YearlyReport from "../AE_Pages/AE_YearlyReport";;

const AE_YearlyReportScreen = () => {
    return(
        <>
    <div className='container'>
        <div className='header'><Header /></div>
        <div className='mini-header'><MiniHeader /></div>
        <div className='sidebar'><Sidebar /></div>
        <div className='chart'><AE_YearlyReport /></div>
    </div>
     </>
    );
}

export default AE_YearlyReportScreen;