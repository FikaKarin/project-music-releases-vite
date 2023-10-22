import React from 'react';
import './style.css'

export default function CoverImage({ url, alt }) {
  return <img className='cover-image' src={url} alt={alt} />;
}
