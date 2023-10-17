import React from 'react';

const CoverImage = ({ url, alt }) => {
  return <img className="cover-image" src={url} alt={alt} />;
};

export default CoverImage;

