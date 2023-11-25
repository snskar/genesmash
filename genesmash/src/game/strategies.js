import { COOPERATE, DEFECT } from "./gameRules.js";
import { percentageProbability } from "./util.js";

export const strategies = {

    Cooperate : {
        
        id: 1,
        name : 'Cooperate',
        description : 'Player always cooperates.',
        chooseAction : function(playerActions, opponentActions) {
            return COOPERATE;
        },
    },

    Defect : {
        
        id : 2,
        name : 'Defect',
        description : 'Player always defects.',
        chooseAction : function(playerActions, opponentActions) {
            return DEFECT;
        },
    },
     
    TitForTat :  {
        id : 3,
        name : 'Tit-for-Tat',
        description : 'A simple strategy in which the player always plays the last move of the opponent, rewarding nice players and retaliating against cheaters.',
        chooseAction : function(playerActions, opponentActions) {
            if(opponentActions.length < 1){
                return COOPERATE;
            }
            return opponentActions[opponentActions.length -1];
        },
    },
    
    SeeSaw :  {
        id : 4,
        name : 'See-Saw',
        description : 'Player starts with cooperate and then keeps flipping between cooperate and defect options alternatively.',
        chooseAction : function(playerActions, opponentActions) {
            if(playerActions.length < 1){
                return DEFECT;
            }
            return playerActions[playerActions.length -1] === COOPERATE? DEFECT: COOPERATE;
        },
    }, 

    Random :  {
        id : 5,
        name : 'Random',
        description : 'Player randomly selects a move.',
        chooseAction : function(playerActions, opponentActions) {
            return percentageProbability(50)? COOPERATE : DEFECT;
        },
    }, 

    Pavlov :  {
        id : 6,
        name : 'Pavlov',
        description : 'If las mve was successful hen cninue i herwise swich i up',
        chooseAction : function(playerActions, opponentActions) {
            if(playerActions.length < 1){
                return COOPERATE;
            }
            const lastPlayerAction = playerActions[playerActions.length -1];
            const lastOpponentAction = opponentActions[opponentActions.length-1];
            // Retain action if winning 
            if(lastOpponentAction === COOPERATE){
                return lastPlayerAction;
            }
            // Switch it up if losing
            return lastPlayerAction === COOPERATE? DEFECT : COOPERATE;
        },
    }, 

    GoodCop :  {
        id : 7,
        name : 'Good-Cop',
        description : 'Player cooperates with a 75% probability, ignorant of opponents moves.',
        chooseAction : function(playerActions, opponentActions) {
            return percentageProbability(75)? COOPERATE : DEFECT;
        },
    }, 

    BadCop :  {
        id : 8,
        name : 'Bad-Cop',
        description : 'Player defects with a 75% probability, ignorant of opponents moves.',
        chooseAction : function(playerActions, opponentActions) {
            return percentageProbability(75)? DEFECT : COOPERATE;
        },
    }, 
}