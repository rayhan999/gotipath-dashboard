import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './StateCard.css';

const StateCard = () => {
    return (
        <div className=" d-flex  mt-2 infoCardSection">
            <div className="col-md-7 pt-3 pb-3 d-flex flex-column justify-content-between">
                <div>
                    <h2 className="infoTotal m-0">124</h2>
                    <span className="m-0">orders</span>
                </div>
                <div className="d-flex align-items-center statCard-text">
                    <div className="text-success">
                        <FontAwesomeIcon icon={faArrowUp} />&nbsp;
                        <span className="percentage">25%</span>&nbsp;&nbsp;
                    </div>
                    <span>since last week</span>
                </div>
            </div>
            <div className="col-md-5 pt-4 pb-4 mr-2 ">
                <div className="d-flex justify-content-center align-items-end network-bar">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
};

export default StateCard;