import React from 'react'
import { container } from "react-bootstrap";
import "../../css/Table.css";
import { useState, useEffect } from "react";
import { AuthContext } from "../../context/routerContext";
import { useContext } from "react";

function MonthlyFeederTablePage() {
  const { monthlyfeeder } = useContext(AuthContext);

  const { invoicemonthlyfeeder } = useContext(AuthContext);

  const loss = monthlyfeeder[0].reading - invoicemonthlyfeeder[0].unit_consumed;
  console.log(loss);

  const percentage = (loss / monthlyfeeder[0].reading) * 100;
    
        

  return (
    <React.Fragment>
      <container className="">
        <div className="row-sm-4">
          <div className="col-sm-8 text-success reportTable">
            <h3 className="p-3 fw-bold text black">Monthly Feeder Report</h3>
            <table className="table fw-bold table-bordered text black">
              <tbody>
                <tr>
                  <th> SubDivision Id: </th>
                  <td> {monthlyfeeder[0].subdiv_id}</td>
                </tr>

                <tr>
                  <th> Feeder Id: </th>
                  <td> {monthlyfeeder[0].feeder_id} </td>
                </tr>
                <tr>
                  <th> Month: </th>
                  <td> {monthlyfeeder[0].month} </td>
                </tr>
                <tr>
                  <th> Year: </th>
                  <td> {monthlyfeeder[0].year} </td>
                </tr>
                <tr>
                  <th> Supplied Energy: </th>
                  <td> {monthlyfeeder[0].reading} </td>
                </tr>
                <tr>
                  <th> Billed Energy: </th>
                  <td> {invoicemonthlyfeeder[0].unit_consumed} </td>
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

export default MonthlyFeederTablePage;