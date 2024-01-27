import React from 'react';
import { Gif } from './Gif';

export const Outcome = () => {
  return (
    <div style={{ maxWidth: '100%', textAlign: 'center' }}>
      <h2>Yay! I knew you would say yes!</h2>
      <div>
        <Gif url='https://media.giphy.com/media/3o6wNIK2unphUcCcqQ/giphy.gif' />
      </div>
    </div>
  );
};
