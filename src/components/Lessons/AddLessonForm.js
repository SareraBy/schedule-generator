import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddLessonForm  = ({ onAddLesson }) => {
    const [time, setTime] = useState("");
    const [lesson, setLesson] = useState("");
    const [teacher, setTeacher] = useState("");
    const [identifier, setIdentifier] = useState("");
    const [code, setCode] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const newLesson = {
            time,
            lesson,
            teacher,
            identifier,
            code,
        };
        onAddLesson(newLesson);
        setTime("");
        setLesson("");
        setTeacher("");
        setIdentifier("");
        setCode("");
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="time">
                <Form.Label>Час</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Введіть час"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group controlId="lesson">
                <Form.Label>Предмет</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Введіть назву предмета"
                    value={lesson}
                    onChange={(e) => setLesson(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group controlId="teacher">
                <Form.Label>Викладача</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Введіть ПІБ викладача"
                    value={teacher}
                    onChange={(e) => setTeacher(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group controlId="code">
                <Form.Label>Код</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Введіть код"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group controlId="identifier">
                <Form.Label>Пароль</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Введіть пароль"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    required
                />
            </Form.Group>
            <Button
                className={"mt-4 acceptbutton"}
                variant="outline-success"
                type="submit"
            >
                Додати
            </Button>
        </Form>
    );
};

export default AddLessonForm;
