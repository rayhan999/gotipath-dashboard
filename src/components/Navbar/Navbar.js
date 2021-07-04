import {
    faEnvelope, faSearch
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SettingsIcon from '@material-ui/icons/Settings';
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ setShowSidebar, show }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light shadow sticky-top">
            <div className="container-fluid">
                <div className="nav-header d-flex justify-content-between align-items-center">
                    <div className="col-2">
                        <button
                            onClick={() => setShowSidebar(!show)}
                            id="sidebarCollapse"
                            className="navbar-btn"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                    <div className="col-10 d-flex">
                        <h1 className="header-image">A</h1>
                        <Link className="navbar-brand" to="/">Admin</Link>
                    </div>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex search-form">
                        <input className="form-control search-input me-2" type="search" placeholder="Search.." aria-label="Search" />
                        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                        <FontAwesomeIcon icon={faSearch} className="search-icon"></FontAwesomeIcon>
                    </form>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            {/* <FontAwesomeIcon icon={faEnvelope} className="nav-link-icon"></FontAwesomeIcon> */}
                            <MailOutlineIcon className="nav-link-icon"></MailOutlineIcon>
                        </li>
                        <li className="nav-item">
                            {/* <FontAwesomeIcon icon={faBell} className="nav-link-icon"></FontAwesomeIcon> */}
                            <NotificationsNoneIcon className="nav-link-icon"></NotificationsNoneIcon>
                        </li>
                        <li className="nav-item">
                            {/* <FontAwesomeIcon icon={faCog} className="nav-link-icon"></FontAwesomeIcon> */}
                            <SettingsIcon className="nav-link-icon"></SettingsIcon>
                        </li>
                        <li className="nav-item">
                            {/* <FontAwesomeIcon icon={faQuestionCircle} className="nav-link-icon"></FontAwesomeIcon> */}
                            <HelpOutlineIcon className="nav-link-icon"></HelpOutlineIcon>
                        </li>
                        <li className="nav-item">
                            <FontAwesomeIcon icon={faEnvelope} className="nav-link-icon"></FontAwesomeIcon>
                        </li>
                        <li className="nav-item">
                            <FontAwesomeIcon icon={faEnvelope} className="nav-link-icon"></FontAwesomeIcon>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </NavLink>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><NavLink className="dropdown-item" to="#">Action</NavLink></li>
                                <li><NavLink className="dropdown-item" to="#">Another action</NavLink></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><NavLink className="dropdown-item" to="#">Something else here</NavLink></li>
                            </ul>
                        </li> */}

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;