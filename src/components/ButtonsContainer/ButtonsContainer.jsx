import React from 'react';
import DotsIcon from './DotsIcon';
import PlayIcon from './PlayIcon';
import HeartIcon from './HeartIcon';
import '../ButtonsContainer/style.css';

export default function ButtonsContainer() {
  return (
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
  );
}
