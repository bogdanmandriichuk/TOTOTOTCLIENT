import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { FaTelegramPlane, FaInstagram } from 'react-icons/fa'; // Import Telegram and Instagram icons
import { useTranslation } from 'react-i18next'; // Підключаємо i18next
import './AnimatedButton.css';
import './AppointmentForm.css';

const AppointmentForm = ({ appointmentRef }) => {
    const { t } = useTranslation(); // Використовуємо i18next для перекладів
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://46.219.5.135:3001/appointment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, phone })
            });

            if (response.ok) {
                setMessage(t('appointmentSuccessMessage')); // Переклад повідомлення успіху
                setName('');
                setPhone('');
            } else {
                setMessage(t('appointmentErrorMessage')); // Переклад повідомлення про помилку
            }
        } catch (error) {
            setMessage(t('appointmentErrorMessage')); // Переклад повідомлення про помилку
        }
    };

    return (
        <div className="appointment-container" ref={appointmentRef}>
            <div className="header-text">
                <h1>{t('appointmentHeader')}</h1>
                <p>{t('appointmentDescription')}</p>
            </div>
            <Button variant="primary" onClick={handleShow} className="animated-button1">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {t('appointmentButtonText')}
            </Button>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{t('appointmentModalTitle')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formName">
                            <Form.Label>{t('appointmentNameLabel')}</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={t('appointmentNameLabel')}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formPhone">
                            <Form.Label>{t('appointmentPhoneLabel')}</Form.Label>
                            <Form.Control
                                type="tel"
                                placeholder={t('appointmentPhoneLabel')}
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="mt-3">
                            {t('appointmentSubmitButton')}
                        </Button>
                    </Form>
                    {message && <div className="mt-3 text-center">{message}</div>}
                    <hr />
                    <div className="contact-buttons text-center mt-4">
                        <p>{t('appointmentContactMessage')}</p>
                        <Button variant="info" href="https://t.me/MariTattoo17" target="_blank" className="contact-button">
                            <FaTelegramPlane style={{ marginRight: '8px' }} />
                            {t('appointmentTelegramButton')}
                        </Button>
                        <Button variant="danger" href="https://www.instagram.com/palaeva_tattoo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="contact-button">
                            <FaInstagram style={{ marginRight: '8px' }} />
                            {t('appointmentInstagramButton')}
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default AppointmentForm;
