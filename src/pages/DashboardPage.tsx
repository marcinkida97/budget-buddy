import '../App.css';
import Logo from "../components/Logo/Logo";
import Navigation from "../components/Navigation/Navigation";
import Stack from 'react-bootstrap/Stack';

function DashboardPage() {
  return (
      <>
          <Stack direction="horizontal" gap={3} className="d-flex justify-content-between">
              <Logo/>
              <Navigation/>
          </Stack>
      </>
  );
}

export default DashboardPage;
