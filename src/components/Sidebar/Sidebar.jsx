import React from 'react';
import '../Sidebar/style.css';

export default function Sidebar({ playlists, isOpen, onToggleSidebar }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <h2>Special selection</h2>
      <div className='border-line'></div>
      <play-btn-container>
        <button className='toggle-button' onClick={onToggleSidebar}>
          {isOpen ? '→' : ''}
        </button>
      </play-btn-container>
      <ul>
        {playlists.map((playlist, index) => (
          <li className='list-item' key={index}>
            <a
              href={playlist.external_urls.spotify}
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src={
                  playlist.images && playlist.images.length > 0
                    ? playlist.images[0].url
                    : ''
                }
                alt='Image'
                className='image'
              />
              {playlist.name}
            </a>
            <p>{playlist.description}</p>
            <p>Total Tracks: {playlist.tracks.total}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
