import React from 'react';
import { Link } from 'react-router-dom';

const AppointmentCard = (props) => {
    const {title, time, available} = props.data;
    return (
        <div className="col-md-4 mb-5">
            <div className="card appointment-card p-3">
                <div className="card-body text-center">
                    <h5 className="card-title text-primary">{title}</h5>
                    <h6>{time}</h6>
                    <p>{available} SPACES AVAILABLE</p>
                    <Link to="/booking">
                        <button className="btn btn-primary text-uppercase">Book appointment</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AppointmentCard;