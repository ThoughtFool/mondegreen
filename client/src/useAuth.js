import { useState, useEffect } from "react";
import axios from "axios";

export default function useAuth(code) {
    const [accessToken, setAccessToken] = useState(null);
    const [refreshToken, setRefreshToken] = useState(null);
    const [expiresIn, setExpiresIn] = useState(null);

    useEffect(() => {
        return axios
            .post("http://localhost:3001/login", {
                code,
            })
            .then((res) => {
                setAccessToken(res.data.accessToken);
                setRefreshToken(res.data.refreshToken);
                setExpiresIn(res.data.expiresIn);

                // Set the access token on the API object to use it in later calls

                window.history.pushState({}, null, "/");
            })
            .catch((err) => {
                console.log("======================================");
                console.error(err);
                window.location = "/";
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [code]);

    // whenever token expires, refresh:
    useEffect(() => {
        if (refreshToken === null || expiresIn === null) {
            return;
        } else {
            const interval = setInterval(() => {

                axios
                    .post("http://localhost:3001/refresh", {
                        refreshToken,
                    })
                    .then((res) => {

                        // Set the access token on the API object to use it in later calls
                        setAccessToken(res.data.accessToken);
                        setExpiresIn(res.data.expiresIn);

                        window.history.pushState({}, null, "/");
                    })
                    .catch((err) => {
                        console.error(err);
                        window.location = "/";
                    });
            }, (expiresIn - 60) * 1000);
            return () => clearInterval(interval);
        }
    }, [refreshToken, expiresIn]);

    return accessToken;
}
