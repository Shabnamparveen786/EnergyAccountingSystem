import React from 'react'
//import { PieChart } from 'react-minimal-pie-chart';
//import { MDBChart, MDBCol } from 'mdb-react-ui-kit';
import Chart from 'react-apexcharts';
import '../../css/Chart.css';

const chart = () => {
  return(
      <React.Fragment>
         <div className='contain' col-lg-12 col md-12 col-sm-12>
            <h3 className='chart-heading'>Energy Accounting System</h3>
            <Chart 
            type="pie"
            width={1000}
            height={450}

            series={ [100,30,70]}

            options={ {
                
                title:{
                    text:"Energy Report Feeder Of September(2022)"
                },

                noData:{text:"Empty Data"},
                
                labels:['Energy Supply', 'Energy Losses', 'Energy Consumed']
            }}
           >

           </Chart>

         </div>
      </React.Fragment>
  );
}

export default chart