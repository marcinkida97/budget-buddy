import '../../../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Nav, Navbar} from "react-bootstrap";
import React from "react";
import Container from 'react-bootstrap/Container';

const Navigation = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav className="me-auto">
                        <Nav.Item>
                            <Nav.Link href={"/"}>Dashboard</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href={"/table"}>Table</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href={"/logout"}>Logout</Nav.Link>
                        </Nav.Item>
                    </Nav>
            </Container>
        </Navbar>
    );
}

export default Navigation;
