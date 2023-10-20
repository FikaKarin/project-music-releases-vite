import React from 'react';
import AlbumName from '../AlbumName/AlbumName';
import ArtistName from '../ArtistName/ArtistName';
import CoverImage from '../CoverImage/CoverImage';
import ButtonsContainer from '../ButtonsContainer/ButtonsContainer';
import '../Album/style.css';

export default function Album({ albumData }) {
  return (
    <div className='album'>
      <div className='album-content'>
        <CoverImage
          className='cover-image'
          url={albumData.images[0].url}
          alt={albumData.name}
        />
        <ButtonsContainer />
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
