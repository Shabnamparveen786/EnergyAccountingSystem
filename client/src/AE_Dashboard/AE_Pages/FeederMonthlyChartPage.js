import React from "react";
import Chart from "react-apexcharts";
import "../../css/Chart.css";
import { AuthContext } from "../../context/routerContext";
import { useContext } from "react";

const FeederMonthlyChartPage = () => {
 const { monthlyfeeder } = useContext(AuthContext);

 const { invoicemonthlyfeeder } = useContext(AuthContext);

 const loss = monthlyfeeder[0].reading - invoicemonthlyfeeder[0].unit_consumed;
 console.log(loss);


  return (
    <React.Fragment>
      <div className="contain" col-lg-12 col md-12 col-sm-12>
        <h3 className="chart-heading">Energy Accounting System</h3>
        <Chart
          type="pie"
          width={900}
          height={450}
          series={[
            monthlyfeeder[0].reading,
            invoicemonthlyfeeder[0].unit_consumed,
            loss,
          ]}
          options={{
            title: {
              text: "Energy Report Feeder Of September(2022)",
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

export default FeederMonthlyChartPage;
