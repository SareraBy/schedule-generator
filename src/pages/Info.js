import React from 'react';

const Info = () => {
    return (
        <div className={"d-flex mt-5"}>
            <div id="list-example" className="list-group mx-3">

                <a className    ="list-group-item list-group-item-action" href="#download">Установка</a>
                <a className="list-group-item list-group-item-action" href="#create">Создание расписание</a>
                <a className="list-group-item list-group-item-action" href="#upload">Загрузка расписание</a>
                <a className="list-group-item list-group-item-action" href="#use-able">Пользывание ботом</a>

            </div>
            <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" className="scrollspy-example m-2"
                 tabIndex="0">
                <h4 id="download"> Как установить бота </h4>
                <p>Text</p>
                <h4 id="create">Как создать рассписание </h4>
                <p>Text</p>
                <h4 id="upload">Как загрузка рассписание</h4>
                <p>Text</p>
                <h4 id="use-able">Как пользывание ботом</h4>
                <p>Text</p>
            </div>
        </div>
    );
};

export default Info;