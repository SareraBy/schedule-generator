import React, {useEffect, useState} from 'react';
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
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (event) => {
            const data = JSON.parse(event.target.result);
            setScheduleData(data);
        };
        reader.readAsText(file);
        document.getElementById("file").value = "";
        setFile(null);
    };

    useEffect(() => {
        handleLoadData();
    }, [handleFileUpload, handleLoadData]);

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
                    <Form.Group className={" mx-5 mt-4 "} controlId='file'>
                        <Form.Label>?????????????????????? ????????</Form.Label>
                        <Form.Control size="sm"  type='file' autoFocus name='file'  required onChange={handleFileUpload} />
                    </Form.Group>
                </Form>

                <Button className={"mt-4 mx-5  acceptbutton"} style={{ borderRadius:'15px'}} variant="success" type="submit"  onClick={handleDownloadAll}>
                    <Image height={70} width={70} src={download}/>
                </Button>

            </div>

            <div className={"d-grid"} data-aos="zoom-out-left">
                <BlockSchedule week={"??????????????????"} className="block-schedule" onAddBlockSchedule={handleAddBlockSchedule}   data={
                    scheduleData[findWeekIndex(scheduleData, "??????????????????")] ?? null
                }/>
                <BlockSchedule week={"????????????????"} className="block-schedule" onAddBlockSchedule={handleAddBlockSchedule}   data={
                    scheduleData[findWeekIndex(scheduleData, "????????????????")] ?? null
                } />
                <BlockSchedule week={"????????????"} className="block-schedule" onAddBlockSchedule={handleAddBlockSchedule}  data={
                    scheduleData[findWeekIndex(scheduleData, "????????????")] ?? null
                } />
                <BlockSchedule week={"????????????"} className="block-schedule" onAddBlockSchedule={handleAddBlockSchedule}   data={
                    scheduleData[findWeekIndex(scheduleData, "????????????")] ?? null
                } />
                <BlockSchedule week={"??'????????????"} className="block-schedule" onAddBlockSchedule={handleAddBlockSchedule}   data={
                    scheduleData[findWeekIndex(scheduleData, "??'????????????")] ?? null
                } />
                <BlockSchedule week={"????????????"} className="block-schedule" onAddBlockSchedule={handleAddBlockSchedule}   data={
                    scheduleData[findWeekIndex(scheduleData, "????????????")] ?? null
                } />
                <BlockSchedule week={"????????????"} className="block-schedule" onAddBlockSchedule={handleAddBlockSchedule}   data={
                    scheduleData[findWeekIndex(scheduleData, "????????????")] ?? null
                }/>
        </div>

        </>
    );
};

export default Schedule;