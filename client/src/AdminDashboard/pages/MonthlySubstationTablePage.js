import React from 'react'
import { container } from "react-bootstrap";
import "../../css/Table.css";
import { useState, useEffect } from "react";

import { AuthContext } from "../../context/routerContext";
import { useContext } from "react";
function MonthlySubstationTablePage() {
  const { monthlysubstation } = useContext(AuthContext);


  const { invoicemonthlysubstation } = useContext(AuthContext);
        
  const loss =
    monthlysubstation[0].reading -
    invoicemonthlysubstation[0].unit_consumed;
  console.log(loss);

  const percentage = (loss / monthlysubstation[0].reading) * 100;
  return (
    <React.Fragment>
      <container className="">
        <div className="row-sm-4">
          <div className="col-sm-8 text-success reportTable">
            <h3 className="p-3 fw-bold text black">
              Monthly Substation Report
            </h3>
            <table className="table fw-bold table-bordered text black">
              <tbody>
                <tr>
                  <th> SubDivision Id: </th>
                  <td> {monthlysubstation[0].subdiv_id}</td>
                </tr>
                <tr>
                  <th> Substation Id: </th>
                  <td> {monthlysubstation[0].substation_id}</td>
                </tr>

                <tr>
                  <th> Month: </th>
                  <td> {monthlysubstation[0].month} </td>
                </tr>
                <tr>
                  <th> Year: </th>
                  <td> {monthlysubstation[0].year} </td>
                </tr>
                <tr>
                  <th> Supplied Energy: </th>
                  <td> {monthlysubstation[0].reading} </td>
                </tr>
                <tr>
                  <th> Billed Energy: </th>
                  <td> {invoicemonthlysubstation[0].unit_consumed}</td>
                </tr>
                <tr>
                  <th> Energy Lossed: </th>
                  <td> {loss} </td>
                </tr>
                <tr>
                  <th> Loss Percentage(%): </th>
                  <td> {percentage} </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </container>
    </React.Fragment>
  );
}

export default MonthlySubstationTablePage;