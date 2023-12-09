import React from 'react';
import PlayerCard from './playerCard.js';
import PlayButton from './playButton.js';
import {text} from '../content/text.js';

const Board = () => {
  const handlePlayButtonClick = () => {
    console.log('Play button clicked! Redirecting...');
  };

  return (
    <div className='board'>
      <div className='board-card' id = 'board-left-card'>
        <PlayerCard />
      </div>
      <div className='play-game'>
        <PlayButton id = 'main-play-button'/>
      </div>
      <div className='board-card' id = 'board-right-card'>
        <PlayerCard />
      </div>
    </div>
  );
};

export default Board;
