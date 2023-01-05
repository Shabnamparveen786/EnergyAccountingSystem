import React from "react";
import Header from "../components/Header";
import MiniHeader from "../components/MiniHeader";
import Sidebar from "../components/Sidebar";
import UserDetails from "../pages/UserDetails";

import "./../../css/Dashboard.css";
const UserDetailsPage = () => {
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
          <UserDetails />
        </div>
      </div>
    </>
  );
};
export default UserDetailsPage;
