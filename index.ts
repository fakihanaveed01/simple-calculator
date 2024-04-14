#! /usr/bin/env node
import inquirer from "inquirer";

const answer= await inquirer.prompt([{message: "Enter first number", type: "number", name: "firstnumber"},
{message: "Enter second number", type:"number", name:"secondnumber"},
{
   message: "Select any one the operators to perform operations",
   type: "list",
   name: "operators",
   choices: ["Subtraction", "Addition", "Multiplication", "Division"]},
]);

//conditional statement
if (answer.operators==="Addition"){
    console.log(answer.firstnumber + answer.secondnumber);
}
  else if (answer.operators === "Subtraction"){
    console.log(answer.firstnumber - answer.secondnumber);
  }
  else if (answer.operators === "Multiplication"){
    console.log(answer.firstnumber * answer.secondnumber);
  }
  else if (answer.operators === "Division"){
    console.log(answer.firstnumber / answer.secondnumber);
  }
    else {console.log ("Your answer is invalid");

    } 


