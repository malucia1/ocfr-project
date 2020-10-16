CREATE DATABASE OCFR;
USE OCFR;

DROP TABLE IF EXISTS CurrentMembers;
CREATE TABLE CurrentMembers (
  member_id INTEGER PRIMARY KEY AUTO_INCREMENT,
  station_number INT,
  radio_number INT
);

INSERT INTO CurrentMembers (member_id, station_number, radio_number) VALUES
("1", "2", "3"),
("2", "2", "3"),
("3", "1", "1"),
("4", "3", "2");

SELECT * FROM CurrentMembers
