import React, { useState } from 'react';
import { Carousel, Button } from 'react-bootstrap';

const Slider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/800x400"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Перший слайд</h3>
                    <p>Опис першого слайда.</p>
                    <Button variant="primary" onClick={() => alert('Ви натиснули кнопку першого слайда!')}>Натисніть на мене</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/800x400"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Другий слайд</h3>
                    <p>Опис другого слайда.</p>
                    <Button variant="primary" onClick={() => alert('Ви натиснули кнопку другого слайда!')}>Натисніть на мене</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/800x400"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Третій слайд</h3>
                    <p>Опис третього слайда.</p>
                    <Button variant="primary" onClick={() => alert('Ви натиснули кнопку третього слайда!')}>Натисніть на мене</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;
