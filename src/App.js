import React, { createContext } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home';
import Appointment from './Pages/Appointment';
import Login from './Pages/Login';
import Booking from './Components/Booking/Booking';
import Dashboard from './Pages/Dashboard/Dashboard';
import Patients from './Pages/Dashboard/Patients';
import DashboardAppointment from './Pages/Dashboard/DashboardAppointment';
import NotFound from './Pages/Notfound';
// export const DataContext = createContext();
// export const CalenderContext = createContext()


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>
          <Route path="/doctor">
            <Login></Login>
          </Route>
          <Route path="/booking">
            <Booking></Booking>
          </Route>
          <Route  path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route  path="/patients">
            <Patients></Patients>
          </Route>
          <Route  path="/dashboardAppointment">
            <DashboardAppointment></DashboardAppointment>
          </Route>
          <Route path="*">
              <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
