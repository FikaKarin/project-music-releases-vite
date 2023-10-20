import React from 'react';
import '../AlbumName/style.css';

export default function AlbumName({ albumData }) {
  return <div className='album-name'>{albumData.name}</div>;
}
