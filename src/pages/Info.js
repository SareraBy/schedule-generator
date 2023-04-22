import React from 'react';

const Info = () => {
    return (
        <div className={"d-grid mt-5 text-center justify-content-center"} data-aos="flip-down">
            <h2 className={"text-center mb-5"}>Видео як користуватись</h2>
            <iframe
                width="600"
                height="325"
                src="https://www.youtube.com/embed/qIIojARxz40"
                title="Як користуватись"
                style={{borderRadius:"25px", border:"5px solid lightgreen"}}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default Info;
