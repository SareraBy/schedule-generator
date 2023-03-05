import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Form, ListGroup, Row} from "react-bootstrap";
import LessonList from "./Lessons/LessonList";
import AddLessonForm from "./Lessons/AddLessonForm";
import "../style/delet_anim.css"
const BlockSchedule = ({week, onAddBlockSchedule, data}) => {

    const [lessons, setLessons] = useState(data ? data.lessons: []);

    const handleAddLesson = (lesson) => {
        setLessons([...lessons, lesson]);
    };

    const handleDeleteLesson = (index) => {
        const updatedLessons = lessons.filter((lesson, i) => i !== index);
        setLessons(updatedLessons);
    };

    useEffect(() => {
        onAddBlockSchedule({ week, lessons});
    }, [lessons]);

    useEffect(() => {
        if (data) {
            handleLoadLessons(data);
        }
    }, [data]);

    const handleLoadLessons = (data) => {
        setLessons(data.lessons);
    };




    return (


        <div className={'d-grid rounded-4 m-5 p-2 '} style={{ border: "1px solid black" }}>
            <h3 className={"text-center"}>{week}</h3>
            <Container>
                <Row className="mt-3">
                    <Col>
                        <h2>Розклад дня:</h2>
                        <AddLessonForm onAddLesson={handleAddLesson} />
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        <LessonList lessons={lessons} onDeleteLesson={handleDeleteLesson}/>
                    </Col>
                </Row>

            </Container>

        </div>
    );
};

export default BlockSchedule;