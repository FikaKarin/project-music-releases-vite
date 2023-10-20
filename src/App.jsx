import React, { useState } from 'react';
import data from './data.json';
import stretchedData from './stretched-goal.json';
import Album from './components/Album/Album';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import SortButtons from './components/SortButtons/SortButtons';
import './components/style.css';

export const App = () => {
  const [sortType, setSortType] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSort = (type) => {
    setSortType(type);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const albums = data.albums.items;
  const sortedAlbums = albums.filter((album) => {
    if (sortType === null) {
      return true;
    }
    return album.album_type === sortType;
  });

  const playlists = stretchedData.playlists.items;

  return (
    <div className='app'>
      <Header />
      <div className='container'>
        <div className='sort-buttons'>
          <SortButtons handleSort={handleSort} />
          <button className='toggle-button2' onClick={toggleSidebar}>
            {isSidebarOpen ? 'Playlists → ' : 'Playlists ←'}
          </button>
        </div>
        <Sidebar
          playlists={playlists}
          isOpen={isSidebarOpen}
          onToggleSidebar={toggleSidebar}
        />
        <div className='album-container'>
          {sortedAlbums.map((album, index) => (
            <Album key={index} albumData={album} />
          ))}
        </div>
      </div>
    </div>
  );
};
