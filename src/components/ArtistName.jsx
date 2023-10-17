import React from 'react';

export default function ArtistName({ albumData }) {
  return <div className='artist-name'>{albumData.artists[0].name}</div>;
}
