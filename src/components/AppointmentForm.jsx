import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { FaTelegramPlane, FaInstagram } from 'react-icons/fa'; // Import Telegram and Instagram icons
import './AnimatedButton.css';
import './AppointmentForm.css';

const AppointmentForm = ({ appointmentRef }) => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/appointment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, phone })
            });

            if (response.ok) {
                setMessage('Ви успішно записалися на сеанс. Ми скоро зв\'яжемось з вами.');
                setName('');
                setPhone('');
            } else {
                setMessage('Сталася помилка. Будь ласка, спробуйте ще раз.');
            }
        } catch (error) {
            setMessage('Сталася помилка. Будь ласка, спробуйте ще раз.');
        }
    };

    return (
        <div className="appointment-container" ref={appointmentRef}>
            <div className="header-text">
                <h1>Записатися на наші послуги легко!</h1>
                <p>Залиште свої дані, і ми зв'яжемось з вами для підтвердження запису.</p>
            </div>
            <Button variant="primary" onClick={handleShow} className="animated-button1">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Записатись на сеанс
            </Button>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Запис на сеанс</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formName">
                            <Form.Label>Ім'я</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Введіть ваше ім'я"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formPhone">
                            <Form.Label>Номер телефону</Form.Label>
                            <Form.Control
                                type="tel"
                                placeholder="Введіть ваш номер телефону"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="mt-3">
                            Відправити
                        </Button>
                    </Form>
                    {message && <div className="mt-3 text-center">{message}</div>}
                    <hr />
                    <div className="contact-buttons text-center mt-4">
                        <p>Або напишіть нам в Telegram чи Instagram</p>
                        <Button variant="info" href="https://t.me/MariTattoo17" target="_blank" className="contact-button">
                            <FaTelegramPlane style={{ marginRight: '8px' }} />
                            Написати в Telegram
                        </Button>
                        <Button variant="danger" href="https://www.instagram.com/palaeva_tattoo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="contact-button">
                            <FaInstagram style={{ marginRight: '8px' }} />
                            Написати в Instagram
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default AppointmentForm;
