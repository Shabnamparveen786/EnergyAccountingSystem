import "./../../css/Form.css";
import { useState, useEffect } from "react";
const FeederCreation = () => {
  const [getsubdivision, setSubDivision] = useState([]);
  const [getsubstaion, setsubStation] = useState([]);

  const [inpval, setINP] = useState({
    sub_div_id: "",
    substation_id: "",
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

  const addfeederData = async (e) => {
    e.preventDefault();
    console.log("clicked");

    const { sub_div_id, substation_id, location, capacity } = inpval;

    console.log(inpval);

    if (sub_div_id == "") {
      alert("subdivision name is required");
    } else if (substation_id == "") {
      alert("substation  is required");
    } else if (location == "") {
      alert("location is required");
    } else if (capacity == "") {
      alert("capacity is required");
    } else {
      const res = await fetch("/feeder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sub_div_id,
          substation_id,
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
        console.log("Feeder created  successfully");
        alert("Feeder created successfully");
      }
    }
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

  const selectsubDiv = async (event) => {
    const subdivId = event.target.value;
    const { name, value } = event.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });

    // setDivisionId(divId);
    const res = await fetch("/substation/" + subdivId, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    setsubStation(data);
  };

  return (
    <div className="container1">
      <div className="title">Create Feeder</div>
      <form>
        <div className="ui divider"></div>
        <div className="user-details">
          <div className="input-box">
            <span className="details">SubDivision</span>
            <select name="sub_div_id" onChange={selectsubDiv}>
              <option value="Selec-SubDivision">-Select SubDivision-</option>
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
            <span className="details">Substation</span>
            <select name="substation_id" onChange={setData}>
              <option selected value="Select-Substation">
                -Select Substation-
              </option>
              {getsubstaion.map((val) => {
                return (
                  <option value={val.substation_id}>
                    {val.substation_name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="input-box">
            <span className="details">Location</span>
            <input
              type="text"
              placeholder="Enter Location"
              name="location"
              onChange={setData}
            />
          </div>
          <div className="input-box">
            <span className="details">Capacity</span>
            <select name="capacity" onChange={setData}>
              <option selected value="Select-Capacity">
                -Select Capacity-
              </option>
              {getsubstaion.map((val) => {
                return (
                  <option value={val.substation_id}>{val.capacity}</option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="button">
          <button name="submit" type="submit" onClick={addfeederData}>
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeederCreation;
