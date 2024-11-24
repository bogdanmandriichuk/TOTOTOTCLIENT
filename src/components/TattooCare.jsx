import React, { useRef } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ContactButton from './ContactButton'; // Імпортуємо компонент кнопки зв'язку
import AppointmentForm from './AppointmentForm'; // Імпортуємо компонент форми запису
import Header from './Header';  // Імпортуємо Header
import { useTranslation } from 'react-i18next'; // Імпортуємо useTranslation для перекладів

const TattooCare = () => {
    const { t } = useTranslation(); // Використовуємо useTranslation для перекладів
    const appointmentRef = useRef(null); // Створюємо реф для форми запису

    // Функція для прокрутки до форми запису
    const scrollToAppointment = () => {
        if (appointmentRef.current) {
            appointmentRef.current.scrollIntoView({ behavior: 'smooth' }); // Прокрутка до форми
        }
    };

    return (
        <>
            {/* Передаємо функцію скролінгу в Header */}
            <Header scrollToAppointment={scrollToAppointment} />

            {/* Стилі для чорного фону */}
            <div style={{ backgroundColor: 'black', minHeight: '100vh', paddingTop: '80px' }}>
                <Container>
                    <h1 className="text-center mb-4 mt-5" style={{ color: 'white' }}>{t('tattooCare.title')}</h1>
                    <Row className="justify-content-center">
                        <Col xs={12} sm={10} md={8} lg={6}>
                            <Card style={{ backgroundColor: '#333', color: 'white' }}>
                                <Card.Body>
                                    <Card.Title className="text-center">{t('tattooCare.cardTitle')}</Card.Title>
                                    <Card.Text>
                                        <p>{t('tattooCare.intro')}</p>
                                        <p>{t('tattooCare.careImportance')}</p>

                                        <h5>{t('tattooCare.healingFilmTitle')}</h5>
                                        <ul>
                                            <li>{t('tattooCare.healingFilm1')}</li>
                                            <li>{t('tattooCare.healingFilm2')}</li>
                                            <li>{t('tattooCare.healingFilm3')}</li>
                                            <li>{t('tattooCare.healingFilm4')}</li>
                                            <li>{t('tattooCare.healingFilm5')}</li>
                                        </ul>

                                        <h5>{t('tattooCare.removingFilmTitle')}</h5>
                                        <ul>
                                            <li>{t('tattooCare.removingFilm1')}</li>
                                            <li>{t('tattooCare.removingFilm2')}</li>
                                            <li>{t('tattooCare.removingFilm3')}</li>
                                            <li>{t('tattooCare.removingFilm4')}</li>
                                            <li>{t('tattooCare.removingFilm5')}</li>
                                        </ul>

                                        <h5>{t('tattooCare.rememberTitle')}</h5>
                                        <ul>
                                            <li>{t('tattooCare.remember1')}</li>
                                            <li>{t('tattooCare.remember2')}</li>
                                            <li>{t('tattooCare.remember3')}</li>
                                            <li>{t('tattooCare.remember4')}</li>
                                        </ul>
                                    </Card.Text>
                                    <div className="text-center mt-4">
                                        <ContactButton />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    {/* Форма для запису на сеанс */}
                    <Row className="justify-content-center mt-5">
                        <Col xs={12} sm={10} md={8} lg={6}>
                            <div ref={appointmentRef} id="appointment-form">
                                <AppointmentForm />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default TattooCare;
