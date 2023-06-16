import React from "react";
import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";
import Message from "./Message";

const SongDetails = ({ search, lyric, bio }) => {
  if (!lyric || !bio) return null;
  return (
    <>
      <h2>Detalles</h2>
      {lyric.error || lyric.err || lyric.name === "AbortError" ? (
        <Message
          msg={`No existe la canción: <em>${search.song}</em>`}
          bgColor="#dc3545"
        />
      ) : (
        <SongLyric title={search.song} lyrics={lyric.lyrics}/>
      )}
      {bio.artist ? (
        <SongArtist artist={bio.artist[0]}/>
      ) : (
        <Message
          msg={`No existe el artista: <em>${search.artist}</em>`}
          bgColor="#dc3545"
        />
      )}
    </>
  );
};

export default SongDetails;
