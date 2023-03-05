import React from 'react';
import {Button} from "react-bootstrap";
import {useLocation} from "react-router-dom";

const Navbar_settings = () => {

    const location = useLocation();

    const exect = [
        '/loader',
        {/* Можно вводить любую часть домена без Header */}
    ];

    if (location.pathname === '/loader' || exect.includes(location.pathname)) {
        return null;
    }


    return (
        <div className={"position-static"}>
        <Button > > </Button>
        </div>
    );
};

export default Navbar_settings;