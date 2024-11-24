import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next'; // Підключаємо i18next

const ContactButton = () => {
    const { t } = useTranslation(); // Використовуємо i18next для перекладів
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                {t('contactButton')} {/* Переклад кнопки */}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{t('contactModalTitle')}</Modal.Title> {/* Переклад заголовку модального вікна */}
                </Modal.Header>
                <Modal.Body>
                    <p>{t('contactMethod')}</p> {/* Переклад опису */}
                    <Button variant="outline-primary" href="https://t.me/MariTattoo17" target="_blank" className="m-2">
                        {t('contactTelegram')} {/* Переклад кнопки Telegram */}
                    </Button>
                    <Button variant="outline-danger" href="https://www.instagram.com/palaeva_tattoo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="m-2">
                        {t('contactInstagram')} {/* Переклад кнопки Instagram */}
                    </Button>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        {t('closeButton')} {/* Переклад кнопки закриття */}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ContactButton;
