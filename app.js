var mysql = require("mysql");
var inquirer = require("inquirer");
​
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.MYSQLKEY,
  database: "company_db"
});
​
connection.connect(function(err) {
    if (err) throw err;
    start();
});
​
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
    })
    .then(function(answer) {
        switch (answer.action) {
            case "View all employees":
            viewAll();
            break;
​
            case "View all employees by department":
            viewAllByDept();
            break;
​
            case "View all employees by manager":
            viewAllByManager();
            break;
​
            case "Add employee":
            addEmployee();
            break;
​
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
​
            case "Exit":
            connection.end();
            break;
      }
    });
};

function viewAll() {
  var query = "SELECT ";
  connection.query(query, function(err, results) {
    if (err) throw err;
 start();
  });
};
​
// function removeEmployee() {
//   inquirer.prompt([
//     {
//       message: "Which employee would you like to remove?",
//       name: "remove",
//       choices: [""]
//     }
//   ]).then(function({ artistName }) {
//     connection.query("SELECT * FROM top5000 INNER JOIN top_albums ON top5000.artist = top_albums.artist WHERE top5000.year = top_albums.year AND top5000.artist = ?", [artistName], function(err, data) {
//       if(err)
//         throw err;
      
//       for(let i = 0; i < data.length; i++) {
//         console.log(
//           "Position: " +
//             data[i].position +
//             " || Song: " +
//             data[i].song +
//             " || Artist: " +
//             data[i].artist +
//             " || Year: " +
//             data[i].year
//         );
//       }
// ​
//      start();
//     });
//   });
// }
// ​
// ​
// function viewAll() {
//   inquirer
//     .prompt({
//       name: "artist",
//       type: "input",
//       message: "What artist would you like to search for?"
//     })
//     .then(function(answer) {
//       var query = "SELECT position, song, year FROM top5000 WHERE ?";
//       connection.query(query, { artist: answer.artist }, function(err, res) {
//         if (err) throw err;
//         for (var i = 0; i < res.length; i++) {
//           console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
//         }
//      start();
//       });
//     });
// }
// ​
// function viewAllByDept() {
//   var query = "SELECT artist FROM top5000 GROUP BY artist HAVING count(*) > 1";
//   connection.query(query, function(err, res) {
//     if (err) throw err;
//     for (var i = 0; i < res.length; i++) {
//       console.log(res[i].artist);
//     }
//  start();
//   });
// }
// ​
// function viewAllByManager() {
//   inquirer
//     .prompt([
//       {
//         name: "start",
//         type: "input",
//         message: "Enter starting position: ",
//         validate: function(value) {
//           if (isNaN(value) === false) {
//             return true;
//           }
//           return false;
//         }
//       },
//       {
//         name: "end",
//         type: "input",
//         message: "Enter ending position: ",
//         validate: function(value) {
//           if (isNaN(value) === false) {
//             return true;
//           }
//           return false;
//         }
//       }
//     ])
//     .then(function(answer) {
//       var query = "SELECT position,song,artist,year FROM top5000 WHERE position BETWEEN ? AND ?";
//       connection.query(query, [answer.start, answer.end], function(err, res) {
//         if (err) throw err;
//         for (var i = 0; i < res.length; i++) {
//           console.log(
//             "Position: " +
//               res[i].position +
//               " || Song: " +
//               res[i].song +
//               " || Artist: " +
//               res[i].artist +
//               " || Year: " +
//               res[i].year
//           );
//         }
//      start();
//       });
//     });
// }
// ​
// function addEmployee() {
//   inquirer
//     .prompt({
//       name: "song",
//       type: "input",
//       message: "What song would you like to look for?"
//     })
//     .then(function(answer) {
//       console.log(answer.song);
//       connection.query("SELECT * FROM top5000 WHERE ?", { song: answer.song }, function(err, res) {
//         if (err) throw err;
//         console.log(
//           "Position: " +
//             res[0].position +
//             " || Song: " +
//             res[0].song +
//             " || Artist: " +
//             res[0].artist +
//             " || Year: " +
//             res[0].year
//         );
//      start();
//       });
//     });
// }