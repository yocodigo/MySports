
-- DROP DATABASE IF EXISTS mysports_db;
-- CREATE DATABASE mysports_db;
USE mysports_db;

-- CREATE TABLE fan (
-- 	fanID INT NOT NULL AUTO_INCREMENT,
-- 	name VARCHAR(50) NOT NULL,
-- 	email VARCHAR(50) NOT NULL,
-- 	city VARCHAR(50) NOT NULL,
-- 	PRIMARY KEY (fanID));
-- );

CREATE TABLE nbateam (
	nbateamID INT NOT NULL AUTO_INCREMENT,
	team VARCHAR(50) NOT NULL,
	FOREIGN KEY (fanID));
);