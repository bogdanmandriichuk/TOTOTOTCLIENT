import React from 'react';
import './LocationBlock.css'; // Імпорт вашого CSS-файлу для стилів

const LocationBlock = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                {/* Текстовий блок */}
                <div className="col-md-6">
                    <h2>Наше Місцезнаходження</h2>
                    <p>Ви можете знайти нас за адресою:</p>
                    <p>вул. Прикладна, 123, <br />
                        Місто, Країна.</p>
                    <p>Ми відкриті з понеділка по п'ятницю з 9:00 до 18:00. Ласкаво просимо!</p>
                </div>
                {/* Карта Google */}
                <div className="col-md-6">
                    <h2>Карта</h2>
                    <div className="map-container">
                        <iframe
                            className="rounded-map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.5936495450515!2d-122.40641758443028!3d37.78583477975673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b4a634f%3A0xa9b3fbb5a1f1bb8e!2sGoogle!5e0!3m2!1sen!2sus!4v1615866680952!5m2!1sen!2sus"
                            allowFullScreen
                            title="Google Map"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LocationBlock;
