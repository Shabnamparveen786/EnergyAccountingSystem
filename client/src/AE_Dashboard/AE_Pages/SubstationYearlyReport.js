import React from "react";
import "../../css/report.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { AuthContext } from "../../context/routerContext";
import { useContext } from "react";

function SubstationYearlyReport() {
  const { readingdata } = useContext(AuthContext);
  const [getSubstaion, setsubStation] = useState([]);

  const navigate = useNavigate();

  const { substationreading } = useContext(AuthContext);
  const { invoicedata } = useContext(AuthContext);
  console.log(substationreading);





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
  useEffect(() => {
    localStorage.setItem("substationIdYear", JSON.stringify(inpval));
  }, [inpval]);

  //  const handleStation=(e)=>{
  //   const getSubstationId=e.target.value;

  //  }

  const onsubmitTable = async (e) => {
    e.preventDefault();
    console.log("clicked");

    const { substation_id, year } = inpval;

    console.log(inpval);
    // setSubId(substation_id);

    // subId =localStorage.setItem("substationId", JSON.stringify(substation_id));

    await substationreading(substation_id, year);

    await invoicedata(substation_id, year);

    if (readingdata.length >= 0) {
      navigate("/TablePage");
    }
    else{
      alert('data not found');
    }
  };

  return (
    <div className="container2">
      <div className="title2">Substation Yearly Report</div>
      <form>
        <div className="ui divider"></div>
        <div className="user-details">
          <div className="input-box">
            <span className="details">Substation</span>
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
            <span className="details">Select Year</span>
            <select name="year" onChange={setData}>
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
        <div className="btn-group">
          <Link to="/">
            <button
              type="button"
              name="Substation"
              value="table"
              onClick={onsubmitTable}
            >
              Table
            </button>
          </Link>

          <Link to="/SubstationYearlyChartReport">
            <button type="button" name="Feeder" value="chart" onClick="">
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

export default SubstationYearlyReport;
