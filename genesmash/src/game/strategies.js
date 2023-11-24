class Cooperate {
    
    static name = 'Cooperate';
    static description = 'Player always cooperates';
    chooseAction(playerActions, opponentActions) {
        return 'cooperate';
    }
}

class Defect {
    
    static name = 'Defect';
    static description = 'Player always defects';
    chooseAction(playerActions, opponentActions) {
        return 'defect';
    }
}

class TitForTat {
    static name = 'Tit for Tat';
    static description = 'A simple strategy in which the player always plays the last move of the opponent, rewarding nice players and retaliating against cheaters';
    chooseAction(playerActions, opponentActions) {
        if(opponentActions && opponentActions.length < 1){
            return 'cooperate';
        }
        return opponentActions && opponentActions[opponentActions.length -1];
    }
}

export {
    Cooperate,
    Defect,
    TitForTat,
};