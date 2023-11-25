import { MAX_ROUNDS } from './gameRules.js';
class Game {
    constructor(player1, player2) {
      this.players = [player1, player2];
      this.rounds = [];
      this.player1Actions = [];
      this.player2Actions = [];
      this.results = {};
    }

    playRound(number) {

      let round = {};
      round['Round-Number'] = number;

      const [player1, player2] = this.players;

      const action1 = player1.chooseAction(this.player1Actions, this.player2Actions);
      round[`${player1.name}-Action`] = action1;

      const action2 = player2.chooseAction(this.player2Actions, this.player1Actions);
      round[`${player2.name}-Action`] = action2;

      this.player1Actions.push(action1)
      this.player2Actions.push(action2);

      round[`${player1.name}-Scored`] = player1.updateScore(action1, action2);
      round[`${player2.name}-Scored`] = player2.updateScore(action2, action1);
  
      console.log(`${player1.name}: ${action1}, ${player2.name}: ${action2}`);
      this.rounds.push(round);

      return round;
    }
  
    playRounds() {

      let round = {};
      for (let i = 0; i < MAX_ROUNDS; i++) {
        round = this.playRound(i);
        this.rounds.push(round);
      }

      this.results[`${this.players[0].name}-Score`] = this.players[0].score;
      this.results[`${this.players[1].name}-Score`] = this.players[1].score;
      if(this.players[0].score === this.players[1].score){
        this.results['Winner'] = 'Draw';
      } else {
        this.results['Winner'] = this.players[0].score > this.players[1].score? this.players[0].name:this.players[1].name;
      }

      console.log('Game Over');
      // console.log(`${this.players[0].name}'s Score: ${this.players[0].score}`);
      // console.log(`${this.players[1].name}'s Score: ${this.players[1].score}`);
      console.log(this.results);
    }
  }

  export default Game;
  