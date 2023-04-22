import React from 'react';
import {Button, Card, Carousel, Container, Image} from "react-bootstrap";
import "../style/acceptbutton.css"
import {Link} from "react-router-dom";
const Home = () => {


    return (
    <div className={"mt-5 d-flex flex-column justify-content-center"} data-aos="zoom-out-right">
        <div className={"d-flex justify-content-center "} >

            <Button style={{height:"50px"}} className={"acceptbutton"} href={"/schedule"} variant="outline-success"   size="lg">
                Редагування розкладу
            </Button>
        </div>
        <footer className={"d-flex mt-5 justify-content-center "} >
            <Button size={'lg'} href={'/info'}  variant="outline-success" size="lg"  className={"acceptbutton "}>Як користуватись?</Button>
    </footer>
 </div>
    );
};

export default Home;
