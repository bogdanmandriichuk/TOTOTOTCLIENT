import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ImageTextSection = () => {
    return (
        <section className="image-text-section">
            <Container>
                <Row>
                    <Col md={6}>
                        <div>
                            <h2>Заголовок</h2>
                            <p>Тут ваш текст або опис, який ви хочете розмістити ліворуч.</p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div>
                            <img
                                src="https://via.placeholder.com/400x300"
                                alt="Зображення"
                                className="img-fluid"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ImageTextSection;
