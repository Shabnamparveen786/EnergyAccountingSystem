import React from "react";
import { container } from "react-bootstrap";
import "../../css/Table.css";
import { useState, useEffect } from "react";

import { AuthContext } from "../../context/routerContext";
import { useContext } from "react";

function TablePage() {
  // const { substationreading } = useContext(AuthContext);
  const [getreading, setReading] = useState([]);
  const [getinvoice, setinvoice] = useState([]);
  const [subId, setSubId] = useState([]);
  // const [tsupply, setSupply] = useState()
  const { totalsupply } = useContext(AuthContext);
  const { currentUser } = useContext(AuthContext);
  const { readingdata } = useContext(AuthContext);
  console.log(totalsupply[0].total_supplied);
  console.log(readingdata[0].total_unit1);

  const [inpval, setINP] = useState({
    substation_id: "",
    year: "",
  });

  const loss = totalsupply[0].total_supplied - readingdata[0].total_unit1;
  console.log(loss);

  const percentage = (loss / totalsupply[0].total_supplied) * 100;
  

  useEffect(() => {
    localStorage.setItem("substationIdYear", inpval);
  }, [inpval]);

  console.log(inpval);
  useEffect(() => {
    const getinvoicegData = async () => {
      const res = await fetch("/substationReading", {
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
        setinvoice(data);
        // console.log(getReading);
      }
    };

    getinvoicegData();
  }, []);

  return (
    <React.Fragment>
      <container className="">
        <div className="row-sm-4">
          <div className="col-sm-8 text-success reportTable">
            <h3 className="p-3 fw-bold text black">Yearly Substation Report</h3>
            <table className="table fw-bold table-bordered text black">
              <tbody>
                <tr>
                  <th> SubDivision Id: </th>
                  <td> {currentUser.subdivision_id}</td>
                </tr>

                <tr>
                  <th> Substation Id: </th>
                  <td> {readingdata[0].substationId} </td>
                </tr>
                <tr>
                  <th> Feeder Id: </th>
                  <td> {readingdata[0].feederId} </td>
                </tr>
                <tr>
                  <th> Year: </th>
                  <td> {readingdata[0].bill_year} </td>
                </tr>

                <tr>
                  <th> Supplied Energy: </th>
                  <td>{totalsupply[0].total_supplied}</td>
                </tr>
                <tr>
                  <th> Billed Energy: </th>
                  <td> {readingdata[0].total_unit1} </td>
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

export default TablePage;
