import readlineSync from 'readline-sync';
import randomNumber from '../tools/NumRandom.js';
import startGames from '../index.js';

const task = ("Answer 'yes' if given number is prime. Otherwise answer 'no'.");

function ranPrime(ranNum) {
    if (ranNum === 1) {
        return false;
    }

    for (let i = 2; i <= ranNum / 2; i++) {
        if (ranNum % i === 0) {
            return false;
        }
    }
    return true;
};

function gamesRound() {
    const ranNum = randomNumber(2, 100);
    const question = ranNum;
    const correctAnswer = ranPrime(ranNum) ? 'yes' : 'no';
    return [question, correctAnswer];
};

function startPrime() {
    startGames(task, gamesRound);
};

export default startPrime;
