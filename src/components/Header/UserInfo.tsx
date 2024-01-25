import Stack from "react-bootstrap/Stack";
import {Col} from "react-bootstrap";
import {useContext} from "react";
import {UserContext} from "../../context/UserContext";

const UserInfo = () => {
    const {firstname, lastname} = useContext(UserContext)

    return (
        <Stack direction="horizontal">
            <Col className={"p-2"}>
                <h2 className="text-end">{firstname}</h2>
                <h2 className="text-end">{lastname}</h2>
            </Col>
        </Stack>
    );
}

export default UserInfo;