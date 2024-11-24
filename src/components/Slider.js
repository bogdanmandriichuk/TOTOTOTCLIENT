import React, { useState, useEffect } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import './Slider.css'; // Підключення CSS файлу
import { useTranslation } from 'react-i18next'; // Імпорт useTranslation для перекладів

const Slider = () => {
    const { t } = useTranslation(); // Використання useTranslation для перекладів
    const [index, setIndex] = useState(0);

    // Функція для автоматичного перемикання слайдів
    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % 3); // Перемикання до наступного слайду кожні 3 секунди
        }, 3000);

        // Очищення інтервалу при розмонтуванні компонента
        return () => clearInterval(intervalId);
    }, []);

    // Функція для прокручування до форми запису на сеанс
    const scrollToAppointmentForm = () => {
        const formElement = document.getElementById('appointment-form');
        if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Carousel
            activeIndex={index}
            controls={false} // Приховання кнопок контролю слайдера
            indicators={false} // Приховання індикаторів
            interval={null} // Вимкнення внутрішнього автоперемикання, використовуємо `useEffect`
        >
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/PYmqVSm/i-Stock-1320388570.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>{t('slider.firstSlideTitle')}</h3>
                    <p>{t('slider.firstSlideDescription')}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/FHyhCVd/Ocbivd.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>{t('slider.secondSlideTitle')}</h3>
                    <p>{t('slider.secondSlideDescription')}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/ThJyG1Z/slider3.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>{t('slider.thirdSlideTitle')}</h3>
                    <p>{t('slider.thirdSlideDescription')}</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;
