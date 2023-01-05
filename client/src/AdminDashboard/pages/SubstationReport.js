import React from "react";
import "../../css/Form.css";
import { Link } from "react-router-dom";

function SubstationReport() {
  return (
    <div className="container1">
      <div className="title">Substation Report</div>
      <form>
        <div className="ui divider"></div>
        <div className="user-details">
          <div className="input-box">
            <span className="details">Substation Name</span>
            <select>
              <option value="abc">ABC</option>
              <option value="def">DEF</option>
              <option value="ghi">GHI</option>
              <option selected value="Select-Substation">
                -Select Substation-
              </option>
            </select>
          </div>
          <div className="input-box">
            <span className="details">Select month</span>
            <select>
              <option value="abc">January</option>
              <option value="def">February</option>
              <option value="ghi">March</option>
              <option selected value="Select-Substation">
                -Select Month-
              </option>
            </select>
          </div>
        </div>
        <div className="button_container">
          <div className="btn-group">
            <button type="button">Table</button>
          </div>
          <div className="btn-group">
            <button type="button">Chart</button>
          </div>
          <div className="btn-group">
            <button type="button">Reset</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SubstationReport;
