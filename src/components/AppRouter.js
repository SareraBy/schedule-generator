import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Schedule from "../pages/schedule";
import Loader from "./Loader";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Home/>} />
            <Route path={'/schedule'} element={<Schedule/>} />
            <Route path="*" element={<Loader/>} />
        </Routes>
    );
};

export default AppRouter;