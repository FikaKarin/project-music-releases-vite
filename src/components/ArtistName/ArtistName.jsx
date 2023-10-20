import React from 'react';
import '../ArtistName/style.css';

export default function ArtistName({ albumData }) {
  const formatArtists = (artists) => {
    const artistArray = Array.isArray(artists) ? artists : [artists];

    if (artistArray.length === 1) {
      return artistArray[0];
    } else if (artistArray.length === 2) {
      return artistArray.join(' & ');
    } else {
      const lastTwoArtists = artistArray.slice(-2).join(' & ');
      const remainingArtists = artistArray.slice(0, -2).join(', ');
      return `${remainingArtists}, ${lastTwoArtists}`;
    }
  };

  return (
    <div className='artist-name'>
      {formatArtists(albumData.artists[0].name)}
    </div>
  );
}
