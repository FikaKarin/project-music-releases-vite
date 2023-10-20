import React from 'react';
import play from '../../assets/icons/play.svg';

export default function PlayIcon() {
  return (
    <img
      src={play}
      alt='play-icon'
      className='play-icon'
      style={{ fill: '#ffffff' }}
    />
  );
}
