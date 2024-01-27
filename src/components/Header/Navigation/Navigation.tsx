import '../../../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Nav, Navbar} from "react-bootstrap";
import React from "react";
import Container from 'react-bootstrap/Container';

const Navigation = () => {

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
    }

    return (
        <Navbar expand="lg">
            <Container>
                <Nav className="me-auto flex-row">
                    <Nav.Item className="me-2">
                        <Nav.Link href={"/dashboard"}>Dashboard</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="me-2">
                        <Nav.Link href={"/mybudget"}>My budget</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="me-3">
                        <Nav.Link href={"/"} onClick={handleLogout}>Logout</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Navigation;
