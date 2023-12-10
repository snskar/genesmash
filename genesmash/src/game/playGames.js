import Player from './player.js';
import { strategies } from './strategies.js';
import Game from './game.js';
import { getStrategyById } from '../components/util.js';

export const playGame = (player1Id, player2Id) => {
    const strategy1 = getStrategyById(player1Id);
    const strategy2 = getStrategyById(player2Id);

    console.log(strategy1);
    console.log(strategy2);

    const player1 = new Player(strategy1.player, strategy1);
    const player2 = new Player(strategy2.player, strategy2);

    const game = new Game(player1, player2);
    game.playRounds();
    return game;
};

export const initializeGame =  () => {

    const strategy1 = strategies.Random;
    const strategy2 = strategies.TitForTat;

    console.log(strategy1);
    console.log(strategy2);

    const player1 = new Player(strategy1.player, strategy1);
    const player2 = new Player(strategy2.player, strategy2);

    const game = new Game(player1, player2);
    game.playRounds();
    return game;
};


