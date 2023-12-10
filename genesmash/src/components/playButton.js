import React from 'react';
import '../css/playButton.css';
import { playGame } from '../game/playGames.js';
import Game from '../game/game.js';
import { useNavigate } from 'react-router-dom';


const PlayButton = ({
    player1Id, 
    player2Id, 
    // game, 
    // setGame
}) => {
    const navigate = useNavigate();
    const handlePlayButton = () => {
        
        const newGame = playGame(player1Id, player2Id);
        const rounds = newGame.rounds;
        console.log(rounds);

        console.log('this my marker man');
        console.log(newGame.players);

        // setGame(newGame);

        const gameDataStripped = {
            strategyIds : [newGame.players[0].strategy.id, newGame.players[1].strategy.id],
            rounds: newGame.rounds,
            scores: [newGame.players[0].score, newGame.players[1].score],
        }

        navigate('/results', { state : gameDataStripped });

    };
    const handleMouseEnter = () => {};
    const handleMouseLeave = () => {};

    return (
    <div>
        <div className = 'play-button'>
            <button onClick={handlePlayButton} id = 'main-play-button'>
                <img src={ process.env.PUBLIC_URL + '/icons/play/play-pink.png' } 
                    alt="Play Button"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave} />
            </button>
        </div>    
        <div id = 'play-button-desc'>
            <h2>PLAY</h2>
        </div>
    </div>  
    );  
};

export default PlayButton;