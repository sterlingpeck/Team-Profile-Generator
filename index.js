const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generatePage = require("./src/generate-page");
const writeFile = require("./utils/files");

const employees = [];

managerAlert = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the manager's name?",
      },
      {
        type: "input",
        name: "managerId",
        message: "What is the manager's ID?",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the manager's email?",
      },
      {
        type: "input",
        name: "managerOffice",
        message: "What is the manager's office number?",
      },
    ])
    .then((managerData) => {
      const manager = new Manager(
        managerData.managerName,
        managerData.managerId,
        managerData.managerEmail,
        managerData.managerPhone
      );
      employees.push(manager);
      return addEmployeesMenu();
    });
};

engineerAlert = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is the engineer's name?",
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is the engineer's ID?",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineer's email?",
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is the engineer's GitHub username?",
      },
    ])
    .then((engineerData) => {
      const engineer = new Engineer(
        engineerData.engineerName,
        engineerData.engineerId,
        engineerData.engineerEmail,
        engineerData.engineerGithub
      );
      employees.push(engineer);
      return addEmployeesMenu();
    });
};

internAlert = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is the intern's name?",
      },
      {
        type: "input",
        name: "internId",
        message: "What is the intern's ID?",
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is the intern's email?",
      },
      {
        type: "input",
        name: "internSchool",
        message: "What is the intern's school?",
      },
    ])
    .then((internData) => {
      const intern = new Intern(
        internData.internName,
        internData.internId,
        internData.internEmail,
        internData.internSchool
      );
      employees.push(intern);
      return addEmployeesMenu();
    });
};

addEmployeesMenu = () => {
  return inquirer
    .prompt({
      type: "list",
      name: "addEmployees",
      message: "Would you like to add another employee to the team?",
      choices: ["An engineer", "An intern", "No, I'm done"],
    })
    .then((userAnswer) => {
      switch (userAnswer.addEmployees) {
        case "An engineer":
          return engineerAlert();
        case "An intern":
          return internAlert();
        case "No, I'm done":
          return employees;
      }
    });
};

managerAlert(employees)
  .then((employeeData) => {
    return generatePage(employeeData);
  })
  .then((pageHTML) => {
    return writeFile(pageHTML);
  });
