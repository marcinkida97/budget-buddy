import Stack from "react-bootstrap/Stack";
import {Col} from "react-bootstrap";

const UserInfo = () => {
    return (
        <Stack direction="horizontal">
            <Col className={"p-2"}>
                <h2 className="text-end">{localStorage.getItem('firstname')}</h2>
                <h2 className="text-end">{localStorage.getItem('lastname')}</h2>
            </Col>
        </Stack>
    );
}

export default UserInfo;