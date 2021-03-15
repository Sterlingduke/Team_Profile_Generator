const addPeople = {


    type: "list",
    name: "addmore",
    message: "Select team member to add",
    choices: [
  
      "Engineer",
      "Intern",
      "I dont want to add more people"
  
    ]
  
  }
  
  const managerQuestions = [
    {
      type: 'input',
      name: 'name',
      message: "What is your manager's name?",
      validate: answer => {
        const containsNumsSpecial = /[^a-zA-Z]/g; 
        const temp = answer.match(containsNumsSpecial); 
  
       
        if (answer.length === 0) {
          return "Name should be a string and cannot be empty";
  
        };
  
      
        if (temp !== null) {
          return "Name should not contain special characters or numbers";
        }
  
        return true;
      }
    },
  
    {
      type: 'input',
      name: 'id',
      message: "What is your manager's id?",
  
      validate: answer => {
        if (isNaN(answer)) {
          return "Invalid number";
  
  
        }
        return true;
  
      }
  
  
    },
    {
      type: 'input',
      name: 'email',
      message: "What is your manager's email?",
      validate: answer => {
       
        if (answer.length === 0) {
          return "Email cannot be empty";
        }
        return true;
      }
  
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "What is your manager's officeNumber?",
      validate: answer => {
        if (isNaN(answer)) {
          return "Invalid number";
        }
        return true;
  
      }
  
    },
  
    
    { ...addPeople }
  ];
  
  
  const engineerQuestions = [
    {
      type: 'input',
      name: 'name',
      message: "What is your engineer's name?",
      validate: answer => {
        const containsNumsSpecial = /[^a-zA-Z]/g; 
        const temp = answer.match(containsNumsSpecial);   
  
       
        if (answer.length === 0) {
          return "Name should be a string and cannot be empty";
  
        };
  
       
        if (temp !== null) {
          return "Name should not contain special characters or numbers";
  
        }
  
        return true;
      }
    },
  
    {
      type: 'input',
      name: 'id',
      message: "What is your engineer's id?",
      validate: answer => {
        if (isNaN(answer)) {
          return "Invalid number";
  
        }
        return true;
  
      }
  
    },
    {
      type: 'input',
      name: 'email',
      message: "What is your engineer's email?",
      validate: answer => {
       
        if (answer.length === 0) {
          return "Email cannot be empty";
        }
        return true;
      }
    },
    
    {
      type: 'input',
      name: 'github',
      message: "What is your engineer's github?",
      validate: answer => {
       
        if (answer.length === 0) {
          return "Github cannot be empty";
        }
        return true;
      }
  
    },
   
    { ...addPeople }
  ];
  
  
  const internQuestions = [
    {
      type: 'input',
      name: 'name',
      message: "What is your intern's name?",
      validate: answer => {
        const containsNumsSpecial = /[^a-zA-Z]/g;
        const temp = answer.match(containsNumsSpecial);   
  
        
        if (answer.length === 0) {
          return "Name should be a string and cannot be empty";
  
        };
  
        
        if (temp !== null) {
          return "Name should not contain special characters or numbers";
        }
  
        return true;
      }
    },
  
  
    {
      type: 'input',
      name: 'id',
      message: "What is your intern's id?",
      validate: answer => {
        if (isNaN(answer)) {
          return "Invalid number";
        }
        return true;
  
      }
  
    },
    {
      type: 'input',
      name: 'email',
      message: "What is your intern's email?",
      validate: answer => {
        
        if (answer.length === 0) {
          return "Email cannot be empty";
        }
        return true;
      }
  
    },
    {
      type: 'input',
      name: 'school',
      message: "What is your intern's school?",
      validate: answer => {
       
        if (answer.length === 0) {
          return "School cannot be empty";
        }
        return true;
      }
  
    },
 
    { ...addPeople }
  ];
  
  module.exports = {
    engineerQuestions,
    managerQuestions,
    internQuestions
  }