import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';

const Dashboard = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    return (
        <div className="dashboard-section">
            <Navbar show={showSidebar} setShowSidebar={setShowSidebar}></Navbar>
            <div className="d-flex">

                <Sidebar show={showSidebar} setShowSidebar={setShowSidebar}></Sidebar>

                <h1>hello</h1>

            </div>
        </div>
    );
};

export default Dashboard;