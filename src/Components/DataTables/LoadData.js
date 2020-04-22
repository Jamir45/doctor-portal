import React, { useState, useEffect } from 'react';
import AppointmentDataTable from './AppointmentDataTable';

const LoadData = () => {
    const [data, setData] = useState([]);
    useEffect( () => {
        fetch('http://localhost:4000/patientInfo')
        .then(res => res.json())
        .then(datas => {
            setData(datas)
        })
    }, []);
    console.log(data);
    return (
        <div>
            {
            data.map( i => <AppointmentDataTable patient={i} ></AppointmentDataTable>)
            }
        </div>
    );
};

export default LoadData;