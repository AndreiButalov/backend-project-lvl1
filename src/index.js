import readlineSync from 'readline-sync';

function startGames(bedinung, gamesRound) {
	console.log("Welcome to the Brain Games!");
	const userName = readlineSync.question("May I have your name? ");
	console.log(`Hello, ${userName}`);
	// aufruf bedinung aus brain-calc
	console.log(bedinung);

	for (let i = 0; i < 3; i++){
		const [question, correctAnswer] = gamesRound();
		console.log(`Question: ${question}`);
		const userAnswer = readlineSync.question("Your Answer: ");

		if (correctAnswer === userAnswer) {
			console.log("Correct!");
		}else {console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
			return;
		}
	}
	console.log(`Congratulation ${userName}!`);
};

export default startGames;
