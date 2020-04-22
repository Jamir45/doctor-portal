import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const AppointmentDataTable = (props) => {
    // let {name, phone, email, age, time, weight}= props.patient;
    console.log(props.patient);
    let srNo = 1;
    return (
        <div>
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
                        <tr>
                        <td>{srNo++}</td>
                        <td>10-4-2020</td>
                        <td>{}</td>
                        <td>{}</td>
                        <td>{}</td>
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
                        }
                    
                    </tbody>
                    </table>
                </div>
    );
};

export default AppointmentDataTable;