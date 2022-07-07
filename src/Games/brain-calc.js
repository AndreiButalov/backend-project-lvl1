import readlineSync from 'readline-sync';
import randomNumber from '..Tools/NumRandom.js';

const startCalc = () => {
    console.log("Welcome to the brain Games!");
    const name = readlineSync.question("May I have your name? ");
    console.log(`Hello, ${name}!`);
    console.log("What is the result of the expression?");
	


    for(let i = 0; i < 3; i++) {
	const operator = ['+', '-', '*'];
	    
        const ranNum = randomNumer(1, 100);
	const num1 = ranNum();
	const num2 = ranNum();
	
	const calculate = (num1, num2, operator) =>{
		switch (operator) {
		   default: return null;
		   case ('+'): return num1 + num2;
		   case ('-'): return num1 - num2;
		   case ('*'): return num1 * num2;
		}
	};    
        console.log(`Question: ${num1} ${operaror} ${num2}`);
        const userAnswer = readlineSync.question("Your answer: ");
	const rightAnswer = calculate(num1, num2, operator);
    }    
    
};
