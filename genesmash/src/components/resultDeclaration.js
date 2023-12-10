import React, { useState } from 'react';
import { strategies } from '../game/strategies.js';
import { getStrategyById } from './util.js';

const ResultDeclaration = (rounds) => {

  console.log('Im in here in the rounds declaration dawg');
  console.log(rounds);
  console.log(rounds.length);
  

  const[roundIndex, setRoundIndex] = useState(0);
  const round = rounds[roundIndex];
  console.log(roundIndex);
  const roundInformation = Object.entries(rounds[roundIndex]).map(([key, value]) => (
    <p>
      {key} : {value}
    </p>
  ));
  const handlePrevRound = () => {
    setRoundIndex((roundIndex) => (roundIndex > 0 ? roundIndex - 1 : Object.keys(rounds).length-1));
  };

  const handleNextRound = () => {
    setRoundIndex((roundIndex) => (roundIndex < Object.keys(rounds).length - 1 ? roundIndex + 1 : 0));
  };

  const leftLightPinkSrc = process.env.PUBLIC_URL + '/icons/directions/left-button-light-pink2.png';
  const leftPinkSrc = process.env.PUBLIC_URL + '/icons/directions/left-button-pink.png';
  const rightLightPinkSrc = process.env.PUBLIC_URL + '/icons/directions/right-button-light-pink.png';
  const rightPinkSrc = process.env.PUBLIC_URL + '/icons/directions/right-button-pink.png';

  const [ isHoveredLeft, setHoveredLeft ] = useState(false);
  const [ isHoveredRight, setHoveredRight ] = useState(false);

  const handleMouseEnterLeft = () => {
    setHoveredLeft(true);
  }
  const handleMouseLeaveLeft = () => {
    setHoveredLeft(false);
  }
  const handleMouseEnterRight = () => {
    setHoveredRight(true);
  }
  const handleMouseLeaveRight = () => {
    setHoveredRight(false);
  }

  return (
    <div className='result-declaration'>
    <div className = 'strategy-change'>

      <div className='nav-button' id = 'left-nav-button'>
          <button onClick={handlePrevRound} id='left-nav-button'>
          <img src={ isHoveredLeft?leftPinkSrc:leftLightPinkSrc } 
              alt="Previous"
              onMouseEnter={handleMouseEnterLeft} 
              onMouseLeave ={handleMouseLeaveLeft}/>
          </button>   
      </div>

      <h2>ROUND {roundIndex+1}</h2>

      <div className = 'nav-button' id = 'right-nav-button'>
          <button onClick={handleNextRound} id='right-nav-button'>
          <img src={ isHoveredRight?rightPinkSrc:rightLightPinkSrc } 
              alt="Previous"
              onMouseEnter={handleMouseEnterRight}
              onMouseLeave={handleMouseLeaveRight} />
          </button>
      </div>

    </div>

      <div id = 'round-description'>

        {roundInformation}

      </div>
  </div>
  );
};

export default ResultDeclaration;
