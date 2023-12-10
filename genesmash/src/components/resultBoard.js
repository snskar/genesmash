import React from 'react';
import PlayerCard from './playerCard.js';
import PlayerResultCard from './playerResultCard.js';
import PlayButton from './playButton.js';
import {text} from '../content/text.js';
import ResultDeclaration from './resultDeclaration.js';
import { useLocation } from "react-router-dom";

const ResultBoard = () => {

  const location = useLocation();
  const gameData = location.state;
  console.log('This is a marker goddamit');
  console.log(gameData);
  const winnerProps = {
    playerId:2,
    winnerStatus: 'winner',
    pointsScored: 5000,
  }

  const loserProps = {
    playerId: 2, 
    winnerStatus: 'loser',
    pointsScored: 1250,
  }

  let player1WinStatus, player2WinStatus;

  if(gameData.scores[0] === gameData.scores[1]){
    player1WinStatus = 'draw';
    player2WinStatus = 'draw';
  } else if (gameData.scores[0] > gameData.scores[1]){
    player1WinStatus = 'winner';
    player2WinStatus = 'loser';
  } else {
    player1WinStatus = 'loser';
    player2WinStatus = 'winner';
  }

  const player1Props = {
    playerId: gameData.strategyIds[0],
    winnerStatus: player1WinStatus,
    pointsScored: gameData.scores[0],
  };

  const player2Props = {
    playerId: gameData.strategyIds[1],
    winnerStatus: player2WinStatus,
    pointsScored: gameData.scores[1],
  };

  const rounds = gameData.rounds;

  return (
    <div className='board'>
      <div className='board-card' id = 'board-left-card'>
        <PlayerResultCard {...player1Props} />
      </div>
      <div className='play-game'>
        <ResultDeclaration {...rounds}/>
      </div>
      <div className='board-card' id = 'board-right-card'>
        <PlayerResultCard {...player2Props}/>
      </div>
    </div>
  );
};

export default ResultBoard;
