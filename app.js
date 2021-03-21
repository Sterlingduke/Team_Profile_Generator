//NPM modules
const inquirer = require("inquirer");

//Constructors
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//Local Modules
const questions = require("./lib/questions.js");
const render = require("./lib/htmlRenderer");

const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");


let teamMembers = [];

const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Manager Name?",
    validate: answer => (answer.length < 1) ? console.log ("input needed") : true
  },
  {
    type: "input",
    name: "id",
    message: "Manager ID?",
    validate: answer => (answer.length < 1) ? console.log ("input needed") : true
  },
  {
    type: "input",
    name: "wmail",
    message: "Manager Email",
    validate: answer => (answer.length < 1) ? console.log ("input needed") : true
  },
  {
    type: "input",
    name: "Office Number",
    message: "Manager Office Number?",
    
  },
  {
    type: "input",
    name: "Add Member",
    message: "Add ew memeber",
    
  },
]


