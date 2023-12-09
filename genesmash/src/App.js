import React from 'react';
import TitleContent from './components/titleContent.js'; 
import Background from './components/background.js';
import RunTheGame from './components/runTheGame.js';
import PlayerCard from './components/playerCard.js';
import Board from './components/board.js';

import './css/globalStyles.css';

const App = () => {
  return (
    <div>
      <TitleContent />
      {/* <PlayerCard sideAligned = {'left'} defaultId = {2}/>
      <PlayerCard sideAligned = {'right'} defaultId = {2}/> */}
      <Board />
      <Background/>
    </div>
  );
};

export default App;
