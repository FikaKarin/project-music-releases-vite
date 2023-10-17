import React from 'react';
import { useState } from 'react';
import data from './data.json';
import Album from './components/Album';
import Header from './components/Header';
import './components/style.css'

export const App = () => {
  const [sortType, setSortType] = useState(null);

  const albums = data.albums.items;
  const sortedAlbums =albums.filter((album) => {
    if (sortType === null) {
      return true;// show all if type is not selected
    } 
    return album.album_type === sortType;
  })
  return (
    <div className="app">
      <Header />
      <div className="album-container">
        {sortedAlbums.map((album, index) => (
          <Album key={index} albumData={album} />
        ))}
      </div>
    </div>
  );
};

