import React from 'react';
import {Button} from "react-bootstrap";
import {useLocation} from "react-router-dom";

const Navbar_settings = () => {

    const location = useLocation();

    const exect = [
        '/loader',
        '/schedule',
        '/',
        {/* Можно вводить любую часть домена без Header */}
    ];

    if (location.pathname === '/loader' || exect.includes(location.pathname)) {
        return null;
    }


    return (
        <div className=" flex-grow-1 pe-3">
        <Button
            className={"mt-4 acceptbutton position-fixed"}
            variant="outline-success"
            type="submit"

        > > </Button>
        </div>
    );
};

export default Navbar_settings;