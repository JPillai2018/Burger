/*

To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console.

3. Run "source schema.sql"

*/

-- Create the database day_planner_db and specified it for use.
-- DROP DATABASE burgers_db;
-- CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table plans.
-- CREATE TABLE burgers
-- (
-- id int NOT NULL AUTO_INCREMENT,
-- burger_name varchar(100) NOT NULL,
-- devoured boolean
-- PRIMARY KEY (id)
-- );

-- Insert a set of records.
INSERT INTO burgers (burger_name, devoured) VALUES ('Double Cheese.' , true);
INSERT INTO burgers (burger_name, devoured) VALUES ('Spicy Chicken.', false) 