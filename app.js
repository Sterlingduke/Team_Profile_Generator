//NPM modules
const inquirer = require("inquirer");

//Constructors
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//Local Modules

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
    name: "email",
    message: "Manager Email",
    validate: answer => (answer.length < 1) ? console.log ("input needed") : true
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Manager Office Number?",
    
  },
  {
    type: "confirm",
    name: "mgrAddMember",
    message: "Add New member?",
    
  },
]

const employeeQuestions = [
  {
      type: "input",
      name: "name",
      message: "Please enter employee name",

      validate: answer => (answer.length < 1) ? console.log("Your input is required") : true
  },
  {
      type: "input",
      name: "id",
      message: "Please enter employee ID",
      validate: answer => (answer.length < 1) ? console.log("Your input is required") : true
  },
  {
      type: "input",
      name: "email",
      message: "Please enter email address",
      validate: answer => (answer.length < 1) ? console.log("Your input is required") : true
  },
  {
      type: "list",
      name: "role",
      message: "What is job role of this team member?",
      choices: ["Engineer", "Intern"]

  },
  {
      when: answer => (answer.role) === "Engineer",
      type: "input",
      name: "github",
      message: "Please enter your github username",
      validate: answer => (answer.length < 1) ? console.log("Your input is required") : true

  },
  {
      when: answer => (answer.role) === "Intern",
      type: "input",
      name: "school",
      message: "Please enter your school name",
      validate: answer => (answer.length < 1) ? console.log("Your input is required") : true
  },
  {
      type: "confirm",
      name: "addMore",
      message: "Would you like to add another member?",
  }
]

function addTeamMembers() {
  inquirer
      .prompt(managerQuestions)
      .then(answer => {

          var teamManager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);
          teamMembers.push(teamManager);

          if (answer.mgrAddMember === true) {
              addMoreTeamMembers();
          } else {
              buildTeam(teamMembers);
          }
      })
}

function addMoreTeamMembers() {
  inquirer
      .prompt(employeeQuestions)
      .then(answer => {
          if (answer.role === "Engineer") {
              var newMember = new Engineer(answer.name, answer.id, answer.email, answer.github);
          } else if (answer.role === "Intern") {
              var newMember = new Intern(answer.name, answer.id, answer.email, answer.school);
          }

          teamMembers.push(newMember);

          if (answer.addMore === true) {
              addMoreTeamMembers();
          } else {
              buildTeam(teamMembers);

          }
      })
}


function buildTeam() {

  if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR)
  }
      fs.writeFileSync(outputPath, render(teamMembers), "utf-8");

}

addTeamMembers();
