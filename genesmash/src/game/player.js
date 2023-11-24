class Player {
  constructor(name, strategy) {
    this.name = name;
    this.strategy = strategy;
    this.score = 0;
  }

  chooseAction(opponentActions) {
    return this.strategy.chooseAction(opponentActions);
  }

  updateScore(scored) {
    this.score += scored;
  }
}

export default Player;
