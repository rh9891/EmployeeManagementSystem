var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "uR#%q@g3WCm!",
  database: "company_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("**************************************************************************************************");
    console.log("");
    console.log("");
    console.log("         ███████╗███╗░░░███╗██████╗░██╗░░░░░░█████╗░██╗░░░██╗███████╗███████╗");
    console.log("         ██╔════╝████╗░████║██╔══██╗██║░░░░░██╔══██╗╚██╗░██╔╝██╔════╝██╔════╝");
    console.log("         █████╗░░██╔████╔██║██████╔╝██║░░░░░██║░░██║░╚████╔╝░█████╗░░█████╗░░");
    console.log("         █████╗░░██╔████╔██║██████╔╝██║░░░░░██║░░██║░╚████╔╝░█████╗░░█████╗░░");
    console.log("         ██╔══╝░░██║╚██╔╝██║██╔═══╝░██║░░░░░██║░░██║░░╚██╔╝░░██╔══╝░░██╔══╝░░");
    console.log("         ███████╗██║░╚═╝░██║██║░░░░░███████╗╚█████╔╝░░░██║░░░███████╗███████╗");
    console.log("         ╚══════╝╚═╝░░░░░╚═╝╚═╝░░░░░╚══════╝░╚════╝░░░░╚═╝░░░╚══════╝╚══════╝");
    console.log("███╗░░░███╗░█████╗░███╗░░██╗░█████╗░░██████╗░███████╗███╗░░░███╗███████╗███╗░░██╗████████╗");
    console.log("████╗░████║██╔══██╗████╗░██║██╔══██╗██╔════╝░██╔════╝████╗░████║██╔════╝████╗░██║╚══██╔══╝");
    console.log("██╔████╔██║███████║██╔██╗██║███████║██║░░██╗░█████╗░░██╔████╔██║█████╗░░██╔██╗██║░░░██║░░░");
    console.log("██║╚██╔╝██║██╔══██║██║╚████║██╔══██║██║░░╚██╗██╔══╝░░██║╚██╔╝██║██╔══╝░░██║╚████║░░░██║░░░");
    console.log("██║░╚═╝░██║██║░░██║██║░╚███║██║░░██║╚██████╔╝███████╗██║░╚═╝░██║███████╗██║░╚███║░░░██║░░░");
    console.log("╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝╚═╝░░╚═╝░╚═════╝░╚══════╝╚═╝░░░░░╚═╝╚══════╝╚═╝░░╚══╝░░░╚═╝░░░");
    console.log("               ░██████╗██╗░░░██╗░██████╗████████╗███████╗███╗░░░███╗");
    console.log("               ██╔════╝╚██╗░██╔╝██╔════╝╚══██╔══╝██╔════╝████╗░████║");
    console.log("               ╚█████╗░░╚████╔╝░╚█████╗░░░░██║░░░█████╗░░██╔████╔██║");
    console.log("               ░╚═══██╗░░╚██╔╝░░░╚═══██╗░░░██║░░░██╔══╝░░██║╚██╔╝██║");
    console.log("               ██████╔╝░░░██║░░░██████╔╝░░░██║░░░███████╗██║░╚═╝░██║");
    console.log("");
    console.log("");
    console.log("**************************************************************************************************");
    console.log("");
    console.log("");
    start();
});

function start() {
    inquirer.prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "View all employees",
            "View all employees by department",
            "View all employees by manager",
            "Add employee",
            "Remove employee",
            "Update employee role",
            "Update employee manager",
            "Exit"
        ]
    }).then(function(answer) {
            switch (answer.action) {
            case "View all employees":
            viewAll();
            break;

            case "View all employees by department":
            viewAllByDept();
            break;

            case "View all employees by manager":
            viewAllByManager();
            break;

            case "Add employee":
            addEmployee();
            break;

            case "Remove employee":
            removeEmployee();
            break;

            case "Update employee":
            updateEmployee();
            break;

            case "Update employee role":
            updateEmployeeRole();
            break;

            case "Update employee manager":
            updateEmployeeManager();
            break;
            
            case "Exit":
            connection.end();
            break;
      }
    });
};

function viewAll() {
  var query = "SELECT employee.id, employee.first_name, employee.last_name, employee.role_id FROM employee role.title FROM";
  connection.query(query, function(err, results) {
    if (err) throw err;
    start();
  });
};
