import readlineSync from 'readline-sync';
import randomNumber from '../Tools/NumRandom.js';

const startCalc = () => {
	console.log("Welcome to the brain Games!");
	const name = readlineSync.question("May I have your name? ");
	console.log(`Hello, ${name}!`);
	console.log("What is the result of the expression?");

	for (let i = 0; i < 3; i++) { 
		const ranNum1 = randomNumber(1, 100);
        	const ranNum2 = randomNumber(1, 100);
        	const operator = ['+', '-', '*'];
        	const random = Math.floor(Math.random() * operator.length);
        	const ranOperator = operator[random];

        	console.log(`Question: ${ranNum1} ${ranOperator} ${ranNum2}`);

        	let correctAnswer = 0;

        	if (ranOperator === '+') {
                	correctAnswer = ranNum1 + ranNum2;
			console.log(correctAnswer);
        	}else if (ranOperator === '-') {
                	correctAnswer = ranNum1 - ranNum2;
			console.log(correctAnswer);
        	}else {
                	correctAnswer = ranNum1 * ranNum2;
			console.log(correctAnswer);
        	}

        	const userAnswer = readlineSync.question("Your answer: ");
		console.log(userAnswer);

		if (userAnswer === correctAnswer) {
			console.log('yes');
		}else console.log('no');

	}
	console.log(`Congratulation ${name}`);

};

export default startCalc;
