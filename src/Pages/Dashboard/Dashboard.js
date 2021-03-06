import React , {useEffect,useState} from 'react';
import Sidebar from '../../Components/Dashboard/Sidebar';
import Statistics from '../../Components/Dashboard/Statistics';
import AppointmentDataTable from '../../Components/DataTables/AppointmentDataTable';


const Dashboard = () => {
    

    return (
            <div className="container-fluid row " >
                <Sidebar></Sidebar>
                <div className="col-md-10 p-4 pr-5" style={{position:"absolute", right:0,backgroundColor: "#F4FDFB"}}>
                    <h5>Dashboard</h5>
                    <Statistics></Statistics>
                     <AppointmentDataTable></AppointmentDataTable> 
                    
                </div>
                <div>This is testing</div>
            </div>
    );
};

export default Dashboard;