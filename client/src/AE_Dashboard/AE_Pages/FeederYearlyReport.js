import React from 'react'
import "../../css/report.css";



import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { AuthContext } from "../../context/routerContext";
import { useContext } from "react";

function FeederYearlyReport() {
    const { feederreading } = useContext(AuthContext);
 const { invoicefeederdata } = useContext(AuthContext);
  const [getFeeder, setFeeder] = useState([]);
  const[query, setQuery] = useState([]);
   const navigate = useNavigate();

  
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
    year: "",
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



  //  const handleStation=(e)=>{
  //   const getSubstationId=e.target.value;
    
  //  }
  
   const onsubmitTable = (e) => {
    e.preventDefault();
    console.log("clicked");

    const { feeder_id, year } = inpval;
     feederreading(feeder_id, year);
     invoicefeederdata(feeder_id, year)

    console.log(inpval);


if (invoicefeederdata.length >= 0) {
  navigate("/FeederTablePage");
}

    // if (feeder_id == "") {
    //   alert("Feeder is required");
    // } else if (year == "") {
    //   alert("Year  is required");
    // } else {
      
    // }
   }




  return (
    <div className="container2">
    <div className="title2">Feeder Yearly Report</div> 
      <form>
    
         <div className="ui divider"></div>
           <div className="user-details">
           <div className="input-box">
            <span className="details">Feeder</span>
            <select name="feeder_id" onChange={setData} >
              <option selected value="Select-Substation">
                -Select Feeder-
              </option>
              {getFeeder.map((val) => {
                return (
                  <option value={val.feeder_id}>
                    {val.feeder_id}
                  </option>
                );
              })}
            </select>
          </div>
             <div className="input-box">
                <span className="details">Select Year</span>
                <select onChange={setData} name="year">
                    <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option selected value="Select-Substation">
                -Select Year-
              </option>
                </select>
             </div>
             </div>  
             <div className='btn-group'>
             <Link to="/">
            <button type="button" name="Substation" value="table" onClick={onsubmitTable}>Table</button>
            </Link>
        
            <Link to="/FeederYearlyChartReport">
            <button type="button" name="Feeder" value="chart" onClick="">Chart</button> 
            </Link>
        
            <Link to="/">
            <button type="button" name="Transformer">Reset</button>
            </Link>                 
        </div> 
    </form>
</div>
  );
};

export default FeederYearlyReport