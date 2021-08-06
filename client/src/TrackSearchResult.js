import React from "react";

export default function TrackSearchResults({ track, chooseTrack }) {
    return (
        <div className="d-flex m-2 align-items-center" style={{ cursor: "pointer"}} onClick={function handlePlay() {
            chooseTrack(track)
        }}>
            <img
                src={track.albumUrl}
                alt="album art"
                style={{ height: "64px", width: "64px" }}
            />
            <div className="ml-3">
                <div>{track.title}</div>
                <div className="text-muted">{track.artist}</div>
            </div>
        </div>
    );
}
