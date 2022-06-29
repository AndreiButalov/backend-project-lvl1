import readlineSync from 'readline-sync';

const userNameWelcome = () => {
	console.log("Welcome to the brain Games!");
	const name = readlineSync.question("May I have your name? ");

	console.log(`Hello, ${name}`);

	return name;

};

export default userNameWelcome;


