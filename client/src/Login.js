import React from "react";
import { Container } from "react-bootstrap";
import videoContent from "./vidBackground.mp4";
import VideoBackground from "./VideoBackground";
import Hero from "./Hero";

// import redirect_uri from "./config/"

const client_id = "11811ab54cf1454bbfa5075f5ed86dba";
const response_type = "code";
// const redirect_uri = "http://localhost:3000";
const redirect_uri = "https://monde-green.herokuapp.com";
const scope = [
    "streaming",
    "user-read-email",
    "user-read-private",
    "user-library-read",
    "user-library-modify",
    "user-read-playback-state",
    "user-modify-playback-state",
];
const webspace = "%20";

// could use encodeURI(uri);
const buildScope = scope.join(webspace);

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=${response_type}&redirect_uri=${redirect_uri}&scope=${buildScope}`;

export default function Login() {
    return (
        <Container
            className="d-flex justify-content-center align-items-center flex-column"
            style={{ minHeight: "100vh" }}
        >
            <VideoBackground videoContent={videoContent} />
            <Hero AUTH_URL={AUTH_URL} />
            {/* <a
                className="btn btn-success bt-lg"
                href={AUTH_URL}
                style={{
                    position: "absolute",
                    width: "50%",
                    transform: "translate(0%, -70%)"
                }}
            >
                Login to Spotify
            </a> */}
        </Container>
    );
}
