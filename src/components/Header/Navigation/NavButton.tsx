import Button from 'react-bootstrap/Button';

type navButtonProps = {
    buttonName: string;
}

const NavButton = ({buttonName}: navButtonProps) => {
    return (
        <Button>{buttonName}</Button>
    );
}

export default NavButton;