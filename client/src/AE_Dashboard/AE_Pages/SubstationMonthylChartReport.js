import React from "react";
//import { PieChart } from 'react-minimal-pie-chart';
//import { MDBChart, MDBCol } from 'mdb-react-ui-kit';
import Chart from "react-apexcharts";
import "./../../css/Chart.css";
import { AuthContext } from "../../context/routerContext";
import { useContext } from "react";

const SubstationMonthylChartReport = () => {
  const { monthlysubstation } = useContext(AuthContext);
  const { invoicemonthlysubstation } = useContext(AuthContext);

  const loss =
    monthlysubstation[0].reading - invoicemonthlysubstation[0].unit_consumed;
  console.log(loss);
  console.log("supply", monthlysubstation[0].reading);
  console.log("consumed", invoicemonthlysubstation[0].unit_consumed);
  return (
    <React.Fragment>
      <div className="contain" col-lg-12 col md-12 col-sm-12>
        <h3 className="chart-heading">Energy Accounting System</h3>
        <Chart
          type="pie"
          width={900}
          height={400}
          series={[
            monthlysubstation[0].reading,
            loss,
            invoicemonthlysubstation[0].unit_consumed,
          ]}
          options={{
            title: {
              text: "Energy Report Substation Of September(2022)",
            },

            noData: { text: "Empty Data" },

            colors: ["#e6cc00", "#FF0000", "#008000"],

            labels: ["Energy Supply", "Energy Losses", "Energy Consumed"],
          }}
        ></Chart>
      </div>
    </React.Fragment>
  );
};

export default SubstationMonthylChartReport;
