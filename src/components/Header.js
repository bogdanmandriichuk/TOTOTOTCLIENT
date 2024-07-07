// src/components/Header.jsx
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ scrollToAppointment }) => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand as={Link} to="/" className="navbar-brand">Palaeva Tattoo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/">Головна</Nav.Link>
                        <Nav.Link as={Link} to="/posts">Портфоліо</Nav.Link> {/* Додаємо посилання на сторінку "Пости" */}
                        <Nav.Link onClick={scrollToAppointment}>Записатись на сеанс</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
