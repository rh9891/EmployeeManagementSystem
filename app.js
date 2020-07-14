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

            case "Add employee role":
            addEmployeeRole();
            break;

            case "Add department":
            addDepartment();
            break;

            // case "Remove employee":
            // removeEmployee();
            // break;

            // case "Update employee":
            // updateEmployee();
            // break;

            case "Update employee role":
            updateEmployeeRole();
            break;

            // case "Update employee manager":
            // updateEmployeeManager();
            // break;
            
            case "Exit":
            connection.end();
            break;
      }
    });
};

function viewAll() {
  var query = "SELECT employee.id, employee.first_name, employee.last_name, CONCAT(role.title)job_title, CONCAT(department.name)department, role.salary, CONCAT(m.first_name, ' ' ,m.last_name)manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee m ON m.id = employee.manager_id";
  connection.query(query, function(err, results) {
    if (err) throw err;
    console.log("**************************************************************************************************");
    console.table(results);
    start();
  });
};

function viewAllByDept() {
  var query = "SELECT CONCAT(employee.first_name, ' ' ,employee.last_name)employee, CONCAT(department.name)department FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee m ON m.id = employee.manager_id ORDER BY department";
  connection.query(query, function(err, results) {
    if (err) throw err;
    console.log("**************************************************************************************************");
    console.table(results);
    start();
  });
};

function viewAllByManager() {
  var query = "SELECT CONCAT(employee.first_name, ' ' ,employee.last_name)employee, CONCAT(m.first_name, ' ' ,m.last_name)manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee m ON m.id = employee.manager_id ORDER BY manager";
  connection.query(query, function(err, results) {
    if (err) throw err;
    console.log("**************************************************************************************************");
    console.table(results);
    start();
  });
};

function addEmployee() {
  var query = "SELECT * FROM role"
  connection.query(query, function(err, results) {
    if (err) throw err;
    inquirer
      .prompt([
        {
          name: "first_name",
          type: "input",
          message: "What is the employee's first name?"
        },
        {
          name: "last_name",
          type: "input",
          message: "What is the employee's last name?"
        },
        {
          name: "employee_role",
          type: "rawlist",
          message: "What is the employee's role?",
          choices: results.map(role => role.title)
        }
      ]).then(({first_name, last_name, employee_role}) => {
        var roleID;
        results.map(get => {
          if(get.title === employee_role) {
            roleID = get.id;
            connection.query("INSERT INTO employee SET ?",
            {
              first_name: first_name,
              last_name: last_name,
              role_id: roleID
            },
            function(err) {
              if (err) throw err;
              console.log("");
              console.log("You have successfully created an employee.");
              console.log("");
              start();
            })};
        });
      });
  });
};

function addEmployeeRole() {
  inquirer
      .prompt([
        {
          name: "new_employee_role",
          type: "input",
          message: "What is the employee role that you would like to add?"
        }
      ]).then(function(answer) {
          connection.query(
          "INSERT INTO role SET ?",
          {
            title: answer.new_employee_role
          },
          function(err) {
            if (err) throw err;
            console.log("");
            console.log("You have successfully created an employee role.");
            console.log("");
            start();
          }
        );
      });
};

function addDepartment() {
  inquirer
      .prompt([
        {
          name: "new_department",
          type: "input",
          message: "What is the name of the department that you would like to add?"
        },
      ]).then(function(answer) {
          connection.query(
          "INSERT INTO department SET ?",
          {
            name: answer.new_department
          },
          function(err) {
            if (err) throw err;
            console.log("");
            console.log("You have successfully created an employee role.");
            console.log("");
            start();
          }
        );
      });
};
