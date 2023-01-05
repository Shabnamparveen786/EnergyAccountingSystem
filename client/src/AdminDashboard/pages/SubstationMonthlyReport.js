import React from "react";
import "../../css/report.css";

import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { AuthContext } from "../../context/routerContext";
import { useContext } from "react";
function SubstationMonthlyReport() {

  

   const { substationMonth } = useContext(AuthContext);
   const { monthlysubstation } = useContext(AuthContext);

   const {invoicesubstationMonth} = useContext(AuthContext);
    const [getSubstaion, setsubStation] = useState([]);
    const navigate = useNavigate();
      useEffect(() => {
        const getsubstationdata = async () => {
          const res = await fetch("/substation", {
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
            setsubStation(data);
          }
        };

        getsubstationdata();
      }, []);

        const [inpval, setINP] = useState({
          substation_id: "",
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

  const onsubmitTable = async (e) => {
    e.preventDefault();
    console.log("clicked");

    const { substation_id, month } = inpval;

    console.log(inpval);
   

  

    await substationMonth(substation_id, month);

    await invoicesubstationMonth(substation_id, month);

     console.log(monthlysubstation);
    

    if (monthlysubstation.length >= 0) {
      navigate("/MonthlySubstationTablePage");
    } else {
      alert("data not found");
    }
  };
  return (
    <div className="container2">
      <div className="title2">Substation Monthly Report</div>
      <form>
        <div className="ui divider"></div>
        <div className="user-details">
          <div className="input-box">
            <span className="details">Select Substation Name</span>
            <select name="substation_id" onChange={setData}>
              <option selected value="Select-Substation">
                -Select Substation-
              </option>
              {getSubstaion.map((val) => {
                return (
                  <option value={val.substation_id}>
                    {val.substation_name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="input-box">
            <span className="details">Select Month</span>
            <select name="month" onChange={setData}>
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
            <button
              type="submit"
              name="Substation"
              value="table"
              onClick={onsubmitTable}
            >
              Table
            </button>
          </Link>

          <Link to="/">
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

export default SubstationMonthlyReport;
