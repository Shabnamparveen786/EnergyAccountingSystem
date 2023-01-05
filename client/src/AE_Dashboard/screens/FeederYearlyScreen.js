import React from "react";
import "../../css/Dashboard.css";
import Header from "../components/AE_Header";
import MiniHeader from "../components/AE_MiniHeader";
import Sidebar from "../components/AE_Sidebar";
import FeederYearlyReport from "../AE_Pages/FeederYearlyReport";

const FeederYearlyScreen = () => {
    return(
        <>
    <div className='container'>
        <div className='header'><Header /></div>
        <div className='mini-header'><MiniHeader /></div>
        <div className='sidebar'><Sidebar /></div>
        <div className='chart'><FeederYearlyReport /></div>
    </div>
     </>
    );
}

export default FeederYearlyScreen;