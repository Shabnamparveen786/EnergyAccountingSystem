import React, { useContext, useEffect } from "react";
import "./../../css/Form.css";
// import { useHistory } from "react-router-dom";
// const conn = require("../db/conn");

import { useState } from "react";
import Axios from "axios";
const UserDetails = () => {
  const [getdivision, setDivision] = useState([]);
  const [divisionId, setDivisionId] = useState("");
  const [getsubdivision, setSubDivision] = useState([]);
  const [usertype, setUserType] = useState("");

  // const [udata, setUdata] = useContext();

  // const history = useHistory();

  const [inpval, setINP] = useState({
    name: "",
    user_id: "",
    email: "",
    password: "",
    mobile: "",
    designation: "",
    division_id: "",
    subdivision_id: "",
    role: "",
    user_type: "",
    posting_location: "",
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

  const addinputData = async (e) => {
    e.preventDefault();
    console.log("clicked");

    const {
      name,
      user_id,
      email,
      password,
      mobile,
      designation,
      division_id,
      subdivision_id,
      role,
      user_type,
      posting_location,
    } = inpval;

    console.log(inpval);

    if (name == "") {
      alert("name is required");
    } else if (user_id == "") {
      alert("userid is required");
    } else if (email == "") {
      alert("email is required");
    } else if (!email.includes("@")) {
      alert("enter valid email");
    } else if (password == "") {
      alert("password is required");
    } else if (mobile == "") {
      alert("mobile number is required");
    } else if (designation == "") {
      alert("designation is required");
    } else if (division_id == "") {
      alert("division id is required");
    } else if (subdivision_id == "") {
      alert("sub division id is required");
    } else if (role == "") {
      alert("role is required");
    } else if (user_type == "") {
      alert("user type is required");
    } else if (posting_location == "") {
      alert("postion location is required");
    } else {
      const res = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          user_id,
          email,
          password,
          mobile,
          designation,
          division_id,
          subdivision_id,
          role,
          user_type,
          posting_location,
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
        alert("user added successfully");
      }
    }
  };

  useEffect(() => {
    const getdivisionData = async () => {
      const res = await fetch("/division", {
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
        setDivision(data);
        console.log("get data");
      }
    };

    getdivisionData();
  }, []);

  const selectDiv = async (event) => {
    const divId = event.target.value;
    const { name, value } = event.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });

    setDivisionId(divId);
    const res = await fetch("/subdivision/" + divId, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    setSubDivision(data);
  };
  // console.log(divisionId);

  const usertype_func = async (event) => {
    const type = event.target.value;
    const { name, value } = event.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
    console.log(type);
    setUserType(type);
    if (type === "division") {
      const res = await fetch("/division/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      setSubDivision(data);
    }
    if (type === "sub division") {
      const res = await fetch("/subdivision/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      setSubDivision(data);
    }
  };

  return (
    <div className="container1">
      <div className="title">Fill User Details</div>
      <form>
        <div className="ui divider"></div>
        <div className="user-details">
          <div className="input-box">
            <span className="details">User Name</span>
            <input
              type="text"
              name="name"
              onChange={setdata}
              placeholder="Enter User Name"
            />
          </div>
          <div className="input-box">
            <span className="details">User Id</span>
            <input
              type="text"
              name="user_id"
              onChange={setdata}
              placeholder="Enter User-id"
            />
          </div>
          <div className="input-box">
            <span className="details">Email</span>
            <input
              type="email"
              name="email"
              onChange={setdata}
              placeholder="Enter User Email"
            />
          </div>

          <div className="input-box">
            <span className="details">Password</span>
            <input
              type="password"
              name="password"
              onChange={setdata}
              placeholder="Enter User Password"
            />
          </div>
          <div className="input-box">
            <span className="details">Mobile No.</span>
            <input
              type="text"
              name="mobile"
              onChange={setdata}
              placeholder="Enter Mobile No."
            />
          </div>
          <div className="input-box">
            <span className="details">Designation</span>

            <select
              name="designation"
              onChange={setdata}
              placeholder="Enter Designation"
            >
              <option selected value="Select-Designation">
                -Select Designation-
              </option>
              <option value="Junior Engineer">Junior Engineer</option>
              <option value="Assistant Engineer">Assistan Engineer</option>
              <option value="Executive Engineer">Executive Engineer</option>
              <option value="It Manager">IT Manager</option>
              <option value="Assistant IT Manager">Assistant IT Manager</option>
            </select>
          </div>
          <div className="input-box">
            <span className="details">Division</span>
            <select name="division_id" onChange={selectDiv}>
              <option value="Select-SubDivision">-Select Division-</option>

              {getdivision.map((val) => {
                return (
                  <option value={val.division_id}>{val.division_name}</option>
                );
              })}
            </select>
          </div>
          <div className="input-box">
            <span className="details">Sub Division</span>

            <select
              name="subdivision_id"
              onChange={setdata}
              placeholder="select subdivision"
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
            <span className="details">Role</span>
            <select name="role" onChange={setdata}>
              <option selected value="Select-Role">
                -Select Role-
              </option>
              <option value="admin">Admin</option>
              <option value="AE">AE</option>
              <option value="JE">JE</option>
              <option value="EEE">EEE</option>
            </select>
          </div>
          <div className="input-box">
            <span className="details">User Type</span>
            <select name="user_type" onChange={usertype_func}>
              <option value="Select-SubDivision">-Select UserType-</option>
              <option value="division">Division</option>
              <option value="sub division">Sub Division</option>
            </select>
          </div>
          <div className="input-box">
            <span className="details">Posting Location</span>

            <select
              name="posting_location"
              onChange={setdata}
              placeholder="select subdivision"
            >
              <option value="Select-SubDivision">
                -Select PostingLocation-
              </option>
              {usertype == "division"
                ? getdivision.map((val) => {
                    return (
                      <option value={val.division_id}>
                        {val.division_name}
                      </option>
                    );
                  })
                : getsubdivision.map((val) => {
                    return (
                      <option value={val.subdivision_id}>
                        {val.subdivision_name}
                      </option>
                    );
                  })}
            </select>
          </div>
        </div>
        <div className="button">
          <button type="" onClick={addinputData}>
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserDetails;
