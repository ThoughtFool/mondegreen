import React from "react";

export default function TrackSearchResults({ track, chooseTrack }) {
    return (
        <div
            className="d-flex m-2 align-items-center"
            style={{
                backgroundColor: "rgb(255,255,255, .25)",
                cursor: "pointer",
                borderRadius: "8px"
            }}
            onClick={function handlePlay() {
                chooseTrack(track);
            }}
        >
            <img
                src={track.albumUrl}
                alt="album art"
                style={{ height: "75px", width: "75px" }}
            />
            <div className="ml-3" sytle={{ paddingLeft: "15px"}}>
                <div>{track.title}</div>
                <div className="text-muted">{track.artist}</div>
            </div>
        </div>
    );
}
