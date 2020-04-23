import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faPlusCircle, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import Preloader from '../Preloader/Preloader';
// import img from "../../images/64x64.gif"

const AppointmentDataTable = () => {
    const [data, setData] = useState([]);
    useEffect( () => {
        fetch('https://mrdoctor-portal.herokuapp.com/patientinfo')
        .then(res => res.json())
        .then(datas => {
            setData(datas)
        })
    }, []);
    //  let {name, phone, email, age, time, weight}= props.patient;
    
    let srNo = 1;
    return (
        <div className="bg-white rounded shadow-sm p-3">
            <div className="py-3 d-flex align-items-center justify-content-between">
                <h6 className="text-primary">Recent Appointments</h6>
                <div className="selector">
                    <FontAwesomeIcon className="icon"icon={faCalendarAlt}/> 
                    <select className="p-1 rounded" name="" id="">
                        <option value=""> Weak</option>
                    </select>
                </div>
            </div>
            <table className="table table-borderless">
            <thead>
                <tr className="text-center">
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Date</th>
                <th className="text-secondary" scope="col">Time</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Contact</th>
                <th className="text-secondary" scope="col">Prescription</th>
                <th className="text-secondary" scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                data.map(td => 
                <tr>
                <td>{srNo++}</td>
                <td>10-4-2020</td>
                <td>{td.time}</td>
                <td>{td.name}</td>
                <td>{td.phone}</td>
                <td className="text-center">
                    {
                        
                        <button className="btn btn-primary">View</button>
                    }
                        </td>
                        <td className="text-center">
                            
                            <select className="btn btn-success">
                                <option className="bg-white text-secondary">Pending</option>
                                <option className="bg-white text-secondary">Approved</option>
                                <option className="bg-white text-secondary">Rejected</option>
                            </select>

                        
                            <button className="btn ml-1 btn-warning text-white"> <FontAwesomeIcon icon={faPencilAlt}/> </button>
                        </td>
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

export default AppointmentDataTable;