import React from 'react';

const SongArtist = ({artist}) =>{
    return(
        <section>
            <h3>{artist.strArtist}</h3>
            <img alt={artist.strArtist} src={artist.strArtistThumb}></img>
            <p>{artist.intBornYear} - {artist.intDiedYear || "Presente"}</p>
            <p>{artist.strCountry}</p>
            <p>{artist.strGenre}</p>
            <p>{artist.strBiographyEN   }</p>
        </section>
    );
}

export default SongArtist