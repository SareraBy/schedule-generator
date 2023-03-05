import React, {useState} from 'react';
import BlockSchedule from "../components/BlockSchedule";
import {Button, Form, Image} from "react-bootstrap";
import "../style/acceptbutton.css"
import download from '../store/download.png'
import upload from '../store/upload.png'

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
            <div  className={"d-flex justify-content-center "} data-aos="flip-up">


                <Form >
                    <Form.Group className={"p-1 mt-4 "} controlId='file'>
                        <Form.Label>Завантажити файл</Form.Label>
                        <Form.Control size="sm"  type='file' autoFocus name='file'  required onChange={handleFileUpload} />
                    </Form.Group>
                </Form>

                <Button  className={"mt-4 mx-1  acceptbutton"} style={{ borderRadius:'15px'}} variant="success" type="button" onClick={handleLoadData}>
                   <Image height={70} width={70}  src={upload}/>
                </Button>
                <Button className={"mt-4 mx -1  acceptbutton"} style={{ borderRadius:'15px'}} variant="success" type="submit"  onClick={handleDownloadAll}>
                    <Image height={70} width={70} src={download}/>
                </Button>

            </div>

            <div className={"d-grid"} data-aos="zoom-out-left">
                <BlockSchedule week={"понеділок"} className="block-schedule" onAddBlockSchedule={handleAddBlockSchedule}   data={
                    scheduleData[findWeekIndex(scheduleData, "понеділок")] ?? null
                }/>
                <BlockSchedule week={"вівторок"} className="block-schedule" onAddBlockSchedule={handleAddBlockSchedule}   data={
                    scheduleData[findWeekIndex(scheduleData, "вівторок")] ?? null
                } />
                <BlockSchedule week={"середа"} className="block-schedule" onAddBlockSchedule={handleAddBlockSchedule}  data={
                    scheduleData[findWeekIndex(scheduleData, "середа")] ?? null
                } />
                <BlockSchedule week={"четвер"} className="block-schedule" onAddBlockSchedule={handleAddBlockSchedule}   data={
                    scheduleData[findWeekIndex(scheduleData, "четвер")] ?? null
                } />
                <BlockSchedule week={"п'ятниця"} className="block-schedule" onAddBlockSchedule={handleAddBlockSchedule}   data={
                    scheduleData[findWeekIndex(scheduleData, "п'ятниця")] ?? null
                } />
                <BlockSchedule week={"субота"} className="block-schedule" onAddBlockSchedule={handleAddBlockSchedule}   data={
                    scheduleData[findWeekIndex(scheduleData, "субота")] ?? null
                } />
                <BlockSchedule week={"неділя"} className="block-schedule" onAddBlockSchedule={handleAddBlockSchedule}   data={
                    scheduleData[findWeekIndex(scheduleData, "неділя")] ?? null
                }/>
        </div>

        </>
    );
};

export default Schedule;