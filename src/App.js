import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Підключаємо i18next
import Header from './components/Header';
import Slider from './components/Slider';
import Footer from './components/Footer';
import AppointmentForm from "./components/AppointmentForm";
import LocationBlock from "./components/LocationBlock";
import FontPickerComponent from "./components/FontPickerComponent";
import Posts from "./components/Posts";
import TattooCare from "./components/TattooCare"; // Імпортуємо компонент TattooCare
import TattooInfo from "./components/TattooInfo";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './i18n';
import FullScreenVideo from "./components/FullScreenVideo"; // Імпортуємо i18next

const App = () => {
    const { t, i18n } = useTranslation(); // Використовуємо i18next для перекладів
    const appointmentRef = useRef(null);

    const scrollToAppointment = () => {
        if (appointmentRef.current) {
            appointmentRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang); // Змінюємо мову
    };

    return (
        <Router>
            <div className="App">
                <Header scrollToAppointment={scrollToAppointment} />
                <div className="language-switcher">
                    <button onClick={() => changeLanguage('en')}>English</button>
                    <button onClick={() => changeLanguage('uk')}>Українська</button>
                    <button onClick={() => changeLanguage('pl')}>Polski</button>
                </div>
                <div className="section-margin"></div>
                <Routes>
                    <Route path="/" element={
                        <>
                            <Slider />

                            <div className="section-margin"></div>
                            <FullScreenVideo/>
                            <div ref={appointmentRef} id="appointment-form">
                                <AppointmentForm />

                            </div>
                            <FontPickerComponent />
                            <div className="section-margin"></div>
                            <TattooInfo />

                            <div className="section-margin"></div>
                            <LocationBlock />

                            <div className="section-margin"></div>
                        </>
                    } />
                    <Route path="/posts" element={<Posts />} />
                    <Route path="/tattoo-care" element={<TattooCare />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
