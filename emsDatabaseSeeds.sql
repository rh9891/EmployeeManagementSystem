USE company_db;

INSERT INTO department (name)
VALUES ("Executive"), ("Marketing"), ("Finance"), ("Human Resources"), ("Operations");

INSERT INTO role (title, salary, department_id)
VALUES ("Chief Executive Officer", 156197, 1),
("Marketing Manager", 65377, 2),
("Marketing Specialist", 51160, 2),
("Chief Financial Officer", 134264, 3),
("Auditor", 56867, 3),
("Assistant Auditor", 53754, 3),
("Human Resources Manager", 67341, 4),
("Human Resources Administrator", 49695, 4),
("Human Resources Specialist", 51226, 4)
("Operations Manager", 65328, 5),
("Operations Specialist", 49277, 5),
("Operations Technician", 49868, 5),
("Operations Assistant", 39520, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Charles", "Xavier", 1, NULL),
("Scott", "Summers", 2, 1),
("James Logan", "Howlett", 10, 1),
("Ororo", "Munroe", 7, 1),
("Jean", "Grey", 4, 1),
("Anna Maria", "LeBeau", 9, 4),
("Henry", "McCoy", 5, 5),
("Jubilation", "Lee", 8, 4),
("Remy", "LeBeau", 3, 2)
("Kurt", "Wagner", 13, 3),
("Elizabeth", "Braddock", 6, 5),
("Warren", "Worthington III", 9, 4),
("Bobby", "Drake", 12, 3),
("Piotr", "Rasputin", 11, 3),
("Kevin", "Sydney", 13, 3);

-- Employee Positions
-- Charles Xavier [CEO]
-- Scott Summers [Marketing Manager]
-- James Logan Howlett [Operations Manager]
-- Ororo Munroe [Human Resources Manager]
-- Jean Grey [Finance Manager]

-- Anna Marie LeBeau [Human Resources Specialist]
-- Henry McCoy [Auditor]
-- Remy LeBeau [Marketing Specialist]
-- Jubilation Lee [Human Resources Administrator]
-- Kevin Sydney [Operations Assistant]
-- Kurt Wagner [Operations Assistant]
-- Elizabeth Braddock [Assistant Auditor]
-- Warren Worthington III [Human Resources Specialist]
-- Bobby Drake [Operations Technician]
-- Piotr Rasputin (Colossus) [Operations Specialist]