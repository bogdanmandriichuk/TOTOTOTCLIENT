import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Імпортуємо CSS-файл для стилів

const Footer = () => {
    return (
        <footer className="footer mt-5">
            <div className="container">
                <div className="row">
                    {/* Ліва частина футера */}
                    <div className="col-md-6 text-left">
                        <h5>Майстер Тату</h5>
                        <p>Ім'я: Олексій Іванов</p>
                        <p>Телефон: +38 (012) 345-67-89</p>
                    </div>
                    {/* Права частина футера */}
                    <div className="col-md-6 text-right">
                        <h5>Контакти в соцмережах</h5>
                        <a href="https://t.me/yourtelegram" target="_blank" rel="noopener noreferrer" className="social-link">
                            <FontAwesomeIcon icon={faTelegram} /> Telegram
                        </a>
                        <a href="https://instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer" className="social-link ml-4">
                            <FontAwesomeIcon icon={faInstagram} /> Instagram
                        </a>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col text-center">
                        <p className="footer-rights">© 2024 Всі права захищені | Розроблено: [Ваше Ім'я]</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
