import React, { useState } from 'react';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Імпорт i18next
import './Header.css';

const Header = ({ scrollToAppointment }) => {
    const [expanded, setExpanded] = useState(false); // Додаємо стан для контролю меню
    const { t, i18n } = useTranslation(); // Використовуємо хук для перекладів

    // Функція для закриття меню після натискання на посилання
    const closeMenu = () => setExpanded(false);

    // Функція для зміни мови
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang); // Змінює мову додатку
    };

    return (
        <Navbar
            bg="dark"
            variant="dark"
            expand="lg"
            fixed="top"
            expanded={expanded} // Прив'язуємо стан до розгортання меню
        >
            <Container>
                <Navbar.Brand as={Link} to="/" className="navbar-brand" onClick={closeMenu}>
                    Palaeva Tattoo
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    onClick={() => setExpanded(expanded ? false : true)} // Керування відкриттям/закриттям меню
                />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/" onClick={closeMenu}>{t('home')}</Nav.Link>
                        <Nav.Link as={Link} to="/posts" onClick={closeMenu}>{t('portfolio')}</Nav.Link>
                        <Nav.Link as={Link} to="/tattoo-care" onClick={closeMenu}>{t('tattooCareInfo')}</Nav.Link>
                        <Nav.Link onClick={() => { closeMenu(); scrollToAppointment(); }}>{t('appointment')}</Nav.Link>
                    </Nav>
                    <Dropdown align="end" className="language-dropdown">
                        <Dropdown.Toggle variant="outline-light" id="language-select">
                            {t('language')}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => changeLanguage('uk')}>Українська</Dropdown.Item>
                            <Dropdown.Item onClick={() => changeLanguage('en')}>English</Dropdown.Item>
                            <Dropdown.Item onClick={() => changeLanguage('pl')}>Polski</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
