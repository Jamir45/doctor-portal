import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import Preloader from '../Preloader/Preloader';

const PatientsDataTable = () => {
    const [data, setData] = useState([]);
    useEffect( () => {
        fetch('https://mrdoctor-portal.herokuapp.com/patientinfo')
        .then(res => res.json())
        .then(datas => {
            setData(datas)
        })
    }, []);
    let srNo = 1;
    return (
        <div className="bg-white rounded shadow-sm p-3">
            <div className="py-3 d-flex align-items-center justify-content-between">
                <h6 className="text-primary">Patient Information</h6>
                <div className="selector">
                    <FontAwesomeIcon className="icon"icon={faCalendarAlt}/> 
                    <select className="p-1 rounded" name="" id="">
                        <option value=""> Weak</option>
                    </select>
                </div>
            </div>
            <table className="table table-borderless">
                <thead>
                    <tr>
                    <th className="text-secondary text-left" scope="col">Sr No</th>
                    <th className="text-secondary" scope="col">Name</th>
                    <th className="text-secondary" scope="col">Gender</th>
                    <th className="text-secondary" scope="col">Age</th>
                    <th className="text-secondary" scope="col">Weight</th>
                    <th className="text-secondary" scope="col">Phone</th>
                    <th className="text-secondary" scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    data.map(patient => 
                            
                        <tr>
                            <td>{srNo++}</td>
                            <td>{patient.name}</td>
                            <td>{patient.gender}</td>
                            <td>{patient.age}</td>
                            <td>{patient.weight}KG</td>
                            <td>{patient.phone}</td>
                            <td>{patient.email}</td>
                        </tr>
                        )
                    }
                
                    
                </tbody>
            </table>
            {
                data.preLoaderVisibility ??
                <Preloader></Preloader>
            } 
        </div>
        
    );
};

export default PatientsDataTable;