import React from 'react';
// import Preloader from '../Preloader/Preloader';
import CartData from '../CartData'
import AppointmentCard from './AppointmentCart';

const AppointmentTable = () => {
    const date = new Date();
    const formatedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
    
    return (
        
        <div className="appointments container py-5 mt-5">
            <h3 className="text-primary text-center my-5">Available Appointments on <span>{formatedDate}</span> </h3>
            <div className="row">
                {
                    CartData.map(SingleAp => <AppointmentCard data={SingleAp}></AppointmentCard>)
                }
            </div>
        </div>
    );
};


export default AppointmentTable;