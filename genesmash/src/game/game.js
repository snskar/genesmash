const { MAX_ROUNDS } = require('./gameRules');
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
      round.number = number;

      const [player1, player2] = this.players;

      const action1 = player1.chooseAction(this.player1Actions, this.player2Actions);
      round[`${player1.name}-action`] = action1;

      const action2 = player2.chooseAction(this.player2Actions, this.player1Actions);
      round[`${player2.name}-action`] = action2;


      round[`${player1.name}-scored`] = player1.updateScore(action1, action2);
      round[`${player2.name}-scored`] = player2.updateScore(action2, action1);
  
      console.log(`${player1.name}: ${action1}, ${player2.name}: ${action2}`);

      return round;
    }
  
    playRounds() {

      let round = {};
      for (let i = 0; i < MAX_ROUNDS; i++) {
        round = this.playRound(i);
        this.rounds.push(round);
      }

      this.results['player1Score'] = this.players[0].score;
      this.results['player2Score'] = this.players[1].score;
      if(this.players[0].score === this.players[1].score){
        this.results.winner = 'draw';
      } else {
        this.results.winner = this.players[0].score > this.players[1].score? this.players[0].name:this.players[1].name;
      }

      console.log('Game Over');
      console.log(`${this.players[0].name}'s Score: ${this.players[0].score}`);
      console.log(`${this.players[1].name}'s Score: ${this.players[1].score}`);
    }
  }

  module.exports = Game;
  