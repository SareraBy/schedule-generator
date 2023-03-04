import React, { useState } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const LessonList = ({ lessons, onDeleteLesson }) => {
    const [showButton, setShowButton] = useState(true);

    const handleDelete = (index) => {
        setShowButton(false);
        setTimeout(() => {
            onDeleteLesson(index);
        }, 100);
    };

    return (
        <ListGroup>
            <TransitionGroup>
                {lessons.map((lesson, index) => (
                    <CSSTransition key={lesson.lesson} classNames="delete" timeout={500}>
                        <ListGroup.Item className="m-1">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h5>{lesson.lesson}</h5>
                                    <p>
                                        Время: {lesson.time}
                                        <br />
                                        Учитель: {lesson.teacher}
                                        <br />
                                        Идентификатор: {lesson.identifier}
                                        <br />
                                        Код: {lesson.code}
                                    </p>
                                </div>
                                <Button variant="outline-danger" onClick={() => onDeleteLesson(index)}>
                                    Delete
                                </Button>
                            </div>
                        </ListGroup.Item>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ListGroup>
    );
};

export default LessonList;
