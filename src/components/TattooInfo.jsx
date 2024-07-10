// src/components/TattooInfo.jsx
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './TattooInfo.css';

const TattooInfo = () => {
    return (
        <Container className="tattoo-info mt-5 p-4">
            <Row className="align-items-center">
                <Col md={8}>
                    <h2>Для тих, хто вже зробив у нас татуювання</h2>
                    <p>Важливо ознайомитися з інформацією про догляд за татуюванням.</p>
                    <Button as={Link} to="/tattoo-care" variant="dark">Догляд за тату</Button>
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
