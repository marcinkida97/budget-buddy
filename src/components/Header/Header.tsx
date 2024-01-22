import Stack from "react-bootstrap/Stack";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import {Col} from "react-bootstrap";
import React from "react";

const Header = () => {
    return (
        <>
            <Stack direction="horizontal" gap={3} className="p-2 d-flex bg-body-tertiary defaultColor default_margin_separation">
                <Col>
                    <Logo/>
                    <Navigation/>
                </Col>
            </Stack>
        </>
    );
}

export default Header