import { MUTUAL_COOPERATION, MUTUAL_DEFECTION, TAKING_ADVANTAGE, TAKEN_ADVANTAGE } from './gameRules.js';

class Player {
  constructor(name, strategy) {
    this.name = name;
    this.strategy = strategy;
    this.score = 0;
  }

  chooseAction(playerActions, opponentActions) {
    return this.strategy.chooseAction(playerActions, opponentActions);
  }

  updateScore(playerAction, opponentAction) {

    let scored = 0;
    if(playerAction === 'cooperate' && opponentAction === 'defect'){
        scored = TAKEN_ADVANTAGE;
    } else if (playerAction === 'cooperate' && opponentAction === 'cooperate'){
        scored = MUTUAL_COOPERATION;
    } else if (playerAction === 'defect' && opponentAction === 'cooperate'){
        scored = TAKING_ADVANTAGE;
    } else if (playerAction === 'defect' && opponentAction === 'defect'){
        scored = MUTUAL_DEFECTION;
    }
    this.score += scored;
    return scored
  }
}

export default Player;
