import Player from './player.js';
import { strategies } from './strategies.js';
import Game from './game.js';

const strategy1 = strategies.SeeSaw;
const strategy2 = strategies.TitForTat;

const player1 = new Player('Alice', strategy1);
const player2 = new Player('Bob', strategy2);

const game1 = new Game(player1, player2);

game1.playRounds();

