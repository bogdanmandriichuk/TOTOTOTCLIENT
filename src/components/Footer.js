import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'; // Додали іконку для TikTok
import './Footer.css'; // Імпортуємо CSS-файл для стилів

const Footer = () => {
    return (
        <footer className="footer mt-5">
            <div className="container">
                <div className="row">
                    {/* Ліва частина футера */}
                    <div className="col-md-6 text-left">
                        <h5>Майстер Тату</h5>
                        <p>Ім'я: Марина Палаєва</p>
                        <p>Телефон: +38 (067) 415-52-95</p>
                    </div>
                    {/* Права частина футера */}
                    <div className="col-md-6 text-right">
                        <h5>Контакти в соцмережах</h5>
                        <a href="https://t.me/MariTattoo17" target="_blank" rel="noopener noreferrer" className="social-link">
                            <FontAwesomeIcon icon={faTelegram} /> Telegram
                        </a>
                        <a href="https://www.instagram.com/palaeva_tattoo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="social-link ml-4">
                            <FontAwesomeIcon icon={faInstagram} /> Instagram
                        </a>
                        <a href="https://www.tiktok.com/@mari_tattoooo" target="_blank" rel="noopener noreferrer" className="social-link ml-4"> {/* Замініть на ваш TikTok handle */}
                            <FontAwesomeIcon icon={faTiktok} /> TikTok
                        </a>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col text-center">
                        <p className="footer-rights">© 2024 Всі права захищені | Розроблено: [Богдан Мандрійчук]</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
