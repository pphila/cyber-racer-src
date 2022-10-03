//should add utility runback function to edit object instance based on 
//stage/level of Game.
import { Character } from "./character.js";

// Utility Logic

function dieRoll(carDice) {
  let dieRoll = Math.floor((Math.random()*carDice) + 1);
  return dieRoll;
}

export default class RaceSystem {
  constructor(playerCharacter, npcEnemy, stage) {
    this.playerOne = playerCharacter;
    this.playerTwo = npcEnemy;
    this.stage = stage;
    this.carDice = 0;
  }

  runRace(dieRoll) {
    let carRollNum = dieRoll;
    let p1 = this.playerOne;
    let npc = this.playerTwo;
    if (p1.carRollNum >= npc.carRollNum) {
    return true;
    } else return false;
  }
}