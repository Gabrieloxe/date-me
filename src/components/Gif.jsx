import React, { useState } from 'react';
import Image from 'next/image';
import './Gif.css';

export const Gif = ({ url }) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  const handleImageError = () => {
    // Handle image loading error if needed
    console.error('Failed to load the gif:', url);
    setLoading(false);
  };

  const gifContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '100%',
  };

  const gifClassName = `gif ${loading ? 'hidden' : 'fade-in'}`;

  return (
    <div style={gifContainerStyle}>
      {loading && (
        <div className='loading-text'>
          <span>Loading gif...</span>
          <div className='loader'></div>
        </div>
      )}
      <div style={{ position: 'relative' }}>
        <Image
          className={gifClassName}
          priority={true}
          alt='Animated gif'
          src={url}
          height={0}
          width={0}
          onLoad={handleImageLoad}
          onError={handleImageError}
          style={{
            display: loading ? 'none' : 'block',
            height: 'auto',
            width: '100%',
          }}
        />
      </div>
    </div>
  );
};
