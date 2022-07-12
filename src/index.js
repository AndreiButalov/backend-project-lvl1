import readlineSync from 'readline-sync';

const startGames = (gamesDaten, gamesDescription) {
	console.log('Welcome to the Brain Games!');
	const name = readlineSync.question('May I have your name? ');
	console.log(`Hello, ${name}`);
	console.log(gamesDaten);
	for (let i = 0; i < 3; i++){
		const [answer, correctAnswer] = gamesRound();
		console.log(`Question: ${question}`);
		const userAnswer = readlineSync.question('Your Answer: ');
		if (userAnswer === correctAnswer) {
			console.log('Correct!');
		}else {
			console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
			return;
		}
	}
	console.log(`Congratulation, ${name}!`);
};

export default startGames;
