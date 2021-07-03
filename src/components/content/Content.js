import React from 'react';
import StateCard from './StateCard/StateCard';

const Content = () => {
    return (
        <div className="mt-5">
            <div>
                <h4 className="ml-3">Ecommerce Dashboard</h4>
            </div>
            <div>
            <section className="d-flex">
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
            <section>
                <div className="col-md-6">

                </div>
                <div className="col-md-6">
                    
                </div>
            </section>
            </div>


        </div>
    );
};

export default Content;