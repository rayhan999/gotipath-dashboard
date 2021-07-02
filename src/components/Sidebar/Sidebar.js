import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ show, setShowSidebar }) => {
    return (
        <nav id="sidebar" className={show ? "active" : ""}>
            <ul className="nav flex-column" id="nav_accordion">
                <span className="mt-3 ml-4">Main Menu</span>
                <li className="nav-item">
                <NavLink className="nav-link " to="/dashboard" style={{color: 'black'}}>
                    <div className="row sidebar-row">
                        <div className="col-3 sidebar-icon">
                            <HomeOutlinedIcon></HomeOutlinedIcon>
                        </div>
                        <div className="col-7 nav-link-text">
                             Dashboard 
                        </div>
                        <div className="col-2">
                            <KeyboardArrowRightOutlinedIcon className="nav-arrow"></KeyboardArrowRightOutlinedIcon>
                        </div>
                    </div>
                    </NavLink>
                </li>

                <li className="nav-item">
                <NavLink className="nav-link active" to="/email" style={{color: 'black'}}>
                    <div className="row sidebar-row">
                        <div className="col-3 sidebar-icon">
                            <MailOutlineIcon></MailOutlineIcon>
                        </div>
                        <div className="col-7 nav-link-text">
                             Email 
                        </div>
                        <div className="col-2 arrow-icon">
                            <KeyboardArrowRightOutlinedIcon className="nav-arrow"></KeyboardArrowRightOutlinedIcon>
                        </div>
                    </div>
                    </NavLink>
                </li>



                <li className="nav-item">
                <NavLink className="nav-link" data-bs-toggle="collapse" data-bs-target="#menu_item2" to="/chat" style={{color: 'black'}}>
                    <div className="row sidebar-row">
                        <div className="col-3 sidebar-icon">
                            <HomeOutlinedIcon></HomeOutlinedIcon>
                        </div>
                        <div className="col-7 nav-link-text">
                             Chat  
                        </div>
                        <div className="col-2">
                            <KeyboardArrowRightOutlinedIcon className="nav-arrow"></KeyboardArrowRightOutlinedIcon>
                        </div>

                    </div>
                    </NavLink>
                    <ul id="menu_item2" className="submenu collapse" data-bs-parent="#nav_accordion">
                        <li><NavLink className="nav-link" to="#">Submenu item 1 </NavLink></li>
                        <li><NavLink className="nav-link" to="#">Submenu item 5 </NavLink></li>
                        <li><NavLink className="nav-link" to="#">Submenu item 6 </NavLink></li>

                    </ul>
                </li>

                <li className="nav-item">
                <NavLink className="nav-link" data-bs-toggle="collapse" data-bs-target="#menu_item1" to="/ecommerce" style={{color: 'black'}}>
                    <div className="row sidebar-row">
                        <div className="col-3 sidebar-icon">
                            <HomeOutlinedIcon></HomeOutlinedIcon>
                        </div>
                        <div className="col-7 nav-link-text">
                             Ecommerce  
                        </div>
                        <div className="col-2">
                            <KeyboardArrowRightOutlinedIcon className="nav-arrow"></KeyboardArrowRightOutlinedIcon>
                        </div>

                    </div>
                    </NavLink>
                    <ul id="menu_item1" className="submenu collapse" data-bs-parent="#nav_accordion">
                        <li><NavLink className="nav-link" to="#">Submenu item 4 </NavLink></li>
                        <li><NavLink className="nav-link" to="#">Submenu item 5 </NavLink></li>
                        <li><NavLink className="nav-link" to="#">Submenu item 6 </NavLink></li>
                        <li><NavLink className="nav-link" to="#">Submenu item 6 </NavLink></li>
                    </ul>
                </li>

            </ul>
        </nav>
    );
};

export default Sidebar;