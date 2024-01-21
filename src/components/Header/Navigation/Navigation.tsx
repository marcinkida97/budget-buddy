import '../../../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Nav, Navbar} from "react-bootstrap";
import React from "react";
import Container from 'react-bootstrap/Container';

const Navigation = () => {

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('firstname');
        localStorage.removeItem('lastname');
    }

    return (
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Nav className="me-auto">
                            <Nav.Item>
                                <Nav.Link href={"/dashboard"}>Dashboard</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href={"/mybudget"}>My budget</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href={"/"} onClick={handleLogout}>Logout</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Container>
                </Navbar>
    );
}

export default Navigation;
