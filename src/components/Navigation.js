import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Col, Container, Image, Nav, Navbar, NavDropdown, Row, Stack} from "react-bootstrap";
import React from "react";
import Logo from "./Logo";

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
