var read = require("readline-sync");
const chalk = require("chalk");
var correct = chalk.bold.green;
var incorrect = chalk.bold.red;
var score = 0;
var index=0;
function greet(){
	var userName = read.question("Hey !!.. What's your name ?");
	console.log("Welcome "+userName+'.. Lets see "How well you know SRK"');
	console.log("---------------------------------");
	console.log("Rules :");
	console.log(correct("Correct Answer : 1 point"));
	console.log(incorrect("Incorrect Answer : 0 point"));
	console.log("---------------------------------");
	read.keyInPause();
}
function correctAnswer(){
	console.log(correct("YAAAAY..!!!! You got it right SRKian"));
	score++;
	console.log(correct("Your Score :  "+score));
}
function incorrectAnswer(){
	console.log(incorrect("Ooopps.. You got this wrong buddy."));
	console.log(incorrect("Your Score :  "+score));
}
greet();


//questions
var choice1 = ['Shah Nawaz Khan','Abdul Rehman','Feroze Qureshi','Aqueel Rehman']; // Abdul Rehman
var ans1 = read.keyInSelect(choice1,'What is the name given by SRK\'s grandmother to him ?');
if(ans1 === 1)
	correctAnswer();
else
	incorrectAnswer();

var choice2 = ['Barry John\'s Theatre','National School of Drama','FTII','Asmita Theatre Group'];
var ans2 = read.keyInSelect(choice2,'What is the name of SRK\'s acting school ?');
if(ans2 === 0)
	correctAnswer();
else
	incorrectAnswer();

var choice3 = ['Political Science','English','Mass Communication','Economics'];
var ans3 = read.keyInSelect(choice3,'What is the course SRk pursued in Hansraj College ?');
if(ans3 === 3)
	correctAnswer();
else
	incorrectAnswer();

var choice4 = ['Nawaz','Mumtaz','Shehnaz','Kamal'];
var ans4 = read.keyInSelect(choice4,'What is SRK\'s sister first name ?');
if(ans4 === 2)
	correctAnswer();
else
	incorrectAnswer();

var choice5 = ['Dil toh pagal hai','Chalte Chalte','K3G','Kuch Kuch Hota Hai'];
var ans5 = read.keyInSelect(choice5,'In which of the movie SRK\'s name is ot Rahul ?');
if(ans5 === 1)
	correctAnswer();
else
	incorrectAnswer();

var choice6 = [2,4,6,8];
var ans6 = read.keyInSelect(choice6,'How many times SRK played negative role ?');
if(ans6 === 2)
	correctAnswer();
else
	incorrectAnswer();

var choice7 = ['Asoka','Baazigar','Darr','Devdas'];
var ans7 = read.keyInSelect(choice7,'In which of the movie SRK\'s character do not die ?');
if(ans1 === 0)
	correctAnswer();
else
	incorrectAnswer();

var choice8 = ['Madhuri Dixit','Kajol','Juhi Chawla','Rani Mukherjee'];
var ans8 = read.keyInSelect(choice8,'Which of the actress worked with SRK most number of times ?');
if(ans8 === 2)
	correctAnswer();
else
	incorrectAnswer();

var choice9 = [222,555,777,999];
var ans9 = read.keyInSelect(choice9,'What is the series SRK considers lucky for himself ?');
if(ans9 === 1)
	correctAnswer();
else
	incorrectAnswer();

console.log()
console.log()
console.log("YOUR FINAL SCORE  "+score);