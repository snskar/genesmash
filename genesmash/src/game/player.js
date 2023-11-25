import { MUTUAL_COOPERATION, MUTUAL_DEFECTION, TAKING_ADVANTAGE, TAKEN_ADVANTAGE, COOPERATE, DEFECT } from './gameRules.js';

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
    if(playerAction === COOPERATE && opponentAction === DEFECT){
        scored = TAKEN_ADVANTAGE;
    } else if (playerAction === COOPERATE && opponentAction === COOPERATE){
        scored = MUTUAL_COOPERATION;
    } else if (playerAction === DEFECT && opponentAction === COOPERATE){
        scored = TAKING_ADVANTAGE;
    } else if (playerAction === DEFECT && opponentAction === DEFECT){
        scored = MUTUAL_DEFECTION;
    }
    this.score += scored;
    return scored
  }
}

export default Player;
