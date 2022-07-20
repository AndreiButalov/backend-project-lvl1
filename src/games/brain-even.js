import readlineSync from 'readline-sync';
import randomNumber from '../tools/NumRandom.js';
import startGames from '../index.js';

const bedinung = ("Answer 'yes' if the number is even, otherwise 'no'.");

function gamesRound() {
    const question = randomNumber(1, 100);
    const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
    return [question, correctAnswer];
    
};

function startEven() {
    startGames(bedinung, gamesRound);
};

export default startEven;
