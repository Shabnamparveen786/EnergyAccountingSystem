import React from "react";
import "../../css/report.css";
import { useState, useEffect } from "react";

import { AuthContext } from "../../context/routerContext";
import { useContext } from "react";
const SubstationReadingPage = () => {
  const { currentUser } = useContext(AuthContext);
  // const [user] = currentUser;
  // console.log(user);
  // console.log(currentUser.subdivision_id);
  // console.log(currentUser.name);
  const [sub_divId, setSubDivId] = useState("");
  const [createdby, setCreatedBy] = useState("");
  const [substation, setSubstation] = useState([]);
  const [substationid, setSubStationid] = useState("");
  // setSubDivId(currentUser.subdivision_id);
  // setCreatedBy(currentUser.name);

  // setSubStationid(substation[0].substation_id);

  useEffect(() => {
    const getsubstationreading = async () => {
      const res = await fetch("/substation/" + currentUser?.subdivision_id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);

      setSubstation(data);
      setSubStationid(data[0].substation_id);
      setSubDivId(data[0].sub_div_id);

      setCreatedBy(currentUser.name);
      if (res.status === 422 || !data) {
        console.log("error");
      } else {
        // console.log(substation[0].substation_id);
      }
    };

    getsubstationreading();
  }, []);

  console.log("sub station id:" + substationid);
  console.log("sub division id:" + sub_divId);
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

  const addSubstationReading = async (e) => {
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
      if (currentUser.role === "AE") {
        const res = await fetch("/substationReading", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            substationid,
            reading,
            sub_divId,
            month,
            year,
            created_date,
            createdby,
          }),
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
          console.log("error");
          alert("error");
        } else {
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
      <div className="title2">Substation Reading Entry</div>
      <form>
        <div className="ui divider"></div>
        <div className="user-details">
          <div className="input-box">
            <span className="details">Select Created Month</span>
            <select name="month" onChange={setdata}>
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
            <input type="date" name="created_date" onChange={setdata} />
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
          <button type="submit" name="submit" onClick={addSubstationReading}>
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

export default SubstationReadingPage;
