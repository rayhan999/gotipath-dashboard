import React, { useState } from 'react';
import Content from '../components/content/Content';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';

const Dashboard = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    return (
        <div className="dashboard-section wrapper">
            <Navbar show={showSidebar} setShowSidebar={setShowSidebar}></Navbar>
            <div className=" d-flex">

                <Sidebar show={showSidebar} setShowSidebar={setShowSidebar}></Sidebar>

                <div className="flex-grow-1">
                    <Content></Content>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;