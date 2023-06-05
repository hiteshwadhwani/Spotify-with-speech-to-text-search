import { useEffect, useState } from "react";

import Container from "./Container";
import LoginPage from "./LoginPage";
import Player from "./Player";
import loginToContinue from "./loginToContinue";

import SpotifyWebApi from "spotify-web-api-js";

function App() {
  const [token, setToken] = useState("");
  const spotifyApi = new SpotifyWebApi();

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }
    setToken(token);
    if (token) {
      spotifyApi.setAccessToken(token);
    }
  }, []);

  console.log({ token });

  return (
    <>
      <Container>
        <LoginPage token={token} setToken={setToken} />
        {token ? (
          <Player token={token} spotifyApi={spotifyApi} />
        ) : (
          <loginToContinue />
        )}
      </Container>
    </>
  );
}

export default App;
