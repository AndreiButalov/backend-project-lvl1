import readlineSync from 'readline-sync';
import randomNumber from '../tools/NumRandom.js';
import startGames from '../index.js';

const bedinung = ("What is the result of the expression?");

function ranCalc(ranNum1, ranNum2, ranOperator) {
    if (ranOperator === '+') {
        return ranNum1 + ranNum2;
    }else if (ranOperator === '-') {
        return ranNum1 - ranNum2;
    }else {return ranNum1 * ranNum2;
    }
}

function gamesRound() {
    const operators = ['+', '*', '-'];
    const ranNum1 = randomNumber(1, 30);
    const ranNum2 = randomNumber(1, 30);
    const ranOperator = operators[randomNumber(0, operators.length - 1)];

    const correctAnswer = String(ranCalc(ranNum1, ranNum2, ranOperator));
    const question = `${ranNum1} ${ranOperator} ${ranNum2}`;

    return [question, correctAnswer];
}

function startCalc() {
    startGames(bedinung, gamesRound);
};

export default startCalc;

