require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const SpotifyWebApi = require("spotify-web-api-node");
const lyricsFinder = require("lyrics-finder");
const PORT = process.env.PORT || 3000;
// const nodeEnv = process.env.NODE_ENV || 'development';

app.use(express.static(path.join(__dirname, "public/build")));

const credentials = {
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    // refreshToken
};

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/login", (req, res) => {
    const code = req.body.code;

    const spotifyApi = new SpotifyWebApi(credentials);

    // Retrieve an access token and a refresh token
    spotifyApi
        .authorizationCodeGrant(code)
        .then((data) => {
            res.json({
                accessToken: data.body.access_token,
                refreshToken: data.body.refresh_token,
                expiresIn: data.body.expires_in,
            });
        })
        .catch((err) => {
            console.log("Error: " + err);
            res.sendStatus(400);
        });
});

app.post("/refresh", (req, res) => {
    const refreshToken = req.body.refreshToken;
    credentials.refreshToken = refreshToken;

    const spotifyApi = new SpotifyWebApi(credentials);

    // clientId, clientSecret and refreshToken has been set on the api object previous to this call.
    spotifyApi
        .refreshAccessToken()
        .then((data) => {
            console.log("The access token has been refreshed!");
            res.json({
                accessToken: data.body.access_token,
                expiresIn: data.body.expires_in,
            });

            // Save the access token so that it's used in future calls
            // spotifyApi.setAccessToken(data.body["access_token"]);
        })
        .catch((err) => {
            console.log("Could not refresh access token", err);
            res.sendStatus(400);
        });
});

app.get("/lyrics", async (req, res) => {
    const lyrics =
        (await lyricsFinder(req.query.artist, req.query.track)) ||
        "No Lyrics Found. We'll do better next time.";
    console.log({ lyrics });
    res.json({ lyrics });
});

app.get("/", (req, res) => {
    // res.sendFile(path.join(__dirname, "public/build/index.html"));
    res.render("index", function (err, html) {
        if (err) {
            console.error({ err });
        }
        res.send(html);
    });
});

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
