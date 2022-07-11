import readlineSync from 'readline-sync';
import randomNumber from '../Tools/NumRandom.js';

const startEven = () => {

    console.log("Welcome to the brain Games!");
	const name = readlineSync.question("May I have your name? ");
	console.log(`Hello, ${name}!`);
	
	console.log("Answer 'yes' if the number is even, otherwise 'no'.");
	
	for (let i = 0; i < 3; i++) {
        const ranNum = randomNumber(1, 100);		
		console.log(`Question: ${ranNum}`);		

		const correctAnswer = ranNum % 2 === 0 ? 'yes' : 'no';
		const userAnswer = readlineSync.question("Your answer:");

		if (userAnswer === correctAnswer) {
			console.log('Correct!')
		}else { console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}`);
			return;
		}
		
	}
	console.log(`Congratulation ${name}!`);
};

export default startEven;

