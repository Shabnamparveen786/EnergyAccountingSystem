import React from "react";
import "../../css/report.css";
import { useState, useEffect } from "react";
import { AuthContext } from "../../context/routerContext";
import { useContext } from "react";
import axios from "axios";

const TransformerReadingPage = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser.subdivision_id);

  const [transformer, setTransformer] = useState([]);
  const [created_by, setCreatedBy] = useState("");
  const [subdiv_id, setSubDivId] = useState("");
  const [dt_no, setDT_no] = useState("");

  useEffect(() => {
    const getTransformerdata = async () => {
      const res = await fetch("/transformer/" + currentUser?.subdivision_id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);

      setTransformer(data);
      setCreatedBy(currentUser?.name);
      setSubDivId(data[0].sub_div_id);
      setDT_no(data[0].DT_no);
      if (res.status === 422 || !data) {
        console.log("error");
      } else {
        // console.log(substation[0].substation_id);
      }
    };

    getTransformerdata();
  }, []);

  console.log("created by name:" + created_by);
  console.log("sub division id:" + subdiv_id);

  console.log("transformer id:" + dt_no);

  const [inpval, setINP] = useState({
    reading: "",
    month: "",
    year: "",
    created_date: "",
  });

  const setdata = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const addTransformerReading = async (e) => {
    e.preventDefault();
    console.log("clicked");

    const { reading, month, year, created_date } = inpval;

    console.log(inpval);

    if (reading == "") {
      alert("reading is required");
    } else if (month == "") {
      alert("month is required");
    } else if (year == "") {
      alert("year is required");
    } else if (created_date == "") {
      alert("date is required");
    } else {
      if (currentUser.role === "JE") {
        const res = await fetch("/transformerReading", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            dt_no,
            reading,
            subdiv_id,
            month,
            year,
            created_by,
            created_date,
          }),
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
          console.log("error");
          alert("error");
        } else {
          // history.push("/");
          // setUdata(data);
          console.log("data added successfully");
          alert("data added successfully");
        }
      } else {
        alert("user unauthorized");
      }
    }
  };

  return (
    <div className="container2">
      <div className="title2">Transformer Reading Entry</div>
      <form>
        <div className="ui divider"></div>
        <div className="user-details">
          <div className="input-box">
            <span className="details">Select Created Month</span>
            <select name="month" onChange={setdata}>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="June">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
              <option selected value="Select-Substation">
                -Select Month-
              </option>
            </select>
          </div>

          <div className="input-box">
            <span className="details">Select Created year</span>
            <select name="year" onChange={setdata}>
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

          <div className="input-box">
            <span className="details">Date</span>
            <input
              type="date"
              placeholder=""
              name="created_date"
              onChange={setdata}
            />
          </div>

          <div className="input-box">
            <span className="details">Enetr Reading 3</span>
            <input
              type="text"
              name="reading"
              placeholder="0000"
              onChange={setdata}
            />
          </div>
        </div>
        <div className="btn-group">
          <button type="submit" name="submit" onClick={addTransformerReading}>
            Submit
          </button>
          <button type="submit" name="reset">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default TransformerReadingPage;
