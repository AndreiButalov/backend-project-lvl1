import readlineSync from 'readline-sync';
import randomNumber from '../Tools/NumRandom.js';

//export default ranNum = randomNumber;
const startEven = () => {


	console.log("Welcome to the brain Games!");
	const name = readlineSync.question("May I have your name? ");
	console.log(`Hello, ${name}`);
	
	console.log("Answer 'yes' if the number is even, otherwise 'no'.");

	//const ranNum = randomNumber;

	for (let i = 0; i < 3; i++) {

		//const ranNum = randomNumber;
		
		console.log(`Question: ${randomNumber}`);

		const answer = readlineSync.question("Your answer:");

		if (answer.includes('yes') === true && randomNumber % 2 === 0) {
			console.log('Correct!');
		}else if (answer.includes('no') === true && randomNumber % 2 !== 0) {
			console.log('Correct!');
		}else{
			console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
			return;
		}
		
	}

	console.log(`Congratulation ${name}!`);

};

export default startEven;

