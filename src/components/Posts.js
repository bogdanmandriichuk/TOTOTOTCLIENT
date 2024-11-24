import React, { useState, useEffect, useRef } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import ImageGallery from 'react-image-gallery';
import AppointmentForm from './AppointmentForm'; // Імпорт форми
import Header from './Header'; // Імпорт Header для додавання скролу до форми
import 'react-image-gallery/styles/css/image-gallery.css';
import './Posts.css'; // Імпорт вашого CSS для додаткових стилів
import { useTranslation } from 'react-i18next'; // Імпортуємо useTranslation

const Posts = () => {
    const { t } = useTranslation(); // Додаємо useTranslation
    const [posts, setPosts] = useState([]);
    const [visiblePosts, setVisiblePosts] = useState(5); // Стан для управління кількістю видимих постів
    const appointmentRef = useRef(null); // Створюємо ref для форми

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await fetch('http://46.219.5.135:3001/posts');
            const data = await response.json();
            // Перетворимо дані у зручний формат, щоб уникнути проблем з доступом до полів
            const formattedData = data.map(item => ({
                id: item[0],
                photo_paths: item[1],
                caption: item[2]
            }));
            setPosts(formattedData);
        } catch (error) {
            console.error('Помилка при отриманні постів:', error);
        }
    };

    const showMorePosts = () => {
        setVisiblePosts(prevVisiblePosts => prevVisiblePosts + 5); // Збільшуємо кількість видимих постів на 5
    };

    // Функція для скролу до форми запису
    const scrollToAppointment = () => {
        if (appointmentRef.current) {
            appointmentRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* Додаємо Header з функцією скролу до форми */}
            <Header scrollToAppointment={scrollToAppointment} />

            <Container>
                {/* Інформаційний блок зверху */}
                <div className="info-block text-center">
                    <h2>{t('postsInfoBlockTitle')}</h2> {/* Переклад для заголовка */}
                    <Button
                        variant="primary"
                        href="https://www.instagram.com/palaeva_tattoo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3"
                    >
                        {t('visitInstagramButtonText')} {/* Переклад для кнопки */}
                    </Button>

                    {/* Вбудоване відео */}
                   
                </div>

                <h1 className="my-4 text-center">{t('postsTitle')}</h1> {/* Переклад для заголовка постів */}
                {posts.slice(0, visiblePosts).map(post => (
                    <Row key={post.id} className="mb-4 justify-content-center">
                        <Col xs={12} sm={10} md={8} lg={6}>
                            <Card className="h-100">
                                <Card.Body>
                                    <Card.Title className="text-center">{post.caption}</Card.Title>
                                    <p className="text-center">{t('postIdText')}: {post.id}</p> {/* Переклад для ID */}
                                    <ImageGallery
                                        items={(() => {
                                            if (post.photo_paths) {
                                                try {
                                                    const photoPaths = JSON.parse(post.photo_paths);
                                                    return photoPaths.map((photo, index) => ({
                                                        original: `http://46.219.5.135:3001/photos/${photo}`,
                                                        thumbnail: `http://46.219.5.135:3001/photos/${photo}`,
                                                        originalAlt: `${t('photo')} ${index}`, // Переклад для фото
                                                        thumbnailAlt: `${t('thumbnail')} ${index}`, // Переклад для прев'юшки
                                                        key: `${post.id}-${index}` // Додаємо унікальний ключ для кожного фото
                                                    }));
                                                } catch (error) {
                                                    console.error('Помилка парсингу photo_paths:', error);
                                                }
                                            }
                                            return [];
                                        })()}
                                        showThumbnails={true}
                                        showPlayButton={false}
                                        showBullets={true}
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                ))}
                {visiblePosts < posts.length && (
                    <div className="text-center">
                        <Button onClick={showMorePosts}>{t('showMoreButtonText')}</Button> {/* Переклад для кнопки "Показати більше" */}
                    </div>
                )}

                {/* Форма для запису внизу */}
                <div ref={appointmentRef} id="appointment-form" className="mt-5">
                    <AppointmentForm appointmentRef={appointmentRef} />
                </div>
            </Container>
        </>
    );
};

export default Posts;
