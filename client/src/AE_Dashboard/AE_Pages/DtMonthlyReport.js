import React from "react";
import "../../css/report.css";

import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { AuthContext } from "../../context/routerContext";
import { useContext } from "react";
function DtMonthlyReport() {

   const { transformerMonth } = useContext(AuthContext);
   const {invoicetransformerMonth} = useContext(AuthContext);
const { invoicemonthlytransformer } = useContext(AuthContext);
   const navigate = useNavigate();
  const [getDt, setDt] = useState([]);
    useEffect(() => {
      const getDtdata = async () => {
        const res = await fetch("/transformer", {
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
          setDt(data);
          // console.log(getSubstaion);
        }
      };

      getDtdata();
    }, []);


     const [inpval, setINP] = useState({
       Dt_no: "",
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

         const { Dt_no, month } = inpval;
         console.log(inpval);
         transformerMonth(Dt_no, month);
         invoicetransformerMonth(Dt_no, month);
         if (invoicemonthlytransformer.length >= 0) {
           navigate("/MonthlyTransformerTablePage");
         }

         if (Dt_no == "") {
           alert("Transformer is required");
         } else if (month == "") {
           alert("month  is required");
         } else {
         }
       };
  return (
    <div className="container2">
      <div className="title2">Transformer Monthly Report</div>
      <form>
        <div className="ui divider"></div>
        <div className="user-details">
          <div className="input-box">
            <span className="details">Select Transformer Id</span>
            <select onChange={setData} name="Dt_no">
              <option selected value="Select-Transformer">
                -Select Transformer-
              </option>
              {getDt.map((val) => {
                return <option value={val.DT_no}>{val.DT_no}</option>;
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
            <button type="button" name="" value="table" onClick={onsubmitTable}>
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

export default DtMonthlyReport;
