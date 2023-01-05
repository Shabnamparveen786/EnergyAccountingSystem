import React from "react";
import "./../../css/Form.css";
import { useState, useEffect } from "react";

const SubstationCreation = () => {
  const [getsubdivision, setSubDivision] = useState([]);

  const [inpval, setINP] = useState({
    substation_id: "",
    sub_div_id: "",
    substation_name: "",
    location: "",
    capacity: "",
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
    const getsubdivisionData = async () => {
      const res = await fetch("/subdivision", {
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
        setSubDivision(data);
        console.log("get data");
      }
    };

    getsubdivisionData();
  }, []);

  const addSubstation = async (e) => {
    e.preventDefault();
    console.log("clicked");

    const { sub_div_id, substation_name, location, capacity } = inpval;

    console.log(inpval);

    if (sub_div_id == "") {
      alert("subdivision name is required");
    } else if (substation_name == "") {
      alert("substation name is required");
    } else if (location == "") {
      alert("location is required");
    } else if (capacity == "") {
      alert("capacity is required");
    } else {
      const res = await fetch("/substation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sub_div_id,
          substation_name,
          location,
          capacity,
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
        console.log("substation created  successfully");
        alert("substation created successfully");
      }
    }
  };

  return (
    <div className="container1">
      <div className="title">Create Substation</div>
      <form>
        <div className="ui divider"></div>
        <div className="user-details">
          <div className="input-box">
            <span className="details">SubDivision Name</span>
            <select
              name="sub_div_id"
              placeholder="select subdivision"
              onChange={setData}
            >
              <option value="Select-SubDivision">-Select SubDivision-</option>

              {getsubdivision.map((val) => {
                return (
                  <option value={val.subdivision_id}>
                    {val.subdivision_name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="input-box">
            <span className="details">Substation Name</span>
            <input
              type="text"
              name="substation_name"
              placeholder="Enter Substation Name"
              onChange={setData}
            />
          </div>
          <div className="input-box">
            <span className="details">Location</span>
            <input
              type="text"
              name="location"
              placeholder="Enter Location"
              onChange={setData}
            />
          </div>
          <div className="input-box">
            <span className="details">Capacity</span>
            <input
              type="text"
              name="capacity"
              placeholder="Enter Capacity"
              onChange={setData}
            />
          </div>
        </div>
        <div className="button">
          <button type="submit" name="submit" onClick={addSubstation}>
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubstationCreation;
