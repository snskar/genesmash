import React from 'react';
import '../css/titleContent.css';

const TitleContent = () => {
  return (
    <div className='title-content-container'>
      <div className='logo-icon-container'>
        <img src = { process.env.PUBLIC_URL + '/icons/logo/logo-icon.png' } alt = 'application logo'/> 
      </div>
      <div className='title-text-container'>
        <h1 className='title'>GENE SMASH</h1>
        <h2 className='upper-subtitle'>ITERATED PRISONERS DILEMMA</h2>
      </div>
    </div>
  );
};

export default TitleContent;
