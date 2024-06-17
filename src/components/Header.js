import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Header.css';

const Header = ({ scrollToAppointment }) => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="#home">Your Brand</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
                    <Nav className="ml-auto">
                        <Nav.Link onClick={scrollToAppointment}>Записатись на сеанс</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
