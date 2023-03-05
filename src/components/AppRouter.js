import React from 'react';
import {Navigate, Route, Router, Routes, useLocation} from "react-router-dom";
import Home from "../pages/Home";
import Schedule from "../pages/schedule";
import Loader from "./Loader";
import Header from "./Header";
import Navbar_settings from "./module-settings/navbar_settings";

const AppRouter = () => {


    const location = useLocation();

    return (
        <>
            <Header/>

        <Routes>

            <Route  path="/" element={<Home />} />
            <Route exact path="/schedule" element={<Schedule />} />

            {location.pathname === '/404' && <Navigate to={location.state?.from || '/'} replace />}
            {location.pathname === '/403' && <Navigate to={location.state?.from || '/'} replace />}
            {location.pathname === '/502' && <Navigate to={location.state?.from || '/'} replace />}
            <Route exact path="/loader" element={<Loader />} />
        </Routes>

        </>
    );
};

export default AppRouter;