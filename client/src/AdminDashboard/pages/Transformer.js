import "./../../css/Form.css";
import { useState, useEffect } from "react";
const Transformer = () => {
  const [getsubdivision, setSubDivision] = useState([]);
  const [getfeeder, setFeederId] = useState([]);

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

    console.log(subdivId);
    const res = await fetch("/transformer/" + subdivId, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    setFeederId(data);
  };

  const [inpval, setINP] = useState({
    sub_div_id: "",
    feeder_id: "",
    location: "",
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

  const addtransformerData = async (e) => {
    e.preventDefault();
    console.log("clicked");

    const { sub_div_id, feeder_id, location } = inpval;

    console.log(inpval);

    if (sub_div_id == "") {
      alert("subdivision name is required");
    } else if (feeder_id == "") {
      alert("substation  is required");
    } else if (location == "") {
      alert("location is required");
    } else {
      const res = await fetch("/transformer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sub_div_id,
          feeder_id,
          location,
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
        console.log("Transformer created  successfully");
        alert("Transformer created successfully");
      }
    }
  };

  return (
    <div className="container1">
      <div className="title">Create Transformer</div>
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
            <span className="details">Feeder</span>
            <select name="feeder_id" onChange={setData}>
              <option selected value="Select-Feeder">
                -Select Feeder-
              </option>
              {getfeeder.map((val) => {
                return <option value={val.feeder_id}>{val.feeder_id}</option>;
              })}
            </select>
          </div>
          <div className="input-box">
            <span className="details">Location</span>
            <input
              name="location"
              type="text"
              placeholder="Enter Location"
              onChange={setData}
            />
          </div>
        </div>
        <div className="button">
          <button name="submit" type="submit" onClick={addtransformerData}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Transformer;
