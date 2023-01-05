import React from "react";
import { useContext, useEffect } from "react";
import { useState } from "react";
import "../../css/report.css";

const YearlyReport = () => {
  return (
    <div className="container2">
      <div className="title2"> Yearly Report </div>
      <form>
        <div className="ui-divider"></div>
        <div className="button1">
          <input type="button" value="Substation" />
        </div>
        <div className="button1">
          <input type="button" value="Feeder" />
        </div>
        <div className="button1">
          <input type="button" value="Transformer" />
        </div>
      </form>
    </div>
  );
};

export default YearlyReport;
