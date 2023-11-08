import '../../../App.css';
import React from "react";
import Stack from "react-bootstrap/Stack";
import {Col} from "react-bootstrap";
import Image from 'react-bootstrap/Image';

const Logo = () => {
    return (
        <Stack direction="horizontal" gap={3}>
            <Image className="p-2" src={require('./piggy-bank.png')} height={100} width={100}/>
                <Col>
                    <h1 className="justify-content-left defaultColor">Budget Buddy</h1>
                    <h2 className="justify-content-left defaultColor">Your Financial Friend</h2>
                </Col>
        </Stack>
    );
}

export default Logo;
