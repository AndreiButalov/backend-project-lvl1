import readlineSync from 'readline-sync';
import randomNumber from '../tools/NumRandom.js';
import startGames from '../index.js';

const bedinung = ("Find the greatest common divisior of given numbers.");

function gcdCalc(ranNum1, ranNum2) {
    while (ranNum1 !== ranNum2) {
        if (ranNum1 > ranNum2) {
            ranNum1 = ranNum1 - ranNum2;
        }else {
            ranNum2 = ranNum2 - ranNum1;
        }
    }
    let gcd = ranNum1;
    return gcd;
};

function gamesRound() {
    const ranNum1 = randomNumber(1, 100);
    const ranNum2 = randomNumber(1, 100);

    const correctAnswer = String(gcdCalc(ranNum1, ranNum2));
    const question = `${ranNum1} ${ranNum2}`;
    return  [question, correctAnswer];
};

function startGcd() {
    startGames(bedinung, gamesRound);
};
export default startGcd;
