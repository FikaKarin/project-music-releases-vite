import React from 'react';

export default function AlbumName({ albumData }) {
  return (
    <div className='album-name'>{albumData.name}</div>
  );
};

