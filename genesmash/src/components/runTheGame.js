import React from 'react';
import {text} from '../content/text.js';
import '../css/runTheGame.css';

const RunTheGame = () => {
  return (
    <div className = 'description-play-container'>

        <div className = 'play-icon-container'>
            <img src = { process.env.PUBLIC_URL + '/icons/play/play-pink.png' } alt = 'application logo'/>
        </div>
        <div className = 'main-page-description'>
            <p>{text.brief_description}</p>
        </div>
        
    </div>

  );
};

export default RunTheGame;