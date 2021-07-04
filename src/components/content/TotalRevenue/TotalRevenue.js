import { CChartLine } from '@coreui/react-chartjs';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import React from 'react';

const TotalRevenue = () => {
    
    
    // console.log(datasets.length);
    const line = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'My First dataset',
                fill: false,
                lineTension: 0.4,
                backgroundColor: "#4357db",
                borderColor: '#4357db',
                borderCapStyle: 'round',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'round',
                pointBorderColor: '#4357db',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#4357db',
                pointHoverBorderColor: '#4357db',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40],
            },
            {
                label: 'My First dataset',
                fill: false,
                lineTension: 0.4,
                backgroundColor: '#cbcccc',
                borderColor: '#cbcccc',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: '#cbcccc',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#cbcccc',
                pointHoverBorderColor: '#cbcccc',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [35, 29, 70, 81, 36, 45, 60],
            },
        ],
    };
    return (
        <div className="mt-5 bg-white" style={{ borderRadius: "10px", height: "480px"  }}>
            <div className="d-flex justify-content-between align-items-center pl-3 pr-3 pt-2 border-bottom">
                <h6>Total Revenue</h6>
                <MoreHorizIcon></MoreHorizIcon>
            </div>
            <div className="d-flex align-items-end pt-3 ">
                <div className="col-3 ">
                    <h2>$24,000</h2>
                    <div className="d-flex justify-content-start align-items-center">
                        <FiberManualRecordIcon style={{ fontSize: "0.5rem" }}></FiberManualRecordIcon>&nbsp;
                        <span style={{ fontSize: "0.8rem" }}>current period</span>
                    </div>
                </div>
                <div className="col-3">
                    <h2>$24,000</h2>
                    <div className="d-flex justify-content-start align-items-center">
                        <FiberManualRecordIcon style={{ fontSize: "0.5rem" }}></FiberManualRecordIcon>&nbsp;
                        <span style={{ fontSize: "0.8rem" }}>current period</span>
                    </div>
                </div>
            </div>
            <div className=" pb-3 pl-2 pr-2" style={{height: "340px"}}>
            <CChartLine className="d-flex justify-content-center align-items-end" labels={line.labels} datasets={line.datasets} style={{height: "100%",width: "100%"}}></CChartLine>
            </div>
        </div>
    );
};

export default TotalRevenue;