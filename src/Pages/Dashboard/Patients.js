import React from 'react';
import Sidebar from '../../Components/Dashboard/Sidebar';

const Patients = () => {

    return (
            <div className="container-fluid row " >
                <Sidebar></Sidebar>
                <div className="col-md-10 p-4 pr-5" style={{position:"absolute", right:0,backgroundColor: "#F4FDFB"}}>
                    <h5 className="mb-5">Patients</h5>
                    
                </div>
            </div>
    );
};

export default Patients;