import React from "react";
import "../../css/report.css";
import { useState, useEffect } from "react";

import { AuthContext } from "../../context/routerContext";
import { useContext } from "react";

const FeederReadingPage = () => {
  const { currentUser } = useContext(AuthContext);
  const [feeder, setFeeder] = useState([]);
  const [sub_divId, setSubDivId] = useState("");
  const [feeder_id, setFeederId] = useState("");
  const [location, setLocation] = useState("");
  const [createdby, setCreatedBy] = useState("");
  useEffect(() => {
    const getfeederdata = async () => {
      const res = await fetch("/feeder/" + currentUser?.subdivision_id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);

      setFeeder(data);
      setFeederId(data[0].feeder_id);
      setSubDivId(data[0].sub_div_id);
      setLocation(data[0].location);
      setCreatedBy(currentUser.name);
      // setCreatedBy(currentUser.name);
      if (res.status === 422 || !data) {
        console.log("error");
      } else {
        // console.log(substation[0].substation_id);
      }
    };

    getfeederdata();
  }, []);

  console.log("feeder id:" + feeder_id);
  console.log("sub division id:" + sub_divId);
  console.log("location: " + location);
  console.log("created by name:" + createdby);

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

  const addFeederReading = async (e) => {
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
      if (currentUser.role === "EEE") {
        const res = await fetch("/feederReading", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            feeder_id,
            reading,
            sub_divId,
            location,
            month,
            year,
            createdby,
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
      <div className="title2">Feeder Reading Entry</div>
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
              <option value="July">July</option>
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
          <button type="submit" name="submit" onClick={addFeederReading}>
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

export default FeederReadingPage;
