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
                    src="https://i.ibb.co/PYmqVSm/i-Stock-1320388570.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Ідеї, що живуть на шкірі</h3>
                    <p>Від концепції до реальності – ми разом створюємо мистецтво.</p>
                    <Button variant="primary" onClick={() => alert('Ви натиснули кнопку другого слайда!')}>Натисніть на мене</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/FHyhCVd/Ocbivd.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Твій стиль, твоє тату</h3>
                    <p>Довірся нашому майстру, який перетворить твої ідеї на унікальні тату.</p>
                    <Button variant="primary" onClick={() => alert('Ви натиснули кнопку першого слайда!')}>Натисніть на мене</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/ThJyG1Z/slider3.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Сміливо покажи свій характер</h3>
                    <p>Наш майстер допоможе тобі виразити себе через тату.</p>
                    <Button variant="primary" onClick={() => alert('Ви натиснули кнопку третього слайда!')}>Натисніть на мене</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;
