const generateEmployeeInfo = (employees) => {
  const html = [];
  const generateManager = (manager) => {
    console.log(manager);
    let managerInfo = ` 
        <div class="card" style="width: 18rem;">
            <div class="card-header">
           ${manager.name} <br/>
           <div>Manager</div>
           <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
            <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
            </ul>
        </div>
        `;
    html.push(managerInfo);
  };
  const generateEngineer = (engineer) => {
    console.log(engineer);
    let engineerInfo = ` 
        <div class="card" style="width: 18rem;">
            <div class="card-header">
           ${engineer.name} <br/>
           <div>Engineer</div>
           <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
            <li class="list-group-item">Github Username: <a target="_blank" href="https://github.com/${engineer.githubUsername}">${engineer.githubUsername}</a></li>
            </ul>
        </div>
        `;
    html.push(engineerInfo);
  };
  const generateIntern = (intern) => {
    console.log(intern);
    let internInfo = ` 
        <div class="card" style="width: 18rem;">
            <div class="card-header">
           ${intern.name} <br/>
           <div>Intern</div>
           <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
            <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
        `;
    html.push(internInfo);
  };
  console.log(employees);

  for (let i = 0; i < employees.length; i++) {
    if (employees[i].getRole() === "Manager") {
      generateManager(employees[i]);
    }
    if (employees[i].getRole() === "Engineer") {
      generateEngineer(employees[i]);
    }
    if (employees[i].getRole() === "Intern") {
      generateIntern(employees[i]);
    }
  }

  return html.join("");
};

module.exports = (employees) => {
  return `
    <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
        <!-- JavaScript Bundle with Popper -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../dist/style.css" />
    <title>Team Information</title>
  </head>
  <body>
    <header>
    <h1> My Team </h1>
    </header>
    <main> ${generateEmployeeInfo(employees)} </main>
     
  </body>
  </html>
    `;
};
