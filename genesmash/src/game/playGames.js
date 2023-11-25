import Player from './player';
import { strategies } from './strategies';
import Game from './game';

const strategy1 = strategies.SeeSaw;
const strategy2 = strategies.TitForTat;

const player1 = new Player('Alice', strategy1);
const player2 = new Player('Bob', strategy2);

const game1 = new Game(player1, player2);

game1.playRounds();

