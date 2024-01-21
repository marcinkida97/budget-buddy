import './App.css';
import DashboardPage from "./pages/DashboardPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TablePage from "./pages/TablePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
    return (
        <div className={"appStyle"}>
            <div className={"content"}>
                <BrowserRouter>
                    <Routes>
                        <Route path={"/"} element={<LoginPage/>}/>
                        <Route path={"/signup"} element={<SignupPage/>}/>
                        <Route path={"/dashboard"} element={<DashboardPage/>}/>
                        <Route path={"/table"} element={<TablePage/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>


    );
}

export default App;