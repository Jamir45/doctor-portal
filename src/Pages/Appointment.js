import React from 'react';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import AppointmentSection from '../Components/Appointment/AppointmentSection';
import { useEffect } from 'react';
import AppointmentTable from '../Components/Appointment/AppointmentTable';

const Appointment = () => {

    useEffect(() => {window.scrollTo(0,0)}, [])
    return (
        <>
            <Header/>
            <AppointmentSection/>
            <AppointmentTable></AppointmentTable>
            <Footer/>
        </>

    );
};

export default Appointment;