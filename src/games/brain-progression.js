import readlineSync from 'readline-sync';
import randomNumber from '../tools/NumRandom.js';
import startGames from '../index.js';

const task = ("What number is missing in the progression?");

function ranProgression(firstIndex, schrit, ranLength) {
    const arr = [];
    for (let i = 0; i <= ranLength; i++) {
        arr.push(firstIndex + schrit * i);
    }
    return arr;
}

function gamesRound() {
    const firstIndex = randomNumber(1, 10);
    const schrit = randomNumber(3, 20);
    const ranLength = randomNumber(5, 10);

    const progression = ranProgression(firstIndex, schrit, ranLength);
    const index = randomNumber(0, progression.length - 1);

    const correctAnswer = String(progression[index]);
    progression[index] = '..';
    const question = progression;
    return [question, correctAnswer];
} 

function startProgression() {
    startGames(task, gamesRound);    
};

export default startProgression;
