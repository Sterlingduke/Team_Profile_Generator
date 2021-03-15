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
const teamMembers = [];


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








// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
