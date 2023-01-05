import "../../css/Dashboard.css";
import Header from "../components/Header";
import MiniHeader from "../components/MiniHeader";
import Sidebar from "../components/Sidebar";
import YearlyReport from "../pages/YearlyReport";



const YearlyPage = () => {
    return(
        <>
    <div className='container'>
        <div className='header'><Header /></div>
        <div className='mini-header'><MiniHeader /></div>
        <div className='sidebar'><Sidebar /></div>
        <div className='chart'><YearlyReport /></div>
    </div>
     </>
    );
}

export default YearlyPage;