module.exports.strategies = {

    Cooperate : {
        
        id: 1,
        name : 'Cooperate',
        description : 'Player always cooperates',
        chooseAction : function(playerActions, opponentActions) {
            return 'cooperate';
        },
    },

    Defect : {
        
        id : 2,
        name : 'Defect',
        description : 'Player always defects',
        chooseAction : function(playerActions, opponentActions) {
            return 'defect';
        },
    },

     TitForTat :  {
        id : 3,
        name : 'Tit-for-Tat',
        description : 'A simple strategy in which the player always plays the last move of the opponent, rewarding nice players and retaliating against cheaters',
        chooseAction : function(playerActions, opponentActions) {
            if(opponentActions && opponentActions.length < 1){
                return 'cooperate';
            }
            return opponentActions && opponentActions[opponentActions.length -1];
        },
    },   
}