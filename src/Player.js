import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import SearchBar from "./SearchBar";
import MusicPlayer from "./MusicPlayer";
import TableRow from "./TableRow";

export default function Player({ token, spotifyApi }) {
  const [songs, setSongs] = useState([]);
  const [album, setAlbum] = useState("");

  const commands = [
    {
      command: "Play Song *",
      callback: (song) => PlaySong(song),
    },
  ];
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition({ commands });

  const PlaySong = (song) => {
    console.log(song);
    spotifyApi.searchTracks(`artist:${song}`, { limit: 10 }).then(
      function (res) {
        console.log(res.tracks.items);
        setSongs(res.tracks.items);
      },
      function (err) {
        console.log(err);
      }
    );
  };

  useEffect(() => {
    spotifyApi.getNewReleases({ limit: 10 }).then(
      function (data) {
        setSongs(data.albums.items);
      },
      function (err) {
        console.error(err);
      }
    );
  }, [spotifyApi]);

  return (
    <div className="flex flex-col">
      <SearchBar listening={listening} />
      <div>
        <div className="grid-cols-1 grid md:grid-cols-2 gap-2">
          <div className="bg-gradient-to-br from-green-200 to-blue-300 rounded-xl p-3">
            <table className="w-[100%]">
              <thead className="border-b border-b-slate-400">
                <tr className="text-left">
                  <td className="p-2">#</td>
                  <th className="p-2">Title</th>
                  <th className="p-2">Album</th>
                </tr>
              </thead>
              <tbody>
                {songs &&
                  songs.map((song, index) => (
                    <TableRow index={index} song={song} setAlbum={setAlbum} />
                  ))}
              </tbody>
            </table>
          </div>
          <MusicPlayer album={album} />
        </div>
      </div>
    </div>
  );
}
