INSERT INTO department (dep_name)
VALUES ("Sales"),
       ("Engineering"),
       ("Management");
       
INSERT INTO role (title, salary, department_id)
VALUES ("Sales Closer", 90000, 99),
       ("Senior Engineer", 170000, 99),
       ("Jr Engineer", 100000, 99),
       ("Team Manager", 85000, 99);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Jonny", "Olsen", 3, 89),
       (2, "Eric", "Cartman", 1, 89),
       (3, "Not", "Sure", 2, 89);