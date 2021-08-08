import { useState, useEffect } from "react";
import useAuth from "./useAuth";
import TrackSearchResult from "./TrackSearchResult";
import Player from "./Player";
import VideoBackground from "./VideoBackground";
import videoContent from "./vidBackground.mp4";
import { Container, Form } from "react-bootstrap";
import SpotifyWebApi from "spotify-web-api-node";
import axios from "axios";

const spotifyApi = new SpotifyWebApi({
    clientId: "11811ab54cf1454bbfa5075f5ed86dba",
});

export default function Dashboard({ code }) {
    const accessToken = useAuth(code);
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [playingTrack, setPlayingTrack] = useState();
    const [lyrics, setLyrics] = useState("");


    function chooseTrack(track) {
        setPlayingTrack(track);
        setSearch("");
        setLyrics("");
    }

    useEffect(() => {
        if (!playingTrack) return;

        axios
            .get("/lyrics", {
                params: {
                    track: playingTrack.title,
                    artist: playingTrack.artist,
                },
            })
            .then((res) => {
                setLyrics(res.data.lyrics);
            });
    }, [playingTrack]);

    // help with search:
    useEffect(() => {
        if (!accessToken) return;
        spotifyApi.setAccessToken(accessToken);
    }, [accessToken]);

    // help with search & if accessToken changes:
    useEffect(() => {
        if (!search) return setSearchResults([]);
        if (!accessToken) return;

        let cancel = false;

        spotifyApi.searchTracks(search).then((res) => {
            if (cancel) return;
            setSearchResults(
                res.body.tracks.items.map((track) => {
                    // look thru to determine smallest image:
                    const smallestAlbumImage = track.album.images.reduce(
                        (smallest, image) => {
                            if (image.height < smallest.height) return image;
                            return smallest;
                        },
                        track.album.images[0]
                    );

                    return {
                        artist: track.artists[0].name,
                        title: track.name,
                        uri: track.uri,
                        albumUrl: smallestAlbumImage.url,
                    };
                })
            );
        });

        return () => (cancel = true);
    }, [search, accessToken]);

    return (
        <Container
            className="d-flex flex-column py-2"
            style={{ height: "100vh" }}
        >
            <VideoBackground videoContent={videoContent} />
            {/* <video
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
                    zIndex: "-1"
                }}
            >
                <source src={videoContent} type="video/mp4" />
            </video> */}

            <Form.Control
                type="search"
                placeholder="Search songs/Artists"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <div
                className="flex-grow-1 my-2"
                style={{
                    overflow: "auto",
                }}
            >
                {searchResults.map((track) => {
                    return (
                        <TrackSearchResult
                            track={track}
                            key={track.uri}
                            chooseTrack={chooseTrack}
                        />
                    );
                })}
                {searchResults.length === 0 && (
                    <div
                        className="text-center"
                        style={{
                            whiteSpace: "pre",
                            backgroundColor: "rgb(255,255,255, .9)",
                            fontSize: "1rem",
                            fontWeight: "bold",
                        }}
                    >
                        {lyrics}
                    </div>
                )}
            </div>
            <div>
                <Player
                    accessToken={accessToken}
                    trackUri={playingTrack?.uri}
                />
            </div>
        </Container>
    );
}
