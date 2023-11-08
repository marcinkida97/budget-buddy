import './App.css';
import DashboardPage from "./pages/DashboardPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import {Table} from "react-bootstrap";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path={"/"} element={<DashboardPage/>}/>
                <Route path={"/table"} element={<Table/>}/>
            </Routes>
            <DashboardPage/>
        </BrowserRouter>
    );
}

export default App;