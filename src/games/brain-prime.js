import readlineSync from 'readline-sync';
import randomNumber from '../tools/NumRandom.js';
import startGames from '../index.js';

const task = ("Answer 'yes' if given number is prime. Otherwise answer 'no'.");

function isPrime(num) {
    if (num === 1) {
        return false;
    }

    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

function gamesRound() {
    const num = randomNumber(2, 100);
    const question = num;
    const correctAnswer = isPrime(num) ? 'yes' : 'no';
    return [question, correctAnswer];
};

function startPrime() {
    startGames(task, gamesRound);
};

export default startPrime;
