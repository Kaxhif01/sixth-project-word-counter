#! /usr/bin/env node

// import inquirer module, which is a command line interface for node.js
import inquirer from "inquirer";

// declare a constant 'answers' and assign it to the result of inquirer.prompt function
const answers: {
  Sentence: string;
} = await inquirer.prompt(
    [
      {
       name: "Sentence",
       type: "input",
       message: "Enter your sentence to count the word:"


      }
   ]
);
 const words = answers.Sentence.trim().split(" ")

 //print th array of words to the console
 console.log(words);

 //print word count of the sentence to the console
 console.log(`Your sentence word count is ${words.length}`);
 

