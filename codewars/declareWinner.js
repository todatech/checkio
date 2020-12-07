const log = console.log;
const assert = require('assert');

function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function () { return this.name; }
}

Fighter.prototype.attack = function (defender) {
  defender.health -= this.damagePerAttack;
  return (defender.health <= 0);
}

function declareWinner(fighter1, fighter2, firstAttacker) {

  let attacker, defender;
  [attacker, defender] = (fighter1.name === firstAttacker) ?
    [fighter1, fighter2] :
    [fighter2, fighter1];

  while (!attacker.attack(defender)) {
    [attacker, defender] = [defender, attacker];
  }
  return attacker.name;

}

log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"), "Lew");
log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry"), "Harry");
log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry"), "Harald")
log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald"), "Harald")
log(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry"), "Harald")
log(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald"), "Harald")