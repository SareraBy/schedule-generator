import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

const LessonList = ({ lessons, onDeleteLesson }) => {
    return (
        <ListGroup>
            {lessons.map((lesson, index) => (
                <ListGroup.Item className="m-1" key={index}>
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
            ))}
        </ListGroup>
    );
};

export default LessonList;
