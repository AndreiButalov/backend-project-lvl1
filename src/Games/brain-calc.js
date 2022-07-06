import readlineSync from 'readline-sync';
import randomNumber from '..Tools/NumRandom.js';

const startCalc = () => {
    console.log("Welcome to the brain Games!");
    const name = readlineSync.question("May I have your name? ");
    console.log(`Hello, ${name}!`);
    console.log("What is the result of the expression?");

    for(let i = 0; i < 3; i++) {
        const ranNum = randomNumer(1, 100);
        console.log(`Question: `);
        const userAnswer = readlineSync.question("Your answer: ");
    }    
    
};
