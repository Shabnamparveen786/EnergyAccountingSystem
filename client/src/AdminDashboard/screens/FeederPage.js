import "./../../css/Dashboard.css";
import Header from "../components/Header";
import MiniHeader from "../components/MiniHeader";
import Sidebar from "../components/Sidebar";
import FeederCreation from "./../pages/FeederCreation";

const FeederPage = () => {
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
          <FeederCreation />
        </div>
      </div>
    </>
  );
};

export default FeederPage;
