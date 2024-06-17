import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './Posts.css'; // Import your custom CSS for additional styles

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [visiblePosts, setVisiblePosts] = useState(5); // State to manage the number of visible posts

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
        setVisiblePosts(prevVisiblePosts => prevVisiblePosts + 5); // Increase the number of visible posts by 5
    };

    return (
        <Container>
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
