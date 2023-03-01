import React, {useState} from 'react';
import BlockSchedule from "../components/BlockSchedule";
import {Button, Form} from "react-bootstrap";
import "../style/acceptbutton.css"


const Schedule = () => {

    const [scheduleData, setScheduleData] = useState([]);
    const [file, setFile] = useState(null);


    const findWeekIndex = (scheduleData, week) => {
        return scheduleData.findIndex((item) => item.week === week);
    };
    const handleFileUpload = (event) => {
        const uploadedFile = event.target.files[0];
        setFile(uploadedFile);
    };

    const handleLoadData = () => {
        const reader = new FileReader();
        reader.onload = (event) => {
            const data = JSON.parse(event.target.result);
            setScheduleData(data);
        };
        reader.readAsText(file);
        document.getElementById("file").value = "";
    };

    const handleDownloadAll = () => {
        const json = JSON.stringify(scheduleData);
        const blob = new Blob([json], {type: "application/json"});
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "schedule.json";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    const handleAddBlockSchedule = (blockScheduleData) => {
        const index = scheduleData.findIndex((item) => item.week === blockScheduleData.week);
        if (index !== -1) {
            const updatedScheduleData = [...scheduleData];
            updatedScheduleData.splice(index, 1, blockScheduleData);
            setScheduleData(updatedScheduleData);
        } else {
            setScheduleData([...scheduleData, blockScheduleData]);
        }
    };


    return (
        <>
            <div className={"d-flex justify-content-center"}>


                <Form>
                    <Form.Group className={"p-2 mt-4 m-3"} controlId='file'>
                        <Form.Label>Upload file JSON!</Form.Label>
                        <Form.Control type='file' autoFocus name='file' required onChange={handleFileUpload} />
                    </Form.Group>

                </Form>
                <Button  className={"mt-4 m-3 w-25 acceptbutton"} variant="outline-success" type="button" onClick={handleLoadData}>
                    Upload
                </Button>
                <Button className={"mt-4 m-3 w-25 acceptbutton"} variant="outline-success" type="submit"  onClick={handleDownloadAll}>
                    Download
                </Button>

            </div>

            <div className={"d-grid"}>
                <BlockSchedule week={"воскресенье"} className="block-schedule" onAddBlockSchedule={handleAddBlockSchedule}   data={
                    scheduleData[findWeekIndex(scheduleData, "воскресенье")] ?? null
                }/>
                <BlockSchedule week={"понедельник"} className="block-schedule" onAddBlockSchedule={handleAddBlockSchedule}   data={
                    scheduleData[findWeekIndex(scheduleData, "понедельник")] ?? null
                }/>
                <BlockSchedule week={"вторник"} className="block-schedule" onAddBlockSchedule={handleAddBlockSchedule}   data={
                    scheduleData[findWeekIndex(scheduleData, "вторник")] ?? null
                } />
                <BlockSchedule week={"среда"} className="block-schedule" onAddBlockSchedule={handleAddBlockSchedule}  data={
                    scheduleData[findWeekIndex(scheduleData, "среда")] ?? null
                } />
                <BlockSchedule week={"четверг"} className="block-schedule" onAddBlockSchedule={handleAddBlockSchedule}   data={
                    scheduleData[findWeekIndex(scheduleData, "четверг")] ?? null
                } />
                <BlockSchedule week={"пятница"} className="block-schedule" onAddBlockSchedule={handleAddBlockSchedule}   data={
                    scheduleData[findWeekIndex(scheduleData, "пятница")] ?? null
                } />
                <BlockSchedule week={"суббота"} className="block-schedule" onAddBlockSchedule={handleAddBlockSchedule}   data={
                    scheduleData[findWeekIndex(scheduleData, "суббота")] ?? null
                } />
        </div>

        </>
    );
};

export default Schedule;