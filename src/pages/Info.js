import React from 'react';

const Info = () => {
    return (
        <div className={"d-grid mt-5 text-center justify-content-center"} data-aos="flip-down">
            <h2 className={"text-center mb-5"}>Відео як користуватись</h2>

             <div className="embed-responsive embed-responsive-16by9">
                <iframe
                    className="embed-responsive-item"
                    src="https://www.youtube.com/embed/qIIojARxz40"
                    title="Як користуватись"
                    width={"300px"}
                    height={"250px"}
                    style={{borderRadius:"25px", border:"5px solid lightgreen"}}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

        </div>
    );
};

export default Info;
