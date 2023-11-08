import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Logo from "../components/Logo/Logo";
import Navigation from "../components/Navigation/Navigation";

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
