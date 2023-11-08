import Button from 'react-bootstrap/Button';

type navButtonProps = {
    buttonName: string;
}

const LoginButton = ({buttonName}: navButtonProps) => {
    return (
        <Button variant={"outline-primary"}>{buttonName}</Button>
    );
}

export default LoginButton;