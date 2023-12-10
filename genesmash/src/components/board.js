import React, { useState } from 'react';
import PlayerCard from './playerCard.js';
import PlayButton from './playButton.js';
import {text} from '../content/text.js';
import {Game} from '../game/game.js';
import { initializeGame } from '../game/playGames.js';

const Board = () => {
  const handlePlayButtonClick = () => {
    console.log('Play button clicked! Redirecting...');
  };
  
  const [player1Id, setPlayer1Id] = useState(2);
  const [player2Id, setPlayer2Id] = useState(2);
  const [didPlayer1Win, setDidPlayer1Win] = useState(false);
  const [didPlayer2Win, setDidPlayer2Win] = useState(false);
  const [game, setGame] = useState(initializeGame());

  return (
    <div className='board'>
      <div className='board-card' id = 'board-left-card'>
        <PlayerCard currentStrategyId={player1Id} setStrategyId={setPlayer1Id}/>
      </div>
      <div className='play-game'>
        <PlayButton 
        id = 'main-play-button' 
        player1Id = {player1Id} 
        player2Id = {player2Id} 
        // game = {game} 
        // setGame = {setGame}
        />
      </div>
      <div className='board-card' id = 'board-right-card'>
        <PlayerCard currentStrategyId={player2Id} setStrategyId={setPlayer2Id}/>
      </div>
    </div>
  );
};

export default Board;
