import '../App.css';
import Header from "../components/Header/Header";
import Logo from "../components/Header/Logo/Logo";
import {useEffect} from "react";
import useFetchUser from "../components/Header/hooks/useFetchUser";

const DashboardPage = () => {

  return (
      <>
        <Header/>
        <Logo/>
      </>
  );
}

export default DashboardPage;
