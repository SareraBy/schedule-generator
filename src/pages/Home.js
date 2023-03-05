import React from 'react';
import {Button, Card, Carousel, Container, Image} from "react-bootstrap";
import "../style/acceptbutton.css"
import {Link} from "react-router-dom";
const Home = () => {


    return (
    <div className={"mt-5 d-flex flex-column justify-content-center"}>
        <div className={"d-flex justify-content-center "} >

            <Button style={{height:"50px"}} className={"acceptbutton"} href={"/schedule"} variant="outline-success"   size="lg" data-aos="zoom-out-right">
                Редактировать расписание
            </Button>
        </div>
        <footer className={"d-flex mt-5 justify-content-center "} >
    <Link to={'/info'}>  <Button size={'lg'}  variant="outline-success" size="lg"  className={"acceptbutton "}  data-aos="zoom-out-left">Скоро</Button></Link>
    </footer>
 </div>
    );
};

export default Home;