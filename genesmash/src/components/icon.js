import React from 'react';
import '../css/icons.css';

const Icon = ({
     src,
     alt,
     id,
    }) => {
  return (
    <div className='icon-container' id={id}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Icon;
