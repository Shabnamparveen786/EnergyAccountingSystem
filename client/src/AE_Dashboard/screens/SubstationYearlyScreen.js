import React from "react";
import "../../css/Dashboard.css";
import Header from "../components/AE_Header";
import MiniHeader from "../components/AE_MiniHeader";
import Sidebar from "../components/AE_Sidebar";
import SubstationYearlyReport from "../AE_Pages/SubstationYearlyReport";

const SubstationReportScreen = () => {
    return(
        <>
    <div className='container'>
        <div className='header'><Header /></div>
        <div className='mini-header'><MiniHeader /></div>
        <div className='sidebar'><Sidebar /></div>
        <div className='chart'><SubstationYearlyReport /></div>
    </div>
     </>
    );
}

export default SubstationReportScreen;