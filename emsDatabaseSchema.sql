DROP DATABASE IF EXISTS company_db;

CREATE DATABASE company_db;

USE company_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DEC(10,2) NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE,
    PRIMARY KEY (id)
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NULL,
    FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE CASCADE,
    FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE,
    PRIMARY KEY (id)
);

-- Method to view all employees
-- SELECT employee.id, employee.first_name, employee.last_name, CONCAT(role.title)job_title, CONCAT(department.name)department, role.salary, CONCAT(m.first_name, " " ,m.last_name)manager
-- FROM employee 
-- LEFT JOIN role 
-- ON employee.role_id = role.id
-- LEFT JOIN department
-- ON role.department_id = department.id
-- LEFT JOIN employee m ON m.id = employee.manager_id;

-- Method to view all employees by their respective managers
-- SELECT CONCAT(employee.first_name, " " ,employee.last_name)employee, CONCAT(m.first_name, " " ,m.last_name)manager
-- FROM employee 
-- LEFT JOIN role 
-- ON employee.role_id = role.id
-- LEFT JOIN department
-- ON role.department_id = department.id
-- LEFT JOIN employee m ON m.id = employee.manager_id
-- ORDER BY manager;

-- Method to view all employees by their respective departments
-- SELECT CONCAT(employee.first_name, " " ,employee.last_name)employee, CONCAT(department.name)department
-- FROM employee 
-- LEFT JOIN role 
-- ON employee.role_id = role.id
-- LEFT JOIN department
-- ON role.department_id = department.id
-- LEFT JOIN employee m ON m.id = employee.manager_id
-- ORDER BY department;