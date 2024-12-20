import React from 'react';
import { useTranslation } from 'react-i18next'; // Імпортуємо хук useTranslation
import './LocationBlock.css'; // Імпорт вашого CSS-файлу для стилів

const LocationBlock = () => {
    const { t } = useTranslation(); // Використовуємо хук для доступу до функції t

    return (
        <div className="container mt-5">
            <div className="row">
                {/* Текстовий блок */}
                <div className="col-md-6">
                    <h2>{t('locationHeader')}</h2>
                    <p>{t('locationDescription')}</p>
                    <p dangerouslySetInnerHTML={{ __html: t('locationAddress') }}></p>
                    <p>{t('locationHours')}</p>
                </div>
                {/* Карта Google */}
                <div className="col-md-6">
                    <h2>{t('mapHeader')}</h2>
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2551.088735388196!2d28.66600221296689!3d50.2529269714365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472c649a01bd735f%3A0x2820adc4c24022a0!2z0YPQuy4g0JHQvtC70YzRiNCw0Y8g0JHQtdGA0LTQuNGH0LXQstGB0LrQsNGPLCAyNSwg0JbQuNGC0L7QvNC40YAsINCW0LjRgtC-0LzQuNGA0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDEwMDAx!5e0!3m2!1sru!2sua!4v1719378172509!5m2!1sru!2sua"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Google Map"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LocationBlock;
