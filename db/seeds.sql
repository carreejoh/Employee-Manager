INSERT INTO department (dep_name)
VALUES ("Sales"),
       ("Engineering"),
       ("Management");
       
INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Sales Closer", 90000, 1),
       (2, "Sr Engineer", 170000, 2),
       (3, "Jr Engineer", 100000, 2),
       (4, "Team Manager", 85000, 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Jonny", "Olsen", 3, 0),
       (2, "Eric", "Cartman", 1, 1),
       (3, "Not", "Sure", 2, 1);