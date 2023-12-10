import React, { useState } from 'react';
import { strategies } from '../game/strategies.js';
import { getStrategyById } from './util.js';

const PlayerResultCard = ({playerId, winnerStatus, pointsScored}) => {
  
  let winText;  
  if(winnerStatus === 'winner')  {
    winText = 'WINNER';
  } else if (winnerStatus === 'loser'){
    winText = 'LOSER';
  } else {
    winText = 'DRAW';
  }
  
  const currentStrategy = getStrategyById(playerId); 

  return (

    <div className='player-result-card' id = {winnerStatus}>
      <img 
        id = 'player-result-card-img'
        src={currentStrategy.imgPath} 
        alt={currentStrategy.name} /> 

      <div className = 'strategy-result-name'>

        <h2>{currentStrategy.player}</h2>
        <h1 id = 'win-status-text'>{winText}</h1>
      </div>

      <div className = 'player-points-scored'>
        <h2>Points: {pointsScored}</h2>
      </div>
        
    </div>
  );
};

export default PlayerResultCard;
