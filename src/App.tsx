import './App.css';
import DashboardPage from "./pages/DashboardPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MyBudget from "./pages/MyBudget";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import PrivateRoute from "./components/PrivateRoute";

function App() {
    return (
        <div className={"appStyle"}>
            <div className={"content"}>
                <BrowserRouter>
                    <Routes>
                        <Route path={"/"} element={<LoginPage/>}/>
                        <Route path={"/signup"} element={<SignupPage/>}/>
                        <Route path={"/dashboard"} element={<PrivateRoute element={<DashboardPage/>}/>}/>
                        <Route path={"/mybudget"} element={<PrivateRoute element={<MyBudget/>}/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;