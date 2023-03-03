import React from 'react';
import {Spinner} from "react-bootstrap";

const Loader = () => {
    return (
        <div className={"text-center mt-5 justify-content-center d-grid"}>
           Loading...
            <Spinner className={"mt-5 mx-3"} animation="border" />
        </div>
    );
};

export default Loader;