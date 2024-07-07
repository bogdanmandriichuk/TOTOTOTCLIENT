import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './Posts.css'; // Імпорт вашого CSS для додаткових стилів

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [visiblePosts, setVisiblePosts] = useState(5); // Стан для управління кількістю видимих постів

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await fetch('http://localhost:3001/posts');
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error('Помилка при отриманні постів:', error);
        }
    };

    const showMorePosts = () => {
        setVisiblePosts(prevVisiblePosts => prevVisiblePosts + 5); // Збільшуємо кількість видимих постів на 5
    };

    return (
        <Container>
            {/* Інформаційний блок зверху */}
            <div className="info-block text-center">
                <h2>Більше робіт можна переглянути на нашій сторінці в Instagram</h2>
                <Button
                    variant="primary"
                    href="https://www.instagram.com/palaeva_tattoo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" // Замініть на ваш Instagram URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3"
                >
                    Відвідати Instagram
                </Button>
            </div>

            <h1 className="my-4 text-center">Пости</h1>
            {posts.slice(0, visiblePosts).map(post => (
                <Row key={post.id} className="mb-4 justify-content-center">
                    <Col xs={12} sm={10} md={8} lg={6}>
                        <Card className="h-100">
                            <Card.Body>
                                <Card.Title className="text-center">{post.caption}</Card.Title>
                                <p className="text-center">ID: {post.id}</p>
                                <ImageGallery
                                    items={JSON.parse(post.photo_paths).map(photo => ({
                                        original: `http://localhost:3001/photos/${photo}`,
                                        thumbnail: `http://localhost:3001/photos/${photo}`
                                    }))}
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
                    <Button onClick={showMorePosts}>Показати більше</Button>
                </div>
            )}
        </Container>
    );
};

export default Posts;
