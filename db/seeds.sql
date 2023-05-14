INSERT INTO department (id, dep_name)
VALUES (1, "Sales"),
       (2, "Engineering"),
       (3, "Management");
       
INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Sales Closer", 90000, 99),
       (2, "Senior Engineer", 170000, 99),
       (3, "Junior Engineer", 100000, 99),
       (4, "Team Manager", 85000, 99);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Jonny", "Olsen", 3, 89),
       (2, "Eric", "Cartman", 1, 89),
       (3, "Not", "Sure", 2, 89);