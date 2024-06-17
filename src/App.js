import React, { useRef } from 'react';
import Header from './components/Header';
import Slider from './components/Slider';
import Footer from './components/Footer';
import Posts from "./components/Posts";
import AppointmentForm from "./components/AppointmentForm";
import LocationBlock from "./components/LocationBlock";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
    const appointmentRef = useRef(null);

    const scrollToAppointment = () => {
        if (appointmentRef.current) {
            appointmentRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="App">
            <Header scrollToAppointment={scrollToAppointment} />
            <div className="section-margin"></div>
            <Slider />
            <div className="section-margin"></div>
            <Posts />
            <div className="section-margin"></div>
            <div ref={appointmentRef} id="appointment-form">
                <AppointmentForm />
            </div>
            <div className="section-margin"></div>
            <LocationBlock />
            <div className="section-margin"></div>
            <Footer />
        </div>
    );
};

export default App;
