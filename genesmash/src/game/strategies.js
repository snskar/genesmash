class Cooperate {
    
    static name = 'Cooperate';
    static description = 'Player always cooperates';
    chooseAction(rounds = []) {
        return 'cooperate';
    }
}

class Defect {
    
    static name = 'Defect';
    static description = 'Player always defects';
    chooseAction(rounds = []) {
        return 'defect';
    }
}

class TitForTat {
    static name = 'Tit for Tat';
    static description = 'A simple strategy in which the player always plays the last move of the opponent, rewarding nice players and retaliating against cheaters';
    chooseAction(rounds = [], opponentName) {
        if(rounds.length < 1){
            return 'cooperate';
        }
        return rounds[rounds.length -1] && rounds[rounds.length -1].opponentName;
    }
}