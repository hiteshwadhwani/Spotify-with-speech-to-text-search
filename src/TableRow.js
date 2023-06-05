import React from "react";

export default function TableRow({ index, song, setAlbum }) {
  return (
    <tr className="cursor-pointer hover:opacity-70">
      <td className="p-2 w-[5%]">{index + 1}</td>
      <td key={song.uri} onClick={() => setAlbum(song.uri)} className="flex flex-col p-2">
        <div className="">{song.name}</div>
        <div className="font-light text-slate-700 text-sm">{song.artists[0].name || 'NA'}</div>
      </td>
      <td className="p-2">{song.album !== undefined ? song.album.album_type : 'NA'}</td>
    </tr>
  );
}
