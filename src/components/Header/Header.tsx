import Stack from "react-bootstrap/Stack";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";

const Header = () => {
    return (
        <>
            <Stack direction="horizontal" gap={3} className="d-flex justify-content-between bg-body-tertiary">
                <Logo/>
                <Navigation/>
            </Stack>
        </>
    );
}

export default Header