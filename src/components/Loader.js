import React from 'react';
import {Spinner} from "react-bootstrap";
import {Link, useLocation} from 'react-router-dom';
import TypingText from "../font/Typing";
import FadeInText from "../font/Typing";

const Loader = () => {
    const location = useLocation();

    if (location.pathname === '/') {
        return (
            <div className={"text-center mt-5 justify-content-center d-grid"}>
                Loading...

                <Spinner className={"mt-5 mx-3"} animation="border" />

            </div>
        );
    } else {
        return (
            <div className={"d-grid text-center"}>
            <div className={"text-center align-items-center mt-5 justify-content-center d-flex"}>
                <FadeInText text={  <Spinner className={"mt-5 mx-4"} animation="border" />} className={"mt-5"}/>

            </div>
                <div className={"mt-5"}>

                    Loading...
                <br/>
                Повернутися <Link to={'/'}>Home.</Link>
                </div>
            </div>
        );
    }
};

export default Loader;