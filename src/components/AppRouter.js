import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Schedule from "../pages/schedule";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Home/>} />
            <Route path={'/schedule'} element={<Schedule/>} />
        </Routes>
    );
};

export default AppRouter;