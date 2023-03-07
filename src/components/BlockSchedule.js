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

    const handleMoveLessonUp = (index) => {
        if (index > 0) {
            const updatedLessons = [...lessons];
            const temp = updatedLessons[index];
            updatedLessons[index] = updatedLessons[index-1];
            updatedLessons[index-1] = temp;
            setLessons(updatedLessons);
        }
    };

    const handleMoveLessonDown = (index) => {
        if (index < lessons.length-1) {
            const updatedLessons = [...lessons];
            const temp = updatedLessons[index];
            updatedLessons[index] = updatedLessons[index+1];
            updatedLessons[index+1] = temp;
            setLessons(updatedLessons);
        }
    };


    return (


        <div className={'d-grid text-wrap word-wrap-break-word rounded-4 m-4 p-1 '} style={{ border: "1px solid black" }}>
            <h3 className={"text-center"}>{week}</h3>
            <Container>
                <Row className="mt-3">
                    <Col>
                        <h2>Додати пару:</h2>
                        <AddLessonForm onAddLesson={handleAddLesson} />
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        <LessonList lessons={lessons} onDeleteLesson={handleDeleteLesson} handleMoveLessonUp={handleMoveLessonUp} handleMoveLessonDown={handleMoveLessonDown} />
                    </Col>
                </Row>

            </Container>

        </div>
    );
};

export default BlockSchedule;