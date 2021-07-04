import React from 'react';
import DeviceRevenue from './DeviceRevenue/DeviceRevenue';
import RevenueSource from './RevenueSource/RevenueSource';
import SalesLocation from './SalesLocation/SalesLocation';
import StateCard from './StateCard/StateCard';
import TopSell from './TopSell/TopSell';
import TotalRevenue from './TotalRevenue/TotalRevenue';

const Content = () => {
    return (
        <div className="mt-5">
            <div>
                <h4 className="ml-3">Ecommerce Dashboard</h4>
            </div>
            <div>
                <section className="row d-flex">
                    <div className=" col-md-3 ">
                        <StateCard></StateCard>
                    </div><div className=" col-md-3 ">
                        <StateCard></StateCard>
                    </div><div className=" col-md-3 ">
                        <StateCard></StateCard>
                    </div><div className=" col-md-3 ">
                        <StateCard></StateCard>
                    </div>
                </section>
                <section className="row d-flex" >
                    <div className="col-md-6 ">
                        <TotalRevenue></TotalRevenue>
                    </div>
                    <div className="col-md-6">
                        <RevenueSource></RevenueSource>
                    </div>
                </section>
                <section className="row d-flex" >
                    <div className="col-md-4 pb-5">
                        <TopSell></TopSell>
                    </div>
                    <div className="col-md-4">
                        <SalesLocation></SalesLocation>
                    </div>
                    <div className="col-md-4">
                        <DeviceRevenue></DeviceRevenue>
                    </div>
                </section>
            </div>


        </div>
    );
};

export default Content;