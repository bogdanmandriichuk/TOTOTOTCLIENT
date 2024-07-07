// src/App.jsx
import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Slider from './components/Slider';
import Footer from './components/Footer';
import AppointmentForm from "./components/AppointmentForm";
import LocationBlock from "./components/LocationBlock";
import FontPickerComponent from "./components/FontPickerComponent";
import Posts from "./components/Posts"; // Імпортуємо компонент Posts

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
        <Router>
            <div className="App">
                <Header scrollToAppointment={scrollToAppointment} />
                <div className="section-margin"></div>
                <Routes>
                    <Route path="/" element={
                        <>
                            <Slider />
                            <div className="section-margin"></div>
                            <div ref={appointmentRef} id="appointment-form">
                                <AppointmentForm />
                            </div>
                            <FontPickerComponent />
                            <div className="section-margin"></div>
                            <LocationBlock />
                            <div className="section-margin"></div>
                        </>
                    } />
                    <Route path="/posts" element={<Posts />} /> {/* Додаємо маршрут для сторінки "Пости" */}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
