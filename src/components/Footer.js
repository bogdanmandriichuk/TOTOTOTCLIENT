import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation(); // Use translation hook

    return (
        <footer className="footer mt-5">
            <div className="container">
                <div className="row">
                    {/* Left part of the footer */}
                    <div className="col-md-6 text-left">
                        <h5>{t('footer.title')}</h5>
                        <p>{t('footer.name')}</p>
                        <p>{t('footer.phone')}</p>
                    </div>
                    {/* Right part of the footer */}
                    <div className="col-md-6 text-right">
                        <h5>{t('footer.socialTitle')}</h5>
                        <a href="https://t.me/MariTattoo17" target="_blank" rel="noopener noreferrer" className="social-link">
                            <FontAwesomeIcon icon={faTelegram} /> {t('footer.telegram')}
                        </a>
                        <a href="https://www.instagram.com/palaeva_tattoo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="social-link ml-4">
                            <FontAwesomeIcon icon={faInstagram} /> {t('footer.instagram')}
                        </a>
                        <a href="https://www.tiktok.com/@mari_tattoooo" target="_blank" rel="noopener noreferrer" className="social-link ml-4">
                            <FontAwesomeIcon icon={faTiktok} /> {t('footer.tiktok')}
                        </a>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col text-center">
                        <p className="footer-rights">{t('footer.rights')}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
