USE OCFR;

DROP TABLE IF EXISTS Certified;
DROP TABLE IF EXISTS people;
CREATE TABLE people (
  member_id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
  firstname VARCHAR(30) NOT NULL,
  lastname VARCHAR(30) NOT NULL,
  station_number INT Not NULL,
  radio_number INT Not NULL,
  address_street VARCHAR(50),
  address_city VARCHAR(50),
  address_state VARCHAR(50),
  address_zip INT,
  email VARCHAR(30) Not NULL,
  date_of_birth date,
  gender VARCHAR(1) CHECK (gender in ('M','F')),
  mobile_phone INT,
  work_phone INT,
  position VARCHAR(30),
  isActive boolean
);

INSERT INTO people (firstname, lastname, station_number, radio_number, address_street, address_city, address_state, address_zip, email, date_of_birth, gender, mobile_phone, work_phone, position, isActive) VALUES
( "Samson", "Pollak", "1", "2", "3737 S 7th St", "Terre Haute", "IN", "47802", "spk@iu.edu", "1996-10-12", "Male", "123-234-4657", "435-654-6453", "Fireman", True),
( "Maddie", "Lucia", "2", "3", "1010 Indiana Ave", "Bloomington", "IN", "47408", "mal@iu.edu", "1996-08-14", "Female", "321-234-4657", "999-654-6453", "Lawyer", TRUE);

INSERT INTO people (firstname, lastname, date_of_birth, gender, isActive) VALUES
("Sylvia", "Hernandez", "2012-09-01",  "F",False),
( "Vish", "Balasubramanian", "1950-12-15",  "M",False),
( "J", "Doe", "1950-00-00",  "M",False),
( "Pepper", "Potts", "1990-01-31",  "F",False);

DROP TABLE IF EXISTS Certifications;
CREATE TABLE Certifications (
  certification_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  certifying_agency VARCHAR(50) NOT NULL,
  certification_name VARCHAR(50) NOT NULL,
  expiration_period int NOT NULL
);

INSERT INTO Certifications (certifying_agency, certification_name, expiration_period) VALUES
("AHA", "CPR", "2 years"),
("Red Cross", "CPR", "2 years"),
("Athens Technical College", "Firefighter I", "3 years"),
("Ivy Technical College", "Firefighter I", "3 years"),
("Georgia POST Academy", "POST", "5 years");

-- DROP TABLE IF EXISTS Users;
-- CREATE TABLE Users (
--   email VARCHAR(30) PRIMARY KEY,
--   password VARCHAR(30),
--   temporary_password VARCHAR(30),
--   administrative_privilege VARCHAR(30),
--   FOREIGN KEY(email) REFERENCES person(email)
-- );

-- INSERT INTO Users (email, password, temporary_password, administrative_privilege) VALUES
-- ("SOME-REALLY-LONG-1234", "Sylvia", "Hernandez", "2012-09-01",  "F"),
-- ("SOME-REALLY-SHORT-5678", "Vish", "Balasubramanian", "1950-12-15",  "M"),
-- ("SOME-UNIQUE-ABCDE1", "J", "Doe", "1950-00-00",  ""),
-- ("SOME-DUMMY-DATA", "Pepper", "Potts", "1990-01-31",  "F");

CREATE TABLE Certified (
  certified_id INT PRIMARY KEY AUTO_INCREMENT not null,
  certification_id INT not null,
  member_id int not null,
  issued_date date not null,
  FOREIGN KEY(member_id) REFERENCES CurrentMembers(member_id),
  FOREIGN KEY(certification_id) REFERENCES Certification(certification_id)
);

INSERT INTO OCFR.Certified (member_id,certification_id,issued_date) VALUES
(1,2,'2020-10-20'),
(1,3,'2020-10-20')