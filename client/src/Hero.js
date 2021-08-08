import React from "react";

const Hero = (props) => {
    return (
        <div
            className="hero d-flex justify-content-center align-items-start flex-column"
            style={{
                position: "absolute",
                width: "80%",
                height: "80%",
                // transform: "translate(0%, -50%",
                // zIndex: "1",
                color: "white",
                backgroundColor: "rgba(51, 170, 51, .5)",
                borderRadius: "15px",
                padding: "25px",
            }}
        >
            <div
                className="d-flex flex-row justify-content-center"
                style={{
                    position: "relative",
                    padding: "10px",
                    width: "100%",
                }}
            >
                <div>
                    <h1 style={{ fontSize: "10vw" }}>Monde Green</h1>
                </div>
            </div>
            <div
                className="d-flex flex-row"
                style={{
                    position: "relative",
                    padding: "10px",
                    width: "100%",
                }}
            >
                <div>
                    <p style={{ fontSize: "1rem" }}>
                        Are you an aspiring kraoke singer, who misses the roar
                        of an enthusiastic crowd? Are you eagerly awaiting for
                        the world to open up again, so that you can share your
                        love of covers? Well, why not bide your time, honing
                        your craft and sharpening your skills with Monde Green?
                        We are a simple karaoke app that helps singers belt out
                        the "correct" song lyrics. Cuz, singing the right notes
                        is hard enough. And if you can't read the lyrics off the
                        screen, then "Hold me close, Tony Danza!"
                    </p>
                </div>
            </div>
            <div className="d-flex flex-row">
                <a
                    className="btn btn-success bt-lg"
                    href={props.AUTH_URL}
                    style={{
                        position: "relative",
                        padding: "10px",
                        width: "100%",
                    }}
                >
                    Login to Spotify
                </a>
            </div>
        </div>
    );
};

export default Hero;
