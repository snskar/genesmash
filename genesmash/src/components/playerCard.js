import React, { useState } from 'react';
import { strategies } from '../game/strategies.js';

function getStrategyById(id) {
    for (const strategyKey in strategies) {
      if (strategies.hasOwnProperty(strategyKey)) {
        const strategy = strategies[strategyKey];
        if (strategy.id === id) {
          return strategy;
        }
      }
    }
    return null; // Return null if no strategy with the given id is found
  }
const PlayerCard = ({sideAligned, defaultId}) => {

  console.log(sideAligned);

  const [currentStrategyId, setStrategyId] = useState(2);
  const currentStrategy = getStrategyById(currentStrategyId);

  const handlePrevStrategy = () => {
    setStrategyId((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : Object.keys(strategies).length - 1));
  };

  const handleNextStrategy = () => {
    setStrategyId((prevIndex) => (prevIndex < Object.keys(strategies).length - 1 ? prevIndex + 1 : 0));
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

    <div className='player-card' id = {sideAligned}>
      <img 
        id = 'player-card-img'
        src={currentStrategy.imgPath} 
        alt={currentStrategy.name} /> 

      <div className = 'strategy-change'>

        <div className='nav-button' id = 'left-nav-button'>
            <button onClick={handlePrevStrategy} id='left-nav-button'>
            <img src={ isHoveredLeft?leftPinkSrc:leftLightPinkSrc } 
                alt="Previous"
                onMouseEnter={handleMouseEnterLeft} 
                onMouseLeave ={handleMouseLeaveLeft}/>
            </button>   
        </div>

        <h2>{currentStrategy.player}</h2>

        <div className = 'nav-button' id = 'right-nav-button'>
            <button onClick={handleNextStrategy} id='right-nav-button'>
            <img src={ isHoveredRight?rightPinkSrc:rightLightPinkSrc } 
                alt="Previous"
                onMouseEnter={handleMouseEnterRight}
                onMouseLeave={handleMouseLeaveRight} />
            </button>
        </div>

      </div>

        <p className='player-card-description'>{currentStrategy.description} </p>
    </div>
  );
};

export default PlayerCard;
