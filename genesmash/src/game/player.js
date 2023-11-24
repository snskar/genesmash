import {
    MUTUAL_COOPERATION,
    MUTUAL_DEFECTION,
    TAKING_ADVANTAGE,
    TAKEN_ADVANTAGE,
} from './gameRules';

class Player {
  constructor(name, strategy) {
    this.name = name;
    this.strategy = strategy;
    this.score = 0;
  }

  chooseAction(opponentActions) {
    return this.strategy.chooseAction(opponentActions);
  }

  updateScore(playerAction, opponentAction) {

    if(playerAction === 'cooperate' && opponentAction === 'defect'){
        scored += 
    }
    this.score += scored;
  }
}

export default Player;
