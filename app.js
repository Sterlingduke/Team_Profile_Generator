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

//creating array
const employee = [];


//inquirer to ask manager info questions
inquirer.prompt(questions.managerQuestions)
  .then(answers => {
    //creating manager's object
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    teamMembers.push(manager);
    // console.log(teamMembers);
    if (answers.addmore === "Engineer") {
      addEngineer();
    } else if (answers.addmore === "Intern") {
      addIntern();
    } else {
      console.log("No-one else to add!");
      renderTeam();
    }


  })
  .catch(error => {
    console.log(error);

  });

//creating function to ask engineer info questions
function addEngineer() {
  inquirer
    .prompt(questions.engineerQuestions)
    .then(answers => {
      const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);      //creating engineer object
      teamMembers.push(engineer);
      // console.log(teamMembers);
      if (answers.addmore === "Engineer") {
        addEngineer();     //recursive function
      } else if (answers.addmore === "Intern") {
        addIntern();
      } else {
        console.log("No-one else to add!");
        renderTeam();
      }


    })
    .catch(error => {
      console.log(error);

    });

}

//creating function to ask intern info questions
function addIntern() {
  inquirer
    .prompt(questions.internQuestions)
    .then(answers => {
      ////creating engineer object
      const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
      teamMembers.push(intern);
      // console.log(teamMembers);
      if (answers.addmore === "Engineer") {
        addEngineer();
      } else if (answers.addmore === "Intern") {
        addIntern();         //recursive function
      } else {
        console.log("No-one else to add!");
        renderTeam();
      }



    })
    .catch(error => {
      console.log(error);

    });
}
 // creating render function to make the team html 
function renderTeam() {
  fs.writeFile(outputPath, render(teamMembers), "utf8", (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
    
  });

}