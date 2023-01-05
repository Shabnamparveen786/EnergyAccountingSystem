import React from 'react'
import "../../css/report.css";
import { Link, useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import { AuthContext } from "../../context/routerContext";
import { useContext } from "react";

function DtYearlyReport() {

   const { transformerreading } = useContext(AuthContext);
    const { invoicetransformerdata } = useContext(AuthContext);

     const { invoicetransformerreading } = useContext(AuthContext);
     const { transformerreadingdata } = useContext(AuthContext);

       const loss =
         transformerreadingdata[0].total_supplied -
         invoicetransformerreading[0].total_unit1;
       console.log(loss);
    
  const [getDt, setDt] = useState([]);
  const[query, setQuery] = useState([]);
 const navigate = useNavigate();
  // console.log(transformerreading[0].total_supplied);

  
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

    const { Dt_no, year } = inpval;


transformerreading(Dt_no, year);
invoicetransformerdata(Dt_no, year);
    console.log(inpval);

    if (loss != 0) {
      navigate("/TransformerTablePage");
    }
    else{
      alert('data not found');
    }

    if (Dt_no == "") {
      alert("Transformer is required");
    } else if (year == "") {
      alert("Year  is required");
    } else {
      
    }
   }




  return (
    <div className="container2">
      <div className="title2">Transformer Yearly Report</div>
      <form>
        <div className="ui divider"></div>
        <div className="user-details">
          <div className="input-box">
            <span className="details">Transformer</span>
            <select name="Dt_no" onChange={setData}>
              <option selected value="Select-Substation">
                -Select Transformer-
              </option>
              {getDt.map((val) => {
                return <option value={val.DT_no}>{val.DT_no}</option>;
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
        <div className="btn-group">
          <Link to="/">
            <button type="button" name="" value="table" onClick={onsubmitTable}>
              Table
            </button>
          </Link>

          <Link to="/TransformerYearlyChartReport">
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
};

export default DtYearlyReport