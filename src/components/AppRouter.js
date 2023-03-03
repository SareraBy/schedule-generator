import React from 'react';
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import Home from "../pages/Home";
import Schedule from "../pages/schedule";
import Loader from "./Loader";

const AppRouter = () => {

    const location = useLocation();

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="*" element={<Loader/>} />
            {location.pathname === '/404' && <Navigate to={location.state?.from || '/'} replace />}
        </Routes>
    );
};

export default AppRouter;