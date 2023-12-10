import React from 'react';
import { useState } from 'react';
import TitleContent from '../components/titleContent.js'; 
import Background from '../components/background.js';
import RunTheGame from '../components/runTheGame.js';
import PlayerCard from '../components/playerCard.js';
import Board from '../components/board.js';

import '../css/globalStyles.css';
import ResultBoard from '../components/resultBoard.js';


const Results = (game) => {
  return (
    <div>
      <TitleContent />
      <ResultBoard />
      <Background/>
    </div>
  );
};

export default Results;
