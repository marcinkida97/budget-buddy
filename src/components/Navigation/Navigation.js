import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Nav, Navbar} from "react-bootstrap";
import React from "react";


function Navigation() {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav className="me-auto">
                        <Nav.Link href="#dashboard">Dashboard</Nav.Link>
                        <Nav.Link href="#table">Table</Nav.Link>
                        <Nav.Link href="#logout">Log Out</Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
    );
}

export default Navigation;
