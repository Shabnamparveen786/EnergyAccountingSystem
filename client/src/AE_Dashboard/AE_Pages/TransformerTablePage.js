import React from "react";
import { container } from "react-bootstrap";
import "../../css/Table.css";
import { useState, useEffect } from "react";

import { AuthContext } from "../../context/routerContext";
import { useContext } from "react";

function TransformerTablePage() {
   const { invoicetransformerreading } = useContext(AuthContext);
  const { transformerreadingdata } = useContext(AuthContext);
  const { currentUser } = useContext(AuthContext);

  // console.log(invoicetransformerreading);
  console.log(transformerreadingdata[0].total_supplied);
  console.log(invoicetransformerreading[0].total_unit1);

  const [inpval, setINP] = useState({
    substation_id: "",
    year: "",
  });

  const loss =
    transformerreadingdata[0].total_supplied -
    invoicetransformerreading[0].total_unit1;
  console.log(loss);

  const percentage = (loss / transformerreadingdata[0].total_supplied) * 100;

  console.log(inpval);

  return (
    <React.Fragment>
      <container className="">
        <div className="row-sm-4">
          <div className="col-sm-8 text-success reportTable">
            <h3 className="p-3 fw-bold text black">Yearly Transformer Report</h3>
            <table className="table fw-bold table-bordered text black">
              <tbody>
                <tr>
                  <th> SubDivision Id: </th>
                  <td> {currentUser.subdivision_id}</td>
                </tr>

                <tr>
                  <th> Substation Id: </th>
                  <td> {invoicetransformerreading[0].substationId} </td>
                </tr>
                <tr>
                  <th> Feeder Id: </th>
                  <td> {invoicetransformerreading[0].feederId}</td>
                </tr>
                <tr>
                  <th> Transformer Id: </th>
                  <td> {invoicetransformerreading[0].Dt_Id} </td>
                </tr>
                <tr>
                  <th> Year: </th>
                  <td> {invoicetransformerreading[0].bill_year}</td>
                </tr>

                <tr>
                  <th> Supplied Energy: </th>
                  <td> {transformerreadingdata[0].total_supplied}</td>
                </tr>
                <tr>
                  <th> Billed Energy: </th>
                  <td> {invoicetransformerreading[0].total_unit1}</td>
                </tr>
                <tr>
                  <th> Energy Lossed: </th>
                  <td>{loss} </td>
                </tr>
                <tr>
                  <th> Loss Percentage(%): </th>
                  <td> {percentage}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </container>
    </React.Fragment>
  );
}

export default TransformerTablePage;
