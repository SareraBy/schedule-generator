    import React, { useState } from 'react';
    import {Button, Image, ListGroup} from 'react-bootstrap';
    import { CSSTransition, TransitionGroup } from 'react-transition-group';
    import up from './up.png'
    import down from './down.png'
    import deletei from './delete.png'
    const LessonList = ({ lessons, onDeleteLesson, handleMoveLessonUp, handleMoveLessonDown }) => {


        return (
            <ListGroup>
                <TransitionGroup>
                    {lessons.map((lesson, index) => (
                        <CSSTransition key={index} classNames="delete" timeout={500}>
                            <ListGroup.Item className="m-1">
                                <div className=" d-flex justify-content-between align-items-center">
                                    <div  className={"text-wrap text-break"}>
                                        <h5 >{index+1}. {lesson.lesson}</h5>
                                        <p>  Час: {lesson.time} </p>
                                        <p>    Вчитель: {lesson.teacher}</p>
                                        <p>    Код: {lesson.code} </p>
                                        <p>    Пароль: {lesson.identifier}</p>
                                    </div>



                                    <div className={"d-grid m-2 p-2"}>
                                            {index >= 1 &&

                                                    <Image  className={"mb-2 animka"} key={index}    onClick={() => handleMoveLessonUp(index)} width={25} height={25} src={up}/>

                                            }
                                            {index < lessons.length - 1 &&
                                                    <Image className={"mb-2 animka"}  key={index} onClick={() => handleMoveLessonDown(index)} width={25} height={25} src={down}/>

                                            }

                                                <Image className={"animka"} onClick={() => onDeleteLesson(index)} width={23} height={23} src={deletei}/>

                                        </div>




                                </div>
                            </ListGroup.Item>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ListGroup>
        );
    };

    export default LessonList;