# SRK-Quiz

28 years ago a boy came to Mumbai in search for his love with no money with him . No one knew that he would go on to become one of the richest, biggest, most successful actors of all time. Yes, I am talking about none other than - SHAH RUKH KHAN.

This quiz app is for his true fans like me who adore him , who are inspired by him and look up to him whenever they feel to quit.

## Source Code

A gist of my source code is provided below showing how I used object as a data structure to store a question and its respective answer.

```bash
var choice1 = ['Shah Nawaz Khan','Abdul Rehman','Feroze Qureshi','Aqueel Rehman'];
var ans1 = read.keyInSelect(choice1,'What is the name given by SRK\'s grandmother to him ?');
```

## Working
![Screenshot of working](https://github.com/Mr-Sushant/SRK-Quiz/blob/main/img/ss1.jpg)

## Lessons Learned

I got to know a lot of new things from this session. 
* How to take input from a list of options using readline-sync. This was done in order to increase the UX.
* Got to learn about "readline-sync" and "CHALK" libraries in npm.
* Use green and red color code for correct and incorrect answers respectively using CHALK library.

## readline-sync

In this project I used the readline-sync library to take input from user providing him with a list of 4 options from which he has to choose 1 option. 

To use readline-sync or any library we first have to include it in our code. To do that we use 
```bash
var readLineSync = require("readline-sync");
```
To ask question from user we use
``` bash
var ans1 = read.keyInSelect(choice1,'What is the name given by SRK\'s grandmother to him ?');
```
## CHALK

Again to use CHALK we have to include it in our project. We do this by using 

``` bash
var chalk = require("chalk");
```
Now to give Green and Red color code I used 
``` bash
var correct = chalk.bold.green;
var incorrect = chalk.bold.red;
```
Now if the user gave correct answer 
``` bash
console.log(correct("YAAAAY..!!!! You got it right SRKian"));
```
If the user gave incorrect answer
``` bash
console.log(incorrect("Ooopps.. You got this wrong buddy."));
```