import React from 'react';
import { useForm } from 'react-hook-form';
import './Booking.css'

const Booking = () => {

    const  bookingData = ((patientInfo) => {
        fetch("https://mrdoctor-portal.herokuapp.com/patientinfo",{
            method : "POST",
            headers : {
                "Content-type" : "application/json; charset=UTF-8"
            },
            body: JSON.stringify(patientInfo)
        })
        .then(res =>res.json())
        .then(data => {
            console.log("Post done", data);
            document.getElementById('name').value = '';
            document.getElementById('phone').value = '';
            document.getElementById('email').value = '';
            document.getElementById('gender').value = 'Select Gender';
            document.getElementById('time').value = 'Select Your Booking Time';
            document.getElementById('age').value = '';
            document.getElementById('weight').value = '';
            window.location.pathname = "/appointment";
        })
    });

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => { 
        console.log(data);
        bookingData(data)
    }
    const date = new Date();
    const formatedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

    return (
        <div className="container text-center">
            <div className="infoCart">
                <h2 style={{color:"#1cc7c1"}}>Please enter your Information</h2>
                <h6>for Appointment on <span>{formatedDate}</span></h6><br></br>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input id="name" type="text" ref={register({ required: true })} name="name" placeholder="Your Name" className="form-control"/>
                        {errors.name && <span className="text-danger">This field is required</span>}

                    </div>
                    <div className="form-group">
                        <input id="phone" type="text" ref={register({ required: true })} name="phone" placeholder="Phone Number" className="form-control"/>
                        {errors.phone && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input id="email" type="text" ref={register({ required: true })} name="email" placeholder="Email" className="form-control"/>
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">    
                        <select id="time" className="form-control" name="time" ref={register({ required: true })} >
                            <option value="Select Your Time">Select Your Booking Time</option>
                            <option value="8:00 AM - 9:00 AM">8:00 AM - 9:00 AM</option>
                            <option value="10:50 AM - 11:30 AM">10:50 AM - 11:30 AM</option>
                            <option value="5:00 PM - 6:00 PM">5:00 PM - 6:00 PM</option>
                            <option value="7:00 AM - 8:30 AM">7:00 AM - 8:30 AM</option>
                            <option value="8:00 AM - 9:00 AM">8:00 AM - 9:00 AM</option>
                            <option value="8:00 AM - 9:00 AM">8:00 AM - 9:00 AM</option>
                        </select>
                        {errors.gender && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group row">
                        <div className="col-4">    
                            <select id="gender" className="form-control" name="gender" ref={register({ required: true })} >
                                <option value="Select Gender">Select Gender</option>
                                <option  value="Male">Male</option>
                                <option  value="Female">Female</option>
                                <option  value="Not set">Other</option>
                            </select>
                            {errors.gender && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="col-4">
                            <input id="age" ref={register({ required: true })} className="form-control" name="age" placeholder="Your Age" type="number" />
                            {errors.age && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="col-4">
                            <input id="weight" ref={register({ required: true })} className="form-control" name="weight" placeholder="Weight" type="number" />
                            {errors.weight && <span className="text-danger">This field is required</span>}
                        </div>
                    </div>
                    
                    <div className="form-group text-center">
                        <button id="submitBtn" type="submit" className="btn btn-primary">Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Booking;