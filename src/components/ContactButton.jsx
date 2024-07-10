// src/components/ContactButton.jsx
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ContactButton = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Зв'язатися зі мною
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Зв'яжіться зі мною</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Виберіть спосіб зв'язку:</p>
                    <Button variant="outline-primary" href="https://t.me/MariTattoo17" target="_blank" className="m-2">
                        Telegram
                    </Button>
                    <Button variant="outline-danger" href="https://www.instagram.com/palaeva_tattoo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="m-2">
                        Instagram
                    </Button>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Закрити
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ContactButton;
