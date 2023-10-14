import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import {Stack} from "react-bootstrap";
import DataDisplayFetchApi from "../components/DataDisplayFetchApi";

function DashboardPage() {
  return (
      <>
          <Stack direction="horizontal" gap={3} className="d-flex justify-content-between">
              <Logo className="p-2" />
              <Navigation />
          </Stack>
          <DataDisplayFetchApi/>
      </>
  );
}

export default DashboardPage;
