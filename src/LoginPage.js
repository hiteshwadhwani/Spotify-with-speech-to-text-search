import React, { useEffect } from "react";
import Button from "./Button";

export default function LoginPage({ token, setToken }) {
  const CLIENT_ID = "b48334fb5afd4a118b0f0cb08ea0dd2d";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const logout = () => {
    setToken('')
    window.localStorage.removeItem('token')
  }

  return (
    <>
      <div className="flex-col md:flex-row flex gap-3 items-center justify-between">
        <div className="text-3xl font-bold text-green-500 text-center">
          <img src="/images/logo.svg" className="h-10" alt="logo"/>
        </div>
        {token ? (
          <Button onClick={logout} label={'logout'} />
        ) : (
          <a
            href={`${process.env.REACT_APP_AUTH_ENDPOINT}?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=${process.env.REACT_APP_RESPONSE_TYPE}`}
            className="bg-green-500 p-3 rounded-lg hover:opacity-80"
          >
            Login to Spotify
          </a>
        )}
      </div>
    </>
  );
}
