import './App.css';
import DashboardPage from "./pages/DashboardPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import TablePage from "./pages/TablePage";

function App() {
    return (
        <div className={"appStyle"}>
            <div className={"content"}>
                <BrowserRouter>
                    <Header/>
                    <Routes>
                        <Route path={"/"} element={<DashboardPage/>}/>
                        <Route path={"/table"} element={<TablePage/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>


    );
}

export default App;