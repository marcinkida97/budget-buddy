import Button from 'react-bootstrap/Button';

type AddButtonProps = {
    onClick?: () => void,
    buttonName: string;
}

const AddButton = ({onClick, buttonName}: AddButtonProps) => {
  return (
      <Button
          className={'default_margin_separation'}
          variant='primary'
          onClick={onClick}
      >
          {buttonName}
      </Button>
  );
};

export default AddButton;