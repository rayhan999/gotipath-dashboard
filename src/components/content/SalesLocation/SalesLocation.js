import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import React from 'react';
import WorldMap from './WorldMap';


const SalesLocation = () => {
    return (
        <div className="mt-5 bg-white" style={{ borderRadius: "10px", height: "450px" }}>
            <div className="d-flex justify-content-between align-items-center pl-3 pr-3 pt-2 border-bottom">
                <h6>Top Selling Products</h6>
                <MoreHorizIcon></MoreHorizIcon>
            </div>
            <div className="p-2">
                <div>
                    <WorldMap></WorldMap>
                </div>
                <div>
                <table class="table table-borderless table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        
                    </tbody>
                </table>
                </div>
            
            </div>
        </div>
    );
};

export default SalesLocation;