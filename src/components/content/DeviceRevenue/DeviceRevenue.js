import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import './DeviceRevenue.css';

const DeviceRevenue = () => {
    const doughnut = {
        datasets: [
            {
                data: [5870, 4483, 2420],
                backgroundColor: [
                    "rgb(9, 231, 157)", "#4357db", "rgb(231, 128, 9)"
                ],
                label: 'Dataset 1',
            },
        ],
        labels: ['Data 1', 'Data 2', 'Data 3'],
        hoverOffset: 4
    }

    return (
        <div className="mt-5 bg-white" style={{ borderRadius: "10px", height: "450px" }}>
            <div className="d-flex justify-content-between align-items-center pl-3  pt-2 border-bottom">
                <h6>Revenue by Device</h6>
                <ul className="d-flex justify-content-between align-items-center options">
                    <li className="activeDevice">Today</li>
                    <li>Week</li>
                    <li>Month</li>
                    <li><MoreHorizIcon></MoreHorizIcon></li>
                </ul>
                
            </div>
            <div className="p-2 " >
                <div className="d-flex justify-content-center align-items-end" style={{height: "50%"}} >
                    <Doughnut data={doughnut} className="" style={{maxHeight: "200px",width: "100%"}}></Doughnut>
                </div>
                {doughnut &&
                <div>
                <table class="table table-borderless">
                   
                    <tbody>
                        <tr>
                            <td>Desktop</td>
                            <td className="money">$5870</td>
                            <td>45%</td>
                        </tr>
                        <tr>
                            <td>Mobile</td>
                            <td className="money">$4483</td>
                            <td>30%</td>
                        </tr>
                        <tr>
                            <td>Tablet</td>
                            <td className="money">$2420</td>
                            <td>24%</td>
                        </tr>
                        
                    </tbody>
                </table>
                </div>
                }
            </div>
        </div>
    );
};

export default DeviceRevenue;