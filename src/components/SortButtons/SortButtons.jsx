import React from 'react';
import './style.css';

export default function SortButtons({ handleSort }) {
  return (
    <div>
      <button onClick={() => handleSort(null)}>All Items</button>
      <button onClick={() => handleSort('single')}>Singles</button>
      <button onClick={() => handleSort('album')}>Albums</button>
    </div>
  );
}
