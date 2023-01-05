import React from 'react'
import Header from "./AE_Header";
import Sidebar from "./AE_Sidebar";
import MiniHeader from "./AE_MiniHeader";
import Chart from "./AE_Chart";

import "../../css/Dashboard.css";

// import {BrowserRouter as Router} from 'react-router-dom';


const Dashboard = () => {
  return (
<>
    <div className='container'>
       <div className='header'><Header /></div>
       <div className='mini-header'><MiniHeader /></div>
       <div className='sidebar'><Sidebar /></div>
       <div className='chart'><Chart /></div>
    </div>
  
</>
  );
}

export default Dashboard;