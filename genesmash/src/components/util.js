
import {strategies} from '../game/strategies.js';

export const getStrategyById = (id) => {
    for (const strategyKey in strategies) {
      if (strategies.hasOwnProperty(strategyKey)) {
        const strategy = strategies[strategyKey];
        if (strategy.id === id) {
          return strategy;
        }
      }
    }
    return null; // Return null if no strategy with the given id is found
  }