import React from 'react';
import {Button, Card, Carousel, Container, Image} from "react-bootstrap";
import "../style/acceptbutton.css"
import {Link} from "react-router-dom";
const Home = () => {


    return (
        <>
        <div className={"d-flex justify-content-center mt-5"} style={{top:'100%'}} >

            <Button style={{height:"50px"}} className={"acceptbutton "} href={"/schedule"} variant="outline-success"   size="lg">
                Редактировать Расписание
            </Button>

        </div>

            <div className={"d-flex m-3"}>
            <div id="list-example" className="list-group mx-3">
                <a className    ="list-group-item list-group-item-action" href="src/pages#download">Установка</a>
                <a className="list-group-item list-group-item-action" href="src/pages#create">Создание расписание</a>
                <a className="list-group-item list-group-item-action" href="src/pages#upload">Загрузка расписание</a>
                <a className="list-group-item list-group-item-action" href="src/pages#use-able">Пользывание ботом</a>
            </div>
            <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" className="scrollspy-example m-2"
                 tabIndex="0">
                <h4 id="download"> Как установить бота </h4>
                <p>...</p>
                <h4 id="create">Как создать рассписание </h4>
                <p>...</p>
                <h4 id="upload">Как загрузка рассписание</h4>
                <p>...</p>
                <h4 id="use-able">Как пользывание ботом</h4>
                <p>...</p>
            </div>
            </div>
        </>
    );
};

export default Home;