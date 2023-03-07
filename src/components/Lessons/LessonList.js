    import React, { useState } from 'react';
    import { Button, ListGroup } from 'react-bootstrap';
    import { CSSTransition, TransitionGroup } from 'react-transition-group';

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



                                    <div className={"d-grid p-2"}>
                                            {index >= 1 &&
                                                <Button  className={"acceptbutton mb-2"} variant="success" key={index}    onClick={() => handleMoveLessonUp(index)}>
                                                    &#8593;
                                                </Button>
                                            }
                                            {index < lessons.length - 1 &&
                                                <Button className={"mb-2 acceptbutton"} variant="success" key={index} onClick={() => handleMoveLessonDown(index)}>
                                                    &#8595;
                                                </Button>
                                            }
                                            <Button variant="outline-danger" onClick={() => onDeleteLesson(index)}>
                                                X
                                            </Button>
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