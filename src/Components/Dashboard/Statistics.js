import React from 'react';
import SingleStatistic from './SingleStatistic';
// import { useContext } from 'react';
// import { DataContext } from '../../App';

const Statistics = () => {
    
    return (
        <div className="row my-5">
            <SingleStatistic classToAdd="bg-danger" data={{title: "Pending Appointments" , count:[]}}/>
            <SingleStatistic classToAdd="bg-info" data={{title: "Today’s Appointments" , count:[]}}/>
            <SingleStatistic classToAdd="bg-success" data={{title: "Total Appointments" , count:[]}}/>
            <SingleStatistic classToAdd="bg-warning" data={{title: "Total Patients" , count:[]}}/>
        </div>
    );
};

export default Statistics;