import React from "react";
import "../../css/Dashboard.css";
import Header from "../components/AE_Header";
import MiniHeader from "../components/AE_MiniHeader";
import Sidebar from "../components/AE_Sidebar";
import DtMonthlyReport from "../AE_Pages/DtMonthlyReport";

const DtMonthlyReadingScreen = () => {
    return(
        <>
    <div className='container'>
        <div className='header'><Header /></div>
        <div className='mini-header'><MiniHeader /></div>
        <div className='sidebar'><Sidebar /></div>
        <div className='chart'><DtMonthlyReport /></div>
    </div>
     </>
    );
}

export default DtMonthlyReadingScreen;