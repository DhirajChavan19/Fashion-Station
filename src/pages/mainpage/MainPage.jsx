import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/header";

const MainPage = () =>{
    return(
        <>
            <Header/>
            <Outlet/>
        
        </>
    )
}

export default MainPage;