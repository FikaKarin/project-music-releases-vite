import React from 'react';

export default function CoverImage({ url, alt }) {
  return <img className='cover-image' src={url} alt={alt} />;
}
