import React from 'react'
import "../../css/report.css";



import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { AuthContext } from "../../context/routerContext";
import { useContext } from "react";

function FeederMonthlyReport() {

    const navigate = useNavigate();
 const { feederMonth } = useContext(AuthContext);
 const { invoicefeederMonth } = useContext(AuthContext);
 const {invoicemonthlyfeeder} = useContext(AuthContext);

   const [getFeeder, setFeeder] = useState([]);
   useEffect(() => {
     const getfeederdata = async () => {
       const res = await fetch("/feeder", {
         method: "GET",
         headers: {
           "Content-Type": "application/json",
         },
       });
       const data = await res.json();
       console.log(data);

       if (res.status === 422 || !data) {
         console.log("error");
       } else {
         setFeeder(data);
         // console.log(getSubstaion);
       }
     };

     getfeederdata();
   }, []);

    const [inpval, setINP] = useState({
      feeder_id: "",
      month: "",
    });

    const setData = (e) => {
      console.log(e.target.value);
      const { name, value } = e.target;
      setINP((preval) => {
        return {
          ...preval,
          [name]: value,
        };
      });
    };

     const onsubmitTable = (e) => {
       e.preventDefault();
       console.log("clicked");

       const { feeder_id, month } = inpval;
       feederMonth(feeder_id,month);
       invoicefeederMonth(feeder_id, month)

       console.log(inpval);

       if (invoicemonthlyfeeder.length >= 0) {
         navigate("/MonthlyFeederTablePage");
       }

       // if (feeder_id == "") {
       //   alert("Feeder is required");
       // } else if (year == "") {
       //   alert("Year  is required");
       // } else {

       // }
     };
  return (
    <div className="container2">
      <div className="title2">Feeder Monthly Report</div>
      <form>
        <div className="ui divider"></div>
        <div className="user-details">
          <div className="input-box">
            <span className="details">Select Feeder Name</span>
            <select onChange={setData} name="feeder_id">
              <option selected value="Select-Substation">
                -Select Feeder-
              </option>
              {getFeeder.map((val) => {
                return <option value={val.feeder_id}>{val.feeder_id}</option>;
              })}
            </select>
          </div>
          <div className="input-box">
            <span className="details">Select Month</span>
            <select onChange={setData} name="month">
              <option selected value="Select-Substation">
                -Select Month-
              </option>
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
          </div>
        </div>
        <div className="btn-group">
          <Link to="/">
            <button type="button" name="submit" onClick={onsubmitTable}>
              Table
            </button>
          </Link>

          <Link to="/FeederMonthlyChartReport">
            <button type="button" name="Feeder">
              Chart
            </button>
          </Link>

          <Link to="/">
            <button type="button" name="Transformer">
              Reset
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default FeederMonthlyReport;