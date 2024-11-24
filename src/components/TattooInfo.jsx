// src/components/TattooInfo.jsx
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './TattooInfo.css';

const TattooInfo = () => {
    const { t } = useTranslation();

    return (
        <Container className="tattoo-info mt-5 p-4">
            <Row className="align-items-center">
                <Col md={8}>
                    <h2>{t('tattoo_info.heading')}</h2>
                    <p>{t('tattoo_info.description')}</p>
                    <Button as={Link} to="/tattoo-care" variant="dark">{t('tattoo_info.button')}</Button>
                </Col>
                <Col md={4} className="mt-4"> {/* Додано відступ mt-4 */}
                    <div className="image-placeholder">
                        <img src="https://i.ibb.co/Yd85KJD/dohliad-za-tatu.webp" alt="Tattoo care" className="img-fluid"/>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default TattooInfo;
