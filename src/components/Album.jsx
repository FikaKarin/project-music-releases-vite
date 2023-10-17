import React from 'react';
import '../components/style.css';
import AlbumName from './AlbumName';
import ArtistName from './ArtistName';
import CoverImage from './CoverImage';
import HeartIcon from './HeartIcon';
import DotsIcon from './DotsIcon';
import PlayIcon from './PlayIcon';

export default function Album({ albumData }) {
  return (
    <div className='album'>
      <div className='album-content'>
        <CoverImage
          className='cover-image'
          url={albumData.images[0].url}
          alt={albumData.name}
        />
        <div className='icons-container'>
          <button>
            <HeartIcon className='heart-icon' />
          </button>
          <button>
            <PlayIcon className='play-icon' />
          </button>
          <button>
            <DotsIcon className='dots-icon' />
          </button>
        </div>
      </div>
      <div className='album-info'>
        <a
          href={albumData.external_urls.spotify}
          target='_blank'
          rel='noopener noreferrer'
        >
          <AlbumName className='album-name' albumData={albumData} />
        </a>
        <a
          href={albumData.artists[0].external_urls.spotify}
          target='_blank'
          rel='noopener noreferrer'
        >
          <ArtistName className='artist-name' albumData={albumData} />
        </a>
      </div>
    </div>
  );
}
