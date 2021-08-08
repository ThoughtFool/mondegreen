import React from "react";

const VideoBackground = (props) => {
    console.log(props.videoContent);
    return (
        <video
            className="bg-fullscreen"
            autoPlay
            loop
            muted
            style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                left: "50%",
                top: "50%",
                objectFit: "cover",
                transform: "translate(-50%, -50%",
                zIndex: "-1",
            }}
        >
            <source src={props.videoContent} type="video/mp4" />
        </video>
    );
};

export default VideoBackground;
