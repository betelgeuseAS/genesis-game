import React from 'react';
import './ResponsiveImage.sass';

interface IResponsiveImage {
  src: string
  alt: string
}

export const ResponsiveImage: React.FC<IResponsiveImage> = ({ src, alt }) => {
  return (
    <img src={src} className="img-responsive img-width" alt={alt} />
  );
};
