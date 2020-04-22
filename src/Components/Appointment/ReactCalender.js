import React, {useContext, useState} from "react";
import Calendar  from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calender.css'

const ReactCalender = () => {
  const [date, setDate] = useState(new Date())
  const onChange = date => setDate(date)

  return (
        <div className="my-calender">
            <Calendar onChange={onChange} value={date}/>
            {console.log(date.toLocaleDateString())}
            <b>
            {date.toLocaleDateString()}
            </b>
        </div>
  );
};

export default ReactCalender;
