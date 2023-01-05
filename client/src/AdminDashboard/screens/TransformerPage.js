import "./../../css/Dashboard.css";
import Header from "../components/Header";
import MiniHeader from "../components/MiniHeader";
import Sidebar from "../components/Sidebar";
import Transformer from "../pages/Transformer";

const TransformerPage = () => {
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
          <Transformer />
        </div>
      </div>
    </>
  );
};

export default TransformerPage;
