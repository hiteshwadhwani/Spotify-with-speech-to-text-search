import React from "react";
import SpotifyPlayer from "react-spotify-player";

export default function MusicPlayer({album}) {
  const size = {
    width: "100%",
    height: '100%',
  };
  const view = "list"; // or 'coverart'
  const theme = "black"; // or 'white'
  return (
    <div>
      <SpotifyPlayer
        uri={album || 'spotify:album:4Z3OH7wgqG7rLBZVVdTEcD'}
        size={size}
        view={view}
        theme={theme}
      />
    </div>
  );
}
