import React from 'react';
import { useState } from 'react';
import TitleContent from './components/titleContent.js'; 
import Background from './components/background.js';
import RunTheGame from './components/runTheGame.js';
import PlayerCard from './components/playerCard.js';
import Board from './components/board.js';
import Home from './pages/home.js';
import Results from './pages/results.js';
import AppRouter from './components/appRouter.js';

import './css/globalStyles.css';


const App = () => {
  return (

    <>
        {/* <Home/> */}
    {/* // <Results /> */}
        <AppRouter />
    
    </>
    // <div>
    //   <TitleContent />
    //   <Board/>
    //   <Background/>
    // </div>

  );
};

export default App;
